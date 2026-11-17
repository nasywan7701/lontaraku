import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Grid, Sparkles, BookOpen, Volume2 } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';

export const ModulePreview: React.FC = () => {
  const { play } = useAudio();

  const handleQuickAudio = (e: React.MouseEvent, soundFile: string, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    play(soundFile, text);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Seksi Modul */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-salaka-base/80 border border-bulaeng/40 text-xs font-bold text-leleng-slate mb-3">
          <span>ALUR BELAJAR SISTEMATIS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-leleng tracking-tight">
          Pilih Modul Pembelajaran
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-eja to-bulaeng mx-auto my-3 rounded-full" />
        <p className="text-sm sm:text-base text-leleng-slate max-w-2xl mx-auto">
          Mulai dari mengenal bentuk dan bunyi 19 aksara dasar, memperkaya kosa kata harian dengan visual 3D, hingga membaca karya sastra Makassar berjenjang.
        </p>
      </div>

      {/* Grid 3 Kartu Modul */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* KARTU 1: MODUL AKSARA */}
        <div className="group relative bg-lontar-cream border-2 border-bulaeng/50 hover:border-eja rounded-3xl p-8 shadow-sm hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          {/* Top Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 rounded-full bg-eja/10 text-eja font-bold text-xs">
              Modul 1
            </span>
            <button
              onClick={(e) => handleQuickAudio(e, '/audio/aksara/ka.mp3', 'Ka')}
              className="p-2 rounded-full bg-salaka-light text-eja hover:bg-eja hover:text-white transition-colors shadow-sm"
              title="Dengarkan contoh bunyi aksara Ka"
            >
              <Volume2 size={18} />
            </button>
          </div>

          <div>
            <div className="w-16 h-16 rounded-2xl bg-salaka-light border border-bulaeng/50 flex items-center justify-center text-ink-navy font-lontara text-4xl mb-4 group-hover:scale-110 group-hover:bg-eja/10 transition-transform">
              ᨀ
            </div>
            <h3 className="text-2xl font-black text-leleng group-hover:text-eja transition-colors">
              19 Aksara & Suara
            </h3>
            <p className="text-sm text-leleng-body mt-2.5 leading-relaxed">
              Pelajari 19 huruf dasar Lontara (<em>Ina' Surat</em>) lengkap dengan audio pelafalan fonetik asli dan simulasi tanda baca vokal (<em>Ki, Ku, Ke, Ko</em>).
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-salaka-border">
            <Link
              to="/aksara"
              className="w-full py-3 px-4 rounded-xl bg-salaka-light group-hover:bg-eja text-leleng group-hover:text-white font-bold text-xs flex items-center justify-between transition-colors shadow-sm"
            >
              <span>Buka Modul 19 Aksara</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* KARTU 2: MODUL KOSA KATA DUAL-CARD */}
        <div className="group relative bg-lontar-cream border-2 border-bulaeng/50 hover:border-eja rounded-3xl p-8 shadow-sm hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          {/* Top Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 rounded-full bg-bulaeng/15 text-bulaeng-dark font-bold text-xs">
              Modul 2
            </span>
            <span className="text-xs font-semibold text-leleng-slate">
              12 Kosa Kata 3D
            </span>
          </div>

          <div>
            <div className="w-16 h-16 rounded-2xl bg-salaka-light border border-bulaeng/50 flex items-center justify-center text-bulaeng-dark text-3xl mb-4 group-hover:scale-110 group-hover:bg-bulaeng/10 transition-transform">
              ✨
            </div>
            <h3 className="text-2xl font-black text-leleng group-hover:text-eja transition-colors">
              Kosa Kata Dual-Card
            </h3>
            <p className="text-sm text-leleng-body mt-2.5 leading-relaxed">
              Sistem kartu kembar berpasangan menghubungkan aksara Lontara, arti Bahasa Indonesia, dan kata Makassar dengan ilustrasi 3D kehidupan sehari-hari.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-salaka-border">
            <Link
              to="/kosakata"
              className="w-full py-3 px-4 rounded-xl bg-salaka-light group-hover:bg-eja text-leleng group-hover:text-white font-bold text-xs flex items-center justify-between transition-colors shadow-sm"
            >
              <span>Jelajahi Kosa Kata 3D</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* KARTU 3: MODUL BACAAN BERJENJANG */}
        <div className="group relative bg-lontar-cream border-2 border-bulaeng/50 hover:border-eja rounded-3xl p-8 shadow-sm hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          {/* Top Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 rounded-full bg-salaka-base text-leleng font-bold text-xs border border-salaka-border">
              Modul 3
            </span>
            <span className="text-xs font-semibold text-leleng-slate">
              Level 1 s/d 4
            </span>
          </div>

          <div>
            <div className="w-16 h-16 rounded-2xl bg-salaka-light border border-bulaeng/50 flex items-center justify-center text-eja text-3xl mb-4 group-hover:scale-110 group-hover:bg-eja/10 transition-transform">
              📖
            </div>
            <h3 className="text-2xl font-black text-leleng group-hover:text-eja transition-colors">
              Bacaan Berjenjang
            </h3>
            <p className="text-sm text-leleng-body mt-2.5 leading-relaxed">
              Perpustakaan berjenjang dari sapaan pemula, cerita harian, kumpulan 7 puisi & Kelong, hingga naskah sakral Sumpah <em>Angngaru</em> dan 4 lagu daerah.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-salaka-border">
            <Link
              to="/bacaan"
              className="w-full py-3 px-4 rounded-xl bg-salaka-light group-hover:bg-eja text-leleng group-hover:text-white font-bold text-xs flex items-center justify-between transition-colors shadow-sm"
            >
              <span>Mulai Membaca Sastra</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

