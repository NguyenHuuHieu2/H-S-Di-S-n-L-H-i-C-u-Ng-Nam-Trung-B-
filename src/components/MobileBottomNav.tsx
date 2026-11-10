import React from 'react';
import { AppScreen } from '../types';

interface MobileBottomNavProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentScreen,
  onNavigate,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 md:hidden flex items-stretch justify-around h-14 px-1 shadow-lg">
      {/* 1. Trang Chủ */}
      <button
        onClick={() => onNavigate('home')}
        className={`flex-1 min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
          currentScreen === 'home'
            ? 'text-amber-400 font-bold'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="leading-tight">Trang Chủ</span>
      </button>

      {/* 2. Làn Điệu */}
      <button
        onClick={() => onNavigate('melodies')}
        className={`flex-1 min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
          currentScreen === 'melodies' || currentScreen === 'melody-detail'
            ? 'text-amber-400 font-bold'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
        <span className="leading-tight">Làn Điệu</span>
      </button>

      {/* 3. Hỏi Đáp */}
      <button
        onClick={() => onNavigate('faq')}
        className={`flex-1 min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
          currentScreen === 'faq'
            ? 'text-amber-400 font-bold'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="leading-tight">Hỏi Đáp</span>
      </button>

      {/* 4. Tư Liệu */}
      <button
        onClick={() => onNavigate('sources-community')}
        className={`flex-1 min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
          currentScreen === 'sources-community'
            ? 'text-amber-400 font-bold'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="leading-tight">Tư Liệu</span>
      </button>

      {/* 5. Giới Thiệu */}
      <button
        onClick={() => onNavigate('about')}
        className={`flex-1 min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
          currentScreen === 'about'
            ? 'text-amber-400 font-bold'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="leading-tight">Giới Thiệu</span>
      </button>
    </nav>
  );
};
