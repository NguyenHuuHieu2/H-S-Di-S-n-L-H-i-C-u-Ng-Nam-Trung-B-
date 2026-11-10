import React, { useState } from 'react';
import { IMPERIAL_EDICTS } from '../data/cauNguData';
import { CommunityMemory } from '../components/CommunityMemory';
import { DisanRecordViewer } from '../components/DisanRecordViewer';
import { getStandardGloss } from '../utils/localGlossary';

export const Screen5SourcesCommunity: React.FC = () => {
  const [activeSourceTab, setActiveSourceTab] = useState<'edicts' | 'legal-heritage' | 'artisans' | 'disan-json'>('edicts');
  const [selectedEdictId, setSelectedEdictId] = useState<string>(IMPERIAL_EDICTS[0].id);

  const activeEdict = IMPERIAL_EDICTS.find((e) => e.id === selectedEdictId) || IMPERIAL_EDICTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-12">
      {/* Screen Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-1.5">
          <span>Màn Hình 5</span>
          <span aria-hidden="true">·</span>
          <span>Hồ Sơ Khoa Học & Tiếng Nói Làng Chài</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Nguồn Tư Liệu & Ghi Nhận Cộng Đồng
        </h1>
        <p className="mt-2 text-stone-700 text-sm sm:text-base leading-relaxed">
          Tập hợp các châu bản sắc phong triều Nguyễn, hương ước vạn chài cổ truyền, hồ sơ di sản quốc gia và kho ký ức truyền khẩu sống của cộng đồng ngư dân Nam Trung Bộ.
        </p>
      </div>

      {/* Part 1: Scientific Sources & Digitized Archives */}
      <section className="bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
          <div>
            <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider block">
              Phần I · Văn Bản & Căn Cứ Lịch Sử
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Nguồn Tư Liệu Hán - Nôm & Pháp Quy Di Sản
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs sm:text-sm">
            <button
              onClick={() => setActiveSourceTab('edicts')}
              className={`min-h-[42px] px-4 py-2 rounded-xs font-semibold transition-colors ${
                activeSourceTab === 'edicts'
                  ? 'bg-amber-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Sắc Phong Triều Nguyễn
            </button>
            <button
              onClick={() => setActiveSourceTab('legal-heritage')}
              className={`min-h-[42px] px-4 py-2 rounded-xs font-semibold transition-colors ${
                activeSourceTab === 'legal-heritage'
                  ? 'bg-amber-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Hồ Sơ Di Sản Quốc Gia
            </button>
            <button
              onClick={() => setActiveSourceTab('artisans')}
              className={`min-h-[42px] px-4 py-2 rounded-xs font-semibold transition-colors ${
                activeSourceTab === 'artisans'
                  ? 'bg-amber-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Nghệ Nhân & Bô Lão
            </button>
            <button
              onClick={() => setActiveSourceTab('disan-json')}
              className={`min-h-[42px] px-4 py-2 rounded-xs font-semibold transition-colors ${
                activeSourceTab === 'disan-json'
                  ? 'bg-amber-900 text-white'
                  : 'bg-amber-50 text-amber-950 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              Tệp disan.json (Khảo Tả)
            </button>
          </div>
        </div>

        {/* Tab A: Imperial Edicts */}
        {activeSourceTab === 'edicts' && (
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Các triều vua Gia Long, Minh Mạng, Thiệu Trị, Tự Đức, Đồng Khánh, Khải Định đều ban sắc phong tôn vinh Cá Voi là Thượng Đẳng Tôn Thần, ghi nhận công lao hộ quốc cứu dân trên biển:
            </p>

            {/* Edict Selector Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {IMPERIAL_EDICTS.map((edict) => (
                <button
                  key={edict.id}
                  onClick={() => setSelectedEdictId(edict.id)}
                  className={`min-h-[42px] px-4 py-2 text-xs sm:text-sm font-semibold rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                    edict.id === selectedEdictId
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {edict.reign} ({edict.year.split(' ')[0]})
                </button>
              ))}
            </div>

            {/* Edict Detail Card */}
            <div className="bg-stone-50 border border-stone-200 p-5 sm:p-6 rounded-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 space-y-3.5">
                <span className="text-xs uppercase tracking-wider text-amber-900 font-bold block">
                  ✦ Đạo sắc phong chính thức
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                  {activeEdict.conferredTitle}
                </h3>

                {/* Chú giải tiếng Việt phổ thông cho danh hiệu sắc phong */}
                <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xs text-xs sm:text-sm">
                  <span className="font-semibold text-amber-950 uppercase tracking-wider text-[11px] block">
                    Chú giải tiếng Việt phổ thông:
                  </span>
                  <p className="text-amber-950 italic mt-0.5 leading-relaxed">
                    "{getStandardGloss(activeEdict.conferredTitle)}"
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-stone-700 space-y-1">
                  <p><strong>Triều đại:</strong> {activeEdict.reign}</p>
                  <p><strong>Niên hiệu:</strong> {activeEdict.year}</p>
                  <p><strong>Lưu giữ tại:</strong> {activeEdict.recipient}</p>
                </div>
                <div className="p-3 bg-amber-950 text-amber-200 font-serif text-sm tracking-widest text-center rounded-xs border border-amber-800">
                  {activeEdict.hannoExcerpt}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3.5 text-xs sm:text-sm">
                <div className="p-4 bg-white border border-stone-200 rounded-xs">
                  <span className="font-bold uppercase tracking-wider text-amber-900 block mb-1 text-xs">
                    Bản dịch nghĩa Quốc ngữ:
                  </span>
                  <p className="font-serif italic text-stone-900 text-sm sm:text-base leading-relaxed">
                    "{activeEdict.translation}"
                  </p>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xs">
                  <span className="font-bold uppercase tracking-wider text-amber-950 block mb-1 text-xs">
                    Ý nghĩa chủ quyền biển đảo & pháp lý:
                  </span>
                  <p className="text-amber-900 text-xs sm:text-sm leading-relaxed">
                    {activeEdict.significance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab B: Legal & National Heritage Documents */}
        {activeSourceTab === 'legal-heritage' && (
          <div className="space-y-4 text-xs">
            <h3 className="font-serif font-bold text-base text-stone-900">
              Các Quyết Định Ghi Danh Di Sản Văn Hóa Phi Vật Thể Quốc Gia
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Lễ hội Cầu ngư của cộng đồng ngư dân duyên hải miền Trung đã được Bộ Văn hóa, Thể thao và Du lịch đưa vào Danh mục Di sản Văn hóa Phi vật thể Quốc gia tại nhiều địa phương:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xs space-y-1">
                <strong className="text-stone-900 block font-serif text-sm">
                  1. Lễ hội Cầu ngư tỉnh Khánh Hòa (2012)
                </strong>
                <p className="text-stone-600">Quyết định số 5079/QĐ-BVHTTDL ngày 27/12/2012 của Bộ VHTTDL.</p>
              </div>

              <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xs space-y-1">
                <strong className="text-stone-900 block font-serif text-sm">
                  2. Lễ hội Cầu ngư thành phố Đà Nẵng (2016)
                </strong>
                <p className="text-stone-600">Quyết định số 2960/QĐ-BVHTTDL ngày 27/8/2016 của Bộ VHTTDL.</p>
              </div>

              <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xs space-y-1">
                <strong className="text-stone-900 block font-serif text-sm">
                  3. Lễ hội Cầu ngư tỉnh Phú Yên (2018)
                </strong>
                <p className="text-stone-600">Quyết định số 3325/QĐ-BVHTTDL ngày 04/9/2018 của Bộ VHTTDL.</p>
              </div>

              <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xs space-y-1">
                <strong className="text-stone-900 block font-serif text-sm">
                  4. Lễ hội Cầu ngư tỉnh Quảng Bình & Bình Thuận
                </strong>
                <p className="text-stone-600">Ghi danh vạn chài cổ Vạn Thủy Tú và hệ thống lăng miếu duyên hải.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab C: Master Artisans */}
        {activeSourceTab === 'artisans' && (
          <div className="space-y-4 text-xs sm:text-sm">
            <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">
              Các Nghệ Nhân Nhân Dân, Nghệ Nhân Ưu Tú Nắm Giữ Di Sản Bả Trạo
            </h3>
            <p className="text-stone-700 leading-relaxed">
              Những bậc cao niên, nghệ nhân lão thành đã dành trọn cuộc đời truyền dạy các làn điệu Hò Mái Ba, Hát Nam Ai, Nam Khách cho các thế hệ trẻ làng chài:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-2">
                <strong className="text-stone-900 block font-serif text-base">Cụ Nguyễn Văn Mười</strong>
                <span className="text-amber-900 block text-xs font-bold uppercase tracking-wider">
                  Nghệ nhân Ưu tú Bả Trạo
                </span>
                <p className="text-stone-600 text-xs">
                  Vạn chài Đông Tác, TP. Tuy Hòa, tỉnh Phú Yên. Hơn 65 năm truyền dạy điệu hò cổ.
                </p>
                <div className="p-2.5 bg-white border border-stone-200 rounded-xs text-xs text-amber-950">
                  <span className="font-semibold block text-[11px] text-amber-900">Chú giải phổ thông:</span>
                  Người bảo tồn trọn vẹn nghi thức tang cá voi và dẫn nhịp các trạo phu vượt sóng.
                </div>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-2">
                <strong className="text-stone-900 block font-serif text-base">Cụ Trần Hữu Đức</strong>
                <span className="text-amber-900 block text-xs font-bold uppercase tracking-wider">
                  Trưởng ban Nghi lễ Lăng Ông
                </span>
                <p className="text-stone-600 text-xs">
                  Lăng Ông Thọ Quang, quận Sơn Trà, TP. Đà Nẵng. Lưu giữ văn tế cổ chữ Nôm.
                </p>
                <div className="p-2.5 bg-white border border-stone-200 rounded-xs text-xs text-amber-950">
                  <span className="font-semibold block text-[11px] text-amber-900">Chú giải phổ thông:</span>
                  Chủ tế điều hành lễ Nghinh Thủy Lục và đọc bản chúc văn tạ ơn biển khơi.
                </div>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-2">
                <strong className="text-stone-900 block font-serif text-base">Nghệ nhân Lê Văn Cường</strong>
                <span className="text-amber-900 block text-xs font-bold uppercase tracking-wider">
                  Tổng Lái Vạn Thủy Tú
                </span>
                <p className="text-stone-600 text-xs">
                  Phường Đức Thắng, TP. Phan Thiết, tỉnh Bình Thuận. Chỉ huy đội Bả Trạo Vạn Thủy Tú.
                </p>
                <div className="p-2.5 bg-white border border-stone-200 rounded-xs text-xs text-amber-950">
                  <span className="font-semibold block text-[11px] text-amber-900">Chú giải phổ thông:</span>
                  Thuyền trưởng đứng cuối thuyền rồng, thể hiện khúc Nam Ai tri ân Đức Ngư Ông.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab D: disan.json Field Survey Records */}
        {activeSourceTab === 'disan-json' && (
          <DisanRecordViewer />
        )}
      </section>

      {/* Part 2: Community Memories & Living Oral Archive */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider block">
            Phần II · Ký Ức Sống & Đóng Góp Cộng Đồng
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Ký Ức Truyền Đời & Diễn Đàn Làng Chài
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
            Nơi ghi nhận các mẩu chuyện Ông cứu nạn, kỷ niệm lễ hội và những ghi chép điền dã của cộng đồng được lưu trữ bền vững.
          </p>
        </div>

        {/* Embedded Community Memory Component with LocalStorage save */}
        <CommunityMemory />
      </section>
    </div>
  );
};
