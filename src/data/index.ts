import { LontaraCharacter, VocabularyItem, ReadingItem, VocabCategory, ReadingLevel } from '../types';
import aksaraRaw from './aksara.json';
import kosakataRaw from './kosakata.json';
import bacaanRaw from './bacaan.json';

// Ekspor Data Utama dengan Type Safety
export const aksaraData: LontaraCharacter[] = aksaraRaw as LontaraCharacter[];
export const kosakataData: VocabularyItem[] = kosakataRaw as VocabularyItem[];
export const bacaanData: ReadingItem[] = bacaanRaw as ReadingItem[];

// --- Helper Functions Aksara ---
export const getAksaraById = (id: string): LontaraCharacter | undefined => {
  return aksaraData.find((item) => item.id.toLowerCase() === id.toLowerCase());
};

export const getAksaraByRow = (row: number): LontaraCharacter[] => {
  return aksaraData.filter((item) => item.row === row);
};

// --- Helper Functions Kosa Kata ---
export const getKosakataByCategory = (category: VocabCategory): VocabularyItem[] => {
  if (category === 'Semua') return kosakataData;
  return kosakataData.filter((item) => item.category === category);
};

export const getKosakataCategories = (): VocabCategory[] => {
  return [
    'Semua',
    'Sifat & Sikap',
    'Kegiatan Harian',
    'Emosi & Perasaan',
    'Benda & Tempat',
    'Benda & Alam',
    'Ukuran & Sifat',
  ];
};

// --- Helper Functions Bacaan ---
export const getBacaanByLevel = (level: ReadingLevel): ReadingItem[] => {
  return bacaanData.filter((item) => item.level === level);
};

export const getBacaanById = (id: string): ReadingItem | undefined => {
  return bacaanData.find((item) => item.id.toLowerCase() === id.toLowerCase());
};

