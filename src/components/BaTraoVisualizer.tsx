import React, { useState, useEffect } from 'react';
import { BA_TRAO_ROLES } from '../data/cauNguData';
import { playSinhTien, playTrongLenh, playChiengCo, playMoTre } from '../utils/audioSynthesizer';

interface BaTraoVisualizerProps {
  isDataSaver?: boolean;
}

export const BaTraoVisualizer: React.FC<BaTraoVisualizerProps> = ({ isDataSaver = false }) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('tong-mui');
  const [activeVerseIndex, setActiveVerseIndex] = useState<number>(0);
  const [isMetronomeActive, setIsMetronomeActive] = useState<boolean>(false);
  const [activeBeat, setActiveBeat] = useState<number>(0);

  const currentRole = BA_TRAO_ROLES.find((r) => r.id === selectedRoleId) || BA_TRAO_ROLES[0];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRoleId(roleId);
    setActiveVerseIndex(0);
  };

  const handleNextVerse = () => {
    setActiveVerseIndex((prev) => (prev + 1) % currentRole.signatureVerse.lyrics.length);
    playMoTre();
  };

  // Metronome effect for traditional rowing cadence
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isMetronomeActive) {
      let beat = 0;
      interval = setInterval(() => {
        beat = (beat + 1) % 4;
        setActiveBeat(beat);
        if (beat === 0) {
          playTrongLenh(true); // Big drum on downbeat
        } else if (beat === 1) {
          playSinhTien(); // Coin click
        } else if (beat === 2) {
          playMoTre(); // Wooden beat
        } else {
          playSinhTien();
        }
      }, 550);
    } else {
      setActiveBeat(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMetronomeActive]);

  return (
    <section id="ba-trao" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
            <span>Diễn Xướng Dân Gian Nghi Lễ</span>
            <span aria-hidden="true">·</span>
            <span>Cầm Mái Chèo Hát Khấn Thần Nam Hải</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Nghệ Thuật Hát Múa Bả Trạo Nam Trung Bộ
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
            "Bả" là nắm giữ, "Trạo" là mái chèo. Toàn bộ đội hình diễn xướng đứng thành hình con thuyền rồng lướt sóng, tái hiện hành trình lao động can trường và lòng tri ân sâu nặng với Đức Ngư Ông.
          </p>
        </div>

        {/* Documentary Visual Banner (or lightweight canvas in data saver mode) */}
        {!isDataSaver ? (
          <div className="mb-8 bg-stone-100 border border-stone-200 rounded-sm overflow-hidden p-3 sm:p-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-4/3 sm:aspect-16/10 rounded-xs overflow-hidden bg-amber-950 border border-amber-900 p-4 flex flex-col justify-center items-center text-center text-amber-200">
                  <svg className="w-48 h-20 text-amber-400 mb-2" viewBox="0 0 200 60" fill="none">
                    <path d="M20 40 Q100 45 180 40 Q160 55 100 55 Q40 55 20 40 Z" fill="currentColor" fillOpacity="0.8" />
                    <line x1="30" y1="25" x2="30" y2="40" stroke="currentColor" strokeWidth="2" />
                    <line x1="100" y1="15" x2="100" y2="40" stroke="currentColor" strokeWidth="2.5" />
                    <line x1="170" y1="20" x2="170" y2="40" stroke="currentColor" strokeWidth="2" />
                    <circle cx="30" cy="22" r="4" fill="currentColor" />
                    <circle cx="100" cy="12" r="4" fill="currentColor" />
                    <circle cx="170" cy="17" r="4" fill="currentColor" />
                  </svg>
                  <span className="text-xs font-serif font-bold text-white uppercase tracking-wider">
                    Sơ Đồ Đội Hình Thuyền Rồng Bả Trạo (Tam Tổng & Trạo Phu)
                  </span>
                  <span className="text-[11px] text-amber-300/80 mt-1">
                    Tổng Mũi (trước) · Tổng Khoang (giữa) · Tổng Lái (sau)
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 text-stone-700 space-y-2.5">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-900 block">
                  Khảo tả điền dã nghệ thuật bả trạo
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Cấu Trúc Thuyền Chèo Linh Thiêng
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Đội bả trạo gồm từ 14 đến 20 nghệ nhân, trong đó cốt lõi là bộ ba "Tam Tổng": <strong>Tổng Mũi</strong> chỉ huy đầu thuyền, <strong>Tổng Khoang</strong> quán xuyến phần giữa tạo tiếng cười hóm hỉnh, và <strong>Tổng Lái</strong> vững tay chèo sau lái. Hai bên là hai hàng <strong>Trạo phu</strong> vung dầm chèo thếp vàng uốn lượn đồng bộ.
                </p>
                <div className="p-2.5 bg-amber-50/80 border border-amber-200/60 rounded-xs text-xs text-amber-950">
                  <strong>Âm hưởng cốt lõi:</strong> Hát Bội Đàng Trong hòa quyện Hò Mái Ba, điệu Nam Ai xúc động rơi nước mắt và khúc Nam Khách hào hùng vượt bão.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-6 p-4 bg-amber-50/70 border border-amber-200 rounded-sm text-xs text-amber-950 flex items-center justify-between">
            <div>
              <strong>Chế độ đọc nhanh (Tiết kiệm dữ liệu):</strong> Đã tối ưu tải siêu tốc, tập trung vào sơ đồ đội hình, văn bản lời hò và nhạc cụ âm thanh Web Audio offline.
            </div>
          </div>
        )}

        {/* Web Audio API Percussion Deck (0 bytes download, offline native sound) */}
        <div className="mb-8 p-4 bg-stone-900 text-stone-100 rounded-sm border border-stone-800 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800 text-xs">
            <div>
              <span className="text-amber-400 font-serif font-bold uppercase tracking-wider block">
                ✦ Bộ Nhạc Cụ Gõ Bả Trạo (Âm Thanh Không Tốn Mạng)
              </span>
              <span className="text-stone-400 text-[11px]">
                Mô phỏng âm thanh nhạc cụ lễ hội qua Web Audio API — hoạt động 100% khi mất mạng
              </span>
            </div>

            {/* Metronome Auto Beat Toggle */}
            <button
              onClick={() => setIsMetronomeActive(!isMetronomeActive)}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-xs text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                isMetronomeActive
                  ? 'bg-amber-600 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isMetronomeActive ? 'bg-stone-950 animate-ping' : 'bg-amber-400'}`} />
              <span>{isMetronomeActive ? 'Dừng Nhịp Chèo Tự Động' : 'Bật Nhịp Chèo Hát Mẫu'}</span>
            </button>
          </div>

          {/* 4 Interactive Drum/Percussion Buttons (touch friendly $\ge 44$px) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5">
            <button
              onClick={() => {
                playTrongLenh(true);
              }}
              className="min-h-[48px] p-2.5 bg-stone-800 hover:bg-amber-900/60 active:scale-95 transition-all rounded-xs text-left border border-stone-700 flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-xs text-white block">Trống Lệnh</span>
                <span className="text-[10px] text-stone-400">Trầm hùng, thúc giục</span>
              </div>
              <span className="text-lg">🥁</span>
            </button>

            <button
              onClick={() => {
                playSinhTien();
              }}
              className="min-h-[48px] p-2.5 bg-stone-800 hover:bg-amber-900/60 active:scale-95 transition-all rounded-xs text-left border border-stone-700 flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-xs text-white block">Phách Sinh Tiền</span>
                <span className="text-[10px] text-stone-400">Tiếng gỗ & đồng xu</span>
              </div>
              <span className="text-lg">🥢</span>
            </button>

            <button
              onClick={() => {
                playChiengCo();
              }}
              className="min-h-[48px] p-2.5 bg-stone-800 hover:bg-amber-900/60 active:scale-95 transition-all rounded-xs text-left border border-stone-700 flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-xs text-white block">Chiêng / Thanh La</span>
                <span className="text-[10px] text-stone-400">Ngân vang biển khơi</span>
              </div>
              <span className="text-lg">🔔</span>
            </button>

            <button
              onClick={() => {
                playMoTre();
              }}
              className="min-h-[48px] p-2.5 bg-stone-800 hover:bg-amber-900/60 active:scale-95 transition-all rounded-xs text-left border border-stone-700 flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-xs text-white block">Mõ Tre Giữ Nhịp</span>
                <span className="text-[10px] text-stone-400">Cốc cốc dứt khoát</span>
              </div>
              <span className="text-lg">🪵</span>
            </button>
          </div>
        </div>

        {/* Interactive Crew / Boat Staging View */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                Sơ Đồ Thuyền Chèo & Đội Ngũ Nghệ Nhân
              </h3>
              <p className="text-xs text-stone-500">
                Nhấp hoặc chạm vào từng vị trí trên thuyền để khảo tả vai trò, phục trang, đạo cụ và làn điệu tương ứng:
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-stone-400">Vị trí đang chọn:</span>
              <strong className="text-amber-900 font-semibold">{currentRole.name}</strong>
            </div>
          </div>

          {/* Stylized Visual Boat Deck Representation */}
          <div className="bg-stone-900 text-stone-100 p-5 sm:p-6 rounded-sm border border-stone-800 relative overflow-hidden">
            <div className="relative max-w-4xl mx-auto">
              <div className="text-center text-xs tracking-widest text-amber-400 font-serif mb-4 uppercase">
                ✦ MŨI THUYỀN RỒNG (HƯỚNG BIỂN KHƠI) ✦
              </div>

              {/* Bow (Tong Mui) */}
              <div className="flex justify-center mb-5">
                <button
                  onClick={() => handleRoleSelect('tong-mui')}
                  className={`min-h-[44px] px-5 py-2.5 rounded-sm transition-all border text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                    selectedRoleId === 'tong-mui'
                      ? 'bg-amber-600 text-white border-amber-400 shadow-md scale-105'
                      : 'bg-stone-800 text-amber-200 border-stone-700 hover:bg-stone-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Tổng Mũi (Tổng Tiền)</span>
                  <span className="text-[11px] opacity-75 font-serif">總前</span>
                </button>
              </div>

              {/* Middle Section: Left Oars - Center Tong Khoang - Right Oars */}
              <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center mb-5">
                {/* Left Oars (Trao Ta) */}
                <div className="col-span-4 flex flex-col items-end">
                  <button
                    onClick={() => handleRoleSelect('trao-ta')}
                    className={`w-full max-w-[190px] min-h-[44px] p-2.5 rounded-sm transition-all border text-xs font-medium text-right ${
                      selectedRoleId === 'trao-ta'
                        ? 'bg-sky-900 text-white border-sky-400 shadow-md'
                        : 'bg-stone-800/90 text-sky-200 border-stone-700 hover:bg-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-[11px] sm:text-xs">Hàng Trạo Tả (Trái)</div>
                    <div className="text-[9px] sm:text-[10px] text-stone-400">6 - 8 Mái chèo vàng</div>
                  </button>
                </div>

                {/* Mid (Tong Khoang) */}
                <div className="col-span-4 flex justify-center">
                  <button
                    onClick={() => handleRoleSelect('tong-khoang')}
                    className={`w-full max-w-[170px] min-h-[44px] p-2.5 sm:p-3 rounded-sm transition-all border text-xs sm:text-sm font-semibold text-center ${
                      selectedRoleId === 'tong-khoang'
                        ? 'bg-emerald-700 text-white border-emerald-400 shadow-md scale-105'
                        : 'bg-stone-800 text-emerald-200 border-stone-700 hover:bg-stone-700'
                    }`}
                  >
                    <div>Tổng Khoang</div>
                    <div className="text-[9px] sm:text-[10px] text-emerald-300 font-serif">總艙 (Gàu sòng)</div>
                  </button>
                </div>

                {/* Right Oars (Trao Huu) */}
                <div className="col-span-4 flex flex-col items-start">
                  <button
                    onClick={() => handleRoleSelect('trao-huu')}
                    className={`w-full max-w-[190px] min-h-[44px] p-2.5 rounded-sm transition-all border text-xs font-medium text-left ${
                      selectedRoleId === 'trao-huu'
                        ? 'bg-rose-900 text-white border-rose-400 shadow-md'
                        : 'bg-stone-800/90 text-rose-200 border-stone-700 hover:bg-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-[11px] sm:text-xs">Hàng Trạo Hữu (Phải)</div>
                    <div className="text-[9px] sm:text-[10px] text-stone-400">6 - 8 Mái chèo son</div>
                  </button>
                </div>
              </div>

              {/* Stern (Tong Lai) */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleRoleSelect('tong-lai')}
                  className={`min-h-[44px] px-6 py-2.5 rounded-sm transition-all border text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                    selectedRoleId === 'tong-lai'
                      ? 'bg-amber-600 text-white border-amber-400 shadow-md scale-105'
                      : 'bg-stone-800 text-amber-200 border-stone-700 hover:bg-stone-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Tổng Lái (Tổng Hậu)</span>
                  <span className="text-[11px] opacity-75 font-serif">總舵 (Tay chèo tỳ)</span>
                </button>
              </div>

              <div className="text-center text-xs tracking-widest text-stone-500 font-serif mt-4 uppercase">
                ✦ ĐUÔI THUYỀN RỒNG (HƯỚNG LĂNG ÔNG) ✦
              </div>
            </div>
          </div>
        </div>

        {/* Selected Role Detailed Inspector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Attributes and ethnographic description */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200 p-5 sm:p-7 rounded-sm shadow-xs space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs text-stone-400 uppercase tracking-widest block font-medium">
                  Vai trò diễn xướng
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  {currentRole.name}
                </h4>
              </div>
              <span className="text-lg sm:text-xl font-serif text-amber-800 font-bold bg-amber-50 px-2 py-0.5 border border-amber-200">
                {currentRole.titleCn}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
              {currentRole.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white border border-stone-200 rounded-xs">
                <strong className="text-stone-900 block font-serif uppercase tracking-wider mb-1">
                  Trang phục truyền thống
                </strong>
                <p className="text-stone-600 leading-relaxed">{currentRole.costume}</p>
              </div>

              <div className="p-3 bg-white border border-stone-200 rounded-xs">
                <strong className="text-stone-900 block font-serif uppercase tracking-wider mb-1">
                  Đạo cụ thiêng
                </strong>
                <p className="text-stone-600 leading-relaxed">{currentRole.prop}</p>
              </div>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-2">
                Các động tác múa & vũ đạo:
              </h5>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {currentRole.movements.map((move, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-800 font-bold">✦</span>
                    <span>{move}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Lyrics Prompter */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-100 p-5 sm:p-6 rounded-sm border border-stone-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs">
                <span className="text-amber-400 font-serif uppercase tracking-wider font-semibold">
                  Làn điệu: {currentRole.signatureVerse.melody}
                </span>
                <span className="text-stone-400 text-[11px]">Trích đoạn cổ truyền</span>
              </div>

              <div className="mt-3.5 mb-2 text-xs text-stone-400">
                <strong>Bối cảnh:</strong> {currentRole.signatureVerse.context}
              </div>

              {/* Verses prompter container */}
              <div className="my-4 p-4 bg-stone-950/80 rounded-xs border border-stone-800 font-serif space-y-2">
                {currentRole.signatureVerse.lyrics.map((line, idx) => {
                  const isCurrent = idx === activeVerseIndex;
                  return (
                    <div
                      key={idx}
                      className={`transition-all text-xs sm:text-sm leading-relaxed ${
                        isCurrent
                          ? 'text-amber-300 font-semibold translate-x-1'
                          : 'text-stone-400 opacity-70'
                      }`}
                    >
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive verse controls */}
            <div className="pt-3 border-t border-stone-800 flex items-center justify-between gap-3 text-xs">
              <span className="text-stone-400 text-[11px]">
                Nhịp {activeVerseIndex + 1} / {currentRole.signatureVerse.lyrics.length}
              </span>
              <button
                onClick={handleNextVerse}
                className="min-h-[44px] px-3.5 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xs transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Gõ Nhịp Kế Tiếp</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
