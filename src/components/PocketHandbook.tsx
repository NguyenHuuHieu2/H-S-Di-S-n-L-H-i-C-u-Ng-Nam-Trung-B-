import React, { useState, useEffect } from 'react';

interface ChecklistItem {
  id: string;
  category: 'truoc-le' | 'nghinh-ong' | 'te-chanh' | 'hoi-he';
  label: string;
  role: string;
  checked: boolean;
}

const DEFAULT_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', category: 'truoc-le', label: 'Họp Ban Vạn sự thống nhất ngày giờ thỉnh sắc & phân công Chánh bái', role: 'Vạn trưởng & Ban Trị sự', checked: false },
  { id: 'c2', category: 'truoc-le', label: 'Kiểm tra trang phục áo thụng lam, khăn đóng, hài cong cho Ban Tế tự', role: 'Đội Nghi lễ', checked: false },
  { id: 'c3', category: 'truoc-le', label: 'Bao sái Án ngọc Lăng Ông, chuẩn bị hương trầm, đèn sáp, cỗ tam sinh', role: 'Người thủ từ', checked: false },
  { id: 'c4', category: 'nghinh-ong', label: 'Kiểm tra an toàn đoàn thuyền hoa (phao cứu sinh, máy tàu, cờ ngũ hành)', role: 'Thuyền trưởng tàu rước', checked: false },
  { id: 'c5', category: 'nghinh-ong', label: 'Chuẩn bị cặp đồng tiền cổ xin keo (Âm Dương) & bàn hương án trên biển', role: 'Chánh tế & Học trò lễ', checked: false },
  { id: 'c6', category: 'te-chanh', label: 'Duyệt bản văn tế chữ Nôm & phân công người xướng văn có giọng vang trầm', role: 'Bô lão vạn chài', checked: false },
  { id: 'c7', category: 'te-chanh', label: 'Tập dượt đội hình Hát Bả Trạo (Tam Tổng & 12-16 Trạo phu gõ dầm)', role: 'Nghệ nhân chủ nhiệm', checked: false },
  { id: 'c8', category: 'hoi-he', label: 'Căng dây phao đường đua thuyền thúng, kiểm tra y tế & cứu hộ bờ biển', role: 'Đoàn thanh niên xã', checked: false },
];

