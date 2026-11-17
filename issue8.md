# Issue 8: Implementasi Halaman Kosa Kata: Dual-Card System & Katalog 12 Kata Harian

## 📌 Deskripsi & Tujuan
Membangun halaman modul **Kosa Kata Bahasa Makassar** (`/kosakata`) dengan mengimplementasikan sistem kartu berpasangan (**Dual-Card System**). Setiap kosa kata disajikan dalam wadah kembar: **Kartu Kiri** (Aksara Lontara Biru Navy 84px + Terjemahan Indonesia miring) dan **Kartu Kanan** (Kata Makassar tebal + Tombol Audio + Ilustrasi 3D), dilengkapi fitur **Filter Kategori** untuk 12 kosa kata harian.

---

## 🎯 Referensi PRD
* **Bagian 1.3:** Validasi linguistik kata *Kuttu* (`ᨀᨘᨈᨘ`) = *Malas* dan *Balla'* (`ᨅᨒ`) = *Rumah*.
* **Bagian 4.1:** Spesifikasi Komponen "Dual-Card" (Dimensi, Warna Krem Lontar, Border Emas, Tipografi).
* **Bagian 4.2:** Katalog Lengkap 12 Pasang Kartu Kosa Kata Sehari-hari.
* **Bagian 4.3:** Prompt Stitch AI Layar 3: Halaman Kosa Kata Dual-Card.
* **Bagian 6.2:** Prompt AI Image Generator 12 Ilustrasi 3D Pixar Style.

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Struktur Layout Halaman Kosa Kata (`src/pages/KosakataPage.tsx`)
Halaman mencakup:
1. **Header Halaman & Filter Kategori:**
   * Judul: *"Kosa Kata Sehari-hari (Lontara & Visual 3D)"*
   * Subjudul: *"Hubungkan grafis aksara Lontara dengan kosakata Makassar dan ilustrasi visual kontekstual."*
   * **Pill Filter Kategori:**
     * `Semua` (Default aktif)
     * `Sifat & Sikap` (Kuttu, Caradde')
     * `Kegiatan Harian` (Ngandre, Angnginung, Tinro, A'lampa)
     * `Emosi & Perasaan` (Rannu, Laro)
     * `Benda & Alam / Tempat` (Balla', Je'ne')
     * `Ukuran & Sifat` (Lompo, Ca'di)
   * Status Pill Aktif: Latar Merah Lamming (`bg-eja text-white shadow-sm`).
   * Status Pill Inaktif: Latar Krem/Silver (`bg-salaka-light text-leleng border border-bulaeng/40 hover:border-eja`).

### 2. Implementasi Komponen Pasangan Kartu (`src/components/kosakata/DualCardPair.tsx`)
Setiap pasangan kosa kata dibungkus dalam **Wadah Pasangan (Pair Container)**:
* **Wadah Luar:** Border emas tipis, rounded 28px, background perak lembut transparan, padding rapi.
* **Kartu Kiri (Aksara Lontara & Terjemahan Indo):**
  * Dimensi: `280x340px` (atau responsif menyesuaikan container).
  * Latar: Krem Lontar (`#FDFBF7`), sudut membulat 24px, border Emas Kerajaan (`#D4AF37`).
  * Tengah: Aksara Lontara tebal Biru Navy (`#1B2A4A`, ukuran font `text-6xl md:text-7xl font-lontara`).
  * Bawah: Arti Bahasa Indonesia dalam font miring (*italic*, ukuran 24px-26px, warna `#1F2937`).
* **Kartu Kanan (Kata Makassar & Ilustrasi 3D):**
  * Dimensi: `280x340px`.
  * Latar: Krem Lontar (`#FDFBF7`), sudut membulat 24px, border Emas Kerajaan.
  * Atas: Kata Bahasa Makassar dalam huruf tebal hitam (`text-2xl font-black text-leleng`) didampingi ikon speaker Merah Lamming (`#C8102E`) yang dapat diklik untuk memutar suara.
  * Tengah/Bawah: Gambar ilustrasi 3D berukuran `240x220px` (dengan fallback placeholder yang estetik jika gambar belum tersedia).
* **Footer Wadah (Kalimat Penerapan Sehari-hari):**
  * Di bagian bawah wadah, tampilkan kalimat contoh:
    * Contoh: *"Teako kuttu dudui a'boya ilmu."* (Jangan terlalu malas mencari ilmu.)

Contoh Implementasi Kode:
```tsx
import React from 'react';
import { Volume2 } from 'lucide-react';
import { VocabularyItem } from '../../types';

interface DualCardPairProps {
  item: VocabularyItem;
  onPlayAudio: (soundFile: string, text: string) => void;
  isPlaying?: boolean;
}

export const DualCardPair: React.FC<DualCardPairProps> = ({ item, onPlayAudio, isPlaying }) => {
  return (
    <div className="bg-salaka-base/40 border border-bulaeng/40 rounded-3xl p-6 shadow-sm hover:shadow-card-hover transition-all">
      {/* Container Dua Kartu Sejajar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
        
        {/* KARTU KIRI: Aksara Lontara & Terjemahan */}
        <div className="bg-lontar-cream border border-bulaeng/60 rounded-2xl p-6 h-[340px] flex flex-col justify-between items-center text-center shadow-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-bulaeng-dark">
            Aksara Lontara
          </span>
          <div className="font-lontara text-6xl md:text-7xl text-ink-navy py-4 leading-tight">
            {item.lontaraScript}
          </div>
          <div className="w-full pt-3 border-t border-salaka-border">
            <span className="text-xl md:text-2xl font-serif italic text-leleng font-semibold">
              "{item.indonesianMeaning}"
            </span>
          </div>
        </div>

        {/* KARTU KANAN: Kata Makassar & Ilustrasi 3D */}
        <div className="bg-lontar-cream border border-bulaeng/60 rounded-2xl p-6 h-[340px] flex flex-col justify-between items-center shadow-sm">
          {/* Header Kartu Kanan: Kata & Speaker */}
          <div className="w-full flex items-center justify-between pb-2 border-b border-salaka-border">
            <span className="text-2xl font-black text-leleng">
              {item.makassarWord}
            </span>
            <button
              onClick={() => onPlayAudio(item.soundFile, item.makassarWord)}
              className={`p-2 rounded-full transition-colors ${
                isPlaying 
                  ? 'bg-bulaeng text-white animate-pulse' 
                  : 'bg-eja/10 text-eja hover:bg-eja hover:text-white'
              }`}
              title={`Putar suara ${item.makassarWord}`}
            >
              <Volume2 size={20} />
            </button>
          </div>

          {/* Area Ilustrasi 3D */}
          <div className="w-full h-[200px] rounded-xl overflow-hidden bg-salaka-light/60 flex items-center justify-center my-2 border border-salaka-border/50">
            {item.imageSrc ? (
              <img
                src={item.imageSrc}
                alt={item.makassarWord}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="p-4 text-center">
                <span className="text-4xl mb-2 block">🎨</span>
                <p className="text-xs text-leleng-slate font-medium line-clamp-3">
                  {item.imagePrompt.split('.')[0]}
                </p>
              </div>
            )}
          </div>

          <span className="text-[11px] font-semibold text-leleng-slate">
            Kategori: {item.category}
          </span>
        </div>

      </div>

      {/* Footer Wadah: Kalimat Penerapan */}
      <div className="mt-4 pt-3 border-t border-bulaeng/30 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
        <span className="font-semibold text-eja">
          Contoh Kalimat:
        </span>
        <span className="text-leleng italic font-medium">
          "{item.exampleSentence.makassar}"
        </span>
        <span className="text-leleng-slate text-xs">
          ({item.exampleSentence.indonesian})
        </span>
      </div>
    </div>
  );
};
```

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) - STATUS: SELESAI
- [x] Halaman `/kosakata` menampilkan ke-12 pasangan kartu kosa kata dari katalog PRD Bagian 4.2.
- [x] Komponen Dual-Card menampilkan Kartu Kiri (Aksara Lontara Biru Navy + Terjemahan Indonesia Miring) dan Kartu Kanan (Kata Makassar Tebal + Ilustrasi 3D + Tombol Audio).
- [x] Tombol audio pada Kartu Kanan memutar pelafalan kata bahasa Makassar (contoh: "Kuttu", "Caradde'").
- [x] Filter kategori berfungsi memfilter daftar kartu kosa kata (Sifat & Sikap, Kegiatan Harian, Emosi, Benda & Alam, Ukuran).
- [x] Kalimat penerapan sehari-hari tampil jelas di bawah setiap pasangan kartu.

