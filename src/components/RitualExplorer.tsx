import React, { useState } from 'react';
import { RITUAL_STEPS } from '../data/cauNguData';
import { RitualStep } from '../types';

export const RitualExplorer: React.FC = () => {
  const [selectedStepId, setSelectedStepId] = useState<string>(RITUAL_STEPS[1].id); // Default to Nghinh Ong Thuy Luc
  const currentStep = RITUAL_STEPS.find((s) => s.id === selectedStepId) || RITUAL_STEPS[0];

  return (
    <section id="rituals" className="py-12 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
            <span>Tiến Trình Nghi Lễ Cổ Truyền</span>
            <span aria-hidden="true">·</span>
            <span>Khảo Tả Điền Dã Văn Khấn & Đại Lễ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Khảo Tả Đại Lễ Nghinh Ông Nam Trung Bộ
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Đại lễ Cầu ngư diễn ra từ 2 đến 3 ngày đêm, kết hợp hài hòa giữa phần "Lễ" trang nghiêm cung kính với phần "Hội" sôi nổi, phóng khoáng của dân chài miền biển.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-stone-200 mb-8 scrollbar-none">
          {RITUAL_STEPS.map((step) => {
            const isActive = step.id === selectedStepId;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStepId(step.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-all rounded-xs whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs font-semibold'
                    : 'bg-stone-200/70 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span className="font-serif italic text-amber-300 font-bold">
                  0{step.order}.
                </span>
                <span>{step.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Main Ritual Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Detailed Step Documentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-100 text-xs">
                <span className="font-semibold text-amber-900 uppercase tracking-wider">
                  Giai đoạn 0{currentStep.order} / 05
                </span>
                <span className="text-stone-500 font-medium">
                  Thời gian: <strong className="text-stone-800">{currentStep.timeSlot}</strong>
                </span>
              </div>

              <h3 className="mt-4 text-xl sm:text-2xl font-serif font-bold text-stone-900">
                {currentStep.title}
              </h3>

              <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed italic font-serif">
                "{currentStep.shortDesc}"
              </p>

              {/* Spatial and Personnel metadata */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 border border-stone-200/80 p-4 rounded-xs text-xs">
                <div>
                  <span className="text-stone-400 block font-medium uppercase tracking-wider mb-1">Địa điểm tiến hành</span>
                  <p className="text-stone-800 font-medium">{currentStep.location}</p>
                </div>
                <div>
                  <span className="text-stone-400 block font-medium uppercase tracking-wider mb-1">Chủ tế & Tham gia</span>
                  <p className="text-stone-800 font-medium">{currentStep.keyActors.join(', ')}</p>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-stone-200/60">
                  <span className="text-stone-400 block font-medium uppercase tracking-wider mb-1">Lễ vật hiến cúng</span>
                  <p className="text-stone-800">{currentStep.offerings.join(' · ')}</p>
                </div>
              </div>

              {/* Detailed Procedures */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-3">
                  Trình tự thực hành nghi lễ:
                </h4>
                <ol className="space-y-3">
                  {currentStep.detailedSteps.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                      <span className="font-serif font-bold text-amber-800 shrink-0 text-base leading-none mt-0.5">
                        {index + 1}.
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Spiritual significance */}
              <div className="mt-6 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xs">
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-950 mb-1">
                  Ý nghĩa tâm linh & cố kết cộng đồng:
                </h4>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {currentStep.significance}
                </p>
              </div>

              {/* Traditional Chant Snippet if available */}
              {currentStep.chantSnippet && (
                <div className="mt-6 pt-5 border-t border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-stone-500">
                      Văn khấn cổ truyền: {currentStep.chantSnippet.title}
                    </span>
                    <span className="text-[11px] text-amber-800 font-medium">Bản ghi điền dã Hán-Nôm</span>
                  </div>
                  <div className="bg-stone-900 text-stone-100 p-4 sm:p-5 rounded-xs font-serif italic text-sm sm:text-base leading-loose border-l-2 border-amber-600">
                    {currentStep.chantSnippet.verse.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                    <div className="mt-3 pt-3 border-t border-stone-700 text-xs font-sans not-italic text-stone-400">
                      <strong>Ý nghĩa:</strong> {currentStep.chantSnippet.meaning}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Visual Anchor & Festive Activities */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual asset */}
            <div className="bg-white border border-stone-200 p-5 rounded-sm shadow-xs space-y-3">
              <div className="p-5 bg-amber-950 rounded-xs text-amber-200 flex flex-col items-center justify-center text-center space-y-2">
                <svg className="w-16 h-16 text-amber-400" viewBox="0 0 64 64" fill="none">
                  <path d="M12 44 H52 M20 44 L24 24 H40 L44 44 M32 16 V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="32" cy="12" r="3" fill="currentColor" />
                </svg>
                <span className="font-serif font-bold text-white text-sm">
                  Nghi Lễ Tế Tự & Thiết Chế Vạn Chài
                </span>
              </div>
              <div className="text-xs text-stone-600 space-y-1">
                <p className="font-semibold text-stone-900">
                  Hội đồng Trị sự & Các Bô lão Vạn chài
                </p>
                <p className="text-stone-500 text-[11px] leading-relaxed">
                  Trang phục áo dài gấm ngũ thân màu lam, đầu đội khăn đóng đen, đứng nghiêm cẩn trước bàn hương án đá ngoài sân Lăng trong nghi thức tế chánh rạng sáng.
                </p>
              </div>
            </div>

            {/* Folk Games / Phần Hội Làng Chài */}
            <div className="bg-white border border-stone-200 p-6 rounded-sm shadow-xs">
              <h4 className="text-sm font-serif font-bold text-stone-900 uppercase tracking-wider mb-3 pb-2 border-b border-stone-100">
                Phần Hội: Sức Sống Vạn Chài Trên Bãi Biển
              </h4>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Sau khi phần Lễ kết thúc, tiếng trống hội gióng lên khai mạc các trò chơi dân gian mang đậm tinh thần thượng võ và tài nghệ sông nước:
              </p>

              <div className="space-y-3.5 text-xs">
                <div className="p-3 bg-stone-50 border border-stone-200/80 rounded-xs">
                  <div className="font-bold text-stone-900 mb-1 flex items-center justify-between">
                    <span>1. Đua Thuyền Tứ Linh / Thuyền Rồng</span>
                    <span className="text-[11px] text-amber-800 font-normal">Quy mô lớn</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Các vạn chài cử những tay chèo dũng mãnh nhất thi tài trên biển hoặc cửa vịnh, tranh cúp Cầu ngư lấy may cho cả năm đánh bắt.
                  </p>
                </div>

                <div className="p-3 bg-stone-50 border border-stone-200/80 rounded-xs">
                  <div className="font-bold text-stone-900 mb-1 flex items-center justify-between">
                    <span>2. Lắc Thúng Chai Vượt Sóng</span>
                    <span className="text-[11px] text-amber-800 font-normal">Kỹ năng sinh tồn</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Ngư dân đứng trên chiếc thúng tròn tròng trành, dùng sức mạnh hông và đôi chân điêu luyện lắc thúng lướt nhanh qua ngọn sóng bạc.
                  </p>
                </div>

                <div className="p-3 bg-stone-50 border border-stone-200/80 rounded-xs">
                  <div className="font-bold text-stone-900 mb-1 flex items-center justify-between">
                    <span>3. Kéo Co Trên Cát & Đan Lưới Nhanh</span>
                    <span className="text-[11px] text-amber-800 font-normal">Gắn kết cộng đồng</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Thu hút đông đảo phụ nữ, thanh niên và du khách tham gia cổ vũ, tiếng cười giòn tan rộn rã khắp bờ biển.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
