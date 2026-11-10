import React from 'react';
import { AppScreen } from '../types';

interface HeaderProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  onOpenQuickSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenQuickSearch,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <button
          onClick={() => onNavigate('home')}
          className="text-xl sm:text-2xl font-serif font-bold text-stone-900 hover:text-amber-900 transition-colors tracking-tight whitespace-nowrap shrink-0 text-left"
        >
          Cầu Ngư Nam Trung Bộ
        </button>

        {/* Zone 2: 5 single-line navigation links representing the main screens */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-stone-900 py-1 border-b-2 ${
              currentScreen === 'home'
                ? 'border-amber-800 text-stone-900 font-semibold'
                : 'border-transparent'
            }`}
          >
            Trang Chủ
          </button>
          <button
            onClick={() => onNavigate('melodies')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-stone-900 py-1 border-b-2 ${
              currentScreen === 'melodies' || currentScreen === 'melody-detail'
                ? 'border-amber-800 text-stone-900 font-semibold'
                : 'border-transparent'
            }`}
          >
            Kho Làn Điệu
          </button>
          <button
            onClick={() => onNavigate('faq')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-stone-900 py-1 border-b-2 ${
              currentScreen === 'faq'
                ? 'border-amber-800 text-stone-900 font-semibold'
                : 'border-transparent'
            }`}
          >
            Hỏi Đáp Di Sản
          </button>
          <button
            onClick={() => onNavigate('sources-community')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-stone-900 py-1 border-b-2 ${
              currentScreen === 'sources-community'
                ? 'border-amber-800 text-stone-900 font-semibold'
                : 'border-transparent'
            }`}
          >
            Nguồn Tư Liệu
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-stone-900 py-1 border-b-2 ${
              currentScreen === 'about'
                ? 'border-amber-800 text-stone-900 font-semibold'
                : 'border-transparent'
            }`}
          >
            Giới Thiệu
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuickSearch}
            className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-stone-900 hover:bg-amber-900 transition-colors rounded-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Tra Cứu Hồ Sơ
          </button>
        </div>
      </div>
    </header>
  );
};
