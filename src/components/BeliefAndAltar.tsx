import React, { useState } from 'react';
import { IMPERIAL_EDICTS } from '../data/cauNguData';
import { ImperialEdict } from '../types';

export const BeliefAndAltar: React.FC = () => {
  const [selectedEdictId, setSelectedEdictId] = useState<string>(IMPERIAL_EDICTS[0].id);
  const activeEdict = IMPERIAL_EDICTS.find((e) => e.id === selectedEdictId) || IMPERIAL_EDICTS[0];

  return (
    <section id="belief" className="py-12 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
            <span>Hệ Thống Tín Ngưỡng Dân Gian</span>
            <span aria-hidden="true">·</span>
            <span>Tục Tang Lễ Cá Voi & Thiết Chế Lăng Thờ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Tín Ngưỡng Thờ Cá Ông & Sắc Phong Triều Nguyễn
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Trong tâm thức ngư dân Nam Trung Bộ, cá Voi không phải loài thủy tộc thông thường mà là vị thần hộ mạng có lòng nhân từ bao la, sẵn sàng che chở sinh mạng con người giữa cuồng phong bão dữ.
          </p>
        </div>

        {/* Visual sanctuary showcase */}
        <div className="mb-10 bg-white border border-stone-200 rounded-sm overflow-hidden p-4 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-4/3 rounded-xs overflow-hidden bg-amber-950 border border-amber-900 p-6 flex flex-col justify-center items-center text-center text-amber-100">
                <svg className="w-20 h-20 text-amber-300 mb-3" viewBox="0 0 100 100" fill="none">
                  <path d="M10 80 H90 M20 80 V45 L50 25 L80 45 V80" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M50 25 L50 15 M40 18 H60" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
                <h3 className="font-serif font-bold text-lg text-white">
                  Thiết Chế Lăng Thờ Nam Hải & Ngọc Cốt Thiêng
                </h3>
                <p className="text-xs text-amber-300/80 mt-1 max-w-sm">
                  Chánh điện Lăng Nam Hải: Án ngọc chạm lộng hoa văn long vân, bảo tồn ngọc cốt và các bản sắc phong vua ban lộng lẫy.
                </p>
              </div>
              <p className="mt-2 text-xs text-stone-500 italic font-serif">
                Thiết chế kiến trúc tôn nghiêm của cộng đồng ngư dân duyên hải miền Trung.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4 text-stone-700">
              <div className="text-xs uppercase tracking-widest font-bold text-amber-900">
                Thiết chế không gian tâm linh
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Kiến Trúc Lăng Ông Điển Hình
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Mỗi lăng Ông Nam Hải ở miền Trung thường quay mặt về hướng Đông (hướng biển), cấu trúc gồm ba gian chính liên hoàn:
              </p>

              <div className="space-y-3 text-xs">
                <div className="border-l-2 border-amber-800 pl-3">
                  <strong className="text-stone-900 block font-serif text-sm">Tiền đường (Sân khấu thiêng)</strong>
                  <p className="text-stone-600 mt-0.5">Nơi thực hiện nghi thức tế lễ bái vọng, trình diễn Hát Bả Trạo và tập trung đội nhạc cổ bát âm.</p>
                </div>
                <div className="border-l-2 border-amber-800 pl-3">
                  <strong className="text-stone-900 block font-serif text-sm">Chánh điện (Án ngọc trung tâm)</strong>
                  <p className="text-stone-600 mt-0.5">Đặt khám thờ sơn son thếp vàng, bài vị Nam Hải Tôn Thần, án tả ban hữu ban và các đạo sắc phong triều đình.</p>
                </div>
                <div className="border-l-2 border-amber-800 pl-3">
                  <strong className="text-stone-900 block font-serif text-sm">Hậu tẩm / Thượng đình cốt</strong>
                  <p className="text-stone-600 mt-0.5">Nơi linh thiêng nhất, bảo quản các thạp sành và tủ kính chứa hàng chục đến hàng trăm bộ ngọc cốt cá Ông được cải táng qua nhiều thế kỷ.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 3-Year Whale Burial Ritual (Tục Táng Ông Lụy) */}
        <div className="mb-12 bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs">
          <div className="max-w-3xl mb-6">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-900 block mb-1">
              Nghi thức tang lễ cổ truyền
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Quy Thức Tang Lễ Khi "Ông Lụy" & Tục Táng Cát 3 Năm
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
              Khi cá Ông trôi dạt vào bờ, vạn chài tiến hành nghi lễ an táng trang trọng tột bậc theo quy định cổ truyền bất thành văn:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-700 text-xs sm:text-sm">
            <div className="p-4 bg-stone-50 border border-stone-200/90 rounded-xs space-y-2">
              <span className="font-serif font-bold text-amber-800 text-lg block">01. Trưởng Nam Chịu Tang</span>
              <h4 className="font-bold text-stone-900">Người Phát Hiện Đầu Tiên</h4>
              <p className="text-stone-600 leading-relaxed text-xs">
                Bất kể địa vị, người đầu tiên phát hiện Ông lụy trên bờ cát được tôn xưng là <strong>Trưởng nam của Thần</strong>. Người này chịu đại tang 3 năm: mặc áo gai thô, đội mũ rơm, chống gậy trúc quỳ tế trước linh cữu suốt thời gian táng tế.
              </p>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200/90 rounded-xs space-y-2">
              <span className="font-serif font-bold text-amber-800 text-lg block">02. Táng Cát Trắng Thanh Sạch</span>
              <h4 className="font-bold text-stone-900">Huyệt Táng Trên Bãi Rạng</h4>
              <p className="text-stone-600 leading-relaxed text-xs">
                Toàn vạn dừng chuyến đi biển, tập trung kéo thi thể Ông lên đụn cát cao nguyên vẹn không sứt mẻ. Thân xác được quấn bằng vải đỏ (nhiễu điều) hoặc chiếu hoa mới tinh, tẩm hương liệu, lấp cát trắng mịn sâu dưới lòng đất.
              </p>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200/90 rounded-xs space-y-2">
              <span className="font-serif font-bold text-amber-800 text-lg block">03. Thượng Ngọc Cốt Nhập Lăng</span>
              <h4 className="font-bold text-stone-900">Lễ Cải Táng Sau 3 Năm</h4>
              <p className="text-stone-600 leading-relaxed text-xs">
                Sau 36 tháng, vạn chài làm lễ khai quật. Từng đốt xương được rửa sạch bằng rượu trắng tinh khiết ngâm quế hồi, xếp thứ tự vào thạp da lươn hoặc quách gỗ, rước về an vị vĩnh hằng trong Thượng đình cốt Lăng Ông.
              </p>
            </div>
          </div>
        </div>

        {/* Imperial Edicts Digitization Section */}
        <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6 pb-3 border-b border-stone-100">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-900 block">
                Văn bản pháp quy cổ triều Nguyễn
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Kho Sắc Phong Cung Đình Dành Cho Thần Nam Hải
              </h3>
            </div>
            <p className="text-xs text-stone-500 max-w-md">
              Các triều vua Gia Long, Minh Mạng, Thiệu Trị, Tự Đức, Đồng Khánh, Khải Định đều ban sắc phong tôn vinh Cá Voi là Thượng Đẳng Tôn Thần.
            </p>
          </div>

          {/* Edict Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {IMPERIAL_EDICTS.map((edict) => (
              <button
                key={edict.id}
                onClick={() => setSelectedEdictId(edict.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                  edict.id === selectedEdictId
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {edict.reign} ({edict.year.split(' ')[0]})
              </button>
            ))}
          </div>

          {/* Selected Edict Viewer Card */}
          <div className="bg-stone-50 border border-stone-200 p-6 rounded-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                Chi tiết đạo sắc phong
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900">
                {activeEdict.conferredTitle}
              </h4>
              <div className="text-xs space-y-1.5 text-stone-600">
                <p><strong>Triều đại:</strong> {activeEdict.reign}</p>
                <p><strong>Niên hiệu:</strong> {activeEdict.year}</p>
                <p><strong>Nơi lưu giữ sắc gốc:</strong> {activeEdict.recipient}</p>
              </div>

              {/* Chinese / Han Nom Excerpt in seal style */}
              <div className="p-4 bg-amber-950 text-amber-200 font-serif text-sm tracking-widest text-center rounded-xs border border-amber-800/60 shadow-inner">
                {activeEdict.hannoExcerpt}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 bg-white border border-stone-200 rounded-xs">
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-900 block mb-1">
                  Bản dịch nghĩa Quốc ngữ:
                </span>
                <p className="font-serif italic text-sm sm:text-base text-stone-800 leading-relaxed">
                  "{activeEdict.translation}"
                </p>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xs">
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-950 block mb-1">
                  Ý nghĩa lịch sử & chủ quyền biển đảo:
                </span>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {activeEdict.significance}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
