import React from 'react';
import { AppScreen } from '../types';

interface FooterProps {
  onNavigate: (screen: AppScreen) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-stone-800">
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif font-bold text-xl text-white tracking-tight">
              Hồ Sơ Di Sản Lễ Hội Cầu Ngư Nam Trung Bộ
            </h3>
            <p className="text-stone-400 leading-relaxed max-w-md text-xs sm:text-sm">
              Công trình số hóa lưu trữ và khảo tả tri thức dân gian về tín ngưỡng thờ cúng Cá Ông (Nam Hải Cự Tộc Ngọc Lân Tôn Thần), lễ nghinh thủy lục và nghệ thuật diễn xướng hát múa Bả Trạo vùng duyên hải miền Trung.
            </p>
            <div className="text-[11px] text-amber-400 font-serif">
              Di sản Văn hóa Phi vật thể cấp Quốc gia · Bộ Văn hóa, Thể thao & Du lịch
            </div>
          </div>

          {/* Quick Screen Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-semibold text-stone-100 uppercase tracking-widest text-[11px]">
              6 Màn Hình Chuyên Sâu
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Màn hình 1: Trang Chủ & Địa Bàn
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('melodies')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Màn hình 2: Kho Làn Điệu Bả Trạo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Màn hình 4: Hỏi Đáp Di Sản
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sources-community')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Màn hình 5: Nguồn Tư Liệu & Ký Ức
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Màn hình 6: Giới Thiệu
                </button>
              </li>
            </ul>
          </div>

          {/* 8 Coastal Provinces */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="font-semibold text-stone-100 uppercase tracking-widest text-[11px]">
              Địa Bàn 8 Tỉnh Thành Duyên Hải
            </h4>
            <div className="flex flex-wrap gap-1.5 text-stone-400 text-[11px]">
              <span className="p-1.5 bg-stone-800/80 rounded-xs">Đà Nẵng</span>
              <span className="p-1.5 bg-stone-800/80 rounded-xs">Quảng Nam</span>
              <span className="p-1.5 bg-stone-800/80 rounded-xs">Quảng Ngãi</span>
              <span className="p-1.5 bg-stone-800/80 rounded-xs">Bình Định</span>
              <span className="p-1.5 bg-stone-800/80 rounded-xs">Phú Yên</span>
              <span className="p-1.5 bg-stone-800/80 rounded-xs">Khánh Hòa</span>
              <span className="p-1.5 bg-stone-800/80 rounded-xs">Ninh Thuận</span>
              <span className="p-1.5 bg-stone-800/80 rounded-xs">Bình Thuận</span>
            </div>
            <p className="text-[11px] text-stone-500 pt-2 leading-relaxed">
              Tối ưu cho thiết bị di động, hoạt động ngoại tuyến khi mất sóng biển, phục vụ bà con làng chài, thanh thiếu niên, sinh viên và cán bộ văn hóa cơ sở.
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Hồ Sơ Số Di Sản Cầu Ngư Nam Trung Bộ. Bảo lưu mọi quyền nghiên cứu & sưu tầm.
          </div>
          <div className="flex items-center gap-4">
            <span>Dữ liệu điền dã dân gian</span>
            <span aria-hidden="true">·</span>
            <span>Tư liệu chữ Nôm & Sắc phong triều Nguyễn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
