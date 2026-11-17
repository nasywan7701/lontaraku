# Master Product Requirements Document (PRD) — Website Pembelajaran Interaktif Bahasa & Aksara Lontara Makassar

| Atribut Dokumen | Detail Spesifikasi |
| :--- | :--- |
| **Nama Produk** | **LontaraKu** (Alternatif: *Balla Lontara* / *Caradde Lontara*) |
| **Versi Dokumen** | 2.1 (Updated Color Hierarchy: Soft Silver Background + Red & Gold Lamming Accents) |
| **Peran Penyusun** | Senior Product Manager |
| **Target Platform** | Web Responsif (Desktop `1440x1024px`, Tablet, & Mobile `390x844px`) |
| **Tema Desain Visual** | **Modern Lamming Makassar** (Background Silver Lembut, Aksen Merah Menyala & Emas Kerajaan, Kartu Krem Lontar) |
| **Status Dokumen** | Final & Siap Eksekusi (Design, Asset Generation, & Development) |

---

## DAFTAR ISI DOKUMEN

1. **BAGIAN 1:** Executive Summary, Latar Belakang, Persona, & Sitemap
2. **BAGIAN 2:** Sistem Desain Global ("Modern Silver Lamming") & Spesifikasi Halaman Beranda (+ Prompt Stitch AI)
3. **BAGIAN 3:** Spesifikasi Halaman Aksara (Grid 19 Huruf KA–HA & Pop-Up Ki, Ku, Ke, Ko + Prompt Stitch AI)
4. **BAGIAN 4:** Spesifikasi Halaman Kosa Kata (Dual-Card System & Katalog 12 Kosa Kata Harian + Prompt Stitch AI)
5. **BAGIAN 5:** Spesifikasi Halaman Bacaan Berjenjang & Bank Materi Lengkap (Level Pemula, Cerita, 7 Puisi Makassar, Teks Angngaru, & 4 Lagu Daerah + Prompt Stitch AI)
6. **BAGIAN 6:** Katalog Prompt AI Image Generator (Ornamen Budaya Makassar & 12 Ilustrasi 3D Kosa Kata)
7. **BAGIAN 7:** Arsitektur Teknis, Skema Database JSON, & Kebutuhan Audio (95 File Suara)
8. **BAGIAN 8:** Roadmap Eksekusi Projek End-to-End (Dari Awal Sampai Rilis) & Panduan Workflow Stitch AI

---

## BAGIAN 1: Executive Summary, Latar Belakang, Persona, & Sitemap

### 1.1 Visi & Tujuan Produk
Membangun platform pembelajaran digital interaktif berbasis web untuk memperdalam Bahasa dan Budaya Makassar menggunakan **Aksara Lontara**. Website ini menggabungkan pelestarian budaya tradisional (estetika **Lamming Makassar**, tokoh **Sultan Hasanuddin**, dan rumah adat **Balla Lompoa**) dengan metode belajar modern berbasis audio fonetik interaktif, kartu visual 3D, dan perpustakaan bacaan berjenjang yang nyaman digunakan dalam durasi belajar yang lama.

### 1.2 Masalah yang Diselesaikan (Problem Statement)
1. **Kurangnya Media Belajar Aksara yang Interaktif:** Tabel aksara Lontara konvensional bersifat statis dan tidak menyertakan suara cara pelafalan maupun simulasi perubahan tanda baca vokal (*Ki, Ku, Ke, Ko*) secara langsung.
2. **Kesulitan Menghafal Kosa Kata Harian:** Pembelajar kesulitan menghubungkan bentuk grafis aksara Lontara dengan kata Bahasa Makassar dan artinya dalam Bahasa Indonesia tanpa bantuan ilustrasi visual yang kontekstual.
3. **Minimnya Bahan Bacaan Berjenjang:** Belum tersedia platform terpadu yang menyusun bahan bacaan Lontara dari level kalimat pendek pemula hingga sastra tinggi (*Puisi/Kelong*, *Angngaru*, dan *Lagu Daerah Makassar*).

### 1.3 Validasi Linguistik Penting (Catatan PM)
* Kata **"Kuttu"** (`ᨀᨘᨈᨘ`) dalam Bahasa Makassar telah divalidasi memiliki arti **"Malas"** dalam Bahasa Indonesia.
* Dalam sistem penulisan tradisional Aksara Lontara, konsonan penutup suku kata (seperti bunyi glotal `'` atau konsonan ganda/geminasi) tidak ditulis secara eksplisit. Oleh karena itu, kata **Kuttu** ditulis dengan dua aksara bertanda titik bawah yaitu **Ku-Tu** (**`ᨀᨘᨈᨘ`**), dan kata **Balla'** (Rumah) ditulis **Ba-La (`ᨅᨒ`)**. Sistem menyediakan keterangan cara eja agar pemula memahami aturan ini dengan mudah.

### 1.4 Target Pengguna (User Personas)
* **Pelajar & Generasi Muda (SD/SMP/SMA/SMK/Mahasiswa):** Membutuhkan media belajar muatan lokal yang visual, memiliki animasi pop-up, dan ilustrasi 3D yang menarik serta antarmuka yang tidak membuat mata cepat lelah.
* **Masyarakat Umum & Pemerhati Budaya:** Ingin mempelajari kembali aksara Lontara serta menikmati karya sastra Makassar (*Kelong*, *Angngaru*, dan Lagu Daerah).
* **Guru & Pengajar Bahasa Daerah:** Membutuhkan alat peraga interaktif di kelas untuk memperdengarkan bunyi 19 aksara dan menampilkan contoh bacaan di layar proyektor dengan kontras yang jelas.

### 1.5 Arsitektur Informasi (Sitemap)
```
[LONTARAKU — Website Pembelajaran Bahasa & Aksara Lontara Makassar]
 │
 ├── 1. BERANDA (Landing Page)
 │    ├── Top Navbar (Logo LONTARAKU + Menu: Beranda, Aksara, Kosa Kata, Bacaan)
 │    ├── Hero Section (Judul Lontara "ᨕᨀᨔᨑ ᨒᨚᨈᨑ", Sub-judul "AKSARA LONTARA", Ajakan "Mari Belajar Bahasa Makassar!")
 │    ├── Ornamen Budaya Makassar (Sultan Hasanuddin, Balla Lompoa, Phinisi, Tari Pakarena, Ukiran Lamming)
 │    └── 3 Kartu Pintasan Modul (Aksara, Kosa Kata, Bacaan)
 │
 ├── 2. HALAMAN AKSARA (Modul 19 Huruf Lontara)
 │    ├── Grid 6 Baris (KA, GA, NGA | PA, BA, MA | TA, DA, NA | CA, JA, NYA | YA, RA, LA | WA, SA, A, HA)
 │    └── Modal Pop-Up Zoom Interaktif (Auto-Play Suara + Tombol Pilihan Tanda Baca: Ki, Ku, Ke, Ko & Dasar)
 │
 ├── 3. HALAMAN KOSA KATA (Sistem Kartu Berpasangan / Dual-Card)
 │    ├── Filter Kategori (Semua, Sifat & Sikap, Kegiatan Harian, Emosi, Benda & Alam)
 │    └── Grid Pasangan Kartu (Kartu Kiri: Aksara Lontara Biru Navy + Arti Indo Miring | Kartu Kanan: Kata Makassar Tebal + Ilustrasi 3D)
 │
 └── 4. HALAMAN BACAAN (Perpustakaan Berjenjang Level 1 - 4)
      ├── Level 1: Pemula (Kalimat Pendek & Sapaan Sehari-hari)
      ├── Level 2: Menengah (Cerita Pendek Kehidupan Sehari-hari)
      ├── Level 3: Mahir (Kumpulan 7 Puisi & Kelong Bahasa Makassar)
      └── Level 4: Sastra Agung & Budaya (Teks Sumpah Angngaru & 4 Lagu Daerah Makassar)
```

---

## BAGIAN 2: Sistem Desain Global ("Modern Silver Lamming") & Halaman Beranda

Untuk menjaga **kenyamanan mata (*visual ergonomics*)** saat pengguna membaca aksara dan materi dalam waktu lama, struktur warna **Lamming Makassar** diatur ulang secara proporsional:
* **Perak / Silver Lembut (*Soft Brushed Silver*)** digunakan sebagai **Latar Belakang Utama (80% area layar)** agar bersih, sejuk di mata, dan modern.
* **Merah Menyala (*Eja Lamming*)** dan **Emas Kerajaan (*Bulaeng*)** digunakan sebagai **Aksen Utama & Ornamen (20% area layar)** pada Judul Utama, Tombol CTA, *Badge* Aktif, Header/Banner aksen, dan Bingkai Ukiran Budaya.

### 2.1 Palet Warna Resmi (Updated Color Tokens)

