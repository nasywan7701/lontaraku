# Issue 6: Implementasi Halaman Aksara: Grid 19 Huruf Lontara Dasar (Ina' Surat)

## 📌 Deskripsi & Tujuan
Membangun halaman modul **Aksara Lontara** (`/aksara`) yang menampilkan **19 Huruf Dasar (Ina' Surat)** dalam **Grid 6 Baris Terstruktur Fonetik**. Setiap kartu huruf didesain dengan latar Krem Lontar di atas background Silver Lembut, dilengkapi simbol Lontara Biru Navy berukuran besar, label Latin, dan tombol pemutar suara instan.

---

## 🎯 Referensi PRD
* **Bagian 3.1:** Spesifikasi Urutan & Grid 19 Aksara Dasar (6 Baris Terstruktur Fonetik).
* **Bagian 3.3:** Prompt Stitch AI Layar 2A (Tampilan Grid 19 Aksara Lontara di Atas Latar Silver).
* **Bagian 7.2:** Matriks File Audio Pelafalan Aksara.

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Struktur Layout Halaman Aksara (`src/pages/AksaraPage.tsx`)
Halaman terdiri dari:
1. **Header Halaman:**
   * Judul: *"19 Aksara Dasar Lontara Makassar (Ina' Surat)"*
   * Deskripsi/Petunjuk: *"Klik salah satu huruf untuk memperbesar tampilan, melihat tanda baca vokal, dan mendengarkan cara pelafalannya."*
   * Garis dekoratif Lamming merah-emas.
2. **Container Grid Aksara:**
   * Latar halaman: Soft Brushed Silver (`#F2F4F7`).
   * Tata letak responsif yang mempertahankan hierarki 6 baris fonetik pada desktop:
     * Desktop: Grid baris terkelompok (Row 1-5 masing-masing 3 kartu, Row 6 berisi 4 kartu).
     * Tablet / Mobile: Grid fleksibel yang tetap terorganisir per kelompok fonetik.

### 2. Matriks 6 Baris Fonetik Aksara
Susunan wajib sesuai kaidah linguistik Lontara:
* **Baris 1 (Velar - 3 Huruf):** `ᨀ` (KA), `ᨁ` (GA), `ᨂ` (NGA)
* **Baris 2 (Labial - 3 Huruf):** `ᨄ` (PA), `ᨅ` (BA), `ᨆ` (MA)
* **Baris 3 (Dental - 3 Huruf):** `ᨈ` (TA), `ᨉ` (DA), `ᨊ` (NA)
* **Baris 4 (Palatal - 3 Huruf):** `ᨌ` (CA), `ᨍ` (JA), `ᨎ` (NYA)
* **Baris 5 (Approximant - 3 Huruf):** `ᨐ` (YA), `ᨑ` (RA), `ᨒ` (LA)
* **Baris 6 (Fricative & Glottal - 4 Huruf):** `ᨓ` (WA), `ᨔ` (SA), `ᨕ` (A), `ᨖ` (HA)

### 3. Komponen Kartu Aksara (`src/components/aksara/AksaraCard.tsx`)
Spesifikasi elemen kartu:
* **Ukuran & Permukaan:** Latar Krem Lontar (`bg-lontar-cream`), sudut membulat 16px (`rounded-2xl`), border tipis Emas Kerajaan (`border border-bulaeng/50 hover:border-eja hover:shadow-card-hover transition-all cursor-pointer`).
* **Ikon Speaker:** Berada di sudut kanan atas kartu (warna Merah Lamming & Emas), mendukung pemutaran suara instan saat ikon speaker diklik tanpa membuka modal (*stop propagation*).
* **Simbol Lontara:** Huruf Lontara besar (`text-6xl md:text-7xl font-lontara text-ink-navy text-center my-3 group-hover:scale-110 transition-transform`).
* **Label Latin:** Teks kapital tebal (`text-xl font-bold text-leleng text-center tracking-wider`).
* **Badge Fonetik:** Label kecil di bawah kartu (contoh: *"Velar"*).

Contoh Implementasi Kode:
```tsx
import React from 'react';
import { Volume2 } from 'lucide-react';
import { LontaraCharacter } from '../../types';

interface AksaraCardProps {
  item: LontaraCharacter;
  onSelect: (item: LontaraCharacter) => void;
  onPlayAudio: (e: React.MouseEvent, soundFile: string, text: string) => void;
}

export const AksaraCard: React.FC<AksaraCardProps> = ({ item, onSelect, onPlayAudio }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative bg-lontar-cream border border-bulaeng/40 rounded-2xl p-5 shadow-sm hover:shadow-card-hover hover:border-eja hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center justify-between min-h-[190px]"
    >
      {/* Tombol Speaker Pojok Kanan Atas */}
      <button
        onClick={(e) => onPlayAudio(e, item.vowels.a.soundFile, item.baseLatin)}
        className="absolute top-3 right-3 p-2 rounded-full bg-salaka-light text-eja hover:bg-eja hover:text-white transition-colors shadow-sm"
        title={`Dengarkan pelafalan ${item.baseLatin}`}
        aria-label={`Dengarkan pelafalan ${item.baseLatin}`}
      >
        <Volume2 size={18} />
      </button>

      {/* Label Kelompok Fonetik */}
      <span className="text-[11px] font-semibold uppercase tracking-wider text-bulaeng-dark">
        {item.group}
      </span>

      {/* Simbol Aksara Lontara (Biru Navy) */}
      <div className="font-lontara text-6xl md:text-7xl text-ink-navy group-hover:scale-110 transition-transform py-1">
        {item.baseSymbol}
      </div>

      {/* Label Latin */}
      <div className="text-center">
        <span className="text-xl font-extrabold text-leleng tracking-wider">
          {item.baseLatin}
        </span>
      </div>
    </div>
  );
};
```

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) — STATUS: SELESAI
- [x] Menampilkan tepat 19 kartu aksara dasar Lontara (Ina' Surat) lengkap tanpa ada karakter yang terlewat.
- [x] Susunan kartu pada desktop dan tablet terbagi presisi dalam 6 baris kaidah fonetik (Velar, Labial, Dental, Palatal, Approximant, Fricative & Glottal) sesuai tabel PRD Bagian 3.1.
- [x] Karakter aksara Lontara tampil raksasa dan tajam dalam warna Biru Navy `#1B2A4A` dengan font `Noto Sans Buginese`.
- [x] Menekan tombol speaker di pojok kanan atas kartu memicu suara pelafalan fonetik huruf dasar (contoh: "Ka", "Ga", "Nga") dengan animasi gelombang suara tanpa bubble event.
- [x] Mengklik bodi kartu memicu pemanggilan callback `onSelect` untuk menyimpan huruf terpilih dan menyiapkan pembukaan Modal Zoom Vokal (Issue 7).
- [x] File `index_preview.html` diperbarui dengan seluruh 19 kartu pada 6 baris fonetik yang dapat langsung diklik dan didengarkan suaranya di browser.

