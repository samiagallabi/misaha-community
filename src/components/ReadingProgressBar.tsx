import React, { useState, useEffect } from 'react';
import { Language } from '../data/translations';

interface ReadingProgressBarProps {
  lang: Language;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({ lang }) => {
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const isAr = lang === 'ar';

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const currentProgress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

      setProgress(currentProgress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 inset-x-0 z-[100] h-[3px] bg-black/5 pointer-events-auto select-none"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={isAr ? 'نسبة قراءة الصفحة' : 'Reading Progress'}
    >
      {/* Active progress fill line */}
      <div
        className="h-full bg-gradient-to-r from-[#235836] via-[#2E7D47] to-[#E86329] transition-all duration-75 ease-out relative"
        style={{
          width: `${progress}%`,
          float: isAr ? 'right' : 'left',
          boxShadow: '0 0 8px rgba(232, 99, 41, 0.6)',
        }}
      >
        {/* Subtle glowing light node at the leading edge */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FAF8F5] shadow-xs ${
            isAr ? '-left-1' : '-right-1'
          }`}
          style={{
            boxShadow: '0 0 6px #E86329, 0 0 12px #E86329',
          }}
        />
      </div>

      {/* Floating Reading Progress Pill on Hover or during active reading */}
      {showTooltip && (
        <div
          className={`absolute top-2 transition-opacity duration-200 pointer-events-none px-2 py-0.5 rounded bg-[#1B3E26]/90 backdrop-blur-xs text-[10px] font-mono text-white shadow-md ${
            isAr ? 'right-4' : 'left-4'
          }`}
        >
          <span>{Math.round(progress)}% </span>
          <span className="text-stone-300">
            {isAr ? 'من الحكاية' : 'of the story'}
          </span>
        </div>
      )}
    </div>
  );
};
