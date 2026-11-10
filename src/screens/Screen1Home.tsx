import React, { useState, useMemo } from 'react';
import { HERITAGE_SITES } from '../data/cauNguData';
import { AppScreen } from '../types';
import { PWAInstallButton } from '../components/PWAInstallButton';

interface Screen1HomeProps {
  onNavigate: (screen: AppScreen, extraId?: string) => void;
  isDataSaver: boolean;
  onToggleDataSaver: () => void;
  onOpenQuickSearch: () => void;
}

export const Screen1Home: React.FC<Screen1HomeProps> = ({
  onNavigate,
  isDataSaver,
  onToggleDataSaver,
  onOpenQuickSearch,
}) => {
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [siteSearch, setSiteSearch] = useState<string>('');

  const provinces = useMemo(() => {
    const list = Array.from(new Set(HERITAGE_SITES.map((s) => s.province)));
    return ['all', ...list];
  }, []);

  const filteredSites = useMemo(() => {
    return HERITAGE_SITES.filter((site) => {
      const matchProv = selectedProvince === 'all' || site.province === selectedProvince;
      const matchSearch =
        siteSearch.trim() === '' ||
        site.name.toLowerCase().includes(siteSearch.toLowerCase()) ||
        site.address.toLowerCase().includes(siteSearch.toLowerCase()) ||
        site.province.toLowerCase().includes(siteSearch.toLowerCase());
      return matchProv && matchSearch;
    });
  }, [selectedProvince, siteSearch]);

  return (
    <div className="space-y-10">
      {/* Hero Marquee & Search Center */}
      <section className="bg-stone-100/70 border-b border-stone-200 pt-6 sm:pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Curatorial & Utility Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-200">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
              <span>Màn Hình 1</span>
              <span aria-hidden="true">·</span>
              <span>Hồ Sơ Số Di Sản Quốc Gia</span>
              <span aria-hidden="true">·</span>
              <span>Cộng Đồng & Địa Bàn Nam Trung Bộ</span>
            </div>

            <div className="flex items-center gap-2">
              <PWAInstallButton />
              <button
                onClick={onToggleDataSaver}
                className={`min-h-[36px] px-3 py-1.5 text-xs font-semibold rounded-xs border transition-colors flex items-center gap-1.5 ${
                  isDataSaver
                    ? 'bg-amber-900 text-white border-amber-800'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-300'
                }`}
                title="Bật/Tắt chế độ siêu nhẹ cho điện thoại và mạng yếu"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{isDataSaver ? 'Mạng Yếu (Tải Nhanh)' : 'Chế Độ Mạng Chậm'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                Lễ Hội Cầu Ngư & Tín Ngưỡng Ngư Dân Nam Trung Bộ
              </h1>

              <p className="text-xs sm:text-base font-serif italic text-amber-900 leading-relaxed">
                Hồ sơ số khoa học và kho tư liệu sống dành cho cộng đồng làng chài, lớp trẻ, sinh viên và người làm công tác văn hóa cơ sở dọc 8 tỉnh duyên hải miền Trung.
              </p>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Từ <strong>Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận đến Bình Thuận</strong>, tín ngưỡng thờ Cá Ông (Đức Ngư Ông / Nam Hải Cự Tộc Ngọc Lân Tôn Thần) cùng nghệ thuật diễn xướng hát múa Bả Trạo là điểm tựa tâm linh kiên vững, kết nối đạo lý nghĩa tình của người đi biển.
              </p>

              {/* Central Search Box in Screen 1 */}
              <div className="pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                  Tra cứu nhanh toàn bộ hồ sơ di sản:
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Tìm làn điệu, vạn chài, lễ nghi, sắc phong, thuật ngữ..."
                      onClick={onOpenQuickSearch}
                      readOnly
                      className="w-full min-h-[46px] bg-white border border-stone-300 hover:border-amber-800 rounded-xs py-2.5 pl-10 pr-4 text-xs sm:text-sm text-stone-900 cursor-pointer shadow-xs transition-colors"
                    />
                    <svg
                      className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <button
                    onClick={onOpenQuickSearch}
                    className="min-h-[46px] px-5 bg-stone-900 hover:bg-amber-900 text-white font-semibold text-xs sm:text-sm rounded-xs transition-colors shrink-0 shadow-xs"
                  >
                    Tìm Kiếm
                  </button>
                </div>
              </div>

              {/* 4 Screen Navigation Shortcuts */}
              <div className="pt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
                <button
                  onClick={() => onNavigate('melodies')}
                  className="min-h-[44px] px-4 py-2 bg-amber-900 hover:bg-stone-900 text-white font-semibold rounded-xs transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <span>🚣 Màn hình 2: Kho Làn Điệu (8 Điệu Cổ)</span>
                </button>
                <button
                  onClick={() => onNavigate('faq')}
                  className="min-h-[44px] px-4 py-2 bg-stone-200/90 hover:bg-stone-900 hover:text-white text-stone-900 font-semibold rounded-xs transition-colors"
                >
                  <span>❓ Màn hình 4: Hỏi Đáp (10 Câu Cốt Lõi)</span>
                </button>
                <button
                  onClick={() => onNavigate('sources-community')}
                  className="min-h-[44px] px-4 py-2 bg-stone-200/90 hover:bg-stone-900 hover:text-white text-stone-900 font-semibold rounded-xs transition-colors"
                >
                  <span>📜 Màn hình 5: Nguồn Tư Liệu & Sắc Phong</span>
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="min-h-[44px] px-4 py-2 bg-stone-200/90 hover:bg-stone-900 hover:text-white text-stone-900 font-semibold rounded-xs transition-colors"
                >
                  <span>ℹ️ Màn hình 6: Giới Thiệu Dự Án</span>
                </button>
              </div>
            </div>

            {/* Right Cultural Vector Banner (Không dùng ảnh người/trang phục/nghi lễ) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 bg-amber-950 text-stone-100 rounded-sm border border-amber-900 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-amber-900/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="text-amber-300 font-serif font-bold text-xs uppercase tracking-widest">
                      Biểu Trưng Văn Hóa Biển Miền Trung
                    </span>
                  </div>
                  <span className="text-stone-400 text-xs font-mono">Di Sản Phi Vật Thể</span>
                </div>

                {/* Stylized Maritime Vector Illustration */}
                <div className="p-4 bg-stone-900/90 rounded-xs border border-amber-900/60 flex items-center justify-center">
                  <svg className="w-full h-24 text-amber-300" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Ocean Wave Motif */}
                    <path d="M0 60 C30 50, 50 70, 80 60 C110 50, 130 70, 160 60 C190 50, 210 70, 240 60 C270 50, 290 70, 320 60 L320 80 L0 80 Z" fill="currentColor" fillOpacity="0.15" />
                    <path d="M0 68 C40 60, 60 76, 100 68 C140 60, 160 76, 200 68 C240 60, 260 76, 300 68 L320 70 L320 80 L0 80 Z" fill="currentColor" fillOpacity="0.25" />
                    {/* Stylized Traditional Fishing Boat Contour (Thuyền Nan / Thuyền Rồng Vượt Sóng) */}
                    <path d="M70 54 Q160 58 250 54 Q235 68 160 69 Q85 68 70 54 Z" fill="currentColor" fillOpacity="0.85" />
                    <path d="M160 22 L160 54 M160 24 L210 38 L160 44 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M160 28 L120 40 L160 46 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Sun / Halo */}
                    <circle cx="245" cy="24" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
                  </svg>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                    Tín Ngưỡng Nam Hải & Đạo Lý Tri Ân Đại Dương
                  </h3>
                  <div className="p-3 bg-amber-900/40 rounded-xs border border-amber-800/80 space-y-1 text-xs">
                    <p className="font-semibold text-amber-200">
                      ✦ Tên bản địa: "Nghinh Thủy Lục" & "Bả Trạo"
                    </p>
                    <p className="text-stone-300 leading-relaxed">
                      <strong>Chú giải phổ thông:</strong> Nghi thức rước thần biển từ khơi vào bờ và nghệ thuật hát múa chèo thuyền dũng mãnh, cầu trời yên biển lặng, cá mực đầy khoang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest block mb-1">
              Đặc Trưng Cộng Đồng Ngư Dân Nam Trung Bộ
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-stone-900">
              Đời Sống Tâm Linh & Tình Nghĩa Vạn Chài Bám Biển
            </h2>
            <p className="text-sm sm:text-base text-stone-700 mt-2 leading-relaxed">
              Cộng đồng ngư dân duyên hải miền Trung sinh tồn giữa bãi ngang, cồn cát và sóng gió biển Đông. Họ lập nên tổ chức <strong>Vạn chài (Vạn ngư)</strong> với tinh thần tự quản rất cao, lấy Lăng thờ Cá Ông làm trung tâm cố kết cộng đồng và nơi gửi gắm niềm tin sinh mạng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm sm:text-base">
            <div className="p-5 bg-stone-50 border border-stone-200 rounded-xs space-y-3">
              <span className="font-serif font-bold text-amber-900 text-lg block">01. Đạo Lý "Uống Nước Nhớ Nguồn"</span>
              <p className="text-stone-700 leading-relaxed text-sm">
                Ngư dân xem cá Voi như người cha, người mẹ che chở sinh mạng. Người đầu tiên thấy Ông lụy được tôn làm Trưởng nam chịu tang 3 năm, thể hiện đạo hiếu trọn vẹn của người Việt đối với tự nhiên.
              </p>
              <div className="p-2.5 bg-white border border-stone-200 rounded-xs text-xs space-y-1">
                <p className="font-semibold text-amber-900">Tên bản địa: "Ông lụy" & "Trưởng nam"</p>
                <p className="text-stone-600">Chú giải phổ thông: Cá Voi qua đời dạt vào bờ; người đầu tiên thấy được cử chịu tang 3 năm như tang cha mẹ.</p>
              </div>
            </div>

            <div className="p-5 bg-stone-50 border border-stone-200 rounded-xs space-y-3">
              <span className="font-serif font-bold text-amber-900 text-lg block">02. Luật Tục "Cứu Người Bỏ Lưới"</span>
              <p className="text-stone-700 leading-relaxed text-sm">
                Lệ vạn quy định: Khi phát hiện bạn thuyền gặp nạn trên biển, dù quen hay lạ, phải lập tức chặt lưới cứu người. Lòng nhân ái của con người noi gương lòng nhân từ của Cá Ông.
              </p>
              <div className="p-2.5 bg-white border border-stone-200 rounded-xs text-xs space-y-1">
                <p className="font-semibold text-amber-900">Tên bản địa: "Hương ước Vạn chài"</p>
                <p className="text-stone-600">Chú giải phổ thông: Bản quy ước làng biển tự quản bắt buộc tương trợ cứu nạn vô điều kiện trên biển khơi.</p>
              </div>
            </div>

            <div className="p-5 bg-stone-50 border border-stone-200 rounded-xs space-y-3">
              <span className="font-serif font-bold text-amber-900 text-lg block">03. Diễn Xướng Hát Múa Bả Trạo</span>
              <p className="text-stone-700 leading-relaxed text-sm">
                Toàn đội hình bả trạo gồm Tam Tổng và 16 trạo phu đứng thành hình con thuyền rồng lướt sóng, kết hợp nghệ thuật Tuồng cổ với các làn điệu dân ca sông nước độc nhất vô nhị.
              </p>
              <div className="p-2.5 bg-white border border-stone-200 rounded-xs text-xs space-y-1">
                <p className="font-semibold text-amber-900">Tên bản địa: "Bả Trạo" & "Tam Tổng"</p>
                <p className="text-stone-600">Chú giải phổ thông: Bả = nắm chặt, Trạo = mái chèo; Tam Tổng = ba người chỉ huy mũi, khoang, lái.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tra cứu Bảng Tên Gọi Bản Địa & Chú Giải Tiếng Việt Phổ Thông */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-950 text-stone-100 p-6 sm:p-8 rounded-sm shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-900">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Bảng Tra Cứu Ngôn Ngữ Biển Đảo
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Tên Gọi Bản Địa & Chú Giải Tiếng Việt Phổ Thông
              </h2>
            </div>
            <span className="text-xs text-amber-300 font-mono">
              Bảng tra cứu chuẩn hóa cho cộng đồng & người nghiên cứu
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-stone-900/90 border border-amber-900/80 rounded-xs space-y-1.5">
              <span className="text-amber-300 font-bold font-serif text-sm block">1. Ông Lụy</span>
              <p className="text-stone-300 text-xs leading-relaxed">
                <strong className="text-amber-200">Chú giải phổ thông:</strong> Cá Voi già yếu hoặc gặp nạn dạt vào bờ biển. Dân làng dùng từ "lụy" tỏ lòng tôn kính, tuyệt đối không nói "chết".
              </p>
            </div>

            <div className="p-4 bg-stone-900/90 border border-amber-900/80 rounded-xs space-y-1.5">
              <span className="text-amber-300 font-bold font-serif text-sm block">2. Trưởng Nam (Đội tang Ông)</span>
              <p className="text-stone-300 text-xs leading-relaxed">
                <strong className="text-amber-200">Chú giải phổ thông:</strong> Ngư dân đầu tiên phát hiện xác cá Voi dạt vào bờ được làng cử làm con trưởng, để tang 3 năm theo trọn đạo hiếu.
              </p>
            </div>

            <div className="p-4 bg-stone-900/90 border border-amber-900/80 rounded-xs space-y-1.5">
              <span className="text-amber-300 font-bold font-serif text-sm block">3. Thượng Ngọc Cốt</span>
              <p className="text-stone-300 text-xs leading-relaxed">
                <strong className="text-amber-200">Chú giải phổ thông:</strong> Nghi thức cải táng sau 3 năm chôn trên cồn cát, lau sạch xương cá Voi bằng rượu thơm và đưa vào tẩm lăng thờ tự.
              </p>
            </div>

            <div className="p-4 bg-stone-900/90 border border-amber-900/80 rounded-xs space-y-1.5">
              <span className="text-amber-300 font-bold font-serif text-sm block">4. Bả Trạo (Chèo Bả Trạo)</span>
              <p className="text-stone-300 text-xs leading-relaxed">
                <strong className="text-amber-200">Chú giải phổ thông:</strong> Cầm chắc mái chèo (Bả = nắm chặt, Trạo = dầm chèo); đội hình diễn xướng hát múa vượt trùng khơi đưa linh hồn cá Voi.
              </p>
            </div>

            <div className="p-4 bg-stone-900/90 border border-amber-900/80 rounded-xs space-y-1.5">
              <span className="text-amber-300 font-bold font-serif text-sm block">5. Tam Tổng (Mũi - Khoang - Lái)</span>
              <p className="text-stone-300 text-xs leading-relaxed">
                <strong className="text-amber-200">Chú giải phổ thông:</strong> Ba chức danh chỉ huy: Tổng Mũi (lĩnh xướng mở màn), Tổng Khoang (tát nước, gây cười), Tổng Lái (thuyền trưởng đuôi thuyền).
              </p>
            </div>

            <div className="p-4 bg-stone-900/90 border border-amber-900/80 rounded-xs space-y-1.5">
              <span className="text-amber-300 font-bold font-serif text-sm block">6. Trạo Phu (Con trạo)</span>
              <p className="text-stone-300 text-xs leading-relaxed">
                <strong className="text-amber-200">Chú giải phổ thông:</strong> Các tay chèo hai bên mạn thuyền (thường từ 12 đến 16 người), vừa vung dầm chèo nhịp nhàng vừa đồng thanh hô xô.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Coastal Epicenters & Heritage Shrines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1">
              <span>Địa Bàn Trọng Điểm</span>
              <span aria-hidden="true">·</span>
              <span>8 Tỉnh Duyên Hải Miền Trung</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Mạng Lưới Vạn Chài & Lăng Ông Nam Hải Tiêu Biểu
            </h2>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Lọc nhanh vạn chài theo tên..."
              value={siteSearch}
              onChange={(e) => setSiteSearch(e.target.value)}
              className="w-full text-xs bg-white border border-stone-300 rounded-xs py-2 pl-8 pr-3 text-stone-900 focus:outline-none focus:border-amber-800"
            />
            <svg
              className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Province Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {provinces.map((prov) => (
            <button
              key={prov}
              onClick={() => setSelectedProvince(prov)}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-xs whitespace-nowrap transition-colors ${
                selectedProvince === prov
                  ? 'bg-amber-900 text-white font-semibold'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {prov === 'all' ? 'Tất Cả 8 Tỉnh' : prov}
            </button>
          ))}
        </div>

        {/* Grid of Shrines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSites.map((site) => (
            <div
              key={site.id}
              className="bg-white border border-stone-200 p-5 rounded-sm shadow-xs flex flex-col justify-between hover:border-amber-800 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-amber-900 uppercase tracking-wider">
                    {site.province}
                  </span>
                  <span className="text-stone-500 font-medium">{site.establishedCentury}</span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 mb-1 leading-snug">
                  {site.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-500 line-clamp-1 mb-2">
                  📍 {site.address}
                </p>

                <p className="text-xs sm:text-sm text-stone-700 line-clamp-2 leading-relaxed mb-3">
                  {site.whaleRelicDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-amber-950">
                  Hội: {site.festivalLunarDate}
                </span>
                <button
                  onClick={onOpenQuickSearch}
                  className="min-h-[40px] px-2 text-amber-900 hover:text-stone-900 font-semibold"
                >
                  Tra cứu chi tiết →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
