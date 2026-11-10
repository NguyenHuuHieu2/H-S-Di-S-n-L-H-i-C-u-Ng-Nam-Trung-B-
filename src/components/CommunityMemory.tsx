import React, { useState, useEffect } from 'react';
import { INITIAL_COMMUNITY_MEMORIES } from '../data/cauNguData';
import { CommunityNote } from '../types';

export const CommunityMemory: React.FC = () => {
  const [memories, setMemories] = useState<CommunityNote[]>(() => {
    try {
      const saved = localStorage.getItem('cau_ngu_memories');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_COMMUNITY_MEMORIES;
  });

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    authorName: '',
    villageName: '',
    province: 'Phú Yên',
    role: 'Ngư dân vạn chài',
    storyTitle: '',
    content: '',
    tag: 'Ký ức lễ hội',
  });

  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('cau_ngu_memories', JSON.stringify(memories));
    } catch {
      // ignore
    }
  }, [memories]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.authorName.trim() || !formData.content.trim() || !formData.storyTitle.trim()) {
      return;
    }

    const newNote: CommunityNote = {
      id: `mem-${Date.now()}`,
      authorName: formData.authorName.trim(),
      villageName: formData.villageName.trim() || 'Làng chài ven biển',
      province: formData.province,
      role: formData.role,
      yearRecorded: `Ghi nhận năm ${new Date().getFullYear()}`,
      storyTitle: formData.storyTitle.trim(),
      content: formData.content.trim(),
      tag: formData.tag,
    };

    setMemories([newNote, ...memories]);
    setFormData({
      authorName: '',
      villageName: '',
      province: 'Phú Yên',
      role: 'Ngư dân vạn chài',
      storyTitle: '',
      content: '',
      tag: 'Ký ức lễ hội',
    });
    setIsFormOpen(false);
    setNotification('Ghi chép của bạn đã được lưu vào hồ sơ số di sản.');
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <section id="memories" className="py-12 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
              <span>Kho Ký Ức Sống & Lịch Sử Truyền Khẩu</span>
              <span aria-hidden="true">·</span>
              <span>Tiếng Nói Ngư Dân Bám Biển</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Ký Ức Vạn Chài & Câu Chuyện Truyền Đời
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Tín ngưỡng thờ Cá Ông sống mãi nhờ những câu chuyện người thật việc thật được các bô lão, thuyền trưởng và nghệ nhân dân gian truyền khẩu qua bao thế hệ.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="px-4 py-2.5 bg-amber-900 hover:bg-stone-900 text-white text-xs font-semibold rounded-xs shadow-xs transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>{isFormOpen ? 'Đóng Biểu Mẫu' : 'Đóng Góp Ký Ức / Ghi Chép'}</span>
            </button>
          </div>
        </div>

        {/* Feedback message */}
        {notification && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xs flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{notification}</span>
          </div>
        )}

        {/* Contribution Form (collapsible) */}
        {isFormOpen && (
          <div className="mb-8 bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-sm">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-1 pb-2 border-b border-stone-100">
              Ghi Nhận Ký Ức Điền Dã Hoặc Câu Chuyện Làng Chài
            </h3>
            <p className="text-xs text-stone-500 mb-5">
              Những mẩu chuyện về Ông cứu nạn, kỷ niệm hội Cầu ngư, câu hát Bả Trạo của gia đình bạn sẽ góp phần làm giàu thêm hồ sơ số di sản.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Người kể / Nhân chứng *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Cụ Nguyễn Văn Nam (76 tuổi)"
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Làng chài / Vạn chài
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Vạn Thủy Tú, Làng chài Mân Thái..."
                    value={formData.villageName}
                    onChange={(e) => setFormData({ ...formData, villageName: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Tỉnh / Thành phố
                  </label>
                  <select
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                  >
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Quảng Nam">Quảng Nam</option>
                    <option value="Quảng Ngãi">Quảng Ngãi</option>
                    <option value="Bình Định">Bình Định</option>
                    <option value="Phú Yên">Phú Yên</option>
                    <option value="Khánh Hòa">Khánh Hòa</option>
                    <option value="Ninh Thuận">Ninh Thuận</option>
                    <option value="Bình Thuận">Bình Thuận</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Vai trò trong vạn
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Thuyền trưởng, Bô lão, Nghệ nhân bả trạo..."
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Chủ đề
                  </label>
                  <select
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                  >
                    <option value="Chuyện Ông cứu nạn">Chuyện Ông cứu nạn</option>
                    <option value="Diễn xướng Bả Trạo">Diễn xướng Bả Trạo</option>
                    <option value="Đời sống làng chài">Đời sống làng chài</option>
                    <option value="Tục táng Ông Lụy">Tục táng Ông Lụy</option>
                    <option value="Ký ức lễ hội">Ký ức lễ hội</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Tiêu đề câu chuyện *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Đêm sóng gió tại bãi rạng và bài học ơn Thần..."
                  value={formData.storyTitle}
                  onChange={(e) => setFormData({ ...formData, storyTitle: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Nội dung chi tiết lời kể *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Kể lại chi tiết diễn biến câu chuyện, thời gian xảy ra, bài học đúc kết cho con cháu..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2.5 text-stone-900 focus:outline-none focus:border-amber-800 leading-relaxed"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 border border-stone-300 text-stone-700 rounded-xs hover:bg-stone-100"
                >
                  Hủy Bỏ
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-stone-900 hover:bg-amber-900 text-white font-semibold rounded-xs shadow-xs"
                >
                  Lưu Vào Hồ Sơ Số
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {memories.map((note) => (
            <div
              key={note.id}
              className="bg-white border border-stone-200 p-6 rounded-sm shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                  <span className="font-semibold text-amber-900 uppercase tracking-wider">
                    {note.tag}
                  </span>
                  <span>{note.yearRecorded}</span>
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900 mb-2 leading-snug">
                  {note.storyTitle}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif italic mb-4">
                  "{note.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs">
                <strong className="text-stone-900 block font-medium">{note.authorName}</strong>
                <span className="text-stone-500">
                  {note.role} · {note.villageName}, {note.province}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
