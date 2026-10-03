import React from 'react';
import { MisahaLogo } from './MisahaLogo';
import { Language, CONTENT } from '../data/translations';

interface FinalSectionProps {
  lang: Language;
  onOpenPartner: () => void;
  onOpenContact: () => void;
  onOpenBrief: () => void;
}

export const FinalSection: React.FC<FinalSectionProps> = ({
  lang,
  onOpenPartner,
  onOpenContact,
  onOpenBrief,
}) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';

  return (
    <footer className="relative bg-[#1B3E26] text-[#FAF8F5] py-24 sm:py-32 overflow-hidden">
      {/* Warm ambient corner lights */}
      <div className="absolute -top-24 end-0 w-96 h-96 bg-[#E86329]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 start-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        {/* MISaha Official Brand Mark in Dark Theme */}
        <div className="flex justify-center">
          <MisahaLogo
            variant="bilingual"
            theme="inverted"
            size="lg"
            showTagline={true}
          />
        </div>

        {/* Emotional Typography Climax */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF8F5] tracking-tight leading-tight">
            {isAr ? 'كل عمر شايل حكاية…' : 'Every Age Carries a Story.'}
          </h2>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#E86329] italic font-bold">
            {isAr ? 'والحكاية لسه مستمرة.' : 'And the Story Continues.'}
          </p>

          <p className="text-stone-300 font-serif italic text-base sm:text-xl pt-2 max-w-2xl mx-auto">
            {isAr
              ? 'Every Age Carries a Story. And the Story Continues.'
              : 'كل عمر شايل حكاية. والحكاية لسه مستمرة.'}
          </p>
        </div>

        {/* Date and Location Anchor */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-mono text-stone-200">
          <span className="w-2 h-2 rounded-full bg-[#E86329]" />
          <span>{isAr ? 'أكتوبر 2026 — جمهورية مصر العربية' : 'October 2026 — Egypt'}</span>
          <span className="text-stone-400">·</span>
          <span>{isAr ? 'مجتمع مساحة' : 'MISaha Community'}</span>
        </div>

        {/* Three Requested Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 max-w-2xl mx-auto">
          {/* 1. Partner With MISaha */}
          <button
            onClick={onOpenPartner}
            className="px-6 py-3.5 rounded-xl bg-[#E86329] hover:bg-[#d4561f] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            {t.closing.ctaPartner}
          </button>

          {/* 2. Contact the Project */}
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
          >
            {t.closing.ctaContact}
          </button>

          {/* 3. Download Project Brief */}
          <button
            onClick={onOpenBrief}
            className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 border border-stone-400/40 text-stone-200 font-semibold text-sm transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <span>↓</span>
            <span>{t.closing.ctaDownload}</span>
          </button>
        </div>

        {/* Institutional Signature & Editorial Credits */}
        <div className="pt-12 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-sans">
          <p>{t.closing.footerNote}</p>
          <div className="flex items-center gap-4 text-stone-300 font-mono text-[11px]">
            <span>Sony A7 III 4K</span>
            <span>·</span>
            <span>Oral History Archive</span>
            <span>·</span>
            <span>Cairo / Giza</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
