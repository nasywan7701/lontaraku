import React from 'react';
import { BookOpen, Sparkles, Feather, Music, Shield } from 'lucide-react';
import { ReadingItem } from '../../types';

interface ReadingSidebarProps {
  items: ReadingItem[];
  selectedId: string;
  onSelectItem: (item: ReadingItem) => void;
  level: number;
}

export const ReadingSidebar: React.FC<ReadingSidebarProps> = ({
  items,
  selectedId,
  onSelectItem,
  level,
}) => {
  const getLevelIcon = (lvl: number) => {
    switch (lvl) {
      case 1:
        return <BookOpen size={16} className="text-bulaeng-dark" />;
      case 2:
        return <Feather size={16} className="text-eja" />;
      case 3:
        return <Sparkles size={16} className="text-bulaeng" />;
      case 4:
        return <Shield size={16} className="text-eja" />;
      default:
        return <BookOpen size={16} />;
    }
  };

  const getCategoryBadge = (item: ReadingItem) => {
    if (item.category === 'angngaru') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-eja/15 text-eja border border-eja/30 uppercase">
          <Shield size={10} /> Sumpah Setia
        </span>
      );
    }
    if (item.category === 'lagu') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-bulaeng/20 text-bulaeng-dark border border-bulaeng/40 uppercase">
          <Music size={10} /> Lagu Daerah
        </span>
      );
    }
    if (item.category === 'kelong' || item.category === 'puisi') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200 uppercase">
          <Sparkles size={10} /> Sastra / Kelong
        </span>
      );
    }
    if (item.category === 'cerita') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200 uppercase">
          <Feather size={10} /> Cerita Harian
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-salaka-border text-leleng-slate uppercase">
        {item.code}
      </span>
    );
  };

  return (
    <div className="w-full lg:w-[360px] flex-shrink-0 bg-salaka-light/80 border border-bulaeng/40 rounded-3xl p-4 shadow-sm flex flex-col h-fit max-h-[820px]">
      {/* Header Sidebar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-salaka-border px-2">
        <div className="flex items-center gap-2">
          {getLevelIcon(level)}
          <span className="text-xs font-black uppercase tracking-wider text-leleng">
            Daftar Materi ({items.length} Naskah)
          </span>
        </div>
        <span className="text-[11px] font-bold text-bulaeng-dark bg-bulaeng/10 px-2.5 py-0.5 rounded-full border border-bulaeng/30">
          Level {level}
        </span>
      </div>

      {/* Daftar Item Bacaan (Scrollable) */}
      <div className="overflow-y-auto pr-1 space-y-2.5 custom-scrollbar max-h-[720px]">
        {items.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <button
              key={item.id}
              onClick={() => onSelectItem(item)}
              className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 relative border ${
                isSelected
                  ? 'bg-lontar-cream border-bulaeng shadow-md border-l-4 border-l-eja'
                  : 'bg-white/70 border-salaka-border/70 hover:bg-salaka-light hover:border-bulaeng/50'
              }`}
            >
              {/* Baris Atas: Kode / Badge & Stanza Count */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                {getCategoryBadge(item)}
                <span className="text-[10px] font-medium text-leleng-slate">
                  {item.stanzas.length} {item.stanzas.length > 1 ? 'Bait' : 'Baris'}
                </span>
              </div>

              {/* Judul Lontara Mini */}
              {item.titleLontara && (
                <div className="font-lontara text-lg sm:text-xl text-ink-navy truncate leading-tight mb-1">
                  {item.titleLontara}
                </div>
              )}

              {/* Judul Latin Makassar */}
              <div
                className={`text-sm font-bold truncate ${
                  isSelected ? 'text-eja' : 'text-leleng'
                }`}
              >
                {item.titleMakassar}
              </div>

              {/* Terjemahan Indonesia Ringkas */}
              <div className="text-xs text-leleng-slate truncate mt-0.5 italic">
                {item.titleIndonesian}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

