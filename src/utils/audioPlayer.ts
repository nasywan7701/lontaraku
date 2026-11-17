/**
 * Audio Engine LontaraKu
 * Layanan pemutar suara pelafalan aksara, kosa kata, dan narasi bacaan.
 * Dilengkapi fallback otomatis ke Web Speech Synthesis API jika file .mp3 belum tersedia di server.
 */

class AudioEngine {
  private currentAudio: HTMLAudioElement | null = null;
  private isAudioUnlocked = false;

  constructor() {
    this.initAudioUnlockListener();
  }

  /**
   * Mengatasi pembatasan kebijakan autoplay browser modern dengan membuka audio context
   * saat pertama kali pengguna menyentuh atau mengklik layar.
   */
  private initAudioUnlockListener(): void {
    if (typeof window === 'undefined') return;

    const unlock = () => {
      this.isAudioUnlocked = true;
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };

    window.addEventListener('click', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });
  }

  /**
   * Memutar file audio lokal MP3, fallback ke sintesis ucapan fonetik jika gagal atau file 404
   * @param soundPath URL atau path file audio (contoh: '/audio/aksara/ka.mp3')
   * @param fallbackText Teks pelafalan fonetik bahasa Makassar (contoh: 'Ka', 'Kuttu')
   */
  public async playSound(soundPath: string, fallbackText?: string): Promise<void> {
    this.stop();

    if (!soundPath) {
      if (fallbackText) this.playFallbackSpeech(fallbackText);
      return;
    }

    try {
      const audio = new Audio(soundPath);
      this.currentAudio = audio;

      audio.onerror = () => {
        // File belum diunggah atau 404 -> fallback ke Web Speech
        if (fallbackText) {
          this.playFallbackSpeech(fallbackText);
        }
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise.catch((_err) => {
          // Autoplay policy atau resource load error
          if (fallbackText) {
            this.playFallbackSpeech(fallbackText);
          }
        });
      }
    } catch (_error) {
      if (fallbackText) {
        this.playFallbackSpeech(fallbackText);
      }
    }
  }

  /**
   * Fallback cerdas menggunakan Web Speech Synthesis API (Bahasa Indonesia / Fonetik)
   * Mengatur pitch dan rate agar ucapan terdengar jelas dan edukatif.
   */
  public playFallbackSpeech(text?: string): void {
    if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Hentikan ucapan yang sedang berjalan

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID'; // Dialek pelafalan vokal Bahasa Indonesia paling dekat dengan fonetik Makassar
      utterance.rate = 0.85;    // Sedikit diperlambat untuk kejelasan edukatif
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Gagal memutar Web Speech Synthesis:', err);
    }
  }

  /**
   * Menghentikan audio fisik dan sintesis ucapan yang sedang aktif
   */
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

  public getUnlockedStatus(): boolean {
    return this.isAudioUnlocked;
  }
}

export const audioEngine = new AudioEngine();

