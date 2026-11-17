import React, { useState, useMemo, useEffect } from 'react';
import { BookOpen, ArrowLeft, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bacaanData } from '../data';
import { ReadingItem } from '../types';
import { ReadingSidebar } from '../components/bacaan/ReadingSidebar';
import { ReadingCanvas } from '../components/bacaan/ReadingCanvas';
import { ReadingControls } from '../components/bacaan/ReadingControls';
import { useAudio } from '../hooks/useAudio';

export const BacaanPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  // Load preferences from localStorage with fallback
  const [showLatin, setShowLatin] = useState<boolean>(() => {
    const saved = localStorage.getItem('lontaraku_show_latin');
    return saved !== null ? saved === 'true' : true;
  });

  const [showIndonesian, setShowIndonesian] = useState<boolean>(() => {
    const saved = localStorage.getItem('lontaraku_show_indo');
    return saved !== null ? saved === 'true' : true;
  });

  // Save to localStorage whenever user changes toggle
  useEffect(() => {
    localStorage.setItem('lontaraku_show_latin', String(showLatin));
  }, [showLatin]);

  useEffect(() => {
    localStorage.setItem('lontaraku_show_indo', String(showIndonesian));
  }, [showIndonesian]);

  // Ambil daftar bacaan sesuai level terpilih
  const currentLevelItems = useMemo(() => {
    return bacaanData.filter((item) => item.level === selectedLevel);
  }, [selectedLevel]);

  // State naskah terpilih (default: item pertama dari level aktif)
  const [selectedItem, setSelectedItem] = useState<ReadingItem>(() => {
    return bacaanData.find((item) => item.level === 1) || bacaanData[0];
  });

  // Handler pergantian tab level
  const handleLevelChange = (lvl: number) => {
    setSelectedLevel(lvl);
    const firstItemOfLevel = bacaanData.find((item) => item.level === lvl);
    if (firstItemOfLevel) {
      setSelectedItem(firstItemOfLevel);
    }
  };

  // Audio Hook
  const { playAudio, stopAudio, isPlaying } = useAudio();

  const handleToggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      const fullMakassarText = selectedItem.stanzas.map((s) => s.makassar).join('. ');
      playAudio(selectedItem.audioFile, `${selectedItem.titleMakassar}. ${fullMakassarText}`);
    }
  };

  const levelTabs = [
    {
      level: 1,
      title: 'Level 1: Pemula',
      subtitle: '8 Kalimat & Sapaan Pendek',
    },
    {
      level: 2,
      title: 'Level 2: Menengah',
      subtitle: '2 Cerita Kehidupan Harian',
    },
    {
      level: 3,
      title: 'Level 3: Mahir',
      subtitle: '7 Puisi & Kelong Falsafah',
    },
    {
      level: 4,
      title: 'Level 4: Sastra Agung',
      subtitle: 'Angngaru & 4 Lagu Daerah',
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigasi */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-leleng-slate hover:text-eja transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>

        {/* Indikator Progres Level */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-bulaeng-dark">
          <Layers size={14} />
          <span>Tersedia 22 Naskah Lengkap</span>
        </div>
      </div>

      {/* Header Halaman Utama */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-eja/10 border border-eja/20 text-xs font-bold text-eja mb-3">
          <BookOpen size={14} className="text-eja" />
          <span>MODUL 3: PERPUSTAKAAN BACAAN BERJENJANG</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-leleng tracking-tight">
          Perpustakaan Bacaan Aksara Lontara
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-eja to-bulaeng mx-auto my-3 rounded-full" />
        <p className="text-sm sm:text-base text-leleng-slate max-w-2xl mx-auto">
          Tingkatkan kemahiran membaca dari kalimat sapaan pemula hingga karya sastra klasik Makassar seperti Ikrar Sumpah Tubarani (*Angngaru*) dan nyanyian legendaris.
        </p>
      </div>

      {/* Navigasi 4 Tab Level (Horizontal) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {levelTabs.map((tab) => {
          const isActive = selectedLevel === tab.level;

          return (
            <button
              key={tab.level}
              onClick={() => handleLevelChange(tab.level)}
              className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all duration-200 text-left relative ${
                isActive
                  ? 'bg-eja border-bulaeng text-white shadow-md'
                  : 'bg-salaka-light border-salaka-border/80 text-leleng hover:border-bulaeng/60 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs sm:text-sm font-black ${
                    isActive ? 'text-white' : 'text-leleng'
                  }`}
                >
                  {tab.title}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-bulaeng animate-ping" />
                )}
              </div>
              <p
                className={`text-[11px] font-medium leading-tight ${
                  isActive ? 'text-white/80' : 'text-leleng-slate'
                }`}
              >
                {tab.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Komponen ReadingControls (Issue 10 Feature) */}
      <ReadingControls
        showLatin={showLatin}
        setShowLatin={setShowLatin}
        showIndonesian={showIndonesian}
        setShowIndonesian={setShowIndonesian}
        isPlaying={isPlaying}
        onToggleAudio={handleToggleAudio}
        hasAudio={true}
        title={selectedItem.titleMakassar}
        category={selectedItem.category}
      />

      {/* Two-Column Reading Workspace */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Kolom Kiri: Sidebar Daftar Naskah */}
        <ReadingSidebar
          items={currentLevelItems}
          selectedId={selectedItem.id}
          onSelectItem={(item) => setSelectedItem(item)}
          level={selectedLevel}
        />

        {/* Kolom Kanan: Kanvas Membaca Utama */}
        {selectedItem && (
          <ReadingCanvas
            item={selectedItem}
            showLatin={showLatin}
            showIndonesian={showIndonesian}
            onPlayAudio={handleToggleAudio}
            isPlaying={isPlaying}
          />
        )}
      </div>
    </div>
  );
};
