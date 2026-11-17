# Issue 3: Arsitektur Data Terstruktur & Bank Materi Lengkap (JSON Schema & Types)

## 📌 Deskripsi & Tujuan
Membangun fondasi data terstruktur dalam format JSON dan interface TypeScript yang mencakup seluruh konten edukasi dari PRD: **19 Aksara Lontara & Variasi Vokal**, **12 Kosa Kata Harian & Ilustrasi 3D**, serta **Bank Materi Bacaan Berjenjang Level 1 s/d 4** (Sapaan, Cerita, 7 Puisi/Kelong, Sumpah Angngaru, dan 4 Lagu Daerah).

---

## 🎯 Referensi PRD
* **Bagian 1.3:** Validasi Linguistik Penting (Aturan eja Lontara: "Kuttu" = `ᨀᨘᨈᨘ`, "Balla'" = `ᨅᨒ`).
* **Bagian 3.1 & 3.2:** Matriks 19 Aksara Dasar & Perubahan Tanda Baca Vokal (*Ki, Ku, Ke, Ko*).
* **Bagian 4.2:** Katalog Lengkap 12 Pasang Kartu Kosa Kata Sehari-hari.
* **Bagian 5.2 - 5.5:** Bank Materi Lengkap Level 1 (Pemula), Level 2 (Menengah), Level 3 (Mahir - 7 Puisi), dan Level 4 (Sastra Agung - Angngaru & Lagu Daerah).
* **Bagian 7.2:** Matriks 95 File Audio Pelafalan Aksara.

---

## 🛠️ Spesifikasi Teknis & Langkah Implementasi

### 1. Definisi TypeScript Interfaces (`src/types/index.ts`)
Buat kontrak tipe data yang aman dan kuat:

```typescript
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
  group: string;         // "Velar", "Labial", "Dental", "Palatal", "Approximant", "Glottal"
  row: number;           // 1 sampai 6
  vowels: Record<VowelType, VowelVariant>;
}

// --- Tipe Data Kosa Kata Dual-Card ---
export type VocabCategory = 'Sifat & Sikap' | 'Kegiatan Harian' | 'Emosi & Perasaan' | 'Benda & Tempat' | 'Benda & Alam' | 'Ukuran & Sifat';

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
  imageSrc?: string;          // Path gambar lokal
  soundFile: string;          // Path audio pelafalan
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
  titleLontara?: string;
  titleMakassar: string;
  titleIndonesian: string;
  category: 'sapaan' | 'cerita' | 'puisi' | 'angngaru' | 'lagu';
  stanzas: StanzaItem[];
  audioFile?: string;
}
```

### 2. Pembuatan File Data Aksara (`src/data/aksara.json`)
Struktur data 19 aksara disusun dalam 6 baris terstruktur:
* **Baris 1 (Velar):** KA (`ᨀ`), GA (`ᨁ`), NGA (`ᨂ`)
* **Baris 2 (Labial):** PA (`ᨄ`), BA (`ᨅ`), MA (`ᨆ`)
* **Baris 3 (Dental):** TA (`ᨈ`), DA (`ᨉ`), NA (`ᨊ`)
* **Baris 4 (Palatal):** CA (`ᨌ`), JA (`ᨍ`), NYA (`ᨎ`)
* **Baris 5 (Approximant):** YA (`ᨐ`), RA (`ᨑ`), LA (`ᨒ`)
* **Baris 6 (Glottal/Fricative):** WA (`ᨓ`), SA (`ᨔ`), A (`ᨕ`), HA (`ᨖ`)

Setiap karakter memiliki 5 entri vokal (*Ina' Surat*, *Tetti' Rirate*, *Tetti' Rirawa*, *Ana' Riolo*, *Ana' Riboko*).

### 3. Pembuatan File Data Kosa Kata (`src/data/kosakata.json`)
Masukkan ke-12 pasang kosa kata sesuai tabel PRD Bagian 4.2:
1. `kuttu`: `ᨀᨘᨈᨘ` - Kuttu - Malas (Sifat & Sikap)
2. `caradde`: `ᨌᨑᨉᨙ` - Caradde' - Pintar / Rajin (Sifat & Sikap)
3. `ngandre`: `ᨂᨉᨑᨙ` - Ngandre - Makan (Kegiatan Harian)
4. `angnginung`: `ᨕᨚᨊᨘ` - Angnginung - Minum (Kegiatan Harian)
5. `tinro`: `ᨈᨗᨊᨑᨚ` - Tinro - Tidur (Kegiatan Harian)
6. `alampa`: `ᨕᨒᨅ` - A'lampa - Berjalan / Pergi (Kegiatan Harian)
7. `rannu`: `ᨑᨊᨘ` - Rannu - Gembira / Senang (Emosi & Perasaan)
8. `laro`: `ᨒᨑᨚ` - Laro - Marah (Emosi & Perasaan)
9. `balla`: `ᨅᨒ` - Balla' - Rumah (Benda & Tempat)
10. `jene`: `ᨍᨙᨊᨙ` - Je'ne' - Air (Benda & Alam)
11. `lompo`: `ᨒᨚᨄᨚ` - Lompo - Besar (Ukuran & Sifat)
12. `cadi`: `ᨌᨉᨗ` - Ca'di - Kecil (Ukuran & Sifat)

### 4. Pembuatan File Data Bacaan (`src/data/bacaan.json`)
Sediakan seluruh materi bacaan lengkap dari PRD:
* **Level 1 (Pemula):** 8 Sapaan Pendek (L1-01 *Assalamu Alaikum*, L1-02 *Apa kareba?*, s/d L1-08 *Tarima kasi' Daeng*).
* **Level 2 (Menengah):** 2 Cerita Pendek (*Bari'basa' ri Balla'* & *A'lampa ri Pasaraka*).
* **Level 3 (Mahir):** 7 Puisi & Kelong Lengkap (*Boya Ilmu*, *Resopa Natemmangingngi*, *Siri' na Pacce*, *Kamaseang Amma'*, *Tuna ri Kale*, *Sombalangi Phinisiku*, *Sipakatau Sipakalabbi'*).
* **Level 4 (Sastra Agung):** Naskah Sumpah Setia *Angngaru* (3 Bait lengkap) & 4 Lirik Lagu Daerah (*Pakarena*, *Angin Mammiri*, *Anak Kukang*, *Ma'rencong-rencong*).

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria) — STATUS: SELESAI
- [x] Tersedia file interface TypeScript `src/types/index.ts` mendefinisikan `LontaraCharacter`, `VowelVariant`, `VocabularyItem`, dan `ReadingItem`.
- [x] File `src/data/aksara.json` memuat tepat 19 aksara dasar Lontara dengan 5 variasi vokal per karakter (total 95 konfigurasi fonetik lengkap).
- [x] File `src/data/kosakata.json` memuat 12 item kosa kata lengkap beserta prompt gambar AI Pixar 3D, terjemahan, dan kalimat contoh kontekstual.
- [x] File `src/data/bacaan.json` memuat bank materi Level 1 (8 Sapaan), Level 2 (2 Cerita), Level 3 (7 Puisi/Kelong), dan Level 4 (Teks Sumpah Angngaru & 4 Lagu Daerah) secara presisi tanpa ada bait yang terpotong.
- [x] Tersedia modul `src/data/index.ts` dengan fungsi pembantu (*helper functions*) untuk mengambil data berdasarkan id, baris fonetik, kategori kosa kata, dan level bacaan.

