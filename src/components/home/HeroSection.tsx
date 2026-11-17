import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Volume2 } from 'lucide-react';
import { CulturalIllustration } from '../common/CulturalIllustration';
import { useAudio } from '../../hooks/useAudio';

export const HeroSection: React.FC = () => {
  const { play } = useAudio();

  const handlePlayHeroLontara = () => {
    play('/audio/bacaan/hero_lontara.mp3', 'Aksara Lontara Makassar');
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-salaka-light via-salaka-base to-salaka-light">
      {/* Bingkai Ukiran Lamming Sudut Kiri & Kanan Atas */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 h-32 sm:h-48 pointer-events-none select-none opacity-40">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-bulaeng">
          <path d="M0 0 L100 0 L0 100 Z" fill="url(#lamming-corner-gradient-left)" opacity="0.15" />
          <path d="M0 20 L20 0 M0 40 L40 0 M0 60 L60 0 M0 80 L80 0 M0 100 L100 0" stroke="currentColor" strokeWidth="1.5" />
          <defs>
            <linearGradient id="lamming-corner-gradient-left" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8102E" />
              <stop offset="1" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 pointer-events-none select-none opacity-40 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-bulaeng">
          <path d="M0 0 L100 0 L0 100 Z" fill="url(#lamming-corner-gradient-right)" opacity="0.15" />
          <path d="M0 20 L20 0 M0 40 L40 0 M0 60 L60 0 M0 80 L80 0 M0 100 L100 0" stroke="currentColor" strokeWidth="1.5" />
          <defs>
            <linearGradient id="lamming-corner-gradient-right" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8102E" />
              <stop offset="1" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ornamen Garis Atas Lamming */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-eja via-bulaeng to-eja" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Utama 3 Kolom: Ilustrasi Kiri - Konten Tengah - Ilustrasi Kanan */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          
          {/* 1. Ilustrasi Kiri: Balla Lompoa & Phinisi */}
          <div className="order-2 lg:order-1 flex justify-center">
            <CulturalIllustration
              variant="left"
              alt="Balla Lompoa dan Kapal Phinisi"
              title="Balla Lompoa"
              subtitle="& Perahu Layar Phinisi"
              lontara="ᨅᨒ ᨒᨚᨄᨚ"
              src="/assets/ornaments/balla-lompoa.webp"
            />
          </div>

          {/* 2. Konten Utama Tengah (Hero Content) */}
          <div className="order-1 lg:order-2 flex-1 text-center max-w-3xl mx-auto">
            
            {/* Cultural Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-salaka-base/90 border border-bulaeng/60 text-xs font-bold text-eja mb-6 shadow-sm hover:border-eja transition-colors">
              <Sparkles size={14} className="text-bulaeng-dark" />
              <span>Platform Pembelajaran Digital Bahasa & Budaya Makassar</span>
            </div>

            {/* Display Title Aksara Lontara (72px Noto Sans Buginese) */}
            <div 
              onClick={handlePlayHeroLontara}
              className="group cursor-pointer inline-flex items-center justify-center gap-3 font-lontara text-6xl sm:text-7xl lg:text-8xl text-eja font-bold drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)] my-1 select-none hover:scale-105 transition-transform"
              title="Klik untuk mendengarkan pelafalan Aksara Lontara"
            >
              <span>ᨕᨀᨔᨑ ᨒᨚᨈᨑ</span>
              <Volume2 size={28} className="text-bulaeng-dark opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Subtitle Latin (Cinzel Decorative) */}
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-leleng tracking-[6px] uppercase mt-2">
              AKSARA LONTARA
            </h1>

            {/* Tagline Undangan Belajar */}
            <p className="text-lg sm:text-xl font-medium text-leleng-slate mt-4 max-w-2xl mx-auto leading-relaxed">
              "Mari Belajar Bahasa Makassar!"
            </p>
            <p className="text-sm text-leleng-body mt-1 max-w-xl mx-auto">
              Pelajari aksara tradisional melalui metode fonetik interaktif, kosa kata kartu kembar 3D, dan perpustakaan sastra berjenjang yang nyaman di mata.
            </p>

            {/* Tombol CTA Utama */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/aksara"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-eja hover:bg-eja-dark text-white font-bold text-base shadow-lg border-2 border-bulaeng-light hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <span>Mulai Belajar Sekarang</span>
                <ArrowRight size={20} className="text-bulaeng-light group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to="/kosakata"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-lontar-cream hover:bg-salaka-base text-leleng font-bold text-base shadow-sm border border-bulaeng/60 hover:border-eja transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles size={18} className="text-bulaeng-dark" />
                <span>Jelajahi Kosa Kata 3D</span>
              </Link>
            </div>

          </div>

          {/* 3. Ilustrasi Kanan: Sultan Hasanuddin & Kipas Pakarena */}
          <div className="order-3 flex justify-center">
            <CulturalIllustration
              variant="right"
              alt="Sultan Hasanuddin dan Tari Pakarena"
              title="Sultan Hasanuddin"
              subtitle="& Tari Pakarena Makassar"
              lontara="ᨔᨘᨒᨈ ᨖᨔᨊᨘᨉᨗ"
              src="/assets/ornaments/sultan-hasanuddin.webp"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

