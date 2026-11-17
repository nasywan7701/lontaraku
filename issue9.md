# Issue 9: Implementasi Halaman Bacaan Berjenjang (Level 1 Pemula s/d Level 4 Sastra Agung)

## 📌 Deskripsi & Tujuan
Membangun halaman modul **Bacaan Berjenjang** (`/bacaan`) dengan tata letak kerja membaca dua kolom (**Two-Column Reading Workspace**): **Sidebar Kiri** untuk daftar materi per level dan **Kanvas Membaca Kanan** berlatar Krem Kertas Lontar dengan ornamen Lamming. Modul ini mengintegrasikan seluruh bank materi dari Level 1 (Sapaan Harian), Level 2 (Cerita Pendek), Level 3 (7 Puisi & Kelong), hingga Level 4 (Teks Sakral Angngaru & 4 Lagu Daerah).

---

## 🎯 Referensi PRD
* **Bagian 5.1:** Struktur Navigasi 4 Tab Level & Kontrol Bantu Baca.
* **Bagian 5.2 - 5.5:** Bank Materi Lengkap Level 1 s/d Level 4.
* **Bagian 5.6:** Prompt Stitch AI Layar 4: Halaman Bacaan Berjenjang (Two-Column Reading Workspace).

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Struktur Layout Workspace Membaca (`src/pages/BacaanPage.tsx`)
Spesifikasi arsitektur halaman:
1. **Header Halaman:**
   * Judul: *"Perpustakaan Bacaan Aksara Lontara Berjenjang"*
   * Deskripsi: *"Tingkatkan kemahiran membaca dari kalimat sapaan pemula hingga karya sastra klasik Makassar."*
2. **Navigasi 4 Tab Level (Horizontal):**
   * **Tab 1:** `Level 1: Pemula` *(Kalimat Pendek & Sapaan)*
   * **Tab 2:** `Level 2: Menengah` *(Cerita Harian)*
   * **Tab 3:** `Level 3: Mahir` *(7 Puisi & Kelong)*
   * **Tab 4:** `Level 4: Sastra Agung` *(Sumpah Angngaru & Lagu Daerah)*
   * *Status Tab Aktif:* Background Merah Lamming (`#C8102E`), border Emas Kerajaan (`#D4AF37`), teks putih tebal.
   * *Status Tab Inaktif:* Background Silver-White (`#F2F4F7`), border perak/emas, teks gelap slate.
3. **Workspace 2-Kolom (Desktop):**
   * **Sidebar Kiri (Lebar 360px):** Daftar judul materi yang tersedia pada level yang sedang aktif. Item yang dipilih memiliki penanda garis aksen vertikal Merah Lamming di sisi kiri.
   * **Kanvas Membaca Kanan (Main Reading Canvas):** Kartu bacaan utama berlatar Krem Lontar (`#FDFBF7`) dengan rounded 24px dan trim hiasan ukiran emas-merah di bagian atas.

