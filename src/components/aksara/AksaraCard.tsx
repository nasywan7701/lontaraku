import React from 'react';
import { Volume2 } from 'lucide-react';
import { LontaraCharacter } from '../../types';

interface AksaraCardProps {
  item: LontaraCharacter;
  onSelect: (item: LontaraCharacter) => void;
  onPlayAudio: (e: React.MouseEvent, soundFile: string, text: string) => void;
  isPlaying?: boolean;
}

export const AksaraCard: React.FC<AksaraCardProps> = ({
  item,
  onSelect,
  onPlayAudio,
  isPlaying = false,
}) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative bg-lontar-cream border-2 border-bulaeng/50 hover:border-eja rounded-2xl p-5 shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-between min-h-[190px] select-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(item);
        }
      }}
      aria-label={`Huruf Lontara ${item.baseLatin}, kelompok fonetik ${item.group}`}
    >
      {/* Sudut Dekoratif Emas Tipis */}
      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-bulaeng opacity-50" />
      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-bulaeng opacity-50" />

      {/* Tombol Speaker Cepat Pojok Kanan Atas */}
      <button
        onClick={(e) => onPlayAudio(e, item.vowels.a.soundFile, item.baseLatin)}
        className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 shadow-sm ${
          isPlaying
            ? 'bg-bulaeng text-white scale-110 shadow-md animate-pulse'
            : 'bg-salaka-light text-eja hover:bg-eja hover:text-white hover:scale-105'
        }`}
        title={`Dengarkan pelafalan "${item.baseLatin}"`}
        aria-label={`Dengarkan pelafalan "${item.baseLatin}"`}
      >
        <Volume2 size={17} className={isPlaying ? 'animate-bounce' : ''} />
      </button>

      {/* Badge Fonetik Kecil */}
      <div className="w-full flex items-center justify-start">
        <span className="text-[10px] font-bold uppercase tracking-wider text-bulaeng-dark/80 bg-bulaeng/10 px-2 py-0.5 rounded-md">
          {item.group}
        </span>
      </div>

      {/* Simbol Aksara Lontara Besar (Biru Navy) */}
      <div className="font-lontara text-6xl sm:text-7xl text-ink-navy group-hover:scale-115 transition-transform duration-300 py-2 leading-none">
        {item.baseSymbol}
      </div>

      {/* Label Latin dan Keterangan */}
      <div className="text-center w-full pt-2 border-t border-salaka-border/60">
        <div className="text-xl font-black text-leleng tracking-wider group-hover:text-eja transition-colors">
          {item.baseLatin}
        </div>
        <span className="text-[10px] text-leleng-slate font-medium block">
          Klik untuk Zoom & Vokal
        </span>
      </div>
    </div>
  );
};

