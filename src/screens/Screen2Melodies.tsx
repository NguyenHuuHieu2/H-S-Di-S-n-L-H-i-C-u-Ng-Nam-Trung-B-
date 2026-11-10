import React, { useState, useMemo } from 'react';
import { MELODIES_DATA } from '../data/cauNguData';
import { getStandardGloss } from '../utils/localGlossary';

interface Screen2MelodiesProps {
  onSelectMelody: (melodyId: string) => void;
}

export const Screen2Melodies: React.FC<Screen2MelodiesProps> = ({ onSelectMelody }) => {
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [moodFilter, setMoodFilter] = useState<string>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [keyword, setKeyword] = useState<string>('');

  const filteredMelodies = useMemo(() => {
    return MELODIES_DATA.filter((m) => {
      const matchRole = roleFilter === 'all' || m.roleCategory === roleFilter;
      const matchMood = moodFilter === 'all' || m.mood === moodFilter;
      const matchRegion = regionFilter === 'all' || m.regionCategory === regionFilter || m.regionCategory === 'toan-vung';
      const q = keyword.trim().toLowerCase();
      const matchKeyword =
        q === '' ||
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.lyrics.stanzas.some((s) => s.text.some((t) => t.toLowerCase().includes(q)));
      return matchRole && matchMood && matchRegion && matchKeyword;
    });
  }, [roleFilter, moodFilter, regionFilter, keyword]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      {/* Screen Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-1.5">
          <span>Màn Hình 2</span>
          <span aria-hidden="true">·</span>
          <span>Kho Tàng Làn Điệu Bả Trạo & Diễn Xướng Biển</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Danh Sách Làn Điệu Hát Múa Bả Trạo Nam Trung Bộ
        </h1>
        <p className="mt-2 text-stone-700 text-sm sm:text-base leading-relaxed">
          Kho lưu trữ 8 làn điệu cổ truyền đặc sắc trong nghi lễ Cầu ngư: từ những khúc hò mở màn vượt sóng, điệu than khóc Ông bi ai đến khúc khải hoàn và hoạt kê khoang thuyền.
        </p>
      </div>

      {/* Multi-Filter Bar */}
      <div className="bg-stone-50 border border-stone-200 p-4 sm:p-5 rounded-sm space-y-4 shadow-xs">
        {/* Search input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Tìm kiếm làn điệu theo tên hoặc trích đoạn lời ca..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full min-h-[46px] text-sm bg-white border border-stone-300 rounded-xs py-2.5 pl-10 pr-3 text-stone-900 focus:outline-none focus:border-amber-800"
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

        {/* Filter categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
          {/* 1. Lọc theo vai trò */}
          <div>
            <label className="block text-stone-600 font-semibold mb-1 uppercase tracking-wider text-xs">
              Vai trò diễn xướng:
            </label>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full min-h-[44px] bg-white border border-stone-300 rounded-xs p-2.5 text-stone-900 focus:outline-none focus:border-amber-800"
            >
              <option value="all">Tất cả vai trò</option>
              <option value="tong-mui">Tổng Mũi (Tổng Tiền)</option>
              <option value="tong-lai">Tổng Lái (Tổng Hậu)</option>
              <option value="tong-khoang">Tổng Khoang (Tát nước / Hoạt kê)</option>
              <option value="trao-phu">Trạo phu (Con trạo)</option>
              <option value="toan-doan">Toàn đoàn hiệp xướng</option>
              <option value="hoc-tro-le">Đội Học trò lễ</option>
            </select>
          </div>

          {/* 2. Lọc theo sắc thái */}
          <div>
            <label className="block text-stone-600 font-semibold mb-1 uppercase tracking-wider text-xs">
              Sắc thái âm nhạc:
            </label>
            <select
              value={moodFilter}
              onChange={(e) => setMoodFilter(e.target.value)}
              className="w-full min-h-[44px] bg-white border border-stone-300 rounded-xs p-2.5 text-stone-900 focus:outline-none focus:border-amber-800"
            >
              <option value="all">Tất cả sắc thái</option>
              <option value="hung-trang">Hùng tráng & Chỉ huy</option>
              <option value="bi-ai">Bi ai & Linh thiêng (Khóc Ông)</option>
              <option value="vui-nhon">Hài hước & Lạc quan</option>
              <option value="lao-dong">Lao động sông nước</option>
              <option value="linh-thieng">Nghi lễ tôn nghiêm</option>
            </select>
          </div>

          {/* 3. Lọc theo địa bàn */}
          <div>
            <label className="block text-stone-600 font-semibold mb-1 uppercase tracking-wider text-xs">
              Địa bàn đặc trưng:
            </label>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full min-h-[44px] bg-white border border-stone-300 rounded-xs p-2.5 text-stone-900 focus:outline-none focus:border-amber-800"
            >
              <option value="all">Toàn bộ 8 tỉnh</option>
              <option value="da-nang-quang-nam">Đà Nẵng - Quảng Nam</option>
              <option value="quang-ngai-binh-dinh">Quảng Ngãi - Bình Định</option>
              <option value="phu-yen-khanh-hoa">Phú Yên - Khánh Hòa</option>
              <option value="ninh-thuan-binh-thuan">Ninh Thuận - Bình Thuận</option>
            </select>
          </div>
        </div>

        {/* Results summary & reset */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600 pt-1">
          <span>Tìm thấy <strong>{filteredMelodies.length}</strong> / {MELODIES_DATA.length} làn điệu</span>
          {(roleFilter !== 'all' || moodFilter !== 'all' || regionFilter !== 'all' || keyword !== '') && (
            <button
              onClick={() => {
                setRoleFilter('all');
                setMoodFilter('all');
                setRegionFilter('all');
                setKeyword('');
              }}
              className="text-amber-900 hover:underline font-semibold"
            >
              Đặt lại toàn bộ bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Melodies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMelodies.map((melody) => (
          <div
            key={melody.id}
            className="bg-white border border-stone-200 p-5 sm:p-6 rounded-sm shadow-xs flex flex-col justify-between hover:border-amber-800 transition-colors"
          >
            <div className="space-y-3.5">
              {/* Card Meta Header */}
              <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-100">
                <span className="font-semibold text-amber-900 uppercase tracking-wider">
                  {melody.role}
                </span>
                <span className="font-serif font-bold text-amber-800 text-sm bg-amber-50 px-2.5 py-0.5 border border-amber-200/60 rounded-xs">
                  {melody.titleCn}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 leading-snug">
                  {melody.name}
                </h2>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-1">
                  {melody.description}
                </p>
              </div>

              {/* Tên gọi bản địa & Chú giải tiếng Việt phổ thông Box */}
              <div className="p-3.5 bg-amber-50/60 border border-amber-200/80 rounded-xs space-y-1.5 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-amber-950 uppercase tracking-wider text-[11px] block">
                    ✦ Tên gọi bản địa:
                  </span>
                  <span className="text-stone-900 font-medium">
                    {melody.name} ({melody.titleCn}) — {melody.role}
                  </span>
                </div>
                <div className="pt-1 border-t border-amber-200/60">
                  <span className="font-semibold text-amber-900 uppercase tracking-wider text-[11px] block">
                    ✦ Chú giải tiếng Việt phổ thông:
                  </span>
                  <p className="text-amber-950 italic leading-relaxed">
                    "{getStandardGloss(melody.name)}"
                  </p>
                </div>
              </div>

              {/* Sample stanza quote */}
              <div className="p-3.5 bg-stone-50 border border-stone-200/70 rounded-xs font-serif text-sm italic text-stone-800 space-y-1">
                <span className="text-xs uppercase font-sans tracking-wider not-italic font-semibold text-stone-500 block mb-0.5">
                  Trích đoạn lời ca:
                </span>
                {melody.lyrics.stanzas[0].text.slice(0, 2).map((line, idx) => (
                  <p key={idx}>"{line}"</p>
                ))}
              </div>

              <div className="text-xs sm:text-sm text-stone-600 space-y-1">
                <p><strong>Sắc thái:</strong> {melody.moodLabel}</p>
                <p><strong>Thang âm:</strong> {melody.musicalStructure.scale}</p>
                <p><strong>Địa bàn:</strong> {melody.region}</p>
              </div>
            </div>

            {/* Action button: Go to Screen 3 */}
            <div className="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Nhạc cụ: {melody.musicalStructure.instruments[0]}
              </span>
              <button
                onClick={() => onSelectMelody(melody.id)}
                className="min-h-[44px] px-4 py-2 bg-stone-900 hover:bg-amber-900 text-white font-semibold text-xs sm:text-sm rounded-xs transition-colors flex items-center gap-2 shadow-2xs"
              >
                <span>Khảo Tả Chi Tiết (Màn hình 3)</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {filteredMelodies.length === 0 && (
          <div className="col-span-full p-12 text-center bg-stone-50 border border-stone-200 rounded-sm text-stone-600 text-sm">
            Không tìm thấy làn điệu nào phù hợp với bộ lọc đã chọn. Vui lòng bấm "Đặt lại toàn bộ bộ lọc".
          </div>
        )}
      </div>
    </div>
  );
};
