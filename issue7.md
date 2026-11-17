# Issue 7: Implementasi Modal Pop-Up Zoom Aksara & Selektor Vokal Interaktif (Ana' Surat)

## 📌 Deskripsi & Tujuan
Membangun komponen **Modal Pop-Up Interaktif** berukuran 620px yang muncul ketika pengguna mengklik salah satu kartu dari 19 aksara dasar. Modal ini menampilkan fitur **Zoom Huruf Lontara (120px)**, **Auto-play Audio Pelafalan**, serta **5 Selektor Tanda Baca Vokal (*Ana' Surat*)** untuk mensimulasikan perubahan vokal secara langsung (*Ki, Ku, Ke, Ko* dan huruf dasar *Ka*).

---

## 🎯 Referensi PRD
* **Bagian 3.2:** Spesifikasi Modal Pop-Up Interaktif, Tabel Vokal & Posisi Tanda Baca (*Tetti' Rirate*, *Tetti' Rirawa*, *Ana' Riolo*, *Ana' Riboko*).
* **Bagian 3.3:** Prompt Stitch AI Layar 2B (Tampilan Pop-Up Zoom Huruf & Tanda Baca).
* **Bagian 7.2:** Matriks 95 File Audio Pelafalan Aksara.

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Desain & Arsitektur Komponen Modal (`src/components/aksara/AksaraModal.tsx`)
Spesifikasi elemen modal (lebar 620px, terpusat di layar):
1. **Backdrop:** Latar semi-transparan dengan efek blur perak (`fixed inset-0 z-50 bg-leleng/40 backdrop-blur-sm flex items-center justify-center p-4`).
2. **Container Modal:**
   * Lebar: `max-w-[620px] w-full`
   * Permukaan: Krem Hangat (`bg-lontar-cream`), sudut membulat 24px (`rounded-3xl`), bingkai Emas Kerajaan (`border-2 border-bulaeng shadow-2xl overflow-hidden`).
3. **Header Lamming:**
   * Latar Merah Lamming (`bg-gradient-to-r from-eja to-eja-dark px-6 py-4 flex items-center justify-between text-white border-b border-bulaeng`).
   * Judul: `"Aksara Dasar: [HURUF] (Ina' Surat)"` dalam huruf tebal emas-putih.
   * Tombol Tutup (X): Berwarna emas (`hover:text-bulaeng-light transition-colors`).
4. **Central Zoom Showcase Box:**
   * Kotak etalase perak-ivory (`bg-salaka-light border border-salaka-border rounded-2xl p-6 text-center my-4 shadow-inner`).
   * Karakter Aksara Lontara berukuran raksasa (`text-8xl md:text-9xl font-lontara text-ink-navy leading-none py-2`).
   * Tanda baca vokal aktif diberi penekanan visual warna Merah Lamming `#C8102E` (atau aksen penanda posisi).
   * Label Latin Pelafalan: Teks tebal berukuran besar (contoh: `"KI"`).
   * Keterangan Linguistik: Nama tanda baca dan posisi (contoh: *"Tetti' Rirate — Titik di atas aksara"*).
5. **Audio Player Bar (Tombol Suara Utama):**
   * Tombol pil besar berlatar Merah Lamming (`#C8102E`), border emas, dan teks putih/emas:
   * Menampilkan ikon speaker dan animasi gelombang suara (*soundwave*):
     `🔊 Dengarkan Pelafalan: [KI]`
   * **Auto-Play:** Otomatis memutar audio setiap kali modal pertama dibuka dan setiap kali pengguna memilih tombol vokal yang berbeda.
6. **Bilah Selektor Tanda Baca Vokal (Ana' Surat):**
   5 tombol interaktif berjajar horizontal:
   * **Vokal -I (Ki):** `ᨀᨗ` — *Tetti' Rirate* (Titik di Atas)
   * **Vokal -U (Ku):** `ᨀᨘ` — *Tetti' Rirawa* (Titik di Bawah)
   * **Vokal -E (Ke):** `ᨀᨙ` — *Ana' Riolo* (Tanda di Depan / Kiri)
   * **Vokal -O (Ko):** `ᨀᨚ` — *Ana' Riboko* (Tanda di Belakang / Kanan)
   * **Dasar (-A):** `ᨀ` — *Ina' Surat* (Huruf Dasar / Reset)
   * **Status Aktif:** Latar Merah Lamming (`bg-eja text-white border-bulaeng-light shadow-md`).
   * **Status Inaktif:** Latar Perak-Putih (`bg-salaka-light text-leleng border-salaka-border hover:border-bulaeng`).

### 2. State Management Modal
State lokal dalam komponen:
```typescript
const [selectedVowel, setSelectedVowel] = useState<VowelType>('a');
```
* Saat `item` berganti atau modal dibuka, reset `selectedVowel` ke `'a'`, dan panggil `playAudio(item.vowels.a.soundFile, item.vowels.a.latin)`.
* Saat tombol vokal ditekan, set `selectedVowel` ke vokal terkait, dan otomatis putar audio vokal tersebut.

Contoh Implementasi Kode:
```tsx
import React, { useState, useEffect } from 'react';
import { X, Volume2, Sparkles } from 'lucide-react';
import { LontaraCharacter, VowelType } from '../../types';
import { useAudio } from '../../hooks/useAudio';

interface AksaraModalProps {
  item: LontaraCharacter | null;
  onClose: () => void;
}

export const AksaraModal: React.FC<AksaraModalProps> = ({ item, onClose }) => {
  const [selectedVowel, setSelectedVowel] = useState<VowelType>('a');
  const { play, isPlaying } = useAudio();

  useEffect(() => {
    if (item) {
      setSelectedVowel('a');
      play(item.vowels.a.soundFile, item.vowels.a.latin);
    }
  }, [item]);

  if (!item) return null;

  const currentVariant = item.vowels[selectedVowel];

  const handleSelectVowel = (vowel: VowelType) => {
    setSelectedVowel(vowel);
    play(item.vowels[vowel].soundFile, item.vowels[vowel].latin);
  };

  return (
    <div className="fixed inset-0 z-50 bg-leleng/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-lontar-cream border-2 border-bulaeng rounded-3xl max-w-[620px] w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Modal Merah Lamming */}
        <div className="bg-gradient-to-r from-eja to-eja-dark px-6 py-4 flex items-center justify-between border-b border-bulaeng text-white">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-bulaeng-light" />
            <h3 className="font-display font-bold text-lg text-white">
              Aksara Dasar: {item.baseLatin} (Ina' Surat)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-bulaeng-light hover:bg-white/10 transition-colors"
            aria-label="Tutup Modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body Modal */}
        <div className="p-6">
          {/* Central Showcase Box */}
          <div className="bg-salaka-light border border-salaka-border rounded-2xl p-6 text-center shadow-inner">
            <div className="font-lontara text-8xl md:text-9xl text-ink-navy leading-tight select-none">
              {currentVariant.symbol}
            </div>
            <div className="text-3xl font-black text-leleng mt-2 tracking-wider">
              "{currentVariant.latin.toUpperCase()}"
            </div>
            <p className="text-sm font-medium text-leleng-slate mt-1">
              <span className="font-bold text-eja">{currentVariant.name}</span> — {currentVariant.position}
            </p>
          </div>

          {/* Tombol Play Suara */}
          <button
            onClick={() => play(currentVariant.soundFile, currentVariant.latin)}
            className={`w-full mt-4 py-3.5 px-6 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-md ${
              isPlaying
                ? 'bg-bulaeng text-leleng scale-[0.99]'
                : 'bg-eja hover:bg-eja-dark text-white border border-bulaeng-light hover:shadow-lg'
            }`}
          >
            <Volume2 size={22} className={isPlaying ? 'animate-bounce' : ''} />
            <span>Putar Suara Pelafalan: "{currentVariant.latin}"</span>
          </button>

          {/* Selektor Vokal (Ana' Surat) */}
          <div className="mt-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-leleng-slate mb-2.5 text-center">
              Pilih Tanda Baca Vokal (Ana' Surat):
            </label>
            <div className="grid grid-cols-5 gap-2">
              {(['i', 'u', 'e', 'o', 'a'] as VowelType[]).map((vowel) => {
                const variant = item.vowels[vowel];
                const isActive = selectedVowel === vowel;
                return (
                  <button
                    key={vowel}
                    onClick={() => handleSelectVowel(vowel)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-eja text-white border-bulaeng-light shadow-md scale-105'
                        : 'bg-salaka-light text-leleng border-salaka-border hover:border-bulaeng hover:bg-salaka-base'
                    }`}
                  >
                    <span className="font-lontara text-2xl mb-1">{variant.symbol}</span>
                    <span className="text-xs font-bold">{variant.latin}</span>
                    <span className="text-[10px] opacity-75">{vowel === 'a' ? 'Dasar' : variant.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
```

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) — STATUS: SELESAI
- [x] Mengklik kartu aksara pada Grid Halaman Aksara membuka Modal Pop-Up berukuran 620px dengan latar blur (`src/components/aksara/AksaraModal.tsx`).
- [x] Huruf Lontara pada central showcase tampil raksasa (ukuran font 120px) dengan font `Noto Sans Buginese` warna Biru Navy `#1B2A4A`.
- [x] Mengklik tombol vokal (*Ki, Ku, Ke, Ko, Ka*) mengubah karakter Lontara di etalase secara *real-time* dan otomatis memutar suara pelafalan vokal tersebut (auto-play).
- [x] Tombol vokal yang aktif terhighlight dengan warna Merah Lamming `#C8102E` dan border Emas `#D4AF37`.
- [x] Modal dapat ditutup menggunakan tombol (X), mengklik area luar modal (backdrop), atau menekan tombol `Escape` pada keyboard.
- [x] File `index_preview.html` diperbarui dengan integrasi penuh Pop-Up Zoom 120px dan pengujian interaktif kelima tanda baca vokal (*Ana' Surat*) di browser.

