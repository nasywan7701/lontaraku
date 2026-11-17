import { useState, useCallback, useEffect } from 'react';
import { audioEngine } from '../utils/audioPlayer';

interface UseAudioReturn {
  play: (soundFile: string, fallbackText: string, soundId?: string) => Promise<void>;
  stop: () => void;
  isPlaying: boolean;
  activeSoundId: string | null;
}

export const useAudio = (): UseAudioReturn => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);

  // Bersihkan audio saat komponen di-unmount
  useEffect(() => {
    return () => {
      audioEngine.stop();
    };
  }, []);

  const play = useCallback(async (soundFile: string, fallbackText: string, soundId?: string) => {
    const id = soundId || soundFile || fallbackText;
    setIsPlaying(true);
    setActiveSoundId(id);

    try {
      await audioEngine.playSound(soundFile, fallbackText);
    } catch (_err) {
      // Fallback ditangani di dalam audioEngine
    }

    // Reset status pemutaran setelah jeda fonetik wajar (~1.2 detik untuk suku kata / kata pendek)
    const timer = setTimeout(() => {
      setIsPlaying(false);
      setActiveSoundId((current) => (current === id ? null : current));
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const stop = useCallback(() => {
    audioEngine.stop();
    setIsPlaying(false);
    setActiveSoundId(null);
  }, []);

  return { play, stop, isPlaying, activeSoundId };
};

