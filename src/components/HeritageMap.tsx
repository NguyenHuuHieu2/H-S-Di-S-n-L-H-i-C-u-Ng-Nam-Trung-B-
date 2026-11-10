import React, { useState, useMemo } from 'react';
import { HERITAGE_SITES } from '../data/cauNguData';
import { HeritageSite } from '../types';

export const HeritageMap: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedSiteId, setSelectedSiteId] = useState<string>(HERITAGE_SITES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const provinces = useMemo(() => {
    const list = Array.from(new Set(HERITAGE_SITES.map((s) => s.province)));
    return ['all', ...list];
  }, []);

  const filteredSites = useMemo(() => {
    return HERITAGE_SITES.filter((site) => {
      const matchProv = selectedProvince === 'all' || site.province === selectedProvince;
      const matchSearch =
        searchQuery.trim() === '' ||
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.province.toLowerCase().includes(searchQuery.toLowerCase());
      return matchProv && matchSearch;
    });
  }, [selectedProvince, searchQuery]);

  const activeSite =
    HERITAGE_SITES.find((s) => s.id === selectedSiteId) || filteredSites[0] || HERITAGE_SITES[0];

  return (
    <section id="sites" className="py-12 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
            <span>Không Gian Di Sản 8 Vùng Duyên Hải</span>
            <span aria-hidden="true">·</span>
            <span>Đà Nẵng Đến Bình Thuận</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Mạng Lưới Vạn Chài & Lăng Ông Tiêu Biểu
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Hàng trăm lăng Ông trải dài dọc theo các vùng vịnh, đầm phá và hải đảo Nam Trung Bộ. Dưới đây là những "Vạn cổ" có quy mô lưu trữ ngọc cốt lớn và lễ hội Cầu ngư nổi tiếng nhất.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white border border-stone-200 p-4 rounded-sm shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Province Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider mr-1 shrink-0">
              Khu vực:
            </span>
            {provinces.map((prov) => (
              <button
                key={prov}
                onClick={() => setSelectedProvince(prov)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs whitespace-nowrap transition-colors ${
                  selectedProvince === prov
                    ? 'bg-stone-900 text-white font-semibold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {prov === 'all' ? 'Toàn Vùng (8 Tỉnh)' : prov}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Tìm theo tên lăng, vạn chài..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xs py-2 pl-8 pr-3 text-stone-900 focus:outline-none focus:border-amber-800"
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

        {/* Main Grid: List on Left, Deep Dossier on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sites list */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs text-stone-500 font-medium pb-2 border-b border-stone-200 flex justify-between">
              <span>Danh sách cơ sở tín ngưỡng ({filteredSites.length})</span>
              <span>Bấm để xem hồ sơ chi tiết</span>
            </div>

            <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
              {filteredSites.map((site) => {
                const isSelected = site.id === activeSite.id;
                return (
                  <button
                    key={site.id}
                    onClick={() => setSelectedSiteId(site.id)}
                    className={`w-full text-left p-4 rounded-sm border transition-all ${
                      isSelected
                        ? 'bg-amber-950 text-white border-amber-900 shadow-sm'
                        : 'bg-white text-stone-800 border-stone-200 hover:border-amber-800 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs mb-1">
                      <span className={`font-semibold uppercase tracking-wider ${isSelected ? 'text-amber-300' : 'text-amber-800'}`}>
                        {site.province}
                      </span>
                      <span className={`text-[11px] ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        {site.establishedCentury}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base sm:text-lg leading-snug">
                      {site.name}
                    </h4>

                    <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                      {site.address}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-stone-200/40 flex items-center justify-between text-xs">
                      <span className={`${isSelected ? 'text-amber-200' : 'text-stone-600'} font-medium`}>
                        Lịch hội: {site.festivalLunarDate}
                      </span>
                      <span className={`text-[11px] ${isSelected ? 'text-amber-300' : 'text-stone-400'}`}>
                        Xem hồ sơ →
                      </span>
                    </div>
                  </button>
                );
              })}

              {filteredSites.length === 0 && (
                <div className="p-8 text-center bg-white border border-stone-200 rounded-sm text-stone-500 text-xs">
                  Không tìm thấy lăng thờ phù hợp với từ khóa "{searchQuery}".
                </div>
              )}
            </div>
          </div>

          {/* Active Site Deep Dossier */}
          <div className="lg:col-span-7 bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1">
                  <span>Tỉnh {activeSite.province}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeSite.establishedCentury}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  {activeSite.name}
                </h3>
              </div>
              <div className="text-right text-xs bg-amber-50 border border-amber-200/80 p-2.5 rounded-xs">
                <span className="text-amber-900 font-semibold block">Lịch mở hội hàng năm:</span>
                <span className="text-stone-800 font-serif italic text-sm">{activeSite.festivalLunarDate}</span>
              </div>
            </div>

            <div className="text-xs text-stone-500 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{activeSite.address}</span>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-3">
                Đặc điểm di sản nổi bật:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {activeSite.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-800 font-serif font-bold">✓</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Whale Bone Relics Preservation */}
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-amber-900 block">
                Khảo tả ngọc cốt Cá Ông tại Lăng:
              </span>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif italic">
                {activeSite.whaleRelicDescription}
              </p>
            </div>

            {/* Sacred Artifacts & Royal decrees */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-2">
                Hiện vật thiêng & bảo vật vạn chài:
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {activeSite.sacredItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-stone-100 border border-stone-200/70 rounded-xs text-stone-800"
                  >
                    ✦ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Historical context notes */}
            <div className="pt-4 border-t border-stone-100 text-xs text-stone-600 leading-relaxed">
              <strong className="text-stone-900 block mb-1">Ghi chú lịch sử điền dã:</strong>
              {activeSite.historicalNotes}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
