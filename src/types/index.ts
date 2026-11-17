// --- Tipe Data Aksara Lontara ---
export type VowelType = 'a' | 'i' | 'u' | 'e' | 'o';

export interface VowelVariant {
  type: VowelType;
  symbol: string;        // contoh: "ᨀᨗ"
  latin: string;         // contoh: "Ki"
  name: string;          // contoh: "Tetti' Rirate"
  position: string;      // contoh: "Satu titik di ATAS aksara"
  soundFile: string;     // contoh: "ki.mp3"
}

export interface LontaraCharacter {
  id: string;            // "ka", "ga", "nga", dll.
  baseSymbol: string;    // "ᨀ"
  baseLatin: string;     // "KA"
  group: string;         // "Velar", "Labial", "Dental", "Palatal", "Approximant", "Fricative & Glottal"
  row: number;           // 1 sampai 6
  vowels: Record<VowelType, VowelVariant>;
}

// --- Tipe Data Kosa Kata Dual-Card ---
export type VocabCategory = 
  | 'Semua'
  | 'Sifat & Sikap' 
  | 'Kegiatan Harian' 
  | 'Emosi & Perasaan' 
  | 'Benda & Tempat' 
  | 'Benda & Alam' 
  | 'Ukuran & Sifat';

export interface VocabularyItem {
  id: string;
  category: VocabCategory;
  makassarWord: string;       // "Kuttu"
  lontaraScript: string;      // "ᨀᨘᨈᨘ"
  indonesianMeaning: string;  // "Malas"
  exampleSentence: {
    makassar: string;         // "Teako kuttu dudui a'boya ilmu."
    indonesian: string;       // "Jangan terlalu malas mencari ilmu."
  };
  imagePrompt: string;        // Prompt AI 3D Pixar
  imageSrc?: string;          // Path gambar lokal (e.g., "/assets/vocabulary/kuttu.webp")
  soundFile: string;          // Path file audio pelafalan
}

// --- Tipe Data Bacaan Berjenjang ---
export type ReadingLevel = 1 | 2 | 3 | 4;

export interface StanzaItem {
  lontara: string;
  makassar: string;
  indonesian: string;
}

export interface ReadingItem {
  id: string;
  level: ReadingLevel;
  code?: string;              // "L1-01", dll.
  titleLontara?: string;
  titleMakassar: string;
  titleIndonesian: string;
  category: 'sapaan' | 'cerita' | 'puisi' | 'angngaru' | 'lagu';
  stanzas: StanzaItem[];
  audioFile?: string;
  culturalNote?: string;
}

