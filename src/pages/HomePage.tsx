import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ModulePreview } from '../components/home/ModulePreview';
import { LammingDivider } from '../components/common/LammingDivider';
import { Sparkles, Shield, Heart, Award } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* 1. Hero Section Budaya */}
      <HeroSection />

      {/* 2. Pembatas Ornamen Geometris Lamming */}
      <div className="max-w-6xl mx-auto px-4">
        <LammingDivider />
      </div>

      {/* 3. Tiga Kartu Pintasan Modul Pembelajaran */}
      <ModulePreview />

      {/* 4. Nilai Luhur Budaya & Keunggulan Platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-salaka-base/50 border border-bulaeng/40 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-leleng">
              Mengapa Belajar di LontaraKu?
            </h3>
            <p className="text-sm text-leleng-slate mt-2">
              Menggabungkan pelestarian nilai kearifan lokal Sulawesi Selatan dengan teknologi belajar modern yang ergonomis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-lontar-cream border border-bulaeng/40 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-eja/10 flex items-center justify-center text-eja mb-4">
                <Sparkles size={24} />
              </div>
              <h4 className="font-bold text-base text-leleng">Audio Fonetik Asli</h4>
              <p className="text-xs text-leleng-body mt-2 leading-relaxed">
                95 variasi bunyi suku kata Lontara dengan audio pelafalan asli dan simulasi tanda baca vokal interaktif.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-lontar-cream border border-bulaeng/40 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-bulaeng/15 flex items-center justify-center text-bulaeng-dark mb-4">
                <Award size={24} />
              </div>
              <h4 className="font-bold text-base text-leleng">Ilustrasi Visual 3D</h4>
              <p className="text-xs text-leleng-body mt-2 leading-relaxed">
                Menghafal kosa kata lebih cepat dengan kartu kembar berpasangan dan ilustrasi 3D Pixar kontekstual.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-lontar-cream border border-bulaeng/40 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-eja/10 flex items-center justify-center text-eja mb-4">
                <Shield size={24} />
              </div>
              <h4 className="font-bold text-base text-leleng">Sastra Klasik Lengkap</h4>
              <p className="text-xs text-leleng-body mt-2 leading-relaxed">
                Menyediakan 7 puisi & Kelong, naskah ikrar sakral Sumpah Angngaru, dan 4 lagu daerah Makassar legendaris.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-lontar-cream border border-bulaeng/40 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-salaka-metallic/60 flex items-center justify-center text-leleng-slate mb-4">
                <Heart size={24} />
              </div>
              <h4 className="font-bold text-base text-leleng">Nyaman di Mata</h4>
              <p className="text-xs text-leleng-body mt-2 leading-relaxed">
                Palet warna Modern Silver Lamming dirancang khusus untuk kenyamanan membaca dalam durasi lama tanpa lelah.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