| Kategori Warna | Nama Token Budaya | Kode HEX | Aturan Penggunaan pada Komponen UI (Ergonomis & Nyaman di Mata) |
| :--- | :--- | :--- | :--- |
| **Primary Background** | **Salaka Alusu'** (Soft Silver / Light Platinum) | `#F2F4F7` ke `#E5E9F0` | **Latar belakang utama seluruh halaman web.** Memberikan kesan bersih, terang, elegan, dan tidak membuat mata lelah. |
| **Secondary Surface (Navbar/Section)** | **Salaka Metallic** (Brushed Silver Border/Header) | `#D8DEE9` & `#CBD5E1` | Garis pembatas seksi (*divider*), latar *header* transparan (*glassmorphism*), dan *border* sekunder. |
| **Primary Brand Accent** | **Eja Lamming** (Merah Menyala Khas Makassar) | `#C8102E` & `#A60B23` | **Warna Aksen Utama:** Judul Utama Aksara Lontara (`ᨕᨀᨔᨑ ᨒᨚᨈᨑ`), Tombol CTA Utama, indikator menu aktif, dan pita/aksen ornamen Lamming. |
| **Secondary Brand Accent** | **Bulaeng** (Emas Kerajaan) | `#D4AF37` & `#B8860B` | **Warna Aksen Kedua:** Bingkai ukiran Lamming, *border* kartu aktif/hover, *badge* level, ikon speaker, dan aksen mahkota/ornamen. |
| **Card Surface** | **Lontar Krem** (Krem Hangat) | `#FDFBF7` & `#F7F2E7` | Latar permukaan Kartu Aksara, Kartu Kosa Kata (Kiri & Kanan), dan Kertas Bacaan (kontras lembut di atas latar Silver). |
| **Ink / Lontara Stroke** | **Biru Navy Lontara** | `#1B2A4A` | Warna goresan aksara Lontara di dalam Kartu Kosa Kata dan Kartu Aksara (sesuai referensi kartu contoh). |
| **Typography Dark** | **Le'leng Pekat** (Hitam Arang) | `#111827` & `#334155` | Teks sub-judul Latin (`AKSARA LONTARA`), kata Bahasa Makassar tebal (**"Kuttu"**), dan teks isi bacaan. |

### 2.2 Tipografi (Typography System)

| Elemen Teks | Rekomendasi Font | Ukuran & Ketebalan (Desktop) | Warna Default (Di Atas Latar Silver) |
| :--- | :--- | :--- | :--- |
| **Display Title (Aksara Lontara)** | `Noto Sans Buginese` | `72px` / Bold | Merah Menyala Lamming (`#C8102E`) dengan *outline/shadow* tipis Emas (`#D4AF37`) |
| **Display Subtitle (Teks Latin)** | `Cinzel Decorative` / `Playfair Display` | `32px` / Bold (Uppercase, Tracking `6px`) | Hitam Arang Elegan (`#111827`) atau Merah Marun Tua (`#7A0012`) |
| **Tagline / Callout** | `Plus Jakarta Sans` / `Poppins` | `24px` / SemiBold | Abu-abu Tua Slate (`#334155`) |
| **Section Heading (H2)** | `Plus Jakarta Sans` | `28px` / Bold | Hitam Arang (`#111827`) dengan garis bawah aksen Merah-Emas |
| **Body Text & Deskripsi** | `Plus Jakarta Sans` | `16px` / Regular (`Line-height: 1.6`) | Abu-abu Tua (`#374151`) |

### 2.3 Spesifikasi Layout Halaman 1: Beranda (Landing Page)

```
+-----------------------------------------------------------------------------------+
| [NAVBAR - Latar Putih/Silver Glass] Logo: LONTARAKU (Merah-Emas)  Beranda* | ...  |
+-----------------------------------------------------------------------------------+
|     [ LATAR BELAKANG UTAMA: SOFT BRUSHED SILVER (#F2F4F7 ke #E5E9F0) ]            |
|        [ Bingkai Sudut Atas: Ukiran Lamming Emas (#D4AF37) & Aksen Merah ]        |
|                                                                                   |
|   +------------------+       ᨕᨀᨔᨑ ᨒᨚᨈᨑ (Merah Lamming 72px)   +------------------+   |
|   |  ILUSTRASI KIRI  |       AKSARA LONTARA (Hitam/Gelap)  |  ILUSTRASI KANAN |   |
|   |   Rumah Adat     |                                     |      Tokoh       |   |
|   |  BALLA LOMPOA    |   "Mari Belajar Bahasa Makassar!"   | SULTAN HASANUDDIN|   |
|   |  & Kapal Phinisi |                                     |  & Kipas Pakarena|   |
|   |                  |   [ Mulai Belajar Sekarang -> ]     |                  |   |
|   +------------------+    (Tombol Merah Lamming & Emas)    +------------------+   |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|             [ PEMBATAS SEKSI: ORNAMEN GEOMETRIS EMAS & MERah LAMMING ]            |
+-----------------------------------------------------------------------------------+
|  +------------------------+  +------------------------+  +---------------------+  |
|  | KARTU 1 (Latar Krem)   |  | KARTU 2 (Latar Krem)   |  | KARTU 3 (Latar Krem)|  |
|  | [ᨀ] 19 Aksara & Suara  |  | [3D] Kosa Kata Visual  |  | [📜] Bacaan Lengkap |  |
|  | Klik huruf & dengarkan |  | Kartu kembar Lontara   |  | Level pemula, puisi |  |
|  | bunyi Ki, Ku, Ke, Ko.  |  | & ilustrasi 3D harian. |  | Angngaru & lagu.    |  |
|  +------------------------+  +------------------------+  +---------------------+  |
+-----------------------------------------------------------------------------------+
```

### 2.4 Prompt Stitch AI — Layar 1: Beranda (Landing Page)

```text
Design a high-fidelity desktop web Landing Page (1440px width) for an interactive Makassarese language and Lontara script educational platform.

COLOR PALETTE & THEME (Eye-Friendly Soft Silver Background with "Lamming Makassar" Red & Gold Accents):
- Primary Page Background: Soft Brushed Silver / Light Platinum gradient (#F2F4F7 to #E5E9F0) — clean, bright, and comfortable for the eyes.
- Primary Cultural Accent: Vibrant Lamming Crimson Red (#C8102E) used selectively for the main Lontara headline, primary CTA button, active states, and cultural ribbons.
- Secondary Cultural Accent: Metallic Royal Gold (#D4AF37 and #FFD700) used for traditional Lamming ornamental carvings, card borders, and badges.
- Card Surface: Warm Lontar Cream (#FDFBF7) with rounded corners (16px), subtle drop shadow, and thin gold/silver borders.

DETAILED LAYOUT STRUCTURE:
1. STICKY TOP NAVBAR: Frosted silver-white header (#F8FAFC with backdrop blur) and a thin gold-and-red bottom border line. Left side: Brand logo "LONTARAKU" in crimson red and gold. Right side: 4 navigation items ("Beranda" active in crimson red #C8102E with gold underline, "Aksara", "Kosa Kata", "Bacaan" in dark slate #334155).
2. HERO SECTION (On soft silver background, framed at the top corners by ornate gold and crimson "Lamming Makassar" carvings):
- Main Heading (Center, 72px, Bold Crimson Red #C8102E with subtle gold trim): Lontara script "ᨕᨀᨔᨑ ᨒᨚᨈᨑ".
- Subtitle directly underneath (Center, 32px, Uppercase, Deep Charcoal #111827, wide letter spacing): "AKSARA LONTARA".
- Invitation Text below subtitle (Center, 24px, Dark Slate #334155): "Mari Belajar Bahasa Makassar!".
- Primary CTA Button centered below text: Pill-shaped vibrant crimson red button (#C8102E) with a metallic gold border (#FFD700) and bold white/gold text "Mulai Belajar Sekarang".
- Left Hero Ornament: Detailed artistic illustration of "Balla Lompoa" (traditional Makassarese royal stilt house) and a Phinisi ship accented in gold and crimson red.
- Right Hero Ornament: Heroic illustration of "Sultan Hasanuddin" wearing traditional red and gold Makassarese royal attire and Passapu headgear.
3. MODULE PREVIEW SECTION (Bottom area): A 3-column grid of warm cream cards (#FDFBF7) with gold borders over the soft silver background, highlighting "Aksara Lontara", "Kosa Kata Interaktif", and "Bacaan Berjenjang".
```

---

## BAGIAN 3: Halaman Aksara (Grid 19 Huruf Lontara & Modal Pop-Up Tanda Baca)

### 3.1 Spesifikasi Urutan & Grid 19 Aksara Dasar
Di atas latar belakang **Silver Lembut (`#F2F4F7`)**, 19 kartu aksara berlatar **Krem Hangat (`#FDFBF7`)** dengan *border* Emas (`#D4AF37`) tampil sangat bersih dan kontras. Urutan huruf wajib disusun persis dalam **6 Baris Terstruktur**:

