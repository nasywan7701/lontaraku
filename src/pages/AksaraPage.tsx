import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Volume2, Info } from 'lucide-react';
import { aksaraData } from '../data';
import { AksaraGrid } from '../components/aksara/AksaraGrid';
import { AksaraModal } from '../components/aksara/AksaraModal';
import { LammingDivider } from '../components/common/LammingDivider';
import { useAudio } from '../hooks/useAudio';
import { LontaraCharacter } from '../types';

export const AksaraPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<LontaraCharacter | null>(null);
  const { play, activeSoundId } = useAudio();

  const handleSelectCharacter = (item: LontaraCharacter) => {
    setSelectedCharacter(item);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  const handlePlayQuickAudio = (e: React.MouseEvent, soundFile: string, text: string) => {
    e.stopPropagation();
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
          19 Huruf Dasar (Ina' Surat)
        </span>
      </div>

      {/* Header Halaman Aksara */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-salaka-base border border-bulaeng/50 text-xs font-bold text-eja mb-4 shadow-sm">
          <Sparkles size={14} className="text-bulaeng-dark" />
          <span>MODUL 1: 19 AKSARA DASAR LONTARA MAKASSAR</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-leleng tracking-tight">
          19 Aksara Dasar (Ina' Surat)
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-eja via-bulaeng to-eja mx-auto my-3 rounded-full" />
        <p className="text-sm sm:text-base text-leleng-slate leading-relaxed">
          Tabel fonetik 19 aksara Lontara Makassar yang terbagi dalam 6 baris kaidah linguistik. Klik tombol speaker untuk mendengarkan bunyi huruf, atau klik kartu untuk memperbesar dan mensimulasikan perubahan vokal <em>(Ki, Ku, Ke, Ko)</em>.
        </p>
      </div>

      {/* Petunjuk Penggunaan Cepat */}
      <div className="bg-lontar-cream border border-bulaeng/40 rounded-2xl p-4 mb-8 max-w-4xl mx-auto flex items-center gap-3 shadow-sm text-xs text-leleng-slate">
        <div className="w-8 h-8 rounded-xl bg-eja/10 text-eja flex items-center justify-center flex-shrink-0">
          <Info size={18} />
        </div>
        <div>
          <strong className="text-leleng font-bold">Tips Belajar:</strong> Klik pada kartu huruf mana saja untuk membuka jendela <strong>Pop-Up Zoom 120px</strong> dan mendengarkan pelafalan tanda baca vokal <em>Ana' Surat</em> secara langsung.
        </div>
      </div>

      {/* Grid 19 Aksara Lontara dalam 6 Baris Terstruktur */}
      <div className="max-w-5xl mx-auto">
        <AksaraGrid
          characters={aksaraData}
          onSelectCharacter={handleSelectCharacter}
          onPlayAudio={handlePlayQuickAudio}
          activeSoundId={activeSoundId}
        />
      </div>

      {/* Pembatas Ornamen Lamming Bawah */}
      <div className="max-w-5xl mx-auto mt-12">
        <LammingDivider />
      </div>

      {/* Modal Pop-Up Zoom Aksara & Selektor Vokal Interaktif (Issue 7) */}
      <AksaraModal
        item={selectedCharacter}
        onClose={handleCloseModal}
      />
    </div>
  );
};
