import React, { useState, useEffect, useCallback } from 'react';
import { X, Volume2, Sparkles } from 'lucide-react';
import { LontaraCharacter, VowelType } from '../../types';
import { useAudio } from '../../hooks/useAudio';

interface AksaraModalProps {
  item: LontaraCharacter | null;
  onClose: () => void;
}

const VOWEL_KEYS: VowelType[] = ['a', 'i', 'u', 'e', 'o'];

export const AksaraModal: React.FC<AksaraModalProps> = ({ item, onClose }) => {
  const [selectedVowel, setSelectedVowel] = useState<VowelType>('a');
  const { play, isPlaying } = useAudio();

  // Reset vokal ke default dan auto-play pelafalan huruf dasar saat modal terbuka
  useEffect(() => {
    if (item) {
      setSelectedVowel('a');
      play(item.vowels.a.soundFile, item.vowels.a.latin);
    }
  }, [item, play]);

  // Handle tombol ESC keyboard untuk menutup modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const currentVariant = item.vowels[selectedVowel];

  const handleSelectVowel = (vowel: VowelType) => {
    setSelectedVowel(vowel);
    play(item.vowels[vowel].soundFile, item.vowels[vowel].latin);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-leleng/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Container Modal (Maksimal 620px) */}
      <div
        className="relative bg-lontar-cream border-2 border-bulaeng rounded-3xl max-w-[620px] w-full shadow-2xl overflow-hidden select-none animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal Merah Lamming & Emas */}
        <div className="bg-gradient-to-r from-eja via-eja to-eja-dark px-6 py-4 flex items-center justify-between border-b border-bulaeng text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-bulaeng/20 border border-bulaeng-light flex items-center justify-center text-bulaeng-light">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-white leading-tight">
                Aksara Dasar: {item.baseLatin} (Ina' Surat)
              </h3>
              <span className="text-[11px] font-semibold text-bulaeng-light/90 block">
                Kelompok Fonetik {item.group} • Baris {item.row}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-bulaeng-light hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-bulaeng"
            aria-label="Tutup Pop-Up Aksara"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body Modal */}
        <div className="p-6 sm:p-8">
          
          {/* Central Zoom Showcase Box (Latar Ivory Perak Lembut) */}
          <div className="bg-salaka-light/90 border-2 border-salaka-border rounded-3xl p-6 sm:p-8 text-center shadow-inner relative overflow-hidden">
            {/* Sudut Hiasan Emas */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-bulaeng opacity-60" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-bulaeng opacity-60" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-bulaeng opacity-60" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-bulaeng opacity-60" />

            {/* Simbol Lontara Zoom Raksasa (120px) */}
            <div className="font-lontara text-8xl sm:text-9xl text-ink-navy leading-none py-2 select-none drop-shadow-sm transition-transform duration-300">
              {currentVariant.symbol}
            </div>

            {/* Label Latin Pelafalan */}
            <div className="text-3xl sm:text-4xl font-black text-leleng mt-2 tracking-wider">
              "{currentVariant.latin.toUpperCase()}"
            </div>

            {/* Penjelasan Posisi Tanda Baca */}
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-salaka-base/80 border border-salaka-border text-xs text-leleng-slate font-medium">
              <span className="font-bold text-eja">{currentVariant.name}</span>
              <span>—</span>
              <span>{currentVariant.position}</span>
            </div>
          </div>

          {/* Tombol Play Suara Pelafalan Aktif */}
          <button
            onClick={() => play(currentVariant.soundFile, currentVariant.latin)}
            className={`w-full mt-6 py-4 px-6 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-bulaeng ${
              isPlaying
                ? 'bg-bulaeng text-leleng scale-[0.99] border-2 border-bulaeng-light'
                : 'bg-eja hover:bg-eja-dark text-white border-2 border-bulaeng-light hover:shadow-card-hover'
            }`}
          >
            <Volume2 size={22} className={isPlaying ? 'animate-bounce text-bulaeng-light' : ''} />
            <span className="text-sm sm:text-base">
              Putar Suara Pelafalan: "{currentVariant.latin}"
            </span>

            {/* Soundwave Bars */}
            {isPlaying && (
              <span className="flex items-center gap-1 ml-1">
                <span className="w-1 h-3 bg-current rounded-full animate-pulse" />
                <span className="w-1 h-4 bg-current rounded-full animate-pulse delay-75" />
                <span className="w-1 h-2 bg-current rounded-full animate-pulse delay-150" />
              </span>
            )}
          </button>

          {/* Selektor Tanda Baca Vokal (Ana' Surat) */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-leleng-slate">
                Pilih Tanda Baca Vokal (Ana' Surat):
              </label>
              <span className="text-[11px] font-semibold text-bulaeng-dark">
                5 Variasi Bunyi
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
              {VOWEL_KEYS.map((vowel) => {
                const variant = item.vowels[vowel];
                const isActive = selectedVowel === vowel;

                return (
                  <button
                    key={vowel}
                    onClick={() => handleSelectVowel(vowel)}
                    className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-2xl border-2 transition-all focus:outline-none ${
                      isActive
                        ? 'bg-eja text-white border-bulaeng-light shadow-md scale-105'
                        : 'bg-salaka-light text-leleng border-salaka-border hover:border-bulaeng hover:bg-salaka-base'
                    }`}
                  >
                    <span className="font-lontara text-2xl sm:text-3xl mb-0.5 leading-none">
                      {variant.symbol}
                    </span>
                    <span className={`text-xs font-black ${isActive ? 'text-bulaeng-light' : 'text-leleng'}`}>
                      {variant.latin}
                    </span>
                    <span className={`text-[9px] font-medium hidden sm:inline ${isActive ? 'text-white/80' : 'text-leleng-slate'}`}>
                      {vowel === 'a' ? 'Dasar' : variant.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Modal: Keterangan Budaya & Tombol Tutup */}
        <div className="bg-salaka-base/60 px-6 py-3.5 border-t border-salaka-border flex items-center justify-between text-xs text-leleng-slate">
          <span>Tekan tombol <kbd className="px-1.5 py-0.5 bg-salaka-light border border-gray-300 rounded text-[10px] font-mono">ESC</kbd> untuk menutup</span>
          <button
            onClick={onClose}
            className="font-bold text-eja hover:underline"
          >
            Selesai
          </button>
        </div>

      </div>
    </div>
  );
};