export const PocketHandbook: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'interview' | 'taboos' | 'quick-texts'>('checklist');
  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem('cau_ngu_handbook_checklist');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_CHECKLIST;
  });

  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  // Fieldwork notes state
  const [interviewNote, setInterviewNote] = useState({
    artisanName: '',
    age: '',
    village: '',
    expertise: 'Hát Bả Trạo',
    recordingNotes: '',
  });

  useEffect(() => {
    try {
      localStorage.setItem('cau_ngu_handbook_checklist', JSON.stringify(checklist));
    } catch {
      // ignore
    }
  }, [checklist]);

  const toggleCheck = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const completedCount = checklist.filter((i) => i.checked).length;

  const handleCopyText = (text: string, title: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(`Đã sao chép "${title}" vào bộ nhớ tạm để chia sẻ hoặc in.`);
      setTimeout(() => setCopySuccess(null), 3000);
    });
  };

  const handleSaveInterview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!interviewNote.artisanName || !interviewNote.recordingNotes) return;

    const exportText = `HỒ SƠ ĐIỀN DÃ NGHỆ NHÂN CẦU NGƯ\n` +
      `---------------------------------\n` +
      `Nghệ nhân: ${interviewNote.artisanName} (${interviewNote.age || 'Chưa rõ tuổi'})\n` +
      `Địa bàn: ${interviewNote.village}\n` +
      `Lĩnh vực di sản: ${interviewNote.expertise}\n` +
      `Thời gian ghi chép: ${new Date().toLocaleString('vi-VN')}\n\n` +
      `Nội dung ghi chép điền dã:\n${interviewNote.recordingNotes}\n`;

    handleCopyText(exportText, `Biên bản điền dã ${interviewNote.artisanName}`);
  };

  return (
    <section id="handbook" className="py-10 bg-stone-100/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-6">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
            <span>Dành Cho Cán Bộ Cơ Sở, Sinh Viên & Lớp Trẻ</span>
            <span aria-hidden="true">·</span>
            <span>Tra Cứu Bỏ Túi & Tác Nghiệp Điền Dã</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Cẩm Nang Nghi Lễ & Sổ Tay Điền Dã
          </h2>
          <p className="mt-1.5 text-stone-600 text-xs sm:text-sm leading-relaxed">
            Công cụ hỗ trợ trực tiếp tại hiện trường làng chài: kiểm tra tiến độ tổ chức lễ hội, quy tắc ứng xử văn hóa biển, tra cứu nhanh bài cúng và mẫu phỏng vấn nghệ nhân dân gian.
          </p>
        </div>

        {/* Tab Buttons (Touch-friendly $\ge 44$px) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`min-h-[44px] px-3 py-2 rounded-xs text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'checklist'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <span>✓ Bảng Kiểm Tổ Chức</span>
            <span className="text-[10px] opacity-80 font-mono">({completedCount}/8)</span>
          </button>

          <button
            onClick={() => setActiveTab('taboos')}
            className={`min-h-[44px] px-3 py-2 rounded-xs text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'taboos'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <span>⚓ Lệ Vạn & Kiêng Cữ</span>
          </button>

          <button
            onClick={() => setActiveTab('interview')}
            className={`min-h-[44px] px-3 py-2 rounded-xs text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'interview'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <span>📝 Mẫu Phiếu Điền Dã</span>
          </button>

          <button
            onClick={() => setActiveTab('quick-texts')}
            className={`min-h-[44px] px-3 py-2 rounded-xs text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'quick-texts'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <span>📋 Sao Chép Văn Khấn</span>
          </button>
        </div>

        {/* Copy Notification Toast */}
        {copySuccess && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xs flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{copySuccess}</span>
          </div>
        )}

        {/* Tab 1: Checklist */}
        {activeTab === 'checklist' && (
          <div className="bg-white border border-stone-200 p-5 sm:p-6 rounded-sm shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-100 mb-4 text-xs">
              <div>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  Bảng Kiểm Tiến Độ Chuẩn Bị & Tổ Chức Đại Lễ
                </h3>
                <p className="text-stone-500 text-[11px]">
                  Tích chọn trực tiếp trên điện thoại — dữ liệu tự động lưu trong máy, không mất khi tải lại trang.
                </p>
              </div>
              <div className="text-right">
                <span className="font-semibold text-amber-900 font-mono text-sm">
                  {completedCount} / {checklist.length}
                </span>
                <span className="text-stone-400 block text-[10px]">Hạng mục hoàn tất</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`min-h-[48px] p-3 rounded-xs border transition-all cursor-pointer flex items-start gap-3 ${
                    item.checked
                      ? 'bg-amber-50/70 border-amber-200 text-stone-900'
                      : 'bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-800'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleCheck(item.id)}
                    className="mt-1 h-4 w-4 rounded-xs border-stone-300 text-amber-900 focus:ring-0 cursor-pointer shrink-0"
                  />
                  <div className="flex-1 text-xs">
                    <span className={`leading-relaxed ${item.checked ? 'line-through text-stone-500' : 'font-medium'}`}>
                      {item.label}
                    </span>
                    <span className="block text-[11px] text-amber-800 font-medium mt-0.5">
                      Phụ trách: {item.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center text-xs">
              <button
                onClick={() => setChecklist(DEFAULT_CHECKLIST)}
                className="text-stone-500 hover:text-stone-800 underline text-[11px]"
              >
                Đặt lại bảng kiểm mặc định
              </button>
              <button
                onClick={() => {
                  const summary = checklist
                    .map((c, i) => `${i + 1}. [${c.checked ? 'X' : ' '}] ${c.label} (Phụ trách: ${c.role})`)
                    .join('\n');
                  handleCopyText(`TIẾN ĐỘ TỔ CHỨC LỄ HỘI CẦU NGƯ\n${summary}`, 'Bảng kiểm tiến độ');
                }}
                className="px-3 py-1.5 bg-stone-900 text-white font-medium rounded-xs hover:bg-stone-800 text-xs"
              >
                Sao Chép Danh Sách Để Gửi Zalo/In
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Taboos & Village Rules (Lệ Vạn & Kiêng Cữ) */}
        {activeTab === 'taboos' && (
          <div className="bg-white border border-stone-200 p-5 sm:p-6 rounded-sm shadow-xs">
            <h3 className="font-serif font-bold text-base text-stone-900 mb-1">
              Quy Ước Lệ Vạn & Những Điều Kiêng Cữ Bất Thành Văn
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Cán bộ văn hóa cơ sở và đoàn viên thanh niên cần nắm rõ để hướng dẫn du khách và bà con trong những ngày đại lễ:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
                <strong className="text-amber-900 block font-serif text-sm">
                  1. Kiêng cữ trong ngôn từ
                </strong>
                <p className="text-stone-600 leading-relaxed">
                  Tuyệt đối không dùng từ "chết" đối với cá voi (phải nói là <em>Ông lụy</em> hoặc <em>Ông quy thiên</em>). Không gọi tên tục, không đùa cợt khi nhắc đến linh vật biển cả.
                </p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
                <strong className="text-amber-900 block font-serif text-sm">
                  2. Trang phục tại Lăng Ông
                </strong>
                <p className="text-stone-600 leading-relaxed">
                  Ngư dân và khách hành hương phải mặc quần áo trang nhã, chỉnh tề; không mang nón mũ, không mang giày dép vào khu vực Chánh điện và Hậu tẩm ngọc cốt.
                </p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
                <strong className="text-amber-900 block font-serif text-sm">
                  3. Lệ cúng trên biển (Nghinh Thủy Lục)
                </strong>
                <p className="text-stone-600 leading-relaxed">
                  Khi đoàn tàu ra biển xin keo nghinh Ông, lễ vật trên bàn hương án tuyệt đối chỉ dùng hoa tươi, ngũ quả, trà rượu chay thanh khiết; không mang thịt heo lên tàu nghinh thần.
                </p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
                <strong className="text-amber-900 block font-serif text-sm">
                  4. Đạo lý cứu nạn tương trợ
                </strong>
                <p className="text-stone-600 leading-relaxed">
                  Hương ước vạn chài quy định: Khi phát hiện bạn thuyền gặp nạn, bất kể thuộc vạn nào, phải lập tức bỏ lưới cứu người; ai thờ ơ sẽ bị khai trừ khỏi vạn và không được làm lễ xuất bến.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Fieldwork Interview Sheet (Mẫu Phiếu Điền Dã) */}
        {activeTab === 'interview' && (
          <div className="bg-white border border-stone-200 p-5 sm:p-6 rounded-sm shadow-xs">
            <h3 className="font-serif font-bold text-base text-stone-900 mb-1">
              Phiếu Ghi Chép Điền Dã Phỏng Vấn Nghệ Nhân / Lão Ngư
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Dành cho sinh viên, cán bộ văn hóa thực địa ghi nhanh lời kể của nghệ nhân bả trạo hoặc bô lão tại Lăng Ông:
            </p>

            <form onSubmit={handleSaveInterview} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Họ tên nghệ nhân / Bô lão *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Cụ Trần Văn Hòa"
                    value={interviewNote.artisanName}
                    onChange={(e) => setInterviewNote({ ...interviewNote, artisanName: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Tuổi / Năm sinh
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 78 tuổi"
                    value={interviewNote.age}
                    onChange={(e) => setInterviewNote({ ...interviewNote, age: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Làng chài / Xã / Tỉnh
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Vạn Thủy Tú, Phan Thiết"
                    value={interviewNote.village}
                    onChange={(e) => setInterviewNote({ ...interviewNote, village: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Nội dung ghi chép phỏng vấn thực địa *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ghi lại xuất xứ bài hò, cách bấm dầm chèo, ký ức trận bão biển, các đời truyền dạy trong gia đình..."
                  value={interviewNote.recordingNotes}
                  onChange={(e) => setInterviewNote({ ...interviewNote, recordingNotes: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2.5 text-stone-900 focus:outline-none focus:border-amber-800 leading-relaxed font-sans"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="min-h-[44px] px-5 py-2 bg-amber-900 hover:bg-stone-900 text-white font-semibold rounded-xs shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>Sao Chép Bản Điền Dã Vào Máy</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 4: Quick Copy Ritual Texts (Sao chép văn khấn) */}
        {activeTab === 'quick-texts' && (
          <div className="bg-white border border-stone-200 p-5 sm:p-6 rounded-sm shadow-xs space-y-4">
            <h3 className="font-serif font-bold text-base text-stone-900">
              Kho Bản Mẫu Văn Khấn & Văn Tế Nam Hải Cổ Truyền
            </h3>
            <p className="text-xs text-stone-500">
              Nhấn nút sao chép để chia sẻ ngay qua Zalo, tin nhắn hoặc in ấn phục vụ công tác văn hóa tại thôn/vạn:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <strong className="text-stone-900 block font-serif text-sm">
                    1. Văn Khấn Thỉnh Linh Thần Biển (Nghinh Ông Thủy Lục)
                  </strong>
                  <p className="text-stone-500 text-[11px] mt-0.5">
                    Đọc khi đoàn thuyền hoa ra đến tọa độ ngoài khơi trước khi gieo tiền xin keo.
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleCopyText(
                      `VĂN KHẤN NGHINH ÔNG THỦY LỤC\n` +
                      `Cung duy: Đại Càn Quốc Gia Nam Hải Cự Tộc Ngọc Lân Thượng Đẳng Tôn Thần.\n` +
                      `Nhớ xưa khai cơ mở cõi, muôn trùng sóng nước Đông Hải ba đào.\n` +
                      `Đức Ngài hiển linh tế độ, nâng đỡ thuyền nan qua cơn giông bão.\n` +
                      `Hôm nay vạn chài đồng tâm chí kính, cờ hoa chiêng trống rước ngài hồi loan nhập điện!\n` +
                      `Cúi xin Thần ban: Phong điều vũ thuận, Hải yến hà thanh, Tôm cá đầy khoang!`,
                      'Văn khấn Nghinh Ông'
                    )
                  }
                  className="min-h-[40px] px-3.5 py-1.5 bg-stone-900 hover:bg-amber-900 text-white rounded-xs font-semibold shrink-0"
                >
                  Sao Chép Văn Khấn
                </button>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <strong className="text-stone-900 block font-serif text-sm">
                    2. Lời Văn Tế Chánh Đêm Hội Cầu Ngư (Trích đoạn Nôm)
                  </strong>
                  <p className="text-stone-500 text-[11px] mt-0.5">
                    Bài văn tế xúc động do Chánh bái đọc trước Án ngọc lúc nửa đêm ngày chánh tế.
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleCopyText(
                      `TRÍCH BÀI VĂN TẾ CHÁNH ĐÊM CẦU NGƯ\n` +
                      `Kính bái: Nam Hải Từ Tế Trang Nghiêm Tôn Thần.\n` +
                      `Gẫm lại: Biển khơi sâu thẳm, mạng người tựa cánh bèo trôi.\n` +
                      `Mỗi bận bão giông gầm rú, nhờ lưng Thần hộ vệ vượt cửa tử sinh.\n` +
                      `Nay tiết thanh minh, toàn vạn dâng tuần rượu cúc, mâm cỗ tam sinh tạ ơn Thần.\n` +
                      `Cầu mong: Biển lặng gió hòa, ngư dân mạnh khỏe, bến bờ yên vui! Thượng hưởng!`,
                      'Bài văn tế chánh'
                    )
                  }
                  className="min-h-[40px] px-3.5 py-1.5 bg-stone-900 hover:bg-amber-900 text-white rounded-xs font-semibold shrink-0"
                >
                  Sao Chép Văn Tế
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
