import React from 'react';
import { Volume2, Sparkles, Shield, Music, Bookmark } from 'lucide-react';
import { ReadingItem } from '../../types';

interface ReadingCanvasProps {
  item: ReadingItem;
  showLatin: boolean;
  showIndonesian: boolean;
  onPlayAudio?: (text: string) => void;
  isPlaying?: boolean;
}

export const ReadingCanvas: React.FC<ReadingCanvasProps> = ({
  item,
  showLatin,
  showIndonesian,
  onPlayAudio,
  isPlaying,
}) => {
  // Gabungkan seluruh teks Makassar untuk pemutaran audio menyeluruh jika diperlukan
  const fullMakassarText = item.stanzas.map((s) => s.makassar).join('. ');

  const getCulturalNote = (item: ReadingItem) => {
    if (item.category === 'angngaru') {
      return {
        title: 'Konteks Sakral Angngaru',
        icon: <Shield size={18} className="text-eja" />,
        text: 'Angngaru adalah ikrar sumpah setia sejati prajurit Tubarani kepada Raja Gowa (Sombaya) yang diucapkan dengan hunusan badik pusaka bergetar, menjanjikan pengorbanan jiwa dan raga demi kehormatan tanah Makassar.',
      };
    }
    if (item.id === 'l4-02') {
      return {
        title: 'Makna Tari & Lagu Pakarena',
        icon: <Music size={18} className="text-bulaeng-dark" />,
        text: 'Menggambarkan kelembutan, ketabahan, dan kesantunan perempuan Makassar yang bergerak anggun dengan kipas diiringi tabuhan gendang menggelegar.',
      };
    }
    if (item.id === 'l4-03') {
      return {
        title: 'Legenda Angin Mammiri',
        icon: <Music size={18} className="text-bulaeng-dark" />,
        text: 'Lagu legendaris karya Bora Dg. Irate yang mengamanatkan hembusan angin sepoi-sepoi untuk menyampaikan salam rindu kepada sang kekasih pujaan hati.',
      };
    }
    if (item.id === 'l3-03') {
      return {
        title: 'Falsafah Siri\' na Pacce',
        icon: <Sparkles size={18} className="text-eja" />,
        text: 'Siri\' (harga diri/martabat) dan Pacce (solidaritas empati kemanusiaan) merupakan fondasi moral tertinggi kepribadian masyarakat Bugis-Makassar.',
      };
    }
    return null;
  };

  const culturalNote = getCulturalNote(item);

  return (
    <div className="flex-1 bg-lontar-cream border-2 border-bulaeng/60 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
      {/* Pita Ornamen Lamming Atas */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-eja via-bulaeng to-eja" />

      <div>
        {/* Header Bacaan */}
        <div className="text-center pb-6 mb-8 border-b border-bulaeng/40 relative">
          {/* Tombol Audio Floating Pojok Kanan Atas */}
          {onPlayAudio && (
            <div className="sm:absolute sm:right-0 sm:top-0 mb-4 sm:mb-0 flex justify-center">
              <button
                onClick={() => onPlayAudio(fullMakassarText)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                  isPlaying
                    ? 'bg-bulaeng text-white animate-pulse'
                    : 'bg-salaka-light text-leleng hover:bg-eja hover:text-white border border-bulaeng/40'
                }`}
                title="Dengarkan pelafalan naskah ini"
              >
                <Volume2 size={16} className={isPlaying ? 'text-white' : 'text-eja'} />
                <span>{isPlaying ? 'Memutar Suara...' : 'Dengarkan Bacaan'}</span>
              </button>
            </div>
          )}

          {/* Badge Level & Kode */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-salaka-light border border-bulaeng/40 text-[11px] font-bold text-leleng-slate mb-3">
            <Bookmark size={12} className="text-eja" />
            <span>Naskah {item.code} &bull; Level {item.level}</span>
          </div>

          {/* Judul Aksara Lontara */}
          {item.titleLontara && (
            <h2 className="font-lontara text-4xl sm:text-5xl text-eja mb-2 leading-tight">
              {item.titleLontara}
            </h2>
          )}

          {/* Judul Latin Makassar */}
          <h3 className="text-2xl sm:text-3xl font-black text-leleng tracking-tight">
            {item.titleMakassar}
          </h3>

          {/* Terjemahan Judul Indonesia */}
          <p className="text-sm font-semibold text-bulaeng-dark mt-1 italic">
            "{item.titleIndonesian}"
          </p>
        </div>

        {/* Daftar Bait / Paragraf Bacaan */}
        <div className="space-y-6 sm:space-y-8">
          {item.stanzas.map((stanza, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/70 border border-salaka-border hover:border-bulaeng/60 transition-all shadow-sm"
            >
              {/* Penanda Nomor Bait jika lebih dari 1 */}
              {item.stanzas.length > 1 && (
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-salaka-border/60">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-bulaeng-dark">
                    Bait {idx + 1}
                  </span>
                  <span className="text-[10px] text-leleng-slate">
                    {idx + 1} dari {item.stanzas.length}
                  </span>
                </div>
              )}

              {/* 1. Aksara Lontara (Biru Navy) */}
              <div className="font-lontara text-2xl sm:text-3xl text-ink-navy leading-loose tracking-wide mb-3">
                {stanza.lontara}
              </div>

              {/* 2. Cara Baca Latin Makassar (Dapat di-toggle) */}
              {showLatin && (
                <div className="text-base sm:text-lg font-bold text-leleng mb-2 border-t border-salaka-border/60 pt-2.5">
                  {stanza.makassar}
                </div>
              )}

              {/* 3. Terjemahan Indonesia (Dapat di-toggle) */}
              {showIndonesian && (
                <div className="text-sm sm:text-base italic text-leleng-body leading-relaxed">
                  {stanza.indonesian}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Catatan Konteks Budaya (Jika ada) */}
      {culturalNote && (
        <div className="mt-8 pt-5 border-t border-bulaeng/40 bg-salaka-light/60 p-4 rounded-2xl border border-salaka-border">
          <div className="flex items-center gap-2 mb-1.5">
            {culturalNote.icon}
            <span className="text-xs font-black uppercase tracking-wider text-leleng">
              {culturalNote.title}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-leleng-body leading-relaxed">
            {culturalNote.text}
          </p>
        </div>
      )}
    </div>
  );
};

