import React from 'react';

interface LammingDividerProps {
  className?: string;
  variant?: 'gold-red' | 'subtle';
}

export const LammingDivider: React.FC<LammingDividerProps> = ({
  className = '',
  variant = 'gold-red',
}) => {
  return (
    <div className={`relative w-full flex items-center justify-center my-8 ${className}`}>
      {/* Garis Kiri */}
      <div className="flex-grow h-[1.5px] bg-gradient-to-r from-transparent via-bulaeng to-eja opacity-60" />

      {/* Motif Tengah Ornamen Sulapa Eppa' Makassar */}
      <div className="mx-4 flex items-center gap-2 select-none">
        <span className="w-2 h-2 rotate-45 bg-bulaeng shadow-sm" />
        <span className="w-3 h-3 rotate-45 bg-eja border border-bulaeng shadow-sm" />
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-eja to-eja-dark border border-bulaeng flex items-center justify-center text-bulaeng-light font-lontara text-xs shadow-md">
          ᨒ
        </div>
        <span className="w-3 h-3 rotate-45 bg-eja border border-bulaeng shadow-sm" />
        <span className="w-2 h-2 rotate-45 bg-bulaeng shadow-sm" />
      </div>

      {/* Garis Kanan */}
      <div className="flex-grow h-[1.5px] bg-gradient-to-l from-transparent via-bulaeng to-eja opacity-60" />
    </div>
  );
};

