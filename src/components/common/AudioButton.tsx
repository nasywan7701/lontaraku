import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';

interface AudioButtonProps {
  soundFile: string;
  fallbackText: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'icon';
  className?: string;
  onBeforePlay?: () => void;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  soundFile,
  fallbackText,
  label,
  size = 'md',
  variant = 'icon',
  className = '',
  onBeforePlay,
}) => {
  const { play, stop, isPlaying } = useAudio();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah klik bubble ke container card/modal
    if (onBeforePlay) onBeforePlay();

    if (isPlaying) {
      stop();
    } else {
      play(soundFile, fallbackText);
    }
  };

  // Varian Icon Only
  if (variant === 'icon') {
    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 18;
    return (
      <button
        onClick={handleClick}
        className={`p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bulaeng ${
          isPlaying
            ? 'bg-bulaeng text-white scale-110 shadow-md animate-pulse'
            : 'bg-eja/10 text-eja hover:bg-eja hover:text-white hover:scale-105 shadow-sm'
        } ${className}`}
        title={`Dengarkan pelafalan "${fallbackText}"`}
        aria-label={`Dengarkan pelafalan "${fallbackText}"`}
      >
        <Volume2 size={iconSize} className={isPlaying ? 'animate-bounce' : ''} />
      </button>
    );
  }

  // Varian Pill Button dengan Teks Label
  return (
    <button
      onClick={handleClick}
      className={`rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md focus:outline-none focus:ring-2 focus:ring-bulaeng ${
        variant === 'primary'
          ? isPlaying
            ? 'bg-bulaeng text-leleng border border-bulaeng-light scale-[0.99]'
            : 'bg-eja hover:bg-eja-dark text-white border border-bulaeng-light hover:shadow-lg'
          : isPlaying
          ? 'bg-bulaeng/20 text-bulaeng-dark border border-bulaeng'
          : 'bg-salaka-light hover:bg-salaka-base text-leleng border border-bulaeng/50'
      } ${
        size === 'sm'
          ? 'py-2 px-4 text-xs'
          : size === 'lg'
          ? 'py-4 px-8 text-base'
          : 'py-3 px-6 text-sm'
      } ${className}`}
      title={`Dengarkan pelafalan "${fallbackText}"`}
    >
      <Volume2 size={size === 'sm' ? 16 : size === 'lg' ? 22 : 19} className={isPlaying ? 'animate-bounce text-bulaeng' : ''} />
      <span>{label || `Putar Pelafalan: "${fallbackText}"`}</span>

      {/* Animasi Gelombang Suara (Soundwave Bars) */}
      {isPlaying && (
        <span className="flex items-center gap-0.5 ml-1">
          <span className="w-1 h-3 bg-current rounded-full animate-pulse" />
          <span className="w-1 h-4 bg-current rounded-full animate-pulse delay-75" />
          <span className="w-1 h-2 bg-current rounded-full animate-pulse delay-150" />
        </span>
      )}
    </button>
  );
};

