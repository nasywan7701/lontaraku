import React from 'react';
import { Volume2, Pause, Eye, EyeOff, Sparkles, BookOpen } from 'lucide-react';

interface ReadingControlsProps {
  showLatin: boolean;
  setShowLatin: (val: boolean) => void;
  showIndonesian: boolean;
  setShowIndonesian: (val: boolean) => void;
  isPlaying: boolean;
  onToggleAudio: () => void;
  hasAudio: boolean;
  title: string;
  category?: string;
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
  category,
}) => {
  const isPureLontaraMode = !showLatin && !showIndonesian;

  const handleTogglePureLontara = () => {
    if (isPureLontaraMode) {
      // Kembali tampilkan semua
      setShowLatin(true);
      setShowIndonesian(true);
    } else {
      // Masuk ke mode latihan murni Lontara
      setShowLatin(false);
      setShowIndonesian(false);
    }
  };

  const getAudioButtonLabel = () => {
    if (isPlaying) return 'Jeda Suara';
    if (category === 'lagu') return 'Dengarkan Lagu Daerah';
    if (category === 'angngaru') return 'Deklamasi Sumpah Angngaru';
    return 'Dengarkan Bacaan';
  };

  return (
    <div className="bg-salaka-light/95 border border-bulaeng/40 rounded-2xl p-4 mb-6 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      {/* Grup Kontrol Visual Bantu Baca */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="text-xs font-black text-leleng uppercase tracking-wider flex items-center gap-1.5 mr-1">
          <BookOpen size={14} className="text-eja" />
          Bantu Baca:
        </span>

        {/* Toggle Transliterasi Latin */}
        <button
          onClick={() => setShowLatin(!showLatin)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
            showLatin
              ? 'bg-ink-navy text-white border-ink-navy shadow-sm'
              : 'bg-white/80 text-leleng-slate border-salaka-border hover:bg-salaka-base'
          }`}
          title={showLatin ? 'Sembunyikan teks Latin Makassar' : 'Tampilkan teks Latin Makassar'}
        >
          {showLatin ? <Eye size={14} /> : <EyeOff size={14} />}
          <span>Latin Makassar {showLatin ? '(Aktif)' : '(Off)'}</span>
        </button>

        {/* Toggle Arti Indonesia */}
        <button
          onClick={() => setShowIndonesian(!showIndonesian)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
            showIndonesian
              ? 'bg-bulaeng-dark text-white border-bulaeng-dark shadow-sm'
              : 'bg-white/80 text-leleng-slate border-salaka-border hover:bg-salaka-base'
          }`}
          title={showIndonesian ? 'Sembunyikan terjemahan Indonesia' : 'Tampilkan terjemahan Indonesia'}
        >
          {showIndonesian ? <Eye size={14} /> : <EyeOff size={14} />}
          <span>Terjemahan {showIndonesian ? '(Aktif)' : '(Off)'}</span>
        </button>

        {/* Shortcut 1-Click: Mode Murni Lontara */}
        <button
          onClick={handleTogglePureLontara}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all border ${
            isPureLontaraMode
              ? 'bg-eja text-white border-bulaeng shadow-md animate-pulse'
              : 'bg-salaka-base/80 text-leleng border-salaka-border hover:border-eja/50'
          }`}
          title="Latihan membaca hanya dengan Aksara Lontara murni tanpa bantuan Latin & terjemahan"
        >
          <Sparkles size={14} className={isPureLontaraMode ? 'text-bulaeng-light' : 'text-eja'} />
          <span>{isPureLontaraMode ? 'Keluar Mode Murni' : 'Mode Murni Lontara'}</span>
        </button>
      </div>

      {/* Kontrol Audio Narator / Lagu */}
      <div className="flex items-center justify-end">
        <button
          onClick={onToggleAudio}
          disabled={!hasAudio}
          className={`w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md ${
            !hasAudio
              ? 'bg-salaka-metallic text-leleng-slate cursor-not-allowed opacity-60'
              : isPlaying
              ? 'bg-bulaeng text-white hover:bg-bulaeng-dark animate-pulse border border-white/40'
              : 'bg-eja text-white hover:bg-eja-dark border border-bulaeng'
          }`}
          title={hasAudio ? `Putar audio untuk: ${title}` : 'Audio narasi tidak tersedia'}
        >
          {isPlaying ? <Pause size={16} /> : <Volume2 size={16} />}
          <span>{getAudioButtonLabel()}</span>
        </button>
      </div>
    </div>
  );
};

