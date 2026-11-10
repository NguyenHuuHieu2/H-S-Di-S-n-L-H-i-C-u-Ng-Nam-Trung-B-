import React, { useState } from 'react';
import { usePWAInstall, useOnlineStatus } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, do not render install button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="px-3 py-1.5 text-xs font-semibold text-amber-950 bg-amber-100 hover:bg-amber-200 transition-colors rounded-xs flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
        title="Cài đặt ứng dụng về màn hình chính điện thoại để sử dụng ngoại tuyến"
      >
        <svg className="w-3.5 h-3.5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Cài Ứng Dụng</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors rounded-xs flex items-center gap-1.5 whitespace-nowrap"
        >
          <svg className="w-3.5 h-3.5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Cài vào iPhone</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-sm bg-white p-6 shadow-xl border border-stone-300">
              <h3 className="text-base font-serif font-bold text-stone-900">
                Cài Đặt Lên Màn Hình iPhone / iPad
              </h3>
              <p className="mt-3 text-xs text-stone-600 leading-relaxed space-y-2">
                1. Bấm nút <strong>Chia sẻ (Share)</strong> hình ô vuông có mũi tên ở thanh dưới Safari.<br />
                2. Cuộn xuống và chọn <strong>Thêm vào Màn hình chính (Add to Home Screen)</strong>.<br />
                3. Bấm <strong>Thêm (Add)</strong> ở góc trên bên phải.
              </p>
              <div className="mt-3 p-2.5 bg-amber-50 rounded-xs text-[11px] text-amber-900">
                ✦ Ứng dụng sẽ hoạt động mượt mà, lưu toàn bộ hồ sơ số và có thể mở xem khi không có mạng ngoài biển.
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xs bg-stone-900 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 flex items-center gap-2.5 rounded-xs bg-amber-900 text-amber-50 px-3.5 py-2 text-xs shadow-lg border border-amber-700/80">
      <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
      <span className="leading-tight">
        <strong>Chế độ ngoại tuyến:</strong> Không có mạng internet. Toàn bộ hồ sơ số đã lưu trong bộ nhớ máy vẫn tra cứu bình thường.
      </span>
    </div>
  );
};
