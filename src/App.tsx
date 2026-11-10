import { useState } from 'react';
import { AppScreen } from './types';
import { Header } from './components/Header';
import { Screen1Home } from './screens/Screen1Home';
import { Screen2Melodies } from './screens/Screen2Melodies';
import { Screen3MelodyDetail } from './screens/Screen3MelodyDetail';
import { Screen4Faq } from './screens/Screen4Faq';
import { Screen5SourcesCommunity } from './screens/Screen5SourcesCommunity';
import { Screen6About } from './screens/Screen6About';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { QuickSearchModal } from './components/QuickSearchModal';
import { OfflineIndicator } from './components/PWAInstallButton';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [selectedMelodyId, setSelectedMelodyId] = useState<string>('ho-mai-ba');
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState<boolean>(false);
  const [isDataSaver, setIsDataSaver] = useState<boolean>(() => {
    try {
      return localStorage.getItem('cau_ngu_data_saver') === 'true';
    } catch {
      return false;
    }
  });

  const toggleDataSaver = () => {
    setIsDataSaver((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('cau_ngu_data_saver', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleNavigate = (screen: AppScreen, extraId?: string) => {
    setCurrentScreen(screen);
    if (extraId) {
      setSelectedMelodyId(extraId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-900 selection:text-white">
      {/* Offline Toast Indicator */}
      <OfflineIndicator />

      {/* Top Bar Header (Standard 3-Zone Contract) */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenQuickSearch={() => setIsQuickSearchOpen(true)}
      />

      {/* Main Content Area: Renders the requested 6 Screens */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Màn hình 1: Trang chủ giới thiệu cộng đồng và địa bàn, có ô tìm kiếm */}
        {currentScreen === 'home' && (
          <Screen1Home
            onNavigate={handleNavigate}
            isDataSaver={isDataSaver}
            onToggleDataSaver={toggleDataSaver}
            onOpenQuickSearch={() => setIsQuickSearchOpen(true)}
          />
        )}

        {/* Màn hình 2: Danh sách làn điệu có bộ lọc */}
        {currentScreen === 'melodies' && (
          <Screen2Melodies
            onSelectMelody={(melodyId) => handleNavigate('melody-detail', melodyId)}
          />
        )}

        {/* Màn hình 3: Trang chi tiết một làn điệu */}
        {currentScreen === 'melody-detail' && (
          <Screen3MelodyDetail
            melodyId={selectedMelodyId}
            onBackToMelodies={() => handleNavigate('melodies')}
            onSelectMelody={(melodyId) => handleNavigate('melody-detail', melodyId)}
          />
        )}

        {/* Màn hình 4: Trang hỏi đáp */}
        {currentScreen === 'faq' && <Screen4Faq />}

        {/* Màn hình 5: Trang Nguồn tư liệu và ghi nhận cộng đồng */}
        {currentScreen === 'sources-community' && <Screen5SourcesCommunity />}

        {/* Màn hình 6: Trang Giới thiệu */}
        {currentScreen === 'about' && <Screen6About />}
      </main>

      {/* Institutional Curatorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Floating Bottom Navigation (thumb-friendly for smartphones) */}
      <MobileBottomNav
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
      />

      {/* Global Quick Search Modal across all 6 screens */}
      <QuickSearchModal
        isOpen={isQuickSearchOpen}
        onClose={() => setIsQuickSearchOpen(false)}
        onNavigateScreen={handleNavigate}
      />
    </div>
  );
}
