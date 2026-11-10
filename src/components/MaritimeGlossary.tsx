import React, { useState, useMemo } from 'react';
import { GLOSSARY_TERMS } from '../data/cauNguData';
import { GlossaryTerm } from '../types';

export const MaritimeGlossary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchWord, setSearchWord] = useState<string>('');
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Thuật Ngữ' },
    { id: 'nghi-le', label: 'Nghi Thức & Cúng Tế' },
    { id: 'ba-trao', label: 'Diễn Xướng Bả Trạo' },
    { id: 'chuc-sac', label: 'Chức Sắc & Ban Vạn' },
    { id: 'kien-truc', label: 'Kiến Trúc & Bảo Vật' },
    { id: 'ngu-nghiep', label: 'Tổ Chức Ngư Nghiệp' },
  ];

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchWord.trim().toLowerCase();
      const matchSearch =
        q === '' ||
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.culturalContext.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchWord]);

  return (
    <section id="glossary" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
            <span>Ngữ Vựng Biển & Hải Văn Dân Gian</span>
            <span aria-hidden="true">·</span>
            <span>Từ Điển Tín Ngưỡng Vạn Chài</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Từ Điển Thuật Ngữ Cầu Ngư Nam Trung Bộ
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Hệ thống các khái niệm, mỹ từ và thuật ngữ cổ gắn liền với đời sống tâm linh, tập tục kiêng cữ và nghi thức bái tạ Đức Ngư Ông của dân vạn chài.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-stone-50 border border-stone-200 p-4 rounded-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-amber-900 text-white font-semibold'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Tra cứu từ ngữ (ví dụ: Ông lụy, Bả trạo...)"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
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

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term) => {
            const isExpanded = selectedTermId === term.id;
            return (
              <div
                key={term.id}
                className="bg-white border border-stone-200 p-5 rounded-sm hover:border-amber-800 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-stone-100 mb-3">
                    <h3 className="font-serif font-bold text-lg text-stone-900">
                      {term.term}
                    </h3>
                    {term.phonetic && (
                      <span className="text-[11px] font-mono text-stone-400">
                        /{term.phonetic}/
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {term.definition}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-stone-100 text-xs text-stone-600 space-y-2">
                    <div>
                      <strong className="text-amber-900 block font-medium mb-0.5">
                        Bối cảnh văn hóa & tập tục:
                      </strong>
                      <p className="leading-relaxed text-stone-600">
                        {term.culturalContext}
                      </p>
                    </div>

                    {term.exampleSentence && (
                      <div className="bg-stone-50 p-2.5 rounded-xs border border-stone-200/60 font-serif italic text-stone-800">
                        "{term.exampleSentence}"
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTerms.length === 0 && (
          <div className="p-12 text-center bg-stone-50 border border-stone-200 rounded-sm text-stone-500 text-xs">
            Không tìm thấy thuật ngữ nào khớp với "{searchWord}". Vui lòng thử từ khóa khác.
          </div>
        )}
      </div>
    </section>
  );
};
