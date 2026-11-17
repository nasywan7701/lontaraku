import React from 'react';
import { VocabCategory } from '../../types';

interface CategoryFilterProps {
  categories: VocabCategory[];
  activeCategory: VocabCategory;
  onSelectCategory: (category: VocabCategory) => void;
  counts: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 px-2 no-scrollbar">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = counts[cat] || 0;

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 border focus:outline-none focus:ring-2 focus:ring-bulaeng flex-shrink-0 ${
              isActive
                ? 'bg-eja text-white border-bulaeng-light shadow-md scale-105'
                : 'bg-lontar-cream text-leleng-slate border-bulaeng/40 hover:border-eja hover:text-eja hover:bg-salaka-base/50'
            }`}
          >
            <span>{cat}</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-salaka-base text-bulaeng-dark'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

