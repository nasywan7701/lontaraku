# Issue 10: Implementasi Fitur Kontrol Bantu Baca (Toggle Transliterasi, Terjemahan & Audio Narator)

## 📌 Deskripsi & Tujuan
Membangun bilah kontrol interaktif (**Reading Control Bar**) di atas kanvas bacaan yang menyediakan fitur:
1. **Toggle Transliterasi Latin** (`[x] Tampilkan Cara Baca Latin`) untuk mode latihan mandiri.
2. **Toggle Terjemahan Indonesia** (`[x] Tampilkan Terjemahan Indonesia`) untuk latihan pemahaman bahasa.
3. **Pemutar Audio Narator Deklamasi / Lagu** (`[ 🔊 Dengarkan Bacaan / Lagu ]`) dengan kontrol Play/Pause dan penanda bait aktif.

---

## 🎯 Referensi PRD
* **Bagian 5.1:** Spesifikasi 3 Tombol Kontrol Bantu Baca.
* **Bagian 5.6:** Prompt Stitch AI Layar 4 (Top Control Bar & Toggle Switches).
* **Bagian 7.1:** Audio Engine & Narasi Audio.

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Desain Komponen Kontrol Bacaan (`src/components/bacaan/ReadingControls.tsx`)
Spesifikasi elemen bilah kontrol:
* Diletakkan di bagian atas Kanvas Membaca (di atas bait bacaan).
* Menggunakan kontainer latar perak lembut dengan border emas (`bg-salaka-light/90 border border-bulaeng/40 rounded-2xl p-4 mb-6 shadow-sm flex flex-wrap items-center justify-between gap-4`).
* **Toggle 1: Cara Baca Latin Makassar**
  * Switch interaktif / checkbox bergaya modern.
  * Default: `true` (aktif).
  * Saat dimatikan (`false`), baris teks Latin Makassar pada kanvas bacaan disembunyikan sehingga pengguna dapat berlatih membaca Aksara Lontara murni tanpa bantuan huruf Latin.
* **Toggle 2: Terjemahan Bahasa Indonesia**
  * Switch interaktif bergaya modern.
  * Default: `true` (aktif).
  * Saat dimatikan (`false`), baris arti Bahasa Indonesia disembunyikan untuk menguji pemahaman makna kata.
* **Audio Player Bar (Narasi / Lagu):**
  * Tombol pil Merah Lamming (`bg-eja text-white hover:bg-eja-dark border border-bulaeng px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-md`).
  * Ikon dinamis: `Play` / `Pause` / `Volume2`.
  * Menampilkan teks: *"Dengarkan Narasi: [Judul]"* atau *"Dengarkan Lagu: [Judul]"*.
  * Durasi / Progress bar sederhana jika audio tersedia.

Contoh Implementasi Kode:
```tsx
import React from 'react';
import { Volume2, Pause, Eye, EyeOff } from 'lucide-react';

interface ReadingControlsProps {
  showLatin: boolean;
  setShowLatin: (val: boolean) => void;
  showIndonesian: boolean;
  setShowIndonesian: (val: boolean) => void;
  isPlaying: boolean;
  onToggleAudio: () => void;
  hasAudio: boolean;
  title: string;
}

export const ReadingControls: React.FC<ReadingControlsProps> = ({
  showLatin,
  setShowLatin,
  showIndonesian,
  setShowIndonesian,
  isPlaying,
  onToggleAudio,
  hasAudio,
  title,
}) => {
  return (
    <div className="bg-salaka-base/60 border border-bulaeng/40 rounded-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
      
      {/* Grup Toggle Bantu Baca */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Toggle Transliterasi Latin */}
        <button
          onClick={() => setShowLatin(!showLatin)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
            showLatin
              ? 'bg-salaka-light text-leleng border-bulaeng shadow-sm'
              : 'bg-transparent text-leleng-slate border-salaka-border opacity-70 hover:opacity-100'
          }`}
        >
          {showLatin ? <Eye size={16} className="text-eja" /> : <EyeOff size={16} />}
          <span>{showLatin ? 'Sembunyikan Latin' : 'Tampilkan Latin'}</span>
        </button>

        {/* Toggle Arti Indonesia */}
        <button
          onClick={() => setShowIndonesian(!showIndonesian)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
            showIndonesian
              ? 'bg-salaka-light text-leleng border-bulaeng shadow-sm'
              : 'bg-transparent text-leleng-slate border-salaka-border opacity-70 hover:opacity-100'
          }`}
        >
          {showIndonesian ? <Eye size={16} className="text-eja" /> : <EyeOff size={16} />}
          <span>{showIndonesian ? 'Sembunyikan Terjemahan' : 'Tampilkan Terjemahan'}</span>
        </button>
      </div>

      {/* Tombol Audio Narasi */}
      <div>
        <button
          onClick={onToggleAudio}
          disabled={!hasAudio}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md ${
            !hasAudio
              ? 'bg-salaka-metallic text-leleng-slate cursor-not-allowed opacity-60'
              : isPlaying
              ? 'bg-bulaeng text-leleng hover:bg-bulaeng-light animate-pulse border border-leleng/20'
              : 'bg-eja text-white hover:bg-eja-dark border border-bulaeng-light'
          }`}
          title={hasAudio ? `Putar audio untuk ${title}` : 'Audio narasi belum tersedia'}
        >
          {isPlaying ? <Pause size={18} /> : <Volume2 size={18} />}
          <span>{isPlaying ? 'Jeda Audio' : `Putar Audio / Lagu`}</span>
        </button>
      </div>

    </div>
  );
};
```

### 2. Integrasi State & Efek Interaktif
* Simpan preferensi `showLatin` dan `showIndonesian` di `localStorage` agar pilihan pengguna tetap tersimpan saat berpindah bacaan.
* Ketika audio diputar, sediakan efek visual *highlighting* atau border berwarna Emas-Merah pada bait bacaan yang relevan.

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) - STATUS: SELESAI
- [x] Tombol toggle Latin secara instan menyembunyikan/menampilkan teks transliterasi Latin di seluruh bait bacaan aktif.
- [x] Tombol toggle Terjemahan secara instan menyembunyikan/menampilkan arti Bahasa Indonesia di seluruh bait bacaan aktif.
- [x] Pengguna dapat belajar dalam mode "Murni Lontara" hanya dengan satu klik (mematikan kedua toggle).
- [x] Tombol audio narator dapat memutar, menjeda, dan mengulang pemutaran suara narasi bacaan atau rekaman lagu daerah.

