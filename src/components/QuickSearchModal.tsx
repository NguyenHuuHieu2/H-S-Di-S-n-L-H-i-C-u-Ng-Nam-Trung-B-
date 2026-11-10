import React, { useState, useMemo, useEffect } from 'react';
import {
  RITUAL_STEPS,
  BA_TRAO_ROLES,
  HERITAGE_SITES,
  GLOSSARY_TERMS,
  IMPERIAL_EDICTS,
  MELODIES_DATA,
  FAQ_DATA,
} from '../data/cauNguData';
import { AppScreen } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateScreen: (screen: AppScreen, extraId?: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateScreen,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    // 1. Melodies (Màn hình 3 / Màn hình 2)
    const matchedMelodies = MELODIES_DATA.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.lyrics.stanzas.some((s) => s.text.some((t) => t.toLowerCase().includes(q)))
    ).map((m) => ({
      type: 'Màn hình 3 · Làn Điệu Bả Trạo',
      screen: 'melody-detail' as AppScreen,
      extraId: m.id,
      title: `${m.name} (${m.titleCn})`,
      subtitle: `${m.role} · ${m.moodLabel} · ${m.region}`,
    }));

    // 2. FAQs (Màn hình 4)
    const matchedFaqs = FAQ_DATA.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.keyReference.toLowerCase().includes(q)
    ).map((f) => ({
      type: 'Màn hình 4 · Hỏi Đáp Di Sản',
      screen: 'faq' as AppScreen,
      extraId: f.id,
      title: f.question,
      subtitle: f.answer.slice(0, 110) + '...',
    }));

    // 3. Heritage Sites (Màn hình 1)
    const matchedSites = HERITAGE_SITES.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.province.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q)
    ).map((item) => ({
      type: 'Màn hình 1 · Vạn Chài & Lăng Ông',
      screen: 'home' as AppScreen,
      extraId: item.id,
      title: `${item.name} (${item.province})`,
      subtitle: `Lễ hội: ${item.festivalLunarDate} · ${item.address}`,
    }));

    // 4. Imperial Edicts & Sources (Màn hình 5)
    const matchedEdicts = IMPERIAL_EDICTS.filter(
      (e) =>
        e.conferredTitle.toLowerCase().includes(q) ||
        e.reign.toLowerCase().includes(q) ||
        e.recipient.toLowerCase().includes(q)
    ).map((item) => ({
      type: 'Màn hình 5 · Sắc Phong Triều Nguyễn',
      screen: 'sources-community' as AppScreen,
      extraId: item.id,
      title: `${item.conferredTitle} (${item.reign})`,
      subtitle: `Lưu giữ tại: ${item.recipient}`,
    }));

    // 5. Ritual Steps (Màn hình 1 / Lễ Nghinh Ông)
    const matchedRituals = RITUAL_STEPS.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.shortDesc.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q)
    ).map((item) => ({
      type: 'Nghi Lễ Nghinh Thủy Lục',
      screen: 'home' as AppScreen,
      extraId: item.id,
      title: item.title,
      subtitle: `${item.timeSlot} · ${item.location}`,
    }));

    // 6. Direct shortcuts
    const directShortcuts: { type: string; screen: AppScreen; extraId?: string; title: string; subtitle: string }[] = [];
    if ('làn điệu ba trạo hát múa điệu hò mái ba nam ai nam khách'.includes(q)) {
      directShortcuts.push({
        type: 'Màn hình 2',
        screen: 'melodies',
        title: 'Màn hình 2: Danh Sách Kho Làn Điệu',
        subtitle: 'Khám phá toàn bộ 8 làn điệu có bộ lọc đa tiêu chí',
      });
    }
    if ('hỏi đáp thắc mắc câu hỏi faq trắc nghiệm'.includes(q)) {
      directShortcuts.push({
        type: 'Màn hình 4',
        screen: 'faq',
        title: 'Màn hình 4: Trang Hỏi Đáp Di Sản',
        subtitle: '10 câu hỏi cốt lõi giải đáp cặn kẽ cùng trắc nghiệm văn hóa',
      });
    }
    if ('nguồn tư liệu sắc phong ký ức ghi nhận cộng đồng'.includes(q)) {
      directShortcuts.push({
        type: 'Màn hình 5',
        screen: 'sources-community',
        title: 'Màn hình 5: Nguồn Tư Liệu & Ký Ức Cộng Đồng',
        subtitle: 'Châu bản sắc phong, quyết định di sản và lưu bút làng chài',
      });
    }
    if ('giới thiệu dự án mục đích hướng dẫn'.includes(q)) {
      directShortcuts.push({
        type: 'Màn hình 6',
        screen: 'about',
        title: 'Màn hình 6: Giới Thiệu Dự Án',
        subtitle: 'Sứ mệnh số hóa, hướng dẫn dùng điện thoại và ngoại tuyến',
      });
    }

    return [
      ...directShortcuts,
      ...matchedMelodies,
      ...matchedFaqs,
      ...matchedSites,
      ...matchedEdicts,
      ...matchedRituals,
    ].slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-white border border-stone-300 rounded-sm shadow-xl w-full max-w-2xl overflow-hidden animate-fadeIn">
        {/* Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <svg className="w-5 h-5 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            placeholder="Tra cứu tức thì trên 6 màn hình (ví dụ: Hò Mái Ba, Vạn Thủy Tú, Ông Lụy...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-xs sm:text-sm bg-transparent border-none text-stone-900 focus:outline-none placeholder-stone-400"
          />
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-xs"
          >
            <span className="text-xs uppercase font-semibold">Đóng</span>
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-stone-100">
          {results.length > 0 ? (
            results.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onNavigateScreen(item.screen, item.extraId);
                  onClose();
                }}
                className="w-full text-left p-3 hover:bg-stone-50 rounded-xs transition-colors flex flex-col group cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-amber-800 uppercase tracking-wider text-[11px]">
                    {item.type}
                  </span>
                  <span className="text-stone-400 group-hover:text-amber-900 text-[11px] font-medium">
                    Mở màn hình này →
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900 group-hover:text-amber-950">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              </button>
            ))
          ) : query.trim() !== '' ? (
            <div className="p-8 text-center text-xs text-stone-500">
              Không tìm thấy mục nào khớp với "{query}". Vui lòng thử từ khóa khác.
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-stone-400 space-y-1">
              <p>Gợi ý tra cứu nhanh:</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-1 text-[11px] text-amber-900 font-medium">
                <span className="p-1 bg-stone-100 rounded-xs">Hò Mái Ba</span>
                <span className="p-1 bg-stone-100 rounded-xs">Hát Nam Ai</span>
                <span className="p-1 bg-stone-100 rounded-xs">Vạn Thủy Tú</span>
                <span className="p-1 bg-stone-100 rounded-xs">Ông Lụy</span>
                <span className="p-1 bg-stone-100 rounded-xs">Sắc Gia Long</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