| Baris | Kelompok Fonetik | Daftar Aksara (Simbol Lontara & Label Latin) | Jumlah Kartu per Baris |
| :--- | :--- | :--- | :--- |
| **Baris 1** | Velar | **`ᨀ` (KA)**, **`ᨁ` (GA)**, **`ᨂ` (NGA)** | 3 Kartu |
| **Baris 2** | Labial | **`ᨄ` (PA)**, **`ᨅ` (BA)**, **`ᨆ` (MA)** | 3 Kartu |
| **Baris 3** | Dental | **`ᨈ` (TA)**, **`ᨉ` (DA)**, **`ᨊ` (NA)** | 3 Kartu |
| **Baris 4** | Palatal | **`ᨌ` (CA)**, **`ᨍ` (JA)**, **`ᨎ` (NYA)** | 3 Kartu |
| **Baris 5** | Approximant | **`ᨐ` (YA)**, **`ᨑ` (RA)**, **`ᨒ` (LA)** | 3 Kartu |
| **Baris 6** | Fricative & Glottal | **`ᨓ` (WA)**, **`ᨔ` (SA)**, **`ᨕ` (A)**, **`ᨖ` (HA)** | 4 Kartu |

### 3.2 Spesifikasi Modal Pop-Up Interaktif (Zoom Huruf, Suara & Tanda Baca Ki, Ku, Ke, Ko)
Ketika salah satu kartu huruf diklik, kartu membesar ke tengah layar menjadi **Modal Pop-Up** dan langsung mengeluarkan suara pelafalan huruf tersebut. Pengguna dapat memilih tanda baca vokal (*Ana' Surat*):

```
+-----------------------------------------------------------------------+
|              [LATAR BELAKANG SILVER DENGAN BLUR LEMBUT]               |
|      +---------------------------------------------------------+      |
|      | [Header Merah-Emas] Huruf Dasar: KA (Ina' Surat)  [ X ] |      |
|      +---------------------------------------------------------+      |
|      |                   +-----------------+                   |      |
|      |                   |        •        | <- Titik Merah    |      |
|      |                   |       ᨀᨗ        |    (Jika pilih Ki)|      |
|      |                   |     " KI "      |                   |      |
|      |                   +-----------------+                   |      |
|      |        [ 🔊 Dengarkan Pelafalan: "Ki" (Tombol Merah) ]  |      |
|      |        Ket: Tetti' Rirate (Tanda titik di atas huruf)   |      |
|      |                                                         |      |
|      |   Pilih Tanda Baca Vokal (Ana' Surat):                  |      |
|      |   +--------+  +--------+  +--------+  +--------+  +---+ |      |
|      |   |  ᨀᨗ    |  |  ᨀᨘ    |  |  ᨀᨙ    |  |  ᨀᨚ    |  | ᨀ | |      |
|      |   |  Ki*   |  |  Ku    |  |  Ke    |  |  Ko    |  |Ka | |      |
|      |   |(Atas)  |  |(Bawah) |  |(Depan) |  |(Blkng) |  |Dsr| |      |
|      |   +--------+  +--------+  +--------+  +--------+  +---+ |      |
|      +---------------------------------------------------------+      |
+-----------------------------------------------------------------------+
```

| Pilihan Vokal | Nama Tanda Baca Lontara | Posisi Simbol Tanda Baca | Contoh Visual pada Huruf "KA" (`ᨀ`) | Output Suara Saat Diklik |
| :--- | :--- | :--- | :--- | :--- |
| Default **(-A)** | *Ina' Surat* (Huruf Dasar) | Tanpa tanda tambahan | **`ᨀ`** (KA) | *"Ka"* |
| **Vokal -I (Ki)** | *Tetti' Rirate* | **Satu titik di ATAS** aksara | **`ᨀᨗ`** (KI) | *"Ki"* |
| **Vokal -U (Ku)** | *Tetti' Rirawa* | **Satu titik di BAWAH** aksara | **`ᨀᨘ`** (KU) | *"Ku"* |
| **Vokal -E (Ke)** | *Ana' Riolo* | **Tanda kait di DEPAN (Kiri)** aksara | **`ᨀᨙ`** (KE) | *"Ke"* |
| **Vokal -O (Ko)** | *Ana' Riboko* | **Tanda kait di BELAKANG (Kanan)** aksara | **`ᨀᨚ`** (KO) | *"Ko"* |

### 3.3 Prompt Stitch AI — Layar 2A & 2B: Halaman Aksara & Pop-Up Modal

#### Prompt Layar 2A (Tampilan Grid 19 Aksara Lontara di Atas Latar Silver)
```text
Design a desktop web screen (1440px width) for the "Aksara Lontara" character learning page with an eye-friendly Soft Brushed Silver background (#F2F4F7 to #E5E9F0) and traditional "Lamming Makassar" Crimson Red (#C8102E) and Metallic Gold (#D4AF37) accents.

LAYOUT STRUCTURE:
1. TOP NAVBAR: Frosted silver-white header with "Aksara" highlighted as the active menu item in crimson red (#C8102E) with a gold underline.
2. PAGE HEADER: Centered heading "19 Aksara Dasar Lontara Makassar (Ina' Surat)" in deep charcoal (#111827) with a crimson-and-gold decorative traditional divider, and subtitle "Klik salah satu huruf untuk memperbesar tampilan, melihat tanda baca, dan mendengarkan cara pelafalannya."
3. STRUCTURED CHARACTER GRID:
Display 19 warm cream cards (#FDFBF7) with rounded corners (16px), subtle elevation shadows, and thin metallic gold borders (#D4AF37) arranged in 6 structured rows over the soft silver background:
- Row 1 (3 cards): KA (ᨀ), GA (ᨁ), NGA (ᨂ)
- Row 2 (3 cards): PA (ᨄ), BA (ᨅ), MA (ᨆ)
- Row 3 (3 cards): TA (ᨈ), DA (ᨉ), NA (ᨊ)
- Row 4 (3 cards): CA (ᨌ), JA (ᨍ), NYA (ᨎ)
- Row 5 (3 cards): YA (ᨐ), RA (ᨑ), LA (ᨒ)
- Row 6 (4 cards): WA (ᨓ), SA (ᨔ), A (ᨕ), HA (ᨖ)
Each card displays a large deep navy blue (#1B2A4A) Lontara character in the center, bold black Latin pronunciation text below it, and a small crimson-and-gold speaker icon in the top-right corner.
```

#### Prompt Layar 2B (Tampilan Pop-Up Zoom Huruf & Tanda Baca Ki, Ku, Ke, Ko)
```text
Design an interactive Character Zoom Pop-Up Modal overlaid on top of the softly blurred silver "Aksara Lontara" grid screen (1440px desktop).

MODAL DESIGN & LAYOUT (620px width, centered):
- Modal Container: Warm cream surface (#FDFBF7) with a royal gold (#D4AF37) border (20px border radius) and a decorative crimson red (#C8102E) Lamming header bar with a gold close (X) button.
- Modal Header: Title "Aksara Dasar: KA" in bold white/gold text on the crimson header bar.
- Central Zoom Display Box: A large soft-silver/ivory showcase box in the center displaying the zoomed-in Lontara character "ᨀᨗ" (120px size) in deep navy blue (#1B2A4A), with the top vowel dot highlighted in vibrant crimson red (#C8102E) and large bold label "KI" underneath.
- Audio Player Bar: A crimson red pill button (#C8102E) with gold trim below the showcase box showing an active soundwave animation: "🔊 Putar Suara Pelafalan: KI".
- Vowel Diacritic Selector Bar (Bottom of Modal): Label "Pilih Tanda Baca Vokal (Ana' Surat):" followed by 5 interactive selector buttons in a row:
  1. Active Button (Crimson red background #C8102E, gold border #FFD700, white text): "ᨀᨗ — Ki (Titik Atas)"
  2. Inactive Button (Silver-white background #F2F4F7, silver border): "ᨀᨘ — Ku (Titik Bawah)"
  3. Inactive Button (Silver-white background #F2F4F7, silver border): "ᨀᨙ — Ke (Tanda Depan)"
  4. Inactive Button (Silver-white background #F2F4F7, silver border): "ᨀᨚ — Ko (Tanda Belakang)"
  5. Reset Button: "ᨀ — Ka (Dasar)"
```

---

## BAGIAN 4: Halaman Kosa Kata (Sistem Kartu Berpasangan / Dual-Card & Katalog 12 Kata)

### 4.1 Spesifikasi Komponen "Dual-Card" (Di Atas Latar Belakang Silver)
Di atas latar halaman **Silver Lembut (`#F2F4F7`)**, setiap kosa kata ditampilkan dalam **Wadah Pasangan (Pair Container)** berbingkai Emas tipis yang membungkus **Kartu Kiri** dan **Kartu Kanan**:
* **Kartu Kiri (`280x340px`, Latar Krem `#FDFBF7`, Sudut Membulat `24px`, Border Emas `#D4AF37`):**
  * **Tengah:** Goresan garis tebal **Aksara Lontara** berwarna **Biru Navy (`#1B2A4A`)** berukuran besar (`84px`) beserta titik/simbol tanda bacanya.
  * **Bawah:** Terjemahan Bahasa Indonesia dalam **Huruf Miring (*Italic*)** berukuran `26px`, warna Hitam/Abu Tua (`#1F2937`).
* **Kartu Kanan (`280x340px`, Latar Krem `#FDFBF7`, Sudut Membulat `24px`, Border Emas `#D4AF37`):**
  * **Atas:** Kata Bahasa Makassar dalam **Huruf Tebal Hitam (Bold Black `#111827`)** berukuran `28px`, ditemani ikon speaker kecil berwarna Merah Lamming (`#C8102E`).
  * **Tengah ke Bawah:** **Ilustrasi Bergaya 3D (`240x220px`)** yang menggambarkan kegiatan atau ekspresi kata tersebut dalam kehidupan sehari-hari.

### 4.2 Katalog Lengkap 12 Pasang Kartu Kosa Kata Sehari-hari

| No | Kategori | Kartu Kiri (Aksara Navy & Indo Miring) | Kartu Kanan (Teks Tebal Makassar & Ilustrasi 3D) | Kalimat Penerapan Sehari-hari |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Sifat & Sikap | **Aksara:** `ᨀᨘᨈᨘ` *(Tiga goresan tebal biru navy dengan dua titik di bawahnya)*<br>**Teks Bawah:** *Malas* | **Teks Atas:** **Kuttu**<br>**Ilustrasi 3D:** Anak laki-laki berambut cokelat membungkuk lesu memakai kaus kuning dan celana biru. Di sebelah kanannya ada jendela bertirai biru, tanaman pot, serta peralatan bersih-bersih (sapu merah, pel, dan ember kuning berisi air). | *"Teako kuttu dudui a'boya ilmu."* (Jangan terlalu malas mencari ilmu.) |
| **2** | Sifat & Sikap | **Aksara:** `ᨌᨑᨉᨙ`<br>**Teks Bawah:** *Pintar / Rajin* | **Teks Atas:** **Caradde'**<br>**Ilustrasi 3D:** Anak perempuan tersenyum ceria memakai baju sekolah sambil membaca buku di meja belajar kayu dengan lampu belajar yang menyala. | *"Anne ana'a salloji na caradde'."* (Anak ini kelak menjadi pintar.) |
| **3** | Kegiatan Harian | **Aksara:** `ᨂᨉᨑᨙ`<br>**Teks Bawah:** *Makan* | **Teks Atas:** **Ngandre**<br>**Ilustrasi 3D:** Anak laki-laki duduk di ruang makan menyantap semangkuk Coto Makassar hangat dan ketupat dengan ekspresi wajah sangat senang. | *"Mae maki' ngandre Coto."* (Mari kita makan Coto.) |
| **4** | Kegiatan Harian | **Aksara:** `ᨕᨚᨊᨘ`<br>**Teks Bawah:** *Minum* | **Teks Atas:** **Angnginung**<br>**Ilustrasi 3D:** Seorang anak memegang gelas kaca bening berisi air putih segar di dekat meja makan setelah bermain. | *"Angnginungko je'ne' baji'-baji'."* (Minumlah air baik-baik.) |
| **5** | Kegiatan Harian | **Aksara:** `ᨈᨗᨊᨑᨚ`<br>**Teks Bawah:** *Tidur* | **Teks Atas:** **Tinro**<br>**Ilustrasi 3D:** Anak laki-laki tertidur pulas di atas tempat tidur berselimut biru dengan bantal empuk, berlatar jendela malam berbintang. | *"Wattunami tinro baniang."* (Sudah waktunya tidur malam.) |
| **6** | Kegiatan Harian | **Aksara:** `ᨕᨒᨅ`<br>**Teks Bawah:** *Berjalan / Pergi* | **Teks Atas:** **A'lampa**<br>**Ilustrasi 3D:** Dua anak menyandang tas ransel berjalan gembira keluar dari pagar rumah menuju sekolah di pagi hari yang cerah. | *"A'lampa ma' ri sikolaya."* (Saya pergi ke sekolah dulu.) |
| **7** | Emosi & Perasaan | **Aksara:** `ᨑᨊᨘ`<br>**Teks Bawah:** *Gembira / Senang* | **Teks Atas:** **Rannu**<br>**Ilustrasi 3D:** Anak perempuan melompat riang sambil mengangkat kedua tangan di taman bunga yang cerah. | *"Rannu nyawaku ancinikko."* (Senang hatiku melihatmu.) |
| **8** | Emosi & Perasaan | **Aksara:** `ᨒᨑᨚ`<br>**Teks Bawah:** *Marah* | **Teks Atas:** **Laro**<br>**Ilustrasi 3D:** Anak laki-laki melipat kedua tangan di dada dengan pipi menggembung dan alis mengerut karena mainan mobilnya rusak. | *"Teako laro-laroi."* (Jangan suka marah-marah.) |
| **9** | Benda & Tempat | **Aksara:** `ᨅᨒ`<br>**Teks Bawah:** *Rumah* | **Teks Atas:** **Balla'**<br>**Ilustrasi 3D:** Rumah panggung kayu tradisional Makassar yang asri dengan atap pelana, tangga depan, dan halaman hijau. | *"Ammantanga' ri balla'."* (Saya tinggal di rumah.) |
| **10** | Benda & Alam | **Aksara:** `ᨍᨙᨊᨙ`<br>**Teks Bawah:** *Air* | **Teks Atas:** **Je'ne'**<br>**Ilustrasi 3D:** Pancuran air jernih yang mengalir masuk ke dalam ember biru dengan percikan air berkilau. | *"Je'ne' गोवा मैंगकासर."* (Air bersih untuk mandi.) |
| **11** | Ukuran & Sifat | **Aksara:** `ᨒᨚᨄᨚ`<br>**Teks Bawah:** *Besar* | **Teks Atas:** **Lompo**<br>**Ilustrasi 3D:** Ilustrasi 3D perahu Phinisi berukuran besar dengan layar terkembang megah di tepi pantai Makassar. | *"Balla' lompo."* (Rumah yang besar.) |
| **12** | Ukuran & Sifat | **Aksara:** `ᨌᨉᨗ`<br>**Teks Bawah:** *Kecil* | **Teks Atas:** **Ca'di**<br>**Ilustrasi 3D:** Seorang anak mengamati anak ayam kuning yang mungil di atas telapak tangannya. | *"Ana' jangang ca'di."* (Anak ayam yang kecil.) |

### 4.3 Prompt Stitch AI — Layar 3: Halaman Kosa Kata (Dual-Card "Malas / Kuttu")

```text
Design a desktop web screen (1440px width) for the "Kosa Kata Bahasa Makassar" (Vocabulary) page using an eye-friendly Soft Brushed Silver background (#F2F4F7 to #E5E9F0) accented with "Lamming Makassar" Crimson Red (#C8102E) and Metallic Gold (#D4AF37).

LAYOUT STRUCTURE:
1. TOP NAVBAR: Frosted silver-white header with "Kosa Kata" active in crimson red (#C8102E) and gold underline.
2. PAGE HEADER & CATEGORY PILLS: Centered heading "Kosa Kata Sehari-hari (Lontara & Visual 3D)" in deep charcoal (#111827). Below it, horizontal filter pills ("Semua" active with crimson red background #C8102E and white text, "Sifat & Sikap", "Kegiatan Harian", "Emosi", "Benda & Alam" in white/silver with gold borders).
3. FEATURED DUAL-CARD VOCABULARY COMPONENT (Side-by-Side Paired Cards):
Display paired vocabulary cards inside a subtle metallic silver-and-gold frame:
- LEFT CARD (Warm Cream #FDFBF7 background, 24px rounded corners, thin gold border):
  - Center: Large thick-stroked Lontara script characters "ᨀᨘᨈᨘ" in deep navy blue (#1B2A4A) with two dots underneath.
  - Bottom: The Indonesian meaning "Malas" written in clean italic serif/sans-serif font.
- RIGHT CARD (Identical Warm Cream #FDFBF7 background, 24px rounded corners, thin gold border):
  - Top: The Makassarese word "Kuttu" written in bold black typography (#111827) with a small crimson red audio speaker button on the right.
  - Center/Bottom: A Pixar-style 3D illustration of a brown-haired boy wearing a yellow t-shirt and blue pants, slouching with a lazy/reluctant expression. To his right is a window with blue curtains, a potted plant, and cleaning tools including a red broom, a mop, and a yellow bucket filled with water.
4. ADDITIONAL VOCABULARY PAIRS BELOW: Show a second row of dual-cards for "Pintar / Caradde' (ᨌᨑᨉᨙ)" and "Makan / Ngandre (ᨂᨉᨑᨙ)" following the exact same left-card (Lontara + Italic Indonesian) and right-card (Bold Makassarese + 3D Illustration) pattern.
```

---

## BAGIAN 5: Halaman Bacaan Berjenjang & Bank Materi Lengkap (Level 1 s/d 4)

### 5.1 Struktur Navigasi Level & Kontrol Bacaan
Di atas latar **Silver Lembut (`#F2F4F7`)**, halaman bacaan memiliki **4 Tab Level** (Tab aktif berwarna Merah Lamming `#C8102E` dengan bingkai Emas `#D4AF37`) serta **3 Tombol Kontrol Bantu Baca**:
1. **Toggle Transliterasi Latin (`[x] Tampilkan Cara Baca Latin`)**
2. **Toggle Arti Bahasa Indonesia (`[x] Tampilkan Terjemahan Indonesia`)**
3. **Pemutar Suara Narator (`[ 🔊 Dengarkan Bacaan / Lagu ]`)**

---

### 5.2 BANK MATERI LEVEL 1: PEMULA (Kalimat Pendek & Sapaan Harian)

| Kode | Aksara Lontara | Cara Baca (Bahasa Makassar) | Arti Bahasa Indonesia |
| :--- | :--- | :--- | :--- |
| **L1-01** | `ᨕᨔᨒᨆᨘ ᨕᨒᨗᨀᨘ` | *Assalamu Alaikum* | Semoga keselamatan menyertaimu |
| **L1-02** | `ᨕᨄ ᨀᨅᨑ` | *Apa kareba?* | Apa kabar? |
| **L1-03** | `ᨅᨍᨗ ᨅᨍᨗᨍ` | *Baji'-baji'ji.* | Baik-baik saja. |
| **L1-04** | `ᨕᨗᨊᨀᨙ ᨕᨑᨙᨊᨘ` | *Inai arennu?* | Siapa namamu? |
| **L1-05** | `ᨕᨑᨙᨀᨘ ᨔᨗ ᨅᨌᨚ` | *Arengku si Baco.* | Namaku si Baco. |
| **L1-06** | `ᨀᨙᨆᨕᨙᨀᨚ ᨕᨒᨅ` | *Kemaeko a'lampa?* | Kamu mau pergi ke mana? |
| **L1-07** | `ᨕᨒᨅᨕ ᨑᨗ ᨔᨗᨀᨚᨒᨐ` | *A'lampa' ri sikolaya.* | Saya pergi ke sekolah. |
| **L1-08** | `ᨈᨑᨗᨆ ᨀᨔᨗ ᨉᨕᨙ` | *Tarima kasi' Daeng.* | Terima kasih, Kakak/Daeng. |

---

### 5.3 BANK MATERI LEVEL 2: MENENGAH (Cerita Pendek Kehidupan Sehari-hari)

#### Cerita 2.1: Bari'basa' ri Balla' (Pagi Hari di Rumah)
* **Aksara Lontara:**
  `ᨔᨗ ᨅᨌᨚ ᨕᨅᨈᨘ ᨅᨑᨗᨅᨔ ᨉᨘᨉᨘ. ᨕᨈᨘᨑᨘᨊ ᨑᨗ ᨍᨙᨊᨙᨀᨕ ᨕᨍᨙᨊᨙ. ᨒᨙᨅᨀᨗ ᨕᨍᨙᨊᨙ, ᨕᨂᨉᨑᨙᨆᨗ ᨔᨗᨅᨓ ᨕᨆᨊ ᨔᨗᨅᨓ ᨕᨅᨄᨊ. ᨔᨗ ᨅᨌᨚ ᨕᨊ ᨌᨑᨉᨙ, ᨈᨙᨊ ᨊᨀᨘᨈᨘ ᨕᨒᨅ ᨑᨗ ᨔᨗᨀᨚᨒᨐ.`
* **Bahasa Makassar:**
  *Si Baco ambangung bari'basa' dudu. Antama'mi ri je'nekanga a'je'ne'. Le'baki a'je'ne', angngandremi siagang amma'na siagang bapa'na. Si Baco ana' caradde', tena nakuttu a'lampa ri sikolaya.*
* **Terjemahan Indonesia:**
  Si Baco bangun pagi-pagi sekali. Ia masuk ke kamar mandi untuk mandi. Selesai mandi, ia makan bersama ibu dan ayahnya. Si Baco anak yang rajin/pintar, ia tidak malas pergi ke sekolah.

#### Cerita 2.2: A'lampa ri Pasaraka (Pergi ke Pasar)
* **Aksara Lontara:**
  `ᨅᨑᨗᨅᨔᨕ, ᨔᨗ ᨅᨙᨌᨙ ᨕᨒᨅ ᨑᨗ ᨄᨔᨑᨀ ᨔᨗᨅᨓ ᨕᨆᨊ. ᨕᨆᨊ ᨕᨅᨒᨗ ᨍᨘᨀᨘ ᨔᨗᨅᨓ ᨁᨂᨊ. ᨔᨗ ᨅᨙᨌᨙ ᨑᨊᨘ ᨉᨘᨉᨘ ᨕᨅᨈᨘᨗ ᨕᨆᨊ ᨕᨙᨑᨂ ᨅᨑ ᨅᨒᨗᨕ.`
* **Bahasa Makassar:**
  *Bari'basaka, si Becce' a'lampa ri pasaraka siagang amma'na. Amma'na ammalli juku' siagang gangang. Si Becce' rannu dudu ambantui amma'na angngerang barang balliang.*
* **Terjemahan Indonesia:**
  Pada pagi hari, si Becce pergi ke pasar bersama ibunya. Ibunya membeli ikan dan sayur-mayur. Si Becce sangat senang membantu ibunya membawakan barang belanjaan.

---

### 5.4 BANK MATERI LEVEL 3: MAHIR — KUMPULAN 7 PUISI & KELONG BAHASA MAKASSAR

#### Puisi 1: Kelong Menuntut Ilmu (*Boya Ilmu*)
* **Aksara Lontara:**
  `ᨈᨙᨕᨀᨚ ᨀᨘᨈᨘ ᨕᨅᨚᨐ`
  `ᨕᨗᨒᨆᨘ ᨑᨗ ᨒᨗᨊᨚᨕ`
  `ᨅᨚᨀᨚᨒᨚ ᨑᨗ ᨀᨒᨙᨊᨘ`
  `ᨔᨒᨚ ᨊᨀᨚ ᨌᨑᨉᨙ`
* **Bahasa Makassar:**
  *Teako kuttu a'boya* / *Ilmu ri linoa* / *Bokolo' ri kalennu* / *Sallo nako caradde'*
* **Arti Bahasa Indonesia:**
  Janganlah engkau malas mencari / Ilmu di dunia ini / Sebagai bekal bagi dirimu / Kelak engkau akan menjadi pandai.

#### Puisi 2: Kelong Kerja Keras & Ketekunan (*Resopa Natemmangingngi*)
* **Aksara Lontara:**
  `ᨐ ᨈᨙᨊ ᨊᨔᨑᨙ ᨅᨍᨗ`
  `ᨄᨘᨊ ᨈᨙᨊ ᨊᨑᨙᨔᨚ`
  `ᨔᨚᨂᨚ ᨈᨗᨈᨗᨊ ᨑᨗ ᨒᨗᨊᨚ`
  `ᨑᨙᨔᨚᨄ ᨊᨈᨗᨊᨘᨒᨘ`
* **Bahasa Makassar:**
  *Ia tena nasare baji'* / *Punna tena nareso* / *Songgo' titina ri lino* / *Resopa natinulu*
* **Arti Bahasa Indonesia:**
  Tiada keberuntungan yang datang begitu saja / Jika seseorang tidak bekerja keras / Keringat yang menetes di dunia / Hanya dengan kerja keras dan ketekunanlah cita-cita tercapai.

#### Puisi 3: Puisi Harga Diri & Kepedulian (*Siri' na Pacce*)
* **Aksara Lontara:**
  `ᨔᨗᨑᨗᨀᨘ ᨊ ᨄᨌᨙᨀᨘ`
  `ᨕᨊᨍᨑᨗ ᨅᨙᨈᨙ ᨑᨗ ᨕᨈᨗ`
  `ᨒᨅᨘᨔᨘ ᨑᨗ ᨀᨊ ᨀᨊ`
  `ᨍᨑᨙ ᨑᨗ ᨄᨁᨕᨘᨀ`
* **Bahasa Makassar:**
  *Siri'ku na pacceku* / *A'jari benteng ri ati* / *Lambusu' ri kana-kana* / *Jare' ri panggaukang*
* **Arti Bahasa Indonesia:**
  Rasa malu (harga diri) dan kepedulianku / Menjadi benteng di dalam hati / Lurus dan jujur dalam bertutur kata / Teguh dan dapat dipercaya dalam perbuatan.

#### Puisi 4: Puisi Kasih Sayang Ibu (*Kamaseang Amma'*)
* **Aksara Lontara:**
  `ᨕᨚ ᨕᨆ ᨀᨆᨔᨙᨕᨀᨘ`
  `ᨒᨚᨄᨚ ᨉᨘᨉᨘ ᨄᨂᨆᨔᨙᨊᨘ`
  `ᨅᨈᨘ ᨑᨗ ᨌᨉᨗᨀᨘ`
  `ᨔᨒᨚ ᨊᨀᨘ ᨒᨚᨄᨚ ᨀᨆ`
* **Bahasa Makassar:**
  *O Amma' kamaseangku* / *Lompo dudu pangngamaseangnu* / *Battu ri ca'diku* / *Sallo naku lompo kamma*
* **Arti Bahasa Indonesia:**
  Wahai Ibu kesayanganku / Begitu besar kasih sayangmu / Sejak aku masih kecil / Hingga aku tumbuh besar seperti sekarang.

#### Puisi 5: Kelong Kerendahan Hati (*Tuna ri Kale*)
* **Aksara Lontara:**
  `ᨆᨊᨘ ᨈᨗᨂᨗ ᨑᨗ ᨕᨓᨂ`
  `ᨈᨘᨑᨘ ᨈᨚᨍᨗ ᨑᨗ ᨅᨘᨈᨐ`
  `ᨈᨙᨕᨀᨚ ᨈᨀᨅᨚᨑᨚ`
  `ᨒᨗᨊᨚᨕ ᨄᨆᨑᨗ ᨆᨑᨗᨍᨗ`
* **Bahasa Makassar:**
  *Manu' tinggi ri awanga* / *Turung tonji ri buttaya* / *Teako takabboro'* / *Linoa pammari-mariji*
* **Arti Bahasa Indonesia:**
  Burung yang terbang tinggi di angkasa / Pasti akan turun juga ke tanah / Janganlah engkau menyombongkan diri / Dunia ini hanyalah tempat persinggahan sementara.

#### Puisi 6: Kelong Pelaut & Tanah Makassar (*Sombalangi Phinisiku*)
* **Aksara Lontara:**
  `ᨔᨚᨅᨒᨑᨗ ᨄᨗᨊᨗᨔᨗᨀᨘ`
  `ᨕᨒᨙᨈᨙ ᨅᨚᨅ ᨒᨚᨄᨚ`
  `ᨆᨊ ᨆᨆᨚ ᨀᨘᨅᨙᨒ ᨉᨘᨉᨘ`
  `ᨅᨘᨈ ᨆᨀᨔᨑ ᨈᨙᨊ ᨀᨘᨀᨒᨘᨄᨕᨗ`
* **Bahasa Makassar:**
  *Sombalangi Phinisiku* / *A'lete bombang lompo* / *Manna mamo kubela dudu* / *Butta Mangkasara' tena kukaluppai*
* **Arti Bahasa Indonesia:**
  Berlayarlah perahu Phinisiku / Meniti ombak yang besar / Walaupun aku berada sangat jauh di rantau / Tanah Makassar tidak akan pernah kulupakan.

#### Puisi 7: Kelong Persaudaraan (*Sipakatau Sipakalabbi'*)
* **Aksara Lontara:**
  `ᨔᨗᨄᨀᨈᨕᨘ ᨑᨗ ᨒᨗᨊᨚ`
  `ᨔᨗᨄᨀᨒᨅᨗ ᨔᨗᨅᨓ ᨔᨑᨗᨅᨈᨂ`
  `ᨈᨙᨕᨀᨚ ᨔᨗᨅᨚᨐ ᨔᨒ`
  `ᨅᨍᨗᨀᨂ ᨑᨗ ᨄᨑᨙ ᨊᨗᨈᨘᨍᨘ`
* **Bahasa Makassar:**
  *Sipakatau ri lino* / *Sipakalabbi' siagang sari'battang* / *Teako siboya sala* / *Bajikanga ri pare' nituju*
* **Arti Bahasa Indonesia:**
  Saling memanusiakanlah di dunia / Saling memuliakan bersama saudara / Jangan saling mencari kesalahan / Kebaikan bersama yang kita jadikan tujuan.

---

### 5.5 BANK MATERI LEVEL 4: SASTRA AGUNG (TEKS ANGNGARU & 4 LAGU DAERAH MAKASSAR)

#### A. Naskah Lengkap: ANGNGARU (Ikrar Sumpah Setia Gowa-Makassar)

| Bait | Aksara Lontara | Transliterasi Bahasa Makassar | Terjemahan Bahasa Indonesia |
| :--- | :--- | :--- | :--- |
| **Bait 1 (Penghormatan)** | `ᨈᨅᨙ ᨀᨑᨕᨙᨀᨘ...`<br>`ᨈᨘ ᨆᨅᨘᨈ ᨆᨀᨔᨑ`<br>`ᨈᨘ ᨊᨗᨔᨚᨅᨐ ᨑᨗ ᨁᨚᨓ` | *Tabe' Karaengku...*<br>*Tu ma'butta Mangkasara'*<br>*Tu nisombaya ri Gowa* | Ampun beribu ampun wahai Rajaku...<br>Penguasa tanah Makassar<br>Yang dipertuan dan dijunjung tinggi di Gowa |
| **Bait 2 (Ikrar Kesetiaan)** | `ᨕᨗᨊᨀᨙ ᨆᨗᨊᨙ ᨕᨈ`<br>`ᨀᨗᨈ ᨆᨗᨊᨙ ᨀᨑᨕᨙ`<br>`ᨄᨘᨊ ᨔᨒᨚ ᨊᨗᨕ ᨄᨘᨑᨗᨊ ᨕᨂᨗ`<br>`ᨕᨗᨊᨀᨙ ᨑᨗᨚᨒᨚ ᨕᨈᨅ ᨑᨗ ᨅᨚᨀᨚ` | *Inakke minne ata*<br>*Katte minne Karaeng*<br>*Punna sallo nia' purina anging*<br>*Inakke riolo attaba ri boko* | Akulah ini hamba sahaya<br>Engkaulah ini Sang Raja<br>Jika kelak datang badai ancaman menghadang<br>Akulah yang berdiri paling depan menjadi perisai sebelum mengenaimu |
| **Bait 3 (Sumpah Darah)** | `ᨅᨍᨗ ᨆᨒᨚᨒᨚ ᨌᨙᨑᨕᨀᨘ`<br>`ᨊ ᨈᨙᨊ ᨀᨘ ᨕᨒᨙᨔᨙ ᨑᨗ ᨄᨔᨗᨍᨍᨗᨀ!` | *Baji' malolo cera'ku*<br>*Na tena ku allese ri pasijanjikang!* | Lebih baik mengalir merah darahku<br>Daripada aku mundur selangkah dari janji kesetiaan! |

#### B. Kumpulan 4 Lagu Daerah Makassar

1. **PAKARENA**
   * **Aksara Lontara:** `ᨕᨗᨀᨈᨙ ᨑᨗ ᨈᨘᨑᨈᨙᨕ ᨅᨕᨘ, ᨕᨉᨈ ᨆᨑᨗᨚᨒᨚᨕ, ᨔᨐᨘ ᨕᨙ... ᨄᨀᨑᨙᨊ ᨒᨅᨗᨑᨗᨊ ᨅᨕᨘ, ᨐ ᨉᨙᨉᨙ ᨉᨙᨉᨙ... ᨆᨅᨍᨗ ᨀᨊ ᨑᨗ ᨄᨀᨑᨆᨘᨒ, ᨅᨍᨗ ᨀᨊ ᨑᨗ ᨄᨀᨈᨘᨈᨘ`
   * **Lirik Makassar:** *Ikatte ri Turatea bau, adatta marioloa, sayang e... Pakarena la'birina bau, ya dende dende... Ma'baji' kana ri pakaramula, baji' kana ri pakatuttu'*
   * **Arti Indonesia:** Kita masyarakat di Makassar, adat kita sejak dahulu kala... Tari Pakarena yang mulia dan lembut... Bertutur kata yang baik sejak awal hingga akhir.
2. **ANGIN MAMMIRI**
   * **Aksara Lontara:** `ᨕᨂᨗ ᨆᨆᨗᨑᨗ ᨀᨘᨄᨔᨘ... ᨄᨗᨈᨘᨍᨘᨗ ᨈᨚᨈᨚᨂᨊ... ᨈᨘᨔᨑᨚᨕ ᨈᨀᨒᨘᨄ, ᨅᨈᨂ ᨈᨀᨒᨘᨄ... ᨕᨙ ᨕᨕᨘᨒᨙ... ᨊᨆᨂᨘᨑᨙᨊᨗ ᨈᨘᨈᨘ ᨆᨈᨊ...`
   * **Lirik Makassar:** *Anging mammiri kupasang... Pitujui tontonganna... Tusarroa takkaluppa, batangnga takkaluppa... E aule... Namangngu'rangi tutu matanna...*
   * **Arti Indonesia:** Wahai angin semilir kutitipkan pesan... Hembuskanlah melalui jendelanya... Kepada seseorang yang mulai pelupa... Agar ia kembali teringat.
3. **ANAK KUKANG**
   * **Aksara Lontara:** `ᨀᨘᨀᨂ ᨈᨘᨊᨗᨀᨆᨔᨙ... ᨕᨊ ᨀᨘᨀᨂ ᨀᨚᨉᨚᨂ... ᨈᨙᨊ ᨕᨆᨊ, ᨈᨙᨊ ᨅᨄᨊ, ᨕᨔᨑᨙ ᨑᨗ ᨀᨒᨙ ᨀᨒᨙ...`
   * **Lirik Makassar:** *Kukang tunikamase... Ana' kukang kodong... Tena amma'na, tena bapa'na, assare ri kale-kale...*
   * **Arti Indonesia:** Anak yatim piatu yang dikasihani... Tiada lagi ibunya, tiada lagi ayahnya, menjalani hidup seorang diri.
4. **MA'RENCONG-RENCONG**
   * **Aksara Lontara:** `ᨅᨈᨘ ᨑᨈᨘᨆᨕ ᨑᨗ ᨅᨘᨈ ᨍᨓ... ᨆᨑᨙᨌᨚ ᨑᨙᨌᨚ... ᨕᨅᨚᨐ ᨅᨑ ᨑᨗ ᨅᨘᨈ ᨆᨀᨔᨑ...`
   * **Lirik Makassar:** *Battu ratuma' ri butta Jawa... Ma'rencong-rencong... A'boya barang ri butta Mangkasara'...*
   * **Arti Indonesia:** Aku baru saja kembali berlayar dari tanah seberang... Dengan riang gembira membawa hasil usaha kembali ke tanah Makassar.

### 5.6 Prompt Stitch AI — Layar 4: Halaman Bacaan Berjenjang (Latar Silver)

```text
Design a desktop web screen (1440px width) for the "Bacaan Bahasa Makassar" (Multi-Level Reading Library) page using an eye-friendly Soft Brushed Silver background (#F2F4F7 to #E5E9F0) accented with "Lamming Makassar" Crimson Red (#C8102E) and Metallic Gold (#D4AF37).

LAYOUT STRUCTURE:
1. TOP NAVBAR: Frosted silver-white header with "Bacaan" active in crimson red (#C8102E) and gold underline.
2. LEVEL PROGRESSION TABS (4 horizontal tabs below header):
- Tab 1: "Level 1: Pemula (Kalimat Pendek)" (Silver-white tab, gold border)
- Tab 2: "Level 2: Menengah (Cerita Harian)" (Silver-white tab, gold border)
- Tab 3: "Level 3: Mahir (Puisi & Kelong)" (Silver-white tab, gold border)
- Tab 4 (Active): "Level 4: Sastra Agung (Angngaru & Lagu Daerah)" (Vibrant Crimson Red #C8102E background with metallic gold border and white text)
3. TWO-COLUMN READING WORKSPACE:
- LEFT SIDEBAR (360px width): List of reading cards on warm cream surfaces (#FDFBF7) with gold borders, including "Sumpah Angngaru" (selected with crimson red left accent bar), "Puisi Resopa Natemmangingngi", "Lagu Pakarena", and "Lagu Angin Mammiri".
- RIGHT MAIN READING CANVAS (Warm Lontar Cream #FDFBF7 card, 24px rounded corners, ornate gold and crimson Lamming top header trim):
  - Top Control Bar: Toggle switches for "Tampilkan Teks Latin", "Tampilkan Arti Indonesia", and a Crimson Red & Gold Audio Narration Player ("🔊 Dengarkan Deklamasi Angngaru").
  - Stanza Reading View: Large Navy Blue (#1B2A4A) Lontara script stanza at the top ("ᨈᨅᨙ ᨀᨑᨕᨙᨀᨘ... ᨈᨘ ᨆᨅᨘᨈ ᨆᨀᨔᨑ"), bold black Makassarese Latin transcription in the middle ("Tabe' Karaengku... Tu ma'butta Mangkasara'"), and italic Indonesian translation at the bottom.
```

---

## BAGIAN 6: Katalog Prompt AI Image Generator (Ornamen Budaya & 12 Ilustrasi 3D Kosa Kata)

Gunakan daftar *prompt* di bawah ini pada generator gambar AI (Midjourney, Google Imagen / Whisk / ImageFX, atau Bing Image Creator) untuk menghasilkan aset visual yang seragam dengan latar halaman Silver dan permukaan kartu Krem.

### 6.1 Prompt Aset Ornamen Budaya Makassar (Halaman Beranda)

| Nama Aset Visual | Prompt AI Image Generator (Copy-Paste) |
| :--- | :--- |
| **1. Tokoh Sultan Hasanuddin** | `Heroic 3D-styled digital illustration of Sultan Hasanuddin of Makassar, wearing traditional royal crimson red and metallic gold Makassarese noble attire with an ornate golden Passapu headscarf and a traditional Badik dagger at his waist, proud and welcoming expression, isolated on a clean soft silver-white background, rich lighting, cultural heritage art style.` |
| **2. Rumah Adat Balla Lompoa** | `Detailed 3D architectural illustration of Balla Lompoa, the traditional wooden royal stilt palace of Gowa Makassar, featuring iconic multi-tiered gabled roofs with Timpa Laja ornaments accented in metallic gold and crimson red, warm wood textures, isolated on a clean soft silver-white background.` |
| **3. Perahu Phinisi & Penari Pakarena** | `Artistic 3D cultural illustration combining a traditional Makassarese Phinisi wooden sailing ship with golden sails and a graceful female Pakarena dancer holding golden-and-red fans, wearing traditional Baju Bodo in crimson red and gold, isolated on a clean soft silver-white background.` |
| **4. Bingkai Ukiran Lamming Makassar** | `Seamless horizontal traditional Makassarese "Lamming" royal wedding ornamental border frame, intricate metallic gold (#FFD700) and crimson red (#C8102E) floral and geometric bamboo-shoot carvings on a clean soft silver background, flat vector UI asset.` |

### 6.2 Prompt 12 Ilustrasi 3D Kartu Kosa Kata (Konsisten dengan Gaya Kartu "Kuttu")

Seluruh prompt di bawah ini dirancang agar memiliki **gaya visual 3D Pixar/Disney yang seragam** di atas latar warna krem kartu (`#FDFBF7`):

| No | Kata (Makassar / Indo) | Prompt AI Image Generator (Copy-Paste) |
| :--- | :--- | :--- |
| **1** | **Kuttu** (*Malas*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A brown-haired young boy wearing a yellow t-shirt and blue pants is slouching forward with a lazy, reluctant, tired expression. To his right is a window with blue curtains, a small potted green plant, and household cleaning tools: a red broom, a floor mop, and a yellow bucket filled with water. Soft studio 3D lighting.` |
| **2** | **Caradde'** (*Pintar/Rajin*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A cheerful young Indonesian girl wearing a neat school uniform sitting at a wooden study desk with a glowing desk lamp, happily reading an open book and raising her hand with a bright smart smile. Soft studio 3D lighting.` |
| **3** | **Ngandre** (*Makan*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A happy young boy sitting at a dining table, holding a spoon and enthusiastically eating a warm bowl of traditional Coto Makassar soup with ketupat rice cakes. Soft studio 3D lighting.` |
| **4** | **Angnginung** (*Minum*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A refreshed young boy holding a clear glass of fresh drinking water with both hands, drinking happily near a kitchen counter with a water pitcher. Soft studio 3D lighting.` |
| **5** | **Tinro** (*Tidur*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A young boy sleeping peacefully on a cozy bed with a soft white pillow and a blue blanket, with a small window on the right showing a crescent moon and twinkling stars. Soft studio 3D lighting.` |
| **6** | **A'lampa** (*Berjalan/Pergi*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A young boy and girl wearing school backpacks walking cheerfully side by side along a stone path with green bushes in the morning sun. Soft studio 3D lighting.` |
| **7** | **Rannu** (*Gembira*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). An overjoyed young girl jumping happily in the air with a big smile and both hands raised, surrounded by colorful balloons and small flowers. Soft studio 3D lighting.` |
| **8** | **Laro** (*Marah*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A grumpy young boy crossing his arms tightly over his chest with puffed cheeks and furrowed eyebrows, standing next to a broken toy car on the floor. Soft studio 3D lighting.` |
| **9** | **Balla'** (*Rumah*) | `Cute 3D Pixar-style miniature illustration on a solid warm cream background (#FDFBF7). A charming traditional Makassarese wooden stilt house (Balla') with a pitched roof, wooden front stairs, green potted plants, and warm glowing windows. Soft studio 3D lighting.` |
| **10** | **Je'ne'** (*Air*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A shiny silver water tap pouring crystal clear splashing water into a bright blue bucket with sparkling water droplets. Soft studio 3D lighting.` |
| **11** | **Lompo** (*Besar*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A grand, large traditional Makassarese Phinisi wooden ship with big sails next to a tiny paper boat on gentle blue water waves to illustrate the concept of "Big". Soft studio 3D lighting.` |
| **12** | **Ca'di** (*Kecil*) | `Cute 3D Pixar-style illustration on a solid warm cream background (#FDFBF7). A gentle young child's open hands carefully holding a tiny, fluffy yellow baby chick to illustrate the concept of "Small". Soft studio 3D lighting.` |

---

## BAGIAN 7: Arsitektur Teknis, Skema Database JSON, & Kebutuhan Audio

### 7.1 Spesifikasi Stack Teknologi
* **Frontend:** HTML5, Tailwind CSS (dengan konfigurasi warna kustom *Soft Silver Background* `#F2F4F7`, *Eja Lamming Accent* `#C8102E`, *Bulaeng Gold* `#D4AF37`, dan *Lontar Cream* `#FDFBF7`), serta JavaScript / React.js.
* **Font Engine:** Google Fonts `Noto Sans Buginese` (memastikan 100% aksara Lontara tampil tajam tanpa kotak kosong di semua perangkat), `Cinzel Decorative`, dan `Plus Jakarta Sans`.
* **Audio Engine:** Web Audio API / Howler.js + Fallback Web Speech Synthesis untuk memutar 95 variasi bunyi suku kata Lontara (`19 Huruf Dasar × 5 Vokal: A, I, U, E, O`), 12 audio kosa kata, dan audio narasi bacaan.

### 7.2 Daftar 95 File Audio Pelafalan Aksara (Matriks Perekaman Suara)

| Huruf Dasar (-A) | Tetti' Rirate (-I) | Tetti' Rirawa (-U) | Ana' Riolo (-E) | Ana' Riboko (-O) |
| :--- | :--- | :--- | :--- | :--- |
| `ka.mp3` (`ᨀ`) | `ki.mp3` (`ᨀᨗ`) | `ku.mp3` (`ᨀᨘ`) | `ke.mp3` (`ᨀᨙ`) | `ko.mp3` (`ᨀᨚ`) |
| `ga.mp3` (`ᨁ`) | `gi.mp3` (`ᨁᨗ`) | `gu.mp3` (`ᨁᨘ`) | `ge.mp3` (`ᨁᨙ`) | `go.mp3` (`ᨁᨚ`) |
| `nga.mp3` (`ᨂ`) | `ngi.mp3` (`ᨂᨗ`) | `ngu.mp3` (`ᨂᨘ`) | `nge.mp3` (`ᨂᨙ`) | `ngo.mp3` (`ᨂᨚ`) |
| `pa.mp3` (`ᨄ`) | `pi.mp3` (`ᨄᨗ`) | `pu.mp3` (`ᨄᨘ`) | `pe.mp3` (`ᨄᨙ`) | `po.mp3` (`ᨄᨚ`) |
| `ba.mp3` (`ᨅ`) | `bi.mp3` (`ᨅᨗ`) | `bu.mp3` (`ᨅᨘ`) | `be.mp3` (`ᨅᨙ`) | `bo.mp3` (`ᨅᨚ`) |
| `ma.mp3` (`ᨆ`) | `mi.mp3` (`ᨆᨗ`) | `mu.mp3` (`ᨆᨘ`) | `me.mp3` (`ᨆᨙ`) | `mo.mp3` (`ᨆᨚ`) |
| `ta.mp3` (`ᨈ`) | `ti.mp3` (`ᨈᨗ`) | `tu.mp3` (`ᨈᨘ`) | `te.mp3` (`ᨈᨙ`) | `to.mp3` (`ᨈᨚ`) |
| `da.mp3` (`ᨉ`) | `di.mp3` (`ᨉᨗ`) | `du.mp3` (`ᨉᨘ`) | `de.mp3` (`ᨉᨙ`) | `do.mp3` (`ᨉᨚ`) |
| `na.mp3` (`ᨊ`) | `ni.mp3` (`ᨊᨗ`) | `nu.mp3` (`ᨊᨘ`) | `ne.mp3` (`ᨊᨙ`) | `no.mp3` (`ᨊᨚ`) |
| `ca.mp3` (`ᨌ`) | `ci.mp3` (`ᨌᨗ`) | `cu.mp3` (`ᨌᨘ`) | `ce.mp3` (`ᨌᨙ`) | `co.mp3` (`ᨌᨚ`) |
| `ja.mp3` (`ᨍ`) | `ji.mp3` (`ᨍᨗ`) | `ju.mp3` (`ᨍᨘ`) | `je.mp3` (`ᨍᨙ`) | `jo.mp3` (`ᨍᨚ`) |
| `nya.mp3` (`ᨎ`) | `nyi.mp3` (`ᨎᨗ`) | `nyu.mp3` (`ᨎᨘ`) | `nye.mp3` (`ᨎᨙ`) | `nyo.mp3` (`ᨎᨚ`) |
| `ya.mp3` (`ᨐ`) | `yi.mp3` (`ᨐᨗ`) | `yu.mp3` (`ᨐᨘ`) | `ye.mp3` (`ᨐᨙ`) | `yo.mp3` (`ᨐᨚ`) |
| `ra.mp3` (`ᨑ`) | `ri.mp3` (`ᨑᨗ`) | `ru.mp3` (`ᨑᨘ`) | `re.mp3` (`ᨑᨙ`) | `ro.mp3` (`ᨑᨚ`) |
| `la.mp3` (`ᨒ`) | `li.mp3` (`ᨒᨗ`) | `lu.mp3` (`ᨒᨘ`) | `le.mp3` (`ᨒᨙ`) | `lo.mp3` (`ᨒᨚ`) |
| `wa.mp3` (`ᨓ`) | `wi.mp3` (`ᨓᨗ`) | `wu.mp3` (`ᨓᨘ`) | `we.mp3` (`ᨓᨙ`) | `wo.mp3` (`ᨓᨚ`) |
| `sa.mp3` (`ᨔ`) | `si.mp3` (`ᨔᨗ`) | `su.mp3` (`ᨔᨘ`) | `se.mp3` (`ᨔᨙ`) | `so.mp3` (`ᨔᨚ`) |
| `a.mp3` (`ᨕ`) | `i.mp3` (`ᨕᨗ`) | `u.mp3` (`ᨕᨘ`) | `e.mp3` (`ᨕᨙ`) | `o.mp3` (`ᨕᨚ`) |
| `ha.mp3` (`ᨖ`) | `hi.mp3` (`ᨖᨗ`) | `hu.mp3` (`ᨖᨘ`) | `he.mp3` (`ᨖᨙ`) | `ho.mp3` (`ᨖᨚ`) |

---

## BAGIAN 8: Roadmap Eksekusi Projek End-to-End & Panduan Workflow Stitch AI

### 8.1 Langkah demi Langkah Pengerjaan Projek dari Awal sampai Akhir
1. **Tahap 1 — Generate Desain UI di Stitch AI (Hari 1 - 2):**
   * Buka Stitch AI dan masukkan **Prompt Layar 1 (Beranda)** dari Bagian 2.4 untuk menetapkan *Design System* berlatar **Soft Silver (`#F2F4F7`)** dengan aksen **Merah Lamming (`#C8102E`)** dan **Emas (`#D4AF37`)**.
   * Lanjutkan di dalam projek yang sama dengan memasukkan **Prompt Layar 2A (Grid Aksara)**, **Prompt Layar 2B (Pop-Up Tanda Baca)**, **Prompt Layar 3 (Kosa Kata Dual-Card Kuttu)**, dan **Prompt Layar 4 (Bacaan Berjenjang)**.
2. **Tahap 2 — Generate Aset Ilustrasi 3D & Ornamen Budaya (Hari 3 - 5):**
   * Salin 4 prompt ornamen budaya Makassar (Bagian 6.1) dan 12 prompt ilustrasi 3D kosa kata (Bagian 6.2) ke generator gambar AI, lalu simpan dalam format `.webp` atau `.png` resolusi tinggi.
3. **Tahap 3 — Perekaman & Pengumpulan Audio Bahasa Makassar (Hari 6 - 8):**
   * Rekam 95 suara pelafalan huruf Lontara sesuai tabel matriks di Bagian 7.2, ditambah rekaman suara 12 kosa kata dan pembacaan *Angngaru* / Puisi.
4. **Tahap 4 — Pengembangan Kode Website / Frontend Development (Hari 9 - 14):**
   * Implementasikan desain dari Stitch AI/Figma ke dalam kode HTML/CSS/JS atau React.
   * Hubungkan interaksi klik pada ke-19 kartu huruf agar memunculkan Modal Pop-Up yang otomatis memutar audio dan dapat mengubah tanda baca (*Ki, Ku, Ke, Ko*) secara *real-time*.
   * Masukkan data 12 kartu berpasangan Kosa Kata dan seluruh teks Bacaan Level 1–4.
5. **Tahap 5 — Pengujian Kualitas (QA) & Peluncuran (Hari 15 - 16):**
   * Uji keterbacaan font Lontara, kenyamanan kontras latar Silver di layar HP maupun proyektor kelas, serta kelancaran audio, lalu publikasikan website ke internet (Vercel / Netlify).