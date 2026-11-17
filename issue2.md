# Issue 2: Implementasi Komponen Global & Sistem Navigasi (Sticky Navbar Glassmorphism, Footer & Routing)

## 📌 Deskripsi & Tujuan
Membangun kerangka navigasi aplikasi mencakup **Sticky Top Navbar** berdesain *Frosted Silver Glassmorphism* dengan aksen garis Merah-Emas khas Makassar, **Footer Budaya**, serta sistem **Routing** untuk 4 modul utama: **Beranda**, **Aksara**, **Kosa Kata**, dan **Bacaan**.

---

## 🎯 Referensi PRD
* **Bagian 1.5:** Arsitektur Informasi & Sitemap (Beranda, Aksara, Kosa Kata, Bacaan).
* **Bagian 2.1 & 2.3:** Spesifikasi Navbar: Latar Putih/Silver Glass (`#F8FAFC` dengan `backdrop-blur`), Logo LONTARAKU (Merah-Emas), dan Nav Menu aktif.
* **Bagian 2.4:** Prompt Stitch AI Layar 1 (Detail Navbar & Menu States).

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Setup Client-Side Routing
Instalasi `react-router-dom` (jika menggunakan Vite/CRA) atau setup layout pada Next.js:
```bash
npm install react-router-dom
```

Konfigurasi rute pada `src/App.tsx`:
* `/` : Halaman Beranda (`HomePage`)
* `/aksara` : Halaman 19 Aksara Lontara (`AksaraPage`)
* `/kosakata` : Halaman Kosa Kata Dual-Card (`KosakataPage`)
* `/bacaan` : Halaman Perpustakaan Bacaan Berjenjang (`BacaanPage`)

### 2. Pembuatan Komponen Navbar (`src/components/common/Navbar.tsx`)
Spesifikasi elemen Navbar:
1. **Container:** Sticky top (`sticky top-0 z-50`), background semi-transparan perak-putih (`bg-salaka-light/85 backdrop-blur-md`), dengan garis batas bawah ganda/aksen emas-merah (`border-b border-bulaeng/40 shadow-sm`).
2. **Branding / Logo (Kiri):**
   * Teks: **"LONTARAKU"** (Font display tebal, warna `text-eja`, aksen titik/mahkota emas `text-bulaeng`).
   * Sub-label kecil: *"Pusat Belajar Bahasa & Budaya Makassar"*.
3. **Menu Navigasi Desktop (Kanan):**
   * 4 Menu: **Beranda**, **Aksara**, **Kosa Kata**, **Bacaan**.
   * Status Aktif: Warna Merah Lamming (`text-eja font-bold`) dengan garis bawah indikator Emas Kerajaan (`after:border-b-2 after:border-bulaeng`).
   * Status Inaktif: Warna slate gelap (`text-leleng-slate hover:text-eja transition-colors`).
4. **Mobile Navigation Drawer:**
   * Tombol hamburger icon untuk layar mobile (< 768px).
   * Slide-out / dropdown menu dengan latar perak-krem dan border emas.

Contoh Implementasi Kode:
```tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, Grid, Sparkles, Home } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Beranda', path: '/', icon: Home },
  { name: 'Aksara', path: '/aksara', icon: Grid },
  { name: 'Kosa Kata', path: '/kosakata', icon: Sparkles },
  { name: 'Bacaan', path: '/bacaan', icon: BookOpen },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-salaka-light/90 backdrop-blur-md border-b border-bulaeng/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-eja to-eja-dark flex items-center justify-center text-bulaeng-light font-display text-2xl font-bold shadow-md border border-bulaeng/50 group-hover:scale-105 transition-transform">
              ᨒ
            </div>
            <div>
              <span className="font-display font-black text-2xl tracking-wider text-eja">
                LONTARA<span className="text-bulaeng">KU</span>
              </span>
              <span className="block text-[11px] font-medium tracking-tight text-leleng-slate -mt-1">
                Bahasa & Budaya Makassar
              </span>
            </div>
          </NavLink>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                  ${isActive 
                    ? 'text-eja bg-eja/5 after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-bulaeng' 
                    : 'text-leleng-slate hover:text-eja hover:bg-salaka-base/50'
                  }
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Tombol Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-leleng-slate hover:text-eja hover:bg-salaka-base/60"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-lontar-cream border-b border-bulaeng/40 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold
                ${isActive ? 'bg-eja text-white' : 'text-leleng-slate hover:bg-salaka-light'}
              `}
            >
              <item.icon size={20} className={({ isActive }: any) => isActive ? 'text-bulaeng-light' : 'text-leleng-slate'} />
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
```

### 3. Pembuatan Komponen Footer Budaya (`src/components/common/Footer.tsx`)
Spesifikasi elemen Footer:
* Background perak netral (`bg-salaka-base border-t border-bulaeng/30`).
* Informasi ringkas platform: Pelestarian budaya aksara Lontara & bahasa Makassar.
* Ornamen motif Lamming geometris.
* Link ke modul-modul pembelajaran dan hak cipta.

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) — STATUS: SELESAI
- [x] Navbar menempel di bagian atas layar (*sticky*) dengan efek glassmorphism blur saat halaman di-scroll (`src/components/common/Navbar.tsx`).
- [x] Tautan navigasi aktif (*active state*) menampilkan warna Merah Lamming dengan garis bawah Emas (`after:border-b-2 after:border-bulaeng`).
- [x] Logo brand "LONTARAKU" tampil estetis dengan badge aksara Lontara `ᨒ`, font display, dan aksen warna Merah & Emas.
- [x] Navigasi responsif bekerja mulus pada layar smartphone dengan toggle hamburger menu & mobile drawer.
- [x] Routing SPA terkonfigurasi pada `src/App.tsx` mencakup 4 rute utama: `/` (`HomePage`), `/aksara` (`AksaraPage`), `/kosakata` (`KosakataPage`), dan `/bacaan` (`BacaanPage`).
- [x] Komponen Footer budaya terimplementasi lengkap dengan visi pelestarian budaya, link modul, dan kutipan sastra Makassar.
- [x] File interaktif `index_preview.html` diperbarui dengan sistem navigasi dan routing simulasi yang dapat diuji langsung di browser.

