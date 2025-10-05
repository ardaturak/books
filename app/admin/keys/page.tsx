"use client";
import { useState, useEffect } from 'react';
import { BookKey, createKeys, exportKeysToExcel, getBookTitle } from '../../utils/keySystem';

export default function KeysPage() {
  const [keys, setKeys] = useState<BookKey[]>([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [keyCount, setKeyCount] = useState(10);
  const [isCreating, setIsCreating] = useState(false);

  const books = [
    { id: 'hava-olaylari', title: 'Hava Olayları' },
    { id: 'benim-kucuk-deneylerim', title: 'Benim Küçük Deneylerim' },
    { id: 'tatilde-50-macera', title: 'Tatilde 50 Macera' },
    { id: 'atalarimizdan-dersler', title: 'Atalarımızdan Dersler' },
    { id: 'satranc', title: 'Oyunlarla Satranç' }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedKeys = localStorage.getItem('bookKeys');
      if (storedKeys) {
        setKeys(JSON.parse(storedKeys));
      }
    }
  }, []);

  const handleCreateKeys = () => {
    if (!selectedBook || keyCount <= 0) {
      alert('Lütfen kitap seçin ve geçerli bir sayı girin!');
      return;
    }

    setIsCreating(true);
    
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      const newKeys = createKeys(selectedBook, keyCount);
      setKeys(prev => [...prev, ...newKeys]);
      setIsCreating(false);
      alert(`${keyCount} adet key başarıyla oluşturuldu!`);
    }, 1000);
  };

  const handleExportKeys = () => {
    if (keys.length === 0) {
      alert('Export edilecek key bulunamadı!');
      return;
    }
    exportKeysToExcel(keys);
  };

  const handleExportBookKeys = (bookId: string) => {
    const bookKeys = keys.filter(key => key.bookId === bookId);
    if (bookKeys.length === 0) {
      alert('Bu kitap için key bulunamadı!');
      return;
    }
    exportKeysToExcel(bookKeys);
  };

  const handleToggleKey = (index: number) => {
    setKeys(prev => prev.map((key, i) => 
      i === index ? { ...key, isActive: !key.isActive } : key
    ));
  };

  const getBookStats = (bookId: string) => {
    const bookKeys = keys.filter(key => key.bookId === bookId);
    const activeKeys = bookKeys.filter(key => key.isActive);
    return {
      total: bookKeys.length,
      active: activeKeys.length,
      inactive: bookKeys.length - activeKeys.length
    };
  };

  return (
    <>
      <section className="hero">
        <h2>🔑 Key Yönetimi</h2>
        <p>Kitap key'lerini oluşturun ve yönetin</p>
      </section>

      <section className="admin-section">
        <div className="admin-grid">
          {/* Key Oluşturma */}
          <div className="admin-card">
            <h3>📝 Yeni Key Oluştur</h3>
            <div className="form-group">
              <label htmlFor="bookSelect">Kitap Seçin</label>
              <select
                id="bookSelect"
                value={selectedBook}
                onChange={(e) => setSelectedBook(e.target.value)}
                className="form-input"
              >
                <option value="">Kitap seçin...</option>
                {books.map(book => (
                  <option key={book.id} value={book.id}>
                    {book.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="keyCount">Key Sayısı</label>
              <input
                type="number"
                id="keyCount"
                value={keyCount}
                onChange={(e) => setKeyCount(parseInt(e.target.value) || 0)}
                min="1"
                max="100"
                className="form-input"
              />
            </div>
            
            <button
              onClick={handleCreateKeys}
              disabled={isCreating || !selectedBook || keyCount <= 0}
              className="create-btn"
            >
              {isCreating ? 'Oluşturuluyor...' : '🔑 Key Oluştur'}
            </button>
          </div>

          {/* İstatistikler */}
          <div className="admin-card">
            <h3>📊 Key İstatistikleri</h3>
            <div className="stats-grid">
              {books.map(book => {
                const stats = getBookStats(book.id);
                return (
                  <div key={book.id} className="stat-card">
                    <h4>{book.title}</h4>
                    <div className="stat-numbers">
                      <div className="stat-item">
                        <span className="stat-label">Toplam:</span>
                        <span className="stat-value">{stats.total}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Aktif:</span>
                        <span className="stat-value used">{stats.active}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Pasif:</span>
                        <span className="stat-value available">{stats.inactive}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleExportBookKeys(book.id)}
                      className="export-btn-small"
                      disabled={stats.total === 0}
                    >
                      📊 Export
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Export İşlemleri */}
          <div className="admin-card">
            <h3>📤 Export İşlemleri</h3>
            <div className="export-actions">
              <button
                onClick={handleExportKeys}
                className="export-btn"
                disabled={keys.length === 0}
              >
                📊 Tüm Key'leri Export Et
              </button>
              <p className="export-info">
                Excel formatında CSV dosyası olarak indirilir
              </p>
            </div>
          </div>

          {/* Key Listesi */}
          <div className="admin-card full-width">
            <h3>📋 Key Listesi</h3>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Kitap</th>
                    <th>Durum</th>
                    <th>Kullanıcı</th>
                    <th>Kullanım Tarihi</th>
                    <th>Oluşturma Tarihi</th>
                  </tr>
                </thead>
                <tbody>
                  {keys.slice(0, 50).map((key, index) => (
                    <tr key={`${key.bookId}-${index}`}>
                      <td className="key-cell">
                        <code>{key.keyHash.substring(0, 16)}...</code>
                      </td>
                      <td>{getBookTitle(key.bookId)}</td>
                      <td>
                        <span className={`status-badge ${key.isActive ? 'available' : 'used'}`}>
                          {key.isActive ? 'Aktif' : 'Pasif'}
                        </span>
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>{new Date(key.createdAt).toLocaleDateString('tr-TR')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {keys.length > 50 && (
                <p className="table-note">İlk 50 key gösteriliyor. Tümünü görmek için export edin.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
