import React from 'react';
import { ActiveSection } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface HeroProps {
  onSelectSection: (section: ActiveSection) => void;
  isDataSaver: boolean;
  onToggleDataSaver: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectSection,
  isDataSaver,
  onToggleDataSaver,
}) => {
  return (
    <section className="border-b border-stone-200 bg-stone-100/60 pt-6 sm:pt-8 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header Info & Mobile Utilities Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-200/80">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
            <span>Hồ Sơ Di Sản Phi Vật Thể Quốc Gia</span>
            <span aria-hidden="true">·</span>
            <span>8 Tỉnh Duyên Hải Nam Trung Bộ</span>
          </div>

          {/* Quick Network & PWA utilities */}
          <div className="flex items-center gap-2.5">
            <PWAInstallButton />

            {/* Fast Mode / Data Saver Toggle */}
            <button
              onClick={onToggleDataSaver}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-semibold rounded-xs border transition-colors flex items-center gap-1.5 ${
                isDataSaver
                  ? 'bg-amber-900 text-white border-amber-800'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-300'
              }`}
              title="Chế độ tải nhanh không hình ảnh nặng dành cho điện thoại sóng yếu 3G/4G"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{isDataSaver ? 'Đang Bật Mạng Yếu (Tải Nhanh)' : 'Chế Độ Mạng Chậm'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight text-balance">
                Lễ Hội Cầu Ngư & Tín Ngưỡng Ngư Dân Nam Trung Bộ
              </h1>

              <p className="mt-2.5 sm:mt-3 text-xs sm:text-base font-serif italic text-amber-900 leading-relaxed">
                Biểu tượng kết tinh của đạo lý "uống nước nhớ nguồn", tình tương thân tương ái giữa con người với biển cả và nghệ thuật diễn xướng dân gian linh thiêng.
              </p>

              <div className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed space-y-2.5 font-normal">
                <p>
                  Suốt dải duyên hải từ Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận đến Bình Thuận, tín ngưỡng thờ Cá Ông (Đức Ngư Ông / Nam Hải Cự Tộc Ngọc Lân Tôn Thần) là điểm tựa tâm linh vững chãi nhất của cộng đồng vạn chài trước muôn trùng sóng gió đại dương.
                </p>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Ứng dụng được tối ưu hóa đặc biệt cho thiết bị di động, hoạt động ngoại tuyến khi mất sóng biển, hỗ trợ trực tiếp người dân làng chài, các bạn trẻ, sinh viên và cán bộ văn hóa cơ sở tra cứu tại hiện trường.
                </p>
              </div>
            </div>

            {/* Quick Action Navigation Bar (Touch targets $\ge 44$px on phone) */}
            <div className="mt-6 pt-5 border-t border-stone-300/80">
              <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2.5">
                Chuyên mục tra cứu & tác nghiệp điền dã:
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onSelectSection('handbook')}
                  className="min-h-[44px] px-3.5 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-stone-900 transition-all rounded-xs whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-2xs"
                >
                  <span>📋 Cẩm Nang Điền Dã Bỏ Túi</span>
                </button>
                <button
                  onClick={() => onSelectSection('ba-trao')}
                  className="min-h-[44px] px-3.5 py-2 text-xs font-semibold text-amber-950 bg-amber-100 hover:bg-amber-900 hover:text-white transition-all rounded-xs whitespace-nowrap shrink-0 flex items-center gap-1.5"
                >
                  <span>🚣 Hát Bả Trạo & Gõ Nhịp</span>
                </button>
                <button
                  onClick={() => onSelectSection('quiz')}
                  className="min-h-[44px] px-3.5 py-2 text-xs font-semibold text-stone-900 bg-stone-200/90 hover:bg-stone-900 hover:text-white transition-all rounded-xs whitespace-nowrap shrink-0 flex items-center gap-1.5"
                >
                  <span>🎯 Trắc Nghiệm Di Sản</span>
                </button>
                <button
                  onClick={() => onSelectSection('rituals')}
                  className="min-h-[44px] px-3.5 py-2 text-xs font-semibold text-stone-900 bg-stone-200/90 hover:bg-stone-900 hover:text-white transition-all rounded-xs whitespace-nowrap shrink-0"
                >
                  5 Bước Lễ Nghinh Ông
                </button>
                <button
                  onClick={() => onSelectSection('sites')}
                  className="min-h-[44px] px-3.5 py-2 text-xs font-semibold text-stone-900 bg-stone-200/90 hover:bg-stone-900 hover:text-white transition-all rounded-xs whitespace-nowrap shrink-0"
                >
                  8 Vạn Chài Tiêu Biểu
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Cultural Vector Motif */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {!isDataSaver ? (
              <div className="p-6 bg-amber-950 text-stone-100 rounded-sm border border-amber-900 shadow-sm space-y-3">
                <span className="text-amber-400 font-serif font-bold text-xs uppercase tracking-widest block">
                  ✦ BIỂU TƯỢNG VĂN HÓA BIỂN NAM TRUNG BỘ
                </span>
                <svg className="w-full h-24 text-amber-300" viewBox="0 0 320 80" fill="none">
                  <path d="M0 60 C30 50, 50 70, 80 60 C110 50, 130 70, 160 60 C190 50, 210 70, 240 60 C270 50, 290 70, 320 60 L320 80 L0 80 Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M70 54 Q160 58 250 54 Q235 68 160 69 Q85 68 70 54 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M160 22 L160 54 M160 24 L210 38 L160 44 Z" stroke="currentColor" strokeWidth="2" />
                </svg>
                <p className="text-xs text-stone-300 font-serif italic">
                  Nghinh Thủy Lục & Diễn xướng Bả Trạo: Tín ngưỡng thờ cúng cá Voi và tinh thần tương thân tương ái giữa đại dương.
                </p>
              </div>
            ) : (
              <div className="p-6 bg-stone-900 text-stone-100 rounded-sm border border-stone-800 space-y-3">
                <span className="text-amber-400 font-serif font-bold text-xs uppercase tracking-widest block">
                  ✦ BẢN TÓM TẮT HỒ SƠ DI SẢN (TIẾT KIỆM BĂNG THÔNG)
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Đại Càn Quốc Gia Nam Hải Cự Tộc Thượng Đẳng Thần
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-serif italic">
                  "Hải Nhược Trừng Thanh - Phong Điều Vũ Thuận - Quốc Thái Dân An"
                </p>
                <div className="text-xs text-stone-400 space-y-1.5 pt-2 border-t border-stone-800">
                  <p>✦ Không gian: Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận, Bình Thuận.</p>
                  <p>✦ Nghi lễ: Nghinh Ông trên biển, Túc yết, Tế Chánh cúng tam sinh, Hát Bả Trạo, Tống quái.</p>
                  <p>✦ Di sản: Được Bộ Văn hóa, Thể thao và Du lịch ghi danh Di sản Văn hóa Phi vật thể Quốc gia.</p>
                </div>
              </div>
            )}

            {/* Archival metadata strip */}
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-stone-700 bg-stone-50 border border-stone-200 p-3 rounded-xs text-xs">
              <div>
                <span className="text-stone-400 block text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">Đối tượng thờ</span>
                <strong className="text-stone-900 font-serif text-xs sm:text-sm">Nam Hải Cự Tộc</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">Địa bàn khảo tả</span>
                <strong className="text-stone-900 font-serif text-xs sm:text-sm">8 Tỉnh Duyên Hải</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">Lễ thức trọng tâm</span>
                <strong className="text-stone-900 font-serif text-xs sm:text-sm">Nghinh Thủy Lục</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">Diễn xướng thiêng</span>
                <strong className="text-stone-900 font-serif text-xs sm:text-sm">Hò Chèo Bả Trạo</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
