import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, BookOpen, Volume2, Info } from 'lucide-react';
import { kosakataData, getKosakataCategories } from '../data';
import { CategoryFilter } from '../components/kosakata/CategoryFilter';
import { DualCardPair } from '../components/kosakata/DualCardPair';
import { LammingDivider } from '../components/common/LammingDivider';
import { useAudio } from '../hooks/useAudio';
import { VocabCategory } from '../types';

export const KosakataPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VocabCategory>('Semua');
  const { play, activeSoundId } = useAudio();

  const categories = useMemo(() => getKosakataCategories(), []);

  // Hitung jumlah item per kategori
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Semua: kosakataData.length };
    kosakataData.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter daftar kosa kata berdasarkan kategori aktif
  const filteredVocab = useMemo(() => {
    if (activeCategory === 'Semua') return kosakataData;
    return kosakataData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handlePlayAudio = (soundFile: string, text: string) => {
    play(soundFile, text);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigasi */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-leleng-slate hover:text-eja transition-colors px-3 py-1.5 rounded-lg hover:bg-salaka-base"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>
        <span className="text-xs font-semibold text-bulaeng-dark">
          12 Kosa Kata Sehari-hari (Dual-Card)
        </span>
      </div>

      {/* Header Halaman Kosa Kata */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-salaka-base border border-bulaeng/50 text-xs font-bold text-eja mb-4 shadow-sm">
          <Sparkles size={14} className="text-bulaeng-dark" />
          <span>MODUL 2: SISTEM KARTU KEMBAR DUAL-CARD</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-leleng tracking-tight">
          Kosa Kata Bahasa Makassar Sehari-hari
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-eja via-bulaeng to-eja mx-auto my-3 rounded-full" />
        <p className="text-sm sm:text-base text-leleng-slate leading-relaxed">
          Hubungkan goresan aksara Lontara dengan kata bahasa Makassar dan ilustrasi 3D kehidupan sehari-hari. <strong>Kartu Kiri</strong> menampilkan aksara Lontara & terjemahan, sedangkan <strong>Kartu Kanan</strong> menyertakan kata tebal, audio pelafalan, dan gambar visual kontekstual.
        </p>
      </div>

      {/* Petunjuk Belajar */}
      <div className="bg-lontar-cream border border-bulaeng/40 rounded-2xl p-4 mb-8 max-w-4xl mx-auto flex items-center gap-3 shadow-sm text-xs text-leleng-slate">
        <div className="w-8 h-8 rounded-xl bg-eja/10 text-eja flex items-center justify-center flex-shrink-0">
          <Info size={18} />
        </div>
        <div>
          <strong className="text-leleng font-bold">Catatan Linguistik PM:</strong> Huruf Lontara tradisional tidak menuliskan konsonan akhir mati (glotal) atau konsonan ganda, sehingga kata <em>Kuttu</em> ditulis <em>Ku-Tu</em> (<strong>ᨀᨘᨈᨘ</strong>) dan <em>Balla'</em> ditulis <em>Ba-La</em> (<strong>ᨅᨒ</strong>).
        </div>
      </div>

      {/* Bar Filter Kategori */}
      <div className="mb-10 max-w-5xl mx-auto">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={categoryCounts}
        />
      </div>

      {/* Grid Katalog Pasangan Kartu (Dual-Card Pairs) */}
      <div className="max-w-5xl mx-auto space-y-8">
        {filteredVocab.map((item) => (
          <DualCardPair
            key={item.id}
            item={item}
            onPlayAudio={handlePlayAudio}
            isPlaying={activeSoundId === item.soundFile || activeSoundId === item.makassarWord}
          />
        ))}

        {filteredVocab.length === 0 && (
          <div className="bg-lontar-cream border-2 border-dashed border-bulaeng/40 rounded-3xl p-12 text-center max-w-md mx-auto">
            <p className="text-base font-bold text-leleng">Tidak ada kosa kata pada kategori ini.</p>
            <button
              onClick={() => setActiveCategory('Semua')}
              className="mt-3 px-4 py-2 rounded-full bg-eja text-white text-xs font-bold"
            >
              Kembali ke Semua Kategori
            </button>
          </div>
        )}
      </div>

      {/* Pembatas Ornamen Lamming Bawah */}
      <div className="max-w-5xl mx-auto mt-14">
        <LammingDivider />
      </div>

      {/* Callout Menuju Modul Bacaan */}
      <div className="max-w-4xl mx-auto mt-8 bg-salaka-base/60 border border-bulaeng/40 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-bulaeng-dark">
            Langkah Belajar Selanjutnya
          </span>
          <h3 className="text-xl font-black text-leleng mt-1">
            Siap Membaca Kalimat Panjang & Cerita?
          </h3>
          <p className="text-xs sm:text-sm text-leleng-slate mt-1 max-w-xl">
            Terapkan kosa kata yang telah dipelajari dalam modul Perpustakaan Bacaan Berjenjang Level 1 s/d Level 4.
          </p>
        </div>
        <Link
          to="/bacaan"
          className="px-6 py-3 rounded-full bg-eja hover:bg-eja-dark text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md border border-bulaeng-light flex-shrink-0 hover:scale-105 transition-all"
        >
          <BookOpen size={18} />
          <span>Buka Perpustakaan Bacaan ➔</span>
        </Link>
      </div>
    </div>
  );
};
