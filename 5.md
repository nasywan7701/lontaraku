# Issue 5: Implementasi Halaman Beranda (Hero Section Budaya Makassar & 3 Kartu Modul)

## 📌 Deskripsi & Tujuan
Membangun halaman utama (**Beranda / Landing Page**) sesuai estetika **"Modern Silver Lamming"** (80% Soft Brushed Silver `#F2F4F7`, 20% Red `#C8102E` & Gold `#D4AF37` Accents). Halaman ini menampilkan **Hero Section megah** dengan aksara Lontara `ᨕᨀᨔᨑ ᨒᨚᨈᨑ`, ornamen budaya tokoh Sultan Hasanuddin & Balla Lompoa, tombol Call-to-Action utama, serta **3 Kartu Pintasan Modul** pembelajaran.

---

## 🎯 Referensi PRD
* **Bagian 2.1 & 2.2:** Token Warna Resmi & Hirarki Tipografi (`Noto Sans Buginese` 72px Bold Merah Lamming).
* **Bagian 2.3:** Diagram Wireframe Tata Letak Layar 1: Beranda.
* **Bagian 2.4:** Prompt Stitch AI Layar 1 (Landing Page Specification).
* **Bagian 6.1:** Aset Ornamen Budaya Makassar (Sultan Hasanuddin, Balla Lompoa, Phinisi, Bingkai Lamming).

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Pembuatan Halaman Beranda (`src/pages/HomePage.tsx`)
Struktur komponen halaman:
* `HeroSection`: Header utama dan elemen ornamen budaya.
* `LammingDivider`: Garis pembatas ornamen geometris Makassar.
* `ModulePreviewSection`: 3 Kartu pintasan interaktif menuju modul Aksara, Kosa Kata, dan Bacaan.

### 2. Implementasi Hero Section (`src/components/home/HeroSection.tsx`)
Spesifikasi visual:
1. **Latar Belakang:** Gradien sejuk *Soft Brushed Silver* (`bg-gradient-to-b from-salaka-light via-salaka-base to-salaka-light py-16 lg:py-24 relative overflow-hidden`).
2. **Bingkai Sudut Lamming (Top Corners):** Aksen ornamen ukiran emas-merah di sudut kanan dan kiri atas.
3. **Display Title (Aksara Lontara):**
   * Teks: `ᨕᨀᨔᨑ ᨒᨚᨈᨑ`
   * Ukuran: `text-6xl md:text-7xl lg:text-8xl`
   * Warna: Merah Lamming (`#C8102E`) dengan *text-shadow* tipis emas kerajaan (`#D4AF37`).
4. **Display Subtitle (Latin):**
   * Teks: `AKSARA LONTARA`
   * Tipografi: Font display huruf kapital dengan *letter-spacing* lebar (`tracking-[6px] text-leleng font-bold text-2xl md:text-3xl`).
5. **Tagline Edukasi:**
   * Teks: *"Mari Belajar Bahasa & Budaya Makassar"* (`text-leleng-slate text-lg md:text-xl font-medium mt-3`).
6. **Tombol CTA Utama:**
   * Tombol kapsul (*pill-shaped*): Latar Merah Lamming (`#C8102E`), border Emas Kerajaan (`#FFD700`), teks tebal putih berpadu emas *"Mulai Belajar Sekarang ➔"*.
   * Mengarahkan langsung ke halaman `/aksara`.
7. **Ilustrasi Budaya Pengapit (Kiri & Kanan):**
   * **Kiri:** Ilustrasi 3D Balla Lompoa & Perahu Phinisi.
   * **Kanan:** Ilustrasi 3D Pahlawan Sultan Hasanuddin memakai Passapu dan Baju Kerajaan Makassar.
   * *(Sediakan fallback tampilan SVG/vektor bila gambar AI belum diunggah).*

### 3. Komponen Pembatas Ornamen (`src/components/common/LammingDivider.tsx`)
Garis pembatas estetis bercorak ragam hias ukiran Lamming (Sulapa Eppa / pucuk rebung khas Sulawesi Selatan) dengan warna emas dan merah menyala.

### 4. Implementasi 3 Kartu Pintasan Modul (`src/components/home/ModulePreview.tsx`)
Grid 3 kolom di atas latar perak lembut, menampilkan kartu berlatar Krem Hangat (`#FDFBF7`) dengan border emas tipis (`border-bulaeng/40 hover:border-eja hover:shadow-card-hover transition-all`):

1. **Kartu 1: Modul Aksara Lontara**
   * Ikon/Simbol: Huruf `ᨀ` (Aksara KA dalam kaligrafi Navy Blue).
   * Judul: **19 Aksara & Suara Fonetik**
   * Deskripsi: *"Pelajari 19 aksara dasar Lontara (Ina' Surat) lengkap dengan pengucapan audio asli dan simulasi tanda baca Ki, Ku, Ke, Ko."*
   * CTA: *"Buka Tabel Aksara ➔"*
2. **Kartu 2: Modul Kosa Kata Interaktif**
   * Ikon/Simbol: Badge `3D Visual`
   * Judul: **Kosa Kata Visual Dual-Card**
   * Deskripsi: *"Hafalkan kosa kata harian Bahasa Makassar lebih cepat melalui sistem kartu kembar berpasangan dengan ilustrasi 3D kontekstual."*
   * CTA: *"Jelajahi Kosa Kata ➔"*
3. **Kartu 3: Modul Perpustakaan Bacaan**
   * Ikon/Simbol: Badge Gulungan Naskah Lontar `📜`
   * Judul: **Bacaan Berjenjang Level 1 - 4**
   * Deskripsi: *"Tingkatkan kemahiran membaca dari kalimat pendek pemula, cerita harian, kumpulan 7 puisi & Kelong, hingga naskah sakral Sumpah Angngaru."*
   * CTA: *"Mulai Membaca ➔"*

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) — STATUS: SELESAI
- [x] Halaman Beranda dirender pada rute `/` (`src/pages/HomePage.tsx`) dengan latar *Soft Brushed Silver* `#F2F4F7` yang sejuk dan nyaman di mata tanpa silau.
- [x] Judul aksara `ᨕᨀᨔᨑ ᨒᨚᨈᨑ` tampil presisi dengan font `Noto Sans Buginese` (72px) warna Merah Lamming `#C8102E` dan bayangan Emas `#D4AF37`.
- [x] Tombol CTA *"Mulai Belajar Sekarang"* berbentuk kapsul (*pill-shaped*) mengarahkan pengguna langsung ke rute `/aksara`.
- [x] Komponen ornamen budaya Makassar (Balla Lompoa, Phinisi, dan Sultan Hasanuddin) terimplementasi dengan komponen fallback pintar `CulturalIllustration.tsx`.
- [x] Pembatas ornamen geometris Lamming Makassar terimplementasi rapi pada `LammingDivider.tsx`.
- [x] 3 Kartu modul terstruktur rapi pada `ModulePreview.tsx` (19 Aksara & Suara, Kosa Kata Dual-Card 3D, dan Bacaan Berjenjang Level 1-4).
- [x] File `index_preview.html` diperbarui dengan visualisasi Hero Section dan 3 Kartu Modul berresolusi tinggi yang dapat langsung diuji di browser.

