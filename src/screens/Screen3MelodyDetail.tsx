import React, { useState, useEffect } from 'react';
import { MELODIES_DATA } from '../data/cauNguData';
import { playSinhTien, playTrongLenh, playChiengCo, playMoTre } from '../utils/audioSynthesizer';
import { getStandardGloss } from '../utils/localGlossary';

interface Screen3MelodyDetailProps {
  melodyId: string;
  onBackToMelodies: () => void;
  onSelectMelody: (id: string) => void;
}

export const Screen3MelodyDetail: React.FC<Screen3MelodyDetailProps> = ({
  melodyId,
  onBackToMelodies,
  onSelectMelody,
}) => {
  const currentMelody = MELODIES_DATA.find((m) => m.id === melodyId) || MELODIES_DATA[0];
  const currentIndex = MELODIES_DATA.findIndex((m) => m.id === currentMelody.id);

  const prevMelody = MELODIES_DATA[(currentIndex - 1 + MELODIES_DATA.length) % MELODIES_DATA.length];
  const nextMelody = MELODIES_DATA[(currentIndex + 1) % MELODIES_DATA.length];

  const [isMetronomeActive, setIsMetronomeActive] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Play appropriate instrument preset when opening screen
  useEffect(() => {
    setIsMetronomeActive(false);
  }, [melodyId]);

  // Metronome for singing along
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isMetronomeActive) {
      let beat = 0;
      interval = setInterval(() => {
        beat = (beat + 1) % 4;
        if (currentMelody.audioPreset === 'sinh-tien') {
          if (beat === 0) playTrongLenh(false);
          else playSinhTien();
        } else if (currentMelody.audioPreset === 'trong-lenh') {
          if (beat === 0) playTrongLenh(true);
          else playTrongLenh(false);
        } else if (currentMelody.audioPreset === 'chieng-co') {
          if (beat === 0) playChiengCo();
          else playTrongLenh(false);
        } else {
          if (beat === 0) playMoTre();
          else playSinhTien();
        }
      }, 550);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMetronomeActive, currentMelody.audioPreset]);

  const handleCopyLyrics = () => {
    const fullText = `LÀN ĐIỆU BẢ TRẠO: ${currentMelody.name} (${currentMelody.titleCn})\n` +
      `Tên gọi bản địa: ${currentMelody.name} — Vai diễn: ${currentMelody.role}\n` +
      `Chú giải tiếng Việt phổ thông: ${getStandardGloss(currentMelody.name)}\n` +
      `Sắc thái: ${currentMelody.moodLabel} · Địa bàn: ${currentMelody.region}\n` +
      `----------------------------------------\n\n` +
      currentMelody.lyrics.stanzas
        .map((s) => `[${s.speaker}]\n${s.text.join('\n')}`)
        .join('\n\n') +
      `\n\nÝ NGHĨA:\n${currentMelody.lyrics.explanation}`;

    navigator.clipboard.writeText(fullText).then(() => {
      setCopyFeedback('Đã sao chép toàn bộ lời ca làn điệu vào bộ nhớ tạm.');
      setTimeout(() => setCopyFeedback(null), 3000);
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      {/* Top Navigation Bar: Back & Next/Prev */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200 text-xs">
        <button
          onClick={onBackToMelodies}
          className="min-h-[40px] px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-xs transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Quay lại Danh sách Làn điệu (Màn hình 2)</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectMelody(prevMelody.id)}
            className="min-h-[36px] px-3 py-1 bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 rounded-xs transition-colors"
            title={`Điệu trước: ${prevMelody.name}`}
          >
            ← Điệu trước
          </button>
          <span className="text-stone-400 font-mono">
            {currentIndex + 1} / {MELODIES_DATA.length}
          </span>
          <button
            onClick={() => onSelectMelody(nextMelody.id)}
            className="min-h-[36px] px-3 py-1 bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 rounded-xs transition-colors"
            title={`Điệu kế tiếp: ${nextMelody.name}`}
          >
            Điệu kế tiếp →
          </button>
        </div>
      </div>

      {/* Copy Notification Toast */}
      {copyFeedback && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xs flex items-center gap-2 animate-fadeIn">
          <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>{copyFeedback}</span>
        </div>
      )}

      {/* Main Title & Role Header */}
      <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-1.5">
              <span>Màn Hình 3</span>
              <span aria-hidden="true">·</span>
              <span>Khảo Tả Chi Tiết Làn Điệu</span>
              <span aria-hidden="true">·</span>
              <span>{currentMelody.role}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900">
              {currentMelody.name}
            </h1>
          </div>
          <span className="text-xl sm:text-2xl font-serif font-bold text-amber-900 bg-amber-50 px-3.5 py-1.5 border border-amber-200 rounded-xs">
            {currentMelody.titleCn}
          </span>
        </div>

        {/* Tên gọi bản địa song song chú giải tiếng Việt phổ thông */}
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xs space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
            <span className="font-bold text-amber-900 uppercase tracking-wider">
              ✦ Tên gọi bản địa & Vai diễn:
            </span>
            <span className="text-stone-700 font-serif italic">
              {currentMelody.name} — {currentMelody.role}
            </span>
          </div>
          <div className="pt-2 border-t border-amber-200/80 text-xs sm:text-sm">
            <strong className="text-amber-950 font-semibold block mb-0.5">
              Chú giải tiếng Việt phổ thông:
            </strong>
            <p className="text-amber-950 font-serif leading-relaxed">
              "{getStandardGloss(currentMelody.name)}"
            </p>
          </div>
        </div>

        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          {currentMelody.description}
        </p>

        {/* Structural Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 bg-stone-50 border border-stone-200 p-4 rounded-xs text-xs sm:text-sm">
          <div>
            <span className="text-stone-500 block font-semibold uppercase tracking-wider text-[11px] mb-0.5">Sắc thái âm nhạc</span>
            <p className="text-stone-900 font-semibold">{currentMelody.moodLabel}</p>
          </div>
          <div>
            <span className="text-stone-500 block font-semibold uppercase tracking-wider text-[11px] mb-0.5">Thang âm & Tiết tấu</span>
            <p className="text-stone-900 font-semibold">{currentMelody.musicalStructure.scale}</p>
          </div>
          <div>
            <span className="text-stone-500 block font-semibold uppercase tracking-wider text-[11px] mb-0.5">Địa bàn đặc trưng</span>
            <p className="text-stone-900 font-semibold">{currentMelody.region}</p>
          </div>
        </div>
      </div>

      {/* Interactive Sound Synthesizer & Practice Station */}
      <div className="bg-stone-900 text-stone-100 p-5 sm:p-6 rounded-sm border border-stone-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800 text-xs sm:text-sm">
          <div>
            <span className="text-amber-400 font-serif font-bold uppercase tracking-wider block text-sm sm:text-base">
              ✦ Trình Gõ Nhịp Đệm Theo Làn Điệu (Offline Web Audio)
            </span>
            <span className="text-stone-400 text-xs">
              Tự động giữ nhịp để sinh viên và người trẻ tập hát theo lời ca cổ truyền
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMetronomeActive(!isMetronomeActive)}
              className={`min-h-[44px] px-4 py-2 rounded-xs text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isMetronomeActive
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${isMetronomeActive ? 'bg-stone-950 animate-ping' : 'bg-amber-400'}`} />
              <span>{isMetronomeActive ? 'Dừng Nhịp Đệm' : 'Bật Nhịp Chèo Tự Động'}</span>
            </button>
          </div>
        </div>

        {/* 4 Interactive Percussion Taps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => playTrongLenh(true)}
            className="min-h-[48px] p-3 bg-stone-800 hover:bg-amber-900/60 active:scale-95 transition-all rounded-xs text-left border border-stone-700 flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="font-medium">Trống Lệnh 🥁</span>
            <span className="text-xs text-amber-300 font-mono">Tùng</span>
          </button>
          <button
            onClick={() => playSinhTien()}
            className="min-h-[48px] p-3 bg-stone-800 hover:bg-amber-900/60 active:scale-95 transition-all rounded-xs text-left border border-stone-700 flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="font-medium">Phách Tiền 🥢</span>
            <span className="text-xs text-amber-300 font-mono">Cắc</span>
          </button>
          <button
            onClick={() => playChiengCo()}
            className="min-h-[48px] p-3 bg-stone-800 hover:bg-amber-900/60 active:scale-95 transition-all rounded-xs text-left border border-stone-700 flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="font-medium">Chiêng Cổ 🔔</span>
            <span className="text-xs text-amber-300 font-mono">Boong</span>
          </button>
          <button
            onClick={() => playMoTre()}
            className="min-h-[48px] p-3 bg-stone-800 hover:bg-amber-900/60 active:scale-95 transition-all rounded-xs text-left border border-stone-700 flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="font-medium">Mõ Tre 🪵</span>
            <span className="text-xs text-amber-300 font-mono">Cốc</span>
          </button>
        </div>
      </div>

      {/* Full Lyrics Presentation (Phân vai rõ ràng, Chữ Lớn Dễ Đọc) */}
      <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-amber-900 block">
              Văn Bản Lời Hò Cổ Truyền
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Toàn Văn Lời Ca & Phân Vai Xướng - Xô
            </h2>
          </div>
          <button
            onClick={handleCopyLyrics}
            className="min-h-[44px] px-4 py-2 bg-stone-900 hover:bg-amber-900 text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors flex items-center gap-2 shadow-2xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <span>Sao Chép Lời Ca</span>
          </button>
        </div>

        {/* Stanzas Display with Large Font Size */}
        <div className="space-y-4 font-serif text-stone-900">
          {currentMelody.lyrics.stanzas.map((stanza, sIdx) => (
            <div
              key={sIdx}
              className={`p-5 sm:p-6 rounded-xs border leading-relaxed ${
                stanza.speaker.includes('Xô') || stanza.speaker.includes('Trạo')
                  ? 'bg-amber-50/70 border-amber-200 text-amber-950 italic'
                  : 'bg-stone-50 border-stone-200 text-stone-900'
              }`}
            >
              <span className="text-xs sm:text-sm font-sans uppercase font-bold tracking-wider text-amber-900 block mb-2.5 not-italic">
                ✦ {stanza.speaker}:
              </span>
              <div className="space-y-2 text-base sm:text-lg md:text-xl font-serif">
                {stanza.text.map((t, tIdx) => (
                  <p key={tIdx} className="leading-relaxed">{t}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Explanation of meaning */}
        <div className="p-4 sm:p-5 bg-stone-100/90 border border-stone-200 rounded-xs text-xs sm:text-sm text-stone-700 space-y-1.5">
          <strong className="text-stone-900 block uppercase tracking-wider font-sans text-xs">
            Ý nghĩa nội dung & văn hóa:
          </strong>
          <p className="leading-relaxed">{currentMelody.lyrics.explanation}</p>
        </div>
      </div>

      {/* Choreography & Costumes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Choreography */}
        <div className="bg-white border border-stone-200 p-6 rounded-sm shadow-xs space-y-3">
          <h3 className="font-serif font-bold text-lg text-stone-900 pb-2 border-b border-stone-100">
            Vũ Đạo & Động Tác Dầm Chèo
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {currentMelody.choreography.map((ch, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-amber-800 font-serif font-bold text-base leading-none">✦</span>
                <span>{ch}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Costume and props */}
        <div className="bg-white border border-stone-200 p-6 rounded-sm shadow-xs space-y-3">
          <h3 className="font-serif font-bold text-lg text-stone-900 pb-2 border-b border-stone-100">
            Trang Phục & Đạo Cụ Thiêng
          </h3>
          <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xs text-xs text-stone-700 leading-relaxed space-y-2">
            <p><strong>Y phục cổ truyền:</strong> {currentMelody.costumeAndProps}</p>
            <p><strong>Bối cảnh thực hành:</strong> {currentMelody.culturalContext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
