import React, { useState, useMemo } from 'react';
import { FAQ_DATA } from '../data/cauNguData';
import { FaqItem } from '../types';
import { HeritageQuiz } from '../components/HeritageQuiz';
import { GeminiDisanFaq } from '../components/GeminiDisanFaq';
import { Sparkles, MapPin, UserCheck, BookOpen, FileText } from 'lucide-react';

export const Screen4Faq: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string>(FAQ_DATA[0].id);
  const [activeGeminiQuery, setActiveGeminiQuery] = useState<string>('');

  // New question form state
  const [newQuestionForm, setNewQuestionForm] = useState({
    name: '',
    village: '',
    role: 'Sinh viên / Giới trẻ',
    question: '',
  });
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Câu Hỏi' },
    { id: 'tin-nguong', label: 'Tín Ngưỡng Cá Ông' },
    { id: 'nghi-le', label: 'Nghi Lễ & Tang Tế' },
    { id: 'ba-trao', label: 'Diễn Xướng Bả Trạo' },
    { id: 'di-tich', label: 'Di Tích & Bảo Vật' },
    { id: 'cong-dong', label: 'Cộng Đồng & Giới Trẻ' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === '' ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.keyReference.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const handleAskGeminiWithQuestion = (q: string) => {
    setActiveGeminiQuery(q);
    const element = document.getElementById('gemini-faq-console');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionForm.question.trim()) return;
    setSubmitFeedback(
      `Cảm ơn ${newQuestionForm.name || 'bạn'}! Câu hỏi của bạn đã được tiếp nhận và sẽ được chuyển đến ban cố vấn bô lão vạn chài.`
    );
    setNewQuestionForm({ name: '', village: '', role: 'Sinh viên / Giới trẻ', question: '' });
    setTimeout(() => setSubmitFeedback(null), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
          <span>Màn Hình 4</span>
          <span aria-hidden="true">·</span>
          <span>Hỏi Đáp Chuyên Sâu Về Tín Ngưỡng & Lễ Hội</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Hỏi Đáp Di Sản Cầu Ngư & Văn Hóa Biển
        </h1>
        <p className="mt-2 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
          Giải đáp cặn kẽ các thắc mắc về nguồn gốc tín ngưỡng thờ Cá Ông, quy thức tang tế khi Ông lụy, ý nghĩa làn điệu Bả Trạo và vai trò bảo tồn của thế hệ trẻ.
        </p>
      </div>

      {/* Primary Section: AI Gemini Q&A reading disan.json */}
      <GeminiDisanFaq externalQuery={activeGeminiQuery} />

      {/* Curated Historical FAQ Header */}
      <div className="pt-2 border-t border-stone-200">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
          Câu Hỏi Điển Hình Từ Bô Lão & Tư Liệu Cổ Truyền
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-stone-500">
          Tuyển chọn 10 vấn đề cốt lõi về quy chuẩn lễ thức, sắc phong và nghệ thuật Bả Trạo do các nhà nghiên cứu và nghệ nhân vạn chài đúc kết (kèm 4 trường căn cứ từ tệp disan.json):
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-stone-50 border border-stone-200 p-4 sm:p-5 rounded-sm space-y-3.5 shadow-xs">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi (ví dụ: Vì sao gọi là Ông lụy, Bả trạo nghĩa là gì...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs sm:text-sm bg-white border border-stone-300 rounded-xs py-2.5 pl-9 pr-3 text-stone-900 focus:outline-none focus:border-amber-800"
          />
          <svg
            className="w-4 h-4 text-stone-400 absolute left-3 top-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-xs whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-amber-900 text-white font-semibold'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isExpanded = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white border border-stone-200 rounded-sm overflow-hidden shadow-xs transition-colors hover:border-stone-300"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left min-h-[52px] p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-900 block">
                    {faq.categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <div className="shrink-0 mt-1">
                  <svg
                    className={`w-5 h-5 text-stone-500 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-stone-100 text-sm sm:text-base text-stone-700 space-y-4 bg-stone-50/50">
                  <p className="leading-relaxed whitespace-pre-line font-normal text-stone-800 text-sm sm:text-base">
                    {faq.answer}
                  </p>

                  {/* 4 Required Citation Fields from disan.json */}
                  {faq.citation && (
                    <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs uppercase tracking-wider">
                        <FileText className="w-4 h-4" />
                        <span>Căn cứ trích dẫn hồ sơ disan.json (4 trường bắt buộc):</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs pt-1 border-t border-stone-100">
                        <div>
                          <strong className="text-stone-500 block">1. Tên bản ghi:</strong>
                          <span className="font-bold text-stone-900">{faq.citation.recordName}</span>
                        </div>
                        <div>
                          <strong className="text-stone-500 flex items-center gap-1">
                            <UserCheck className="w-3.5 h-3.5 text-stone-400" />
                            2. Tên cộng đồng / Người cung cấp:
                          </strong>
                          <span className="text-stone-800 font-medium">{faq.citation.community}</span>
                        </div>
                        <div>
                          <strong className="text-stone-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-stone-400" />
                            3. Địa danh:
                          </strong>
                          <span className="text-stone-800">{faq.citation.location}</span>
                        </div>
                        <div>
                          <strong className="text-amber-900 flex items-center gap-1 font-semibold">
                            <BookOpen className="w-3.5 h-3.5 text-amber-900" />
                            4. Trường nguồn tư liệu đã dùng:
                          </strong>
                          <span className="font-serif italic text-stone-800 block bg-stone-50 p-2 border border-stone-200 rounded-xs mt-0.5 leading-relaxed">
                            "{faq.citation.source}"
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2.5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200/60 text-xs">
                    <div className="text-stone-600">
                      <span className="font-semibold text-stone-700">Dẫn chiếu:</span> {faq.keyReference}
                    </div>

                    <button
                      onClick={() => handleAskGeminiWithQuestion(faq.question)}
                      className="min-h-[40px] inline-flex items-center gap-2 px-3.5 py-2 bg-amber-900 hover:bg-amber-950 text-white font-medium rounded-xs transition-colors shadow-2xs"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Hỏi Gemini đối chiếu câu này</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="p-10 text-center bg-stone-50 border border-stone-200 rounded-sm text-stone-600 text-sm">
            Không tìm thấy câu hỏi phù hợp với "{searchQuery}".
          </div>
        )}
      </div>

      {/* Interactive Heritage Quiz Station */}
      <HeritageQuiz />

      {/* Community Question Submission Form */}
      <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs">
        <h3 className="font-serif font-bold text-lg text-stone-900 mb-1 pb-2 border-b border-stone-100">
          Gửi Câu Hỏi / Thắc Mắc Mới Về Tín Ngưỡng Làng Chài
        </h3>
        <p className="text-xs text-stone-500 mb-4">
          Nếu bạn có câu hỏi điền dã chưa được giải đáp, hãy gửi nội dung tại đây để nhận phân tích tức thì từ Gemini hoặc chuyển đến ban cố vấn:
        </p>

        {submitFeedback && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xs">
            {submitFeedback}
          </div>
        )}

        <form onSubmit={handleQuestionSubmit} className="space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Họ và tên của bạn
              </label>
              <input
                type="text"
                placeholder="Ví dụ: Nguyễn Văn Hưng"
                value={newQuestionForm.name}
                onChange={(e) => setNewQuestionForm({ ...newQuestionForm, name: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
              />
            </div>
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Làng chài / Trường / Cơ quan
              </label>
              <input
                type="text"
                placeholder="Ví dụ: ĐH Khoa học Xã hội, Vạn Thọ Quang"
                value={newQuestionForm.village}
                onChange={(e) => setNewQuestionForm({ ...newQuestionForm, village: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
              />
            </div>
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Đối tượng
              </label>
              <select
                value={newQuestionForm.role}
                onChange={(e) => setNewQuestionForm({ ...newQuestionForm, role: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2 text-stone-900 focus:outline-none focus:border-amber-800"
              >
                <option value="Sinh viên / Giới trẻ">Sinh viên / Giới trẻ</option>
                <option value="Cán bộ văn hóa cơ sở">Cán bộ văn hóa cơ sở</option>
                <option value="Ngư dân vạn chài">Ngư dân vạn chài</option>
                <option value="Người quan tâm">Người quan tâm</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              Nội dung câu hỏi / thắc mắc *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Nhập câu hỏi bạn muốn tìm hiểu về nghi thức, bài ca bả trạo, lịch sử làng chài..."
              value={newQuestionForm.question}
              onChange={(e) => setNewQuestionForm({ ...newQuestionForm, question: e.target.value })}
              className="w-full bg-stone-50 border border-stone-200 rounded-xs p-2.5 text-stone-900 focus:outline-none focus:border-amber-800"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => {
                if (!newQuestionForm.question.trim()) return;
                handleAskGeminiWithQuestion(newQuestionForm.question);
              }}
              className="min-h-[44px] px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white font-semibold rounded-xs transition-colors text-xs flex items-center gap-1.5 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hỏi Gemini đọc disan.json ngay</span>
            </button>

            <button
              type="submit"
              className="min-h-[44px] px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-xs transition-colors text-xs"
            >
              Gửi Câu Hỏi Đến Ban Cố Vấn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

