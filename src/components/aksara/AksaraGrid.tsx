import React from 'react';
import { LontaraCharacter } from '../../types';
import { AksaraCard } from './AksaraCard';

interface AksaraGridProps {
  characters: LontaraCharacter[];
  onSelectCharacter: (item: LontaraCharacter) => void;
  onPlayAudio: (e: React.MouseEvent, soundFile: string, text: string) => void;
  activeSoundId?: string | null;
}

const ROW_CONFIG = [
  { row: 1, group: 'Velar', desc: 'Konsonan Langit-langit Belakang (KA, GA, NGA)' },
  { row: 2, group: 'Labial', desc: 'Konsonan Bibir (PA, BA, MA)' },
  { row: 3, group: 'Dental', desc: 'Konsonan Gigi (TA, DA, NA)' },
  { row: 4, group: 'Palatal', desc: 'Konsonan Langit-langit Keras (CA, JA, NYA)' },
  { row: 5, group: 'Approximant', desc: 'Konsonan Hampiran & Cair (YA, RA, LA)' },
  { row: 6, group: 'Fricative & Glottal', desc: 'Konsonan Geser & Celah Suara (WA, SA, A, HA)' },
];

export const AksaraGrid: React.FC<AksaraGridProps> = ({
  characters,
  onSelectCharacter,
  onPlayAudio,
  activeSoundId,
}) => {
  return (
    <div className="space-y-8">
      {ROW_CONFIG.map(({ row, group, desc }) => {
        const rowCharacters = characters.filter((c) => c.row === row);
        const isFourCols = rowCharacters.length === 4;

        return (
          <div
            key={row}
            className="bg-salaka-base/40 border border-salaka-border rounded-3xl p-5 sm:p-6 shadow-sm"
          >
            {/* Header Baris Fonetik */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-bulaeng/30 gap-1">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-eja text-white text-xs font-black flex items-center justify-center shadow-sm">
                  {row}
                </span>
                <h3 className="text-base font-extrabold text-leleng">
                  Baris {row}: Kelompok {group}
                </h3>
              </div>
              <span className="text-xs font-medium text-leleng-slate">
                {desc}
              </span>
            </div>

            {/* Grid Kartu Aksara */}
            <div
              className={`grid gap-4 sm:gap-6 ${
                isFourCols
                  ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-3'
              }`}
            >
              {rowCharacters.map((char) => (
                <AksaraCard
                  key={char.id}
                  item={char}
                  onSelect={onSelectCharacter}
                  onPlayAudio={onPlayAudio}
                  isPlaying={activeSoundId === char.vowels.a.soundFile || activeSoundId === char.baseLatin}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

