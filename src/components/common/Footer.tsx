import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Grid, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-salaka-base/80 border-t border-bulaeng/40 text-leleng-body relative mt-auto overflow-hidden">
      {/* Decorative Lamming Top Ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-eja via-bulaeng to-eja" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Kolom 1: Branding & Visi */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-eja to-eja-dark flex items-center justify-center text-bulaeng-light font-display text-xl font-bold shadow-md border border-bulaeng/50">
                ᨒ
              </div>
              <span className="font-display font-black text-2xl tracking-wider text-eja">
                LONTARA<span className="text-bulaeng">KU</span>
              </span>
            </div>
            <p className="text-sm text-leleng-slate max-w-md leading-relaxed">
              Platform pembelajaran digital interaktif berbasis web untuk melestarikan dan memperdalam 
              <strong> Bahasa Makassar</strong> dan <strong>Aksara Lontara</strong> melalui perpaduan estetika 
              budaya tradisional Makassar, teknologi audio fonetik, dan ilustrasi visual 3D modern.
            </p>
            <div className="pt-2 text-xs text-bulaeng-dark font-serif italic">
              "Resopa natinulu, nallete pammase dewata." (Hanya dengan kerja keras dan ketekunan, rahmat Tuhan akan tercurah.)
            </div>
          </div>

          {/* Kolom 2: Navigasi Modul Pembelajaran */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-leleng mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-eja" />
              Modul Belajar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/aksara" className="text-leleng-slate hover:text-eja transition-colors flex items-center gap-2">
                  <Grid size={15} className="text-bulaeng-dark" />
                  <span>19 Aksara & Suara (Ina' Surat)</span>
                </Link>
              </li>
              <li>
                <Link to="/kosakata" className="text-leleng-slate hover:text-eja transition-colors flex items-center gap-2">
                  <Sparkles size={15} className="text-bulaeng-dark" />
                  <span>Kosa Kata Visual Dual-Card</span>
                </Link>
              </li>
              <li>
                <Link to="/bacaan" className="text-leleng-slate hover:text-eja transition-colors flex items-center gap-2">
                  <BookOpen size={15} className="text-bulaeng-dark" />
                  <span>Bacaan Berjenjang Level 1-4</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Warisan Budaya Makassar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-leleng mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bulaeng" />
              Warisan Budaya
            </h4>
            <ul className="space-y-2 text-xs text-leleng-slate">
              <li className="flex items-center gap-2">
                <span className="font-lontara text-base text-ink-navy">ᨅᨒ ᨒᨚᨄᨚ</span>
                <span>Balla Lompoa Gowa</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-lontara text-base text-ink-navy">ᨔᨘᨒᨈ ᨖᨔᨊᨘᨉᨗ</span>
                <span>Sultan Hasanuddin</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-lontara text-base text-ink-navy">ᨄᨗᨊᨗᨔᨗ</span>
                <span>Perahu Layar Phinisi</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-lontara text-base text-ink-navy">ᨕᨂᨑᨘ</span>
                <span>Ikrar Sumpah Angngaru</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Garis Batas Bawah & Copyright */}
        <div className="pt-6 border-t border-salaka-border flex flex-col sm:flex-row items-center justify-between text-xs text-leleng-slate gap-3">
          <p>
            &copy; 2026 <strong>LontaraKu</strong>. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="flex items-center gap-1.5 text-xs font-medium">
            <span>Didedikasikan untuk pelestarian budaya Makassar</span>
            <Heart size={14} className="text-eja fill-eja" />
          </p>
        </div>
      </div>
    </footer>
  );
};

