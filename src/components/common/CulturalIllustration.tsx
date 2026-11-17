import React, { useState } from 'react';

interface CulturalIllustrationProps {
  src?: string;
  alt: string;
  title: string;
  subtitle: string;
  lontara?: string;
  className?: string;
  variant?: 'left' | 'right';
}

export const CulturalIllustration: React.FC<CulturalIllustrationProps> = ({
  src,
  alt,
  title,
  subtitle,
  lontara,
  className = '',
  variant = 'left',
}) => {
  // Status bertingkat: 0 = coba WebP asli, 1 = coba SVG, 2 = fallback vektor CSS
  const [loadStage, setLoadStage] = useState<number>(0);

  // Generate path SVG alternatif dari WebP jika ada
  const svgFallback = src ? src.replace(/\.webp$/i, '.svg') : undefined;

  const handleImageError = () => {
    if (loadStage === 0 && svgFallback) {
      setLoadStage(1); // Coba muat file SVG
    } else {
      setLoadStage(2); // Fallback ke tampilan ikonik aman
    }
  };

  const currentImageSrc = loadStage === 0 ? src : loadStage === 1 ? svgFallback : undefined;

  return (
    <div
      className={`relative group bg-lontar-cream/80 backdrop-blur-sm border-2 border-bulaeng/50 hover:border-eja rounded-3xl p-5 shadow-card-gold hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center max-w-[260px] w-full ${className}`}
    >
      {/* Ornamen Sudut Kartu Bulaeng */}
      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-bulaeng rounded-tl-sm" />
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-bulaeng rounded-tr-sm" />
      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-bulaeng rounded-bl-sm" />
      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-bulaeng rounded-tr-sm" />

      {/* Area Gambar / Fallback Ilustrasi Budaya */}
      <div className="w-full h-44 rounded-2xl bg-salaka-light/80 border border-salaka-border flex flex-col items-center justify-center p-2 mb-3 overflow-hidden relative">
        {loadStage < 2 && currentImageSrc ? (
          <img
            src={currentImageSrc}
            alt={alt}
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2 select-none">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-eja/15 via-bulaeng/20 to-salaka-base border border-bulaeng/60 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
              {variant === 'left' ? '🏛️' : '👑'}
            </div>
            {lontara && (
              <span className="font-lontara text-2xl text-ink-navy opacity-80">
                {lontara}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Informasi Label Budaya */}
      <h4 className="text-base font-extrabold text-leleng leading-tight group-hover:text-eja transition-colors">
        {title}
      </h4>
      <p className="text-xs font-semibold text-bulaeng-dark mt-0.5">
        {subtitle}
      </p>

      {/* Ornamen Garis Halus Bawah */}
      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-bulaeng to-transparent mt-3" />
    </div>
  );
};
