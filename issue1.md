# Issue 1: Inisialisasi Proyek, Konfigurasi Tema "Modern Silver Lamming" & Setup Font Aksara Lontara

## 📌 Deskripsi & Tujuan
Menginisialisasi repositori proyek website pembelajaran interaktif **LontaraKu** (*Balla Lontara*), mengonfigurasi arsitektur frontend modern (React.js / Next.js / Vite + Tailwind CSS), serta mengimplementasikan **Sistem Desain Global "Modern Silver Lamming"** dan font aksara `Noto Sans Buginese` agar aksara Lontara dapat dirender sempurna tanpa glif kosong (*tofu*).

---

## 🎯 Referensi PRD
* **Bagian 1.1 - 1.5:** Visi Produk & Target Platform (Desktop `1440x1024px`, Tablet, & Mobile `390x844px`).
* **Bagian 2.1:** Palet Warna Resmi (*Updated Color Tokens* — 80% Soft Silver, 20% Red & Gold Accents).
* **Bagian 2.2:** Sistem Tipografi (Google Fonts `Noto Sans Buginese`, `Cinzel Decorative`, `Plus Jakarta Sans`).
* **Bagian 7.1:** Spesifikasi Stack Teknologi.

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Inisialisasi Proyek Frontend
Gunakan template proyek React modern (Vite React TypeScript / Tailwind CSS atau Next.js App Router):
```bash
# Inisialisasi proyek menggunakan Vite + React + TypeScript
npm create vite@latest lontaraku -- --template react-ts
cd lontaraku
npm install

# Instalasi Tailwind CSS dan dependencies pendukung
npm install -D tailwindcss postcss autoprefixer lucide-react clsx tailwind-merge
npx tailwindcss init -p
```

### 2. Setup Tipografi & Google Fonts
Tambahkan Google Fonts resmi pada `index.html` (atau `layout.tsx`):
1. **Noto Sans Buginese:** Font utama untuk merender karakter Aksara Lontara (`KA` - `HA` dan tanda vokal).
2. **Cinzel Decorative / Playfair Display:** Untuk judul display Latin bertema klasik/kerajaan.
3. **Plus Jakarta Sans:** Font sans-serif modern untuk teks konten dan tombol yang nyaman di mata.

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Noto+Sans+Buginese&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### 3. Konfigurasi Token Warna Tailwind (`tailwind.config.js`)
Konfigurasikan palet warna budaya Makassar sesuai tabel token Bagian 2.1 PRD:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Latar Belakang Utama (80% Area Layar) - Sejuk di mata
        salaka: {
          light: '#F2F4F7', // Salaka Alusu' (Soft Silver)
          base: '#E5E9F0',
          border: '#D8DEE9',
          metallic: '#CBD5E1',
        },
        // Aksen Utama Merah Menyala Khas Makassar
        eja: {
          DEFAULT: '#C8102E', // Eja Lamming Utama
          dark: '#A60B23',
          maroon: '#7A0012',
        },
        // Aksen Kedua Emas Kerajaan
        bulaeng: {
          light: '#FFD700',
          DEFAULT: '#D4AF37', // Emas Kerajaan
          dark: '#B8860B',
        },
        // Permukaan Kartu & Kertas Konten
        lontar: {
          cream: '#FDFBF7', // Krem Hangat Lontar
          soft: '#F7F2E7',
        },
        // Tinta Aksara Lontara
        ink: {
          navy: '#1B2A4A', // Biru Navy Goresan Aksara
        },
        // Tipografi Gelap
        leleng: {
          DEFAULT: '#111827', // Le'leng Hitam Arang
          slate: '#334155',
          body: '#374151',
        }
      },
      fontFamily: {
        lontara: ['"Noto Sans Buginese"', 'sans-serif'],
        display: ['"Cinzel Decorative"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card-gold': '0 4px 20px -2px rgba(212, 175, 55, 0.15)',
        'card-hover': '0 10px 25px -3px rgba(200, 16, 46, 0.2)',
      }
    },
  },
  plugins: [],
}
```

### 4. Setup Global CSS & Base Styles (`src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-salaka-light text-leleng-body font-sans antialiased min-h-screen selection:bg-eja selection:text-white;
  }
}

/* Utilitas Khusus Font Lontara */
.font-lontara {
  font-family: 'Noto Sans Buginese', sans-serif;
  font-feature-settings: "liga" 1;
}
```

### 5. Struktur Folder Proyek
Susun arsitektur direktori yang bersih dan modular:
```
src/
├── assets/             # Gambar ilustrasi 3D, ornamen Lamming, dan ikon
│   ├── images/
│   ├── ornaments/
│   └── audio/
├── components/         # Komponen UI Reusable
│   ├── common/         # Navbar, Footer, Button, Card, Modal
│   ├── home/           # Komponen Khusus Beranda
│   ├── aksara/         # Komponen Grid & Pop-Up Aksara
│   ├── kosakata/       # Komponen Dual-Card & Kategori
│   └── bacaan/         # Komponen Reader & Kontrol
├── data/               # File JSON data aksara, kosa kata, dan bacaan
├── hooks/              # Custom React hooks (useAudio, useModal, dll.)
├── types/              # Deklarasi Type / Interface TypeScript
├── utils/              # Fungsi helper fonetik & audio
├── App.tsx
└── main.tsx
```

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) — STATUS: SELESAI
- [x] Proyek berhasil diinisialisasi dengan konfigurasi arsitektur modular (`src/components`, `src/data`, `src/hooks`, `src/types`, `src/utils`, `src/assets`).
- [x] Tailwind CSS terkonfigurasi dengan warna kustom budaya Makassar: `salaka`, `eja`, `bulaeng`, `lontar`, `ink`, dan `leleng`.
- [x] Google Fonts `Noto Sans Buginese`, `Cinzel Decorative`, dan `Plus Jakarta Sans` berhasil terpasang dan merender karakter Lontara (contoh: `ᨕᨀᨔᨑ ᨒᨚᨈᨑ`, `ᨀᨘᨈᨘ`, `ᨅᨒ`) secara tajam tanpa glif kotak.
- [x] Layout dasar menampilkan latar belakang sejuk *Soft Brushed Silver* `#F2F4F7` dengan kartu *Lontar Krem* `#FDFBF7` dan aksen *Eja Lamming* & *Bulaeng*.
- [x] Tersedia file visual interaktif `index_preview.html` untuk memverifikasi tampilan secara langsung di browser.

