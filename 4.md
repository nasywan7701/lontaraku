# Issue 4: Implementasi Audio Engine & Sistem Fallback Suara Fonetik Lontara

## 📌 Deskripsi & Tujuan
Membangun subsistem pemutar audio (**Audio Engine**) untuk menangani pemutaran suara pelafalan **95 variasi suku kata Lontara** (`19 Aksara × 5 Vokal`), audio pelafalan kosa kata, serta audio narasi bacaan. Subsistem ini dilengkapi mekanisme **Fallback Cerdas** (*Web Audio API* / *Howler.js* + *Web Speech Synthesis*) agar UI tetap responsif dan tidak error meskipun file fisik audio `.mp3` sedang dalam proses perekaman.

---

## 🎯 Referensi PRD
* **Bagian 3.2:** Interaksi Audio Modal Pop-Up (Auto-play saat pop-up dibuka dan saat memilih *Ki, Ku, Ke, Ko*).
* **Bagian 4.1:** Ikon speaker audio pada Kartu Kosa Kata Kanan.
* **Bagian 5.1:** Pemutar Suara Narator Bacaan & Lagu.
* **Bagian 7.1:** Spesifikasi Audio Engine (Web Audio API / Howler.js + Fallback Web Speech Synthesis).
* **Bagian 7.2:** Matriks 95 File Audio Pelafalan Aksara.

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Instalasi Dependencies Audio (Opsional / Howler.js)
```bash
npm install howler
npm install -D @types/howler
```

### 2. Implementasi Service Pemutar Audio & Fallback (`src/utils/audioPlayer.ts`)
Buat modul pemutar suara yang tangguh terhadap kegagalan jaringan (*network error*) atau file yang belum diunggah:

```typescript
/**
 * Audio Engine LontaraKu
 * Memutar file audio lokal MP3 dengan fallback ke Web Speech Synthesis API
 */
class AudioEngine {
  private currentAudio: HTMLAudioElement | null = null;
  private isAudioUnlocked = false;

  constructor() {
    // Unlock audio context pada interaksi pertama pengguna
    if (typeof window !== 'undefined') {
      const unlock = () => {
        this.isAudioUnlocked = true;
        window.removeEventListener('click', unlock);
        window.removeEventListener('touchstart', unlock);
      };
      window.addEventListener('click', unlock);
      window.addEventListener('touchstart', unlock);
    }
  }

  /**
   * Memutar suara dari URL file audio, fallback ke Web Speech jika gagal dimuat
   * @param soundPath Path file audio (contoh: '/audio/aksara/ka.mp3')
   * @param fallbackText Teks pelafalan fonetik jika audio tidak ditemukan (contoh: 'Ka')
   */
  public async playSound(soundPath: string, fallbackText?: string): Promise<void> {
    this.stop();

    try {
      const audio = new Audio(soundPath);
      this.currentAudio = audio;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise.catch((err) => {
          console.warn(`File audio ${soundPath} belum tersedia. Mengaktifkan fallback ucapan.`);
          this.playFallbackSpeech(fallbackText);
        });
      }
    } catch (error) {
      this.playFallbackSpeech(fallbackText);
    }
  }

  /**
   * Fallback menggunakan Web Speech Synthesis (Bahasa Indonesia/Fonetik)
   */
  public playFallbackSpeech(text?: string): void {
    if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID'; // Dialek pelafalan vokal Bahasa Indonesia mendekati Makassar
    utterance.rate = 0.9;     // Sedikit diperlambat untuk kejelasan edukatif
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
  }

  public stop(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const audioEngine = new AudioEngine();
```

### 3. Pembuatan Custom React Hook (`src/hooks/useAudio.ts`)
Sediakan hook yang mudah digunakan di seluruh komponen:

```typescript
import { useState, useCallback } from 'react';
import { audioEngine } from '../utils/audioPlayer';

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);

  const play = useCallback(async (soundFile: string, fallbackText: string, soundId?: string) => {
    setIsPlaying(true);
    setActiveSoundId(soundId || soundFile);

    await audioEngine.playSound(soundFile, fallbackText);

    // Reset status playing setelah pemutaran singkat (default 1.2s untuk suku kata)
    setTimeout(() => {
      setIsPlaying(false);
      setActiveSoundId(null);
    }, 1200);
  }, []);

  const stop = useCallback(() => {
    audioEngine.stop();
    setIsPlaying(false);
    setActiveSoundId(null);
  }, []);

  return { play, stop, isPlaying, activeSoundId };
};
```

### 4. Struktur Folder Aset Audio (`public/audio/`)
Siapkan struktur folder penampung file suara:
```
public/
└── audio/
    ├── aksara/         # 95 file suara (ka.mp3, ki.mp3, ku.mp3, ..., ha.mp3)
    ├── kosakata/       # 12 file suara kosa kata (kuttu.mp3, caradde.mp3, ...)
    └── bacaan/         # Audio narasi bacaan & lagu daerah
```

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) — STATUS: SELESAI
- [x] Tersedia utilitas `audioEngine` (`src/utils/audioPlayer.ts`) dan hook `useAudio` (`src/hooks/useAudio.ts`) yang dapat dipanggil dari komponen manapun.
- [x] Dibuat komponen `src/components/common/AudioButton.tsx` yang mendukung varian icon-only dan pill-button dengan animasi gelombang suara (*soundwave*).
- [x] Ketika file `.mp3` ditemukan di folder `public/audio/`, sistem memutarnya dengan lancar tanpa lag.
- [x] Ketika file `.mp3` belum tersedia atau terjadi 404, sistem secara otomatis mengaktifkan fallback suara fonetik (*Web Speech Synthesis API*) tanpa menyebabkan *runtime crash* pada browser.
- [x] Fitur Audio Engine telah diintegrasikan pada file uji coba interaktif `index_preview.html` dan dapat langsung diuji suaranya di browser.

