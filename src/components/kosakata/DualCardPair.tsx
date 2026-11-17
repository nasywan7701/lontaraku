import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { VocabularyItem } from '../../types';

interface DualCardPairProps {
  item: VocabularyItem;
  onPlayAudio: (soundFile: string, text: string) => void;
  isPlaying?: boolean;
}

export const DualCardPair: React.FC<DualCardPairProps> = ({
  item,
  onPlayAudio,
  isPlaying = false,
}) => {
  // Status muat gambar bertingkat: 0 = WebP, 1 = SVG fallback, 2 = Emoji fallback
  const [imgStage, setImgStage] = useState<number>(0);

  const svgFallback = item.imageSrc ? item.imageSrc.replace(/\.webp$/i, '.svg') : undefined;

  const handleImageError = () => {
    if (imgStage === 0 && svgFallback) {
      setImgStage(1);
    } else {
      setImgStage(2);
    }
  };

  const currentImageSrc = imgStage === 0 ? item.imageSrc : imgStage === 1 ? svgFallback : undefined;

  // Emojis representatif untuk fallback ilustrasi 3D
  const getCategoryEmoji = (id: string) => {
    switch (id) {
      case 'kuttu': return '🥱';
      case 'caradde': return '💡';
      case 'ngandre': return '🍲';
      case 'angnginung': return '🥛';
      case 'tinro': return '🛌';
      case 'alampa': return '🚶';
      case 'rannu': return '🎉';
      case 'laro': return '😡';
      case 'balla': return '🏡';
      case 'jene': return '💧';
      case 'lompo': return '⛵';
      case 'cadi': return '🐣';
      default: return '🎨';
    }
  };

  return (
    <div className="bg-salaka-base/50 border-2 border-bulaeng/40 hover:border-eja/80 rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      
      {/* Container Dua Kartu Sejajar (Dual-Card Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch justify-center">
        
        {/* KARTU KIRI: Aksara Lontara & Terjemahan Bahasa Indonesia */}
        <div className="bg-lontar-cream border-2 border-bulaeng/50 rounded-2xl p-6 min-h-[340px] flex flex-col justify-between items-center text-center shadow-sm relative overflow-hidden group">
          {/* Sudut Emas */}
          <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-bulaeng opacity-60" />
          <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-bulaeng opacity-60" />

          {/* Header Kartu Kiri */}
          <div className="w-full flex items-center justify-between pb-2 border-b border-salaka-border">
            <span className="text-[11px] font-bold uppercase tracking-wider text-bulaeng-dark">
              Aksara Lontara
            </span>
            <span className="text-[11px] text-leleng-slate font-medium">
              Goresan Asli
            </span>
          </div>

          {/* Simbol Lontara Biru Navy Besar (84px) */}
          <div className="my-auto py-4">
            <div className="font-lontara text-6xl sm:text-7xl lg:text-8xl text-ink-navy leading-none tracking-wide select-none group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
              {item.lontaraScript}
            </div>
          </div>

          {/* Bawah: Terjemahan Indonesia Miring */}
          <div className="w-full pt-3 border-t border-salaka-border">
            <span className="text-xl sm:text-2xl font-serif italic text-leleng font-bold tracking-tight block">
              "{item.indonesianMeaning}"
            </span>
            <span className="text-[10px] text-leleng-slate uppercase font-semibold mt-0.5 block">
              Arti Bahasa Indonesia
            </span>
          </div>
        </div>

        {/* KARTU KANAN: Kata Makassar & Ilustrasi 3D Kontekstual */}
        <div className="bg-lontar-cream border-2 border-bulaeng/50 rounded-2xl p-6 min-h-[340px] flex flex-col justify-between items-center shadow-sm relative overflow-hidden group">
          {/* Sudut Emas */}
          <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-bulaeng opacity-60" />
          <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-bulaeng opacity-60" />

          {/* Header Kartu Kanan: Kata Makassar & Tombol Audio Speaker */}
          <div className="w-full flex items-center justify-between pb-2 border-b border-salaka-border">
            <div>
              <span className="text-2xl font-black text-leleng group-hover:text-eja transition-colors block leading-tight">
                {item.makassarWord}
              </span>
              <span className="text-[10px] font-semibold text-bulaeng-dark uppercase">
                Bahasa Makassar
              </span>
            </div>

            <button
              onClick={() => onPlayAudio(item.soundFile, item.makassarWord)}
              className={`p-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bulaeng ${
                isPlaying
                  ? 'bg-bulaeng text-white scale-110 shadow-md animate-pulse'
                  : 'bg-eja/10 text-eja hover:bg-eja hover:text-white hover:scale-105 shadow-sm'
              }`}
              title={`Dengarkan pelafalan "${item.makassarWord}"`}
              aria-label={`Dengarkan pelafalan "${item.makassarWord}"`}
            >
              <Volume2 size={20} className={isPlaying ? 'animate-bounce' : ''} />
            </button>
          </div>

          {/* Area Ilustrasi Bergaya 3D Pixar (240x200px) */}
          <div className="w-full h-[180px] sm:h-[200px] rounded-2xl overflow-hidden bg-salaka-light/80 border border-salaka-border flex items-center justify-center my-2 p-1.5 relative">
            {imgStage < 2 && currentImageSrc ? (
              <img
                src={currentImageSrc}
                alt={item.makassarWord}
                onError={handleImageError}
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-3">
                <span className="text-5xl mb-2 filter drop-shadow-sm group-hover:scale-110 transition-transform select-none">
                  {getCategoryEmoji(item.id)}
                </span>
                <p className="text-[11px] text-leleng font-bold max-w-[200px] line-clamp-2">
                  {item.imagePrompt.split('.')[0]}.
                </p>
                <span className="text-[9px] text-bulaeng-dark font-medium mt-1">
                  Prompt AI 3D Pixar Style
                </span>
              </div>
            )}
          </div>

          {/* Footer Kartu Kanan: Kategori */}
          <div className="w-full flex items-center justify-between pt-2 border-t border-salaka-border text-[11px] text-leleng-slate">
            <span className="font-semibold text-eja">
              Kategori: {item.category}
            </span>
            <span className="font-mono text-[10px] text-leleng-slate/70">
              #{item.id}
            </span>
          </div>
        </div>

      </div>

      {/* Footer Wadah Pasangan: Kalimat Penerapan Sehari-hari */}
      <div className="mt-4 pt-3 border-t border-bulaeng/40 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-extrabold uppercase tracking-wide text-eja text-[11px] bg-eja/10 px-2 py-0.5 rounded-md border border-eja/20">
            Contoh Kalimat
          </span>
          <span className="text-leleng font-bold text-xs sm:text-sm">
            "{item.exampleSentence.makassar}"
          </span>
        </div>
        <span className="text-leleng-slate italic text-[11px]">
          ({item.exampleSentence.indonesian})
        </span>
      </div>

    </div>
  );
};