### 2. Implementasi Sidebar Daftar Materi (`src/components/bacaan/ReadingSidebar.tsx`)
* Menampilkan daftar judul bacaan pada level yang dipilih:
  * **Level 1:** 8 Sapaan Pendek (L1-01 s/d L1-08).
  * **Level 2:** Cerita 2.1 (*Bari'basa' ri Balla'*) & Cerita 2.2 (*A'lampa ri Pasaraka*).
  * **Level 3:** 7 Puisi (*Boya Ilmu*, *Resopa Natemmangingngi*, *Siri' na Pacce*, *Kamaseang Amma'*, *Tuna ri Kale*, *Sombalangi Phinisiku*, *Sipakatau Sipakalabbi'*).
  * **Level 4:** Naskah *Angngaru* (Ikrar Sumpah Setia) & 4 Lagu (*Pakarena*, *Angin Mammiri*, *Anak Kukang*, *Ma'rencong-rencong*).
* Setiap item menampilkan judul Makassar, arti Indonesia singkat, dan badge kategori.

### 3. Implementasi Kanvas Bacaan (`src/components/bacaan/ReadingCanvas.tsx`)
Struktur tampilan bait/paragraf bacaan:
* **Header Bacaan:** Judul utama dalam Aksara Lontara (`text-3xl md:text-4xl font-lontara text-eja`), judul Latin Makassar, dan terjemahan Indonesia.
* **Tampilan Per Bait / Stanza:**
  * **Baris 1 (Aksara Lontara):** Font `Noto Sans Buginese` berukuran besar (`text-2xl md:text-3xl`), warna Biru Navy (`#1B2A4A`), *line-height* longgar (`leading-relaxed`) untuk keterbacaan optimal.
  * **Baris 2 (Transliterasi Latin Makassar):** Font `Plus Jakarta Sans` tebal (`text-base md:text-lg font-bold text-leleng`).
  * **Baris 3 (Terjemahan Bahasa Indonesia):** Teks miring abu-abu gelap (`text-sm md:text-base italic text-leleng-body`).
* Pembatas antar bait dengan ornamen garis emas tipis.

Contoh Struktur Bait pada Komponen:
```tsx
import React from 'react';
import { ReadingItem } from '../../types';

interface ReadingCanvasProps {
  item: ReadingItem;
  showLatin: boolean;
  showIndonesian: boolean;
}

export const ReadingCanvas: React.FC<ReadingCanvasProps> = ({ item, showLatin, showIndonesian }) => {
  return (
    <div className="bg-lontar-cream border-2 border-bulaeng/60 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
      {/* Pita Ornamen Lamming Atas */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-eja via-bulaeng to-eja" />

      {/* Header Judul Bacaan */}
      <div className="text-center pb-6 mb-8 border-b border-bulaeng/40">
        {item.titleLontara && (
          <h2 className="font-lontara text-4xl sm:text-5xl text-eja mb-2">
            {item.titleLontara}
          </h2>
        )}
        <h3 className="text-2xl sm:text-3xl font-black text-leleng">
          {item.titleMakassar}
        </h3>
        <p className="text-sm font-semibold text-bulaeng-dark mt-1">
          {item.titleIndonesian}
        </p>
      </div>

      {/* Daftar Bait / Paragraf Bacaan */}
      <div className="space-y-8">
        {item.stanzas.map((stanza, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-salaka-light/50 border border-salaka-border hover:border-bulaeng/60 transition-colors"
          >
            {/* 1. Aksara Lontara (Biru Navy) */}
            <p className="font-lontara text-2xl sm:text-3xl text-ink-navy leading-loose tracking-wide mb-3">
              {stanza.lontara}
            </p>

            {/* 2. Cara Baca Latin Makassar */}
            {showLatin && (
              <p className="text-base sm:text-lg font-bold text-leleng mb-1.5 border-t border-salaka-border/60 pt-2">
                {stanza.makassar}
              </p>
            )}

            {/* 3. Terjemahan Indonesia */}
            {showIndonesian && (
              <p className="text-sm sm:text-base italic text-leleng-body">
                {stanza.indonesian}
              </p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
```

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) - STATUS: SELESAI
- [x] Tersedia 4 tab level navigasi (Level 1, 2, 3, dan 4) dengan tab aktif berwarna Merah Lamming dan border Emas.
- [x] Sidebar kiri menampilkan daftar bacaan yang sinkron sesuai level aktif yang dipilih.
- [x] Kanvas membaca menampilkan seluruh bait/naskah bacaan dengan format terstruktur: Aksara Lontara Biru Navy di baris atas, Transliterasi Latin di baris tengah, dan Terjemahan Indonesia di baris bawah.
- [x] Naskah sakral Sumpah Setia *Angngaru* (3 Bait) dan 4 Lagu Daerah (*Pakarena*, *Angin Mammiri*, *Anak Kukang*, *Ma'rencong-rencong*) dapat dibaca lengkap tanpa pemotongan teks.

