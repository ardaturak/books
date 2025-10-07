# Progenx - İnteraktif Çocuk Kitapları

Bu proje, çocuklar için eğitici ve eğlenceli interaktif kitaplar sunan bir Next.js uygulamasıdır.

## 🚀 Özellikler

- **İnteraktif Kitaplar**: Çocuklar için özel olarak tasarlanmış eğitici kitaplar
- **Oyunlar**: Her kitap için özel oyunlar ve aktiviteler
- **Admin Paneli**: Kitap ve oyun yönetimi için admin arayüzü
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Modern UI/UX**: Kullanıcı dostu arayüz

## 🛠️ Teknolojiler

- **Next.js 14.2.5** - React framework
- **TypeScript** - Type safety
- **React 18.3.1** - UI library
- **CSS3** - Styling

## 📦 Kurulum

### Gereksinimler
- Node.js >= 18.0.0
- npm >= 8.0.0

### Adımlar

1. **Repository'yi klonlayın:**
   ```bash
   git clone https://github.com/rdvnktlms/Progenx.git
   cd Progenx
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm run install-deps
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

### Vercel ile Otomatik Deployment

Bu proje Vercel ile otomatik deployment için hazırlanmıştır:

1. **Vercel'e bağlayın:**
   - [Vercel Dashboard](https://vercel.com/dashboard) üzerinden yeni proje oluşturun
   - GitHub repository'nizi bağlayın
   - Otomatik deployment aktif olacaktır

2. **Build Ayarları:**
   - Build Command: `cd next && npm install && npm run build`
   - Output Directory: `next/.next`
   - Install Command: `cd next && npm install`

### Manuel Build

```bash
# Production build
npm run build

# Production sunucusunu başlat
npm run start
```

## 📁 Proje Yapısı

```
progenx/
├── next/                    # Next.js uygulaması
│   ├── app/                # App Router sayfaları
│   │   ├── admin/          # Admin paneli
│   │   ├── kitaplar/       # Kitap sayfaları
│   │   ├── oyunlar/        # Oyun sayfaları
│   │   └── components/     # React bileşenleri
│   ├── public/             # Statik dosyalar
│   └── package.json        # Next.js bağımlılıkları
├── vercel.json             # Vercel konfigürasyonu
└── package.json            # Root package.json
```

## 🎮 Oyunlar

- **Asma Köprü**: Fizik simülasyonu
- **Fırtına Simülatörü**: Hava olayları simülasyonu
- **Hırsız Polis**: Strateji oyunu
- **Kurt vs Koyunlar**: Klasik oyun
- **Test Demo**: Demo sistem testi

## 📚 Kitaplar

- **Oyunlarla Satranç** - Satranç öğrenimi
- **Hava Olayları** - Meteoroloji
- **Benim Küçük Deneylerim** - Bilim deneyleri
- **Atalarımızdan Dersler** - Tarih
- **Tatilde 50 Macera** - Macera rehberi

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👥 Ekip

- **Progenx Team** - Geliştirme ekibi

## 📞 İletişim

- **GitHub**: [rdvnktlms/Progenx](https://github.com/rdvnktlms/Progenx)
- **Website**: [Progenx](https://progenx.com)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
