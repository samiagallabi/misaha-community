import React from 'react';
import { MisahaLogo } from './MisahaLogo';
import { DocumentaryVisual } from './DocumentaryVisual';
import { Language, CONTENT } from '../data/translations';

interface HeroSectionProps {
  lang: Language;
  onExplore: () => void;
  onConcept: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onExplore,
  onConcept,
}) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:py-32 overflow-hidden paper-texture"
    >
      {/* Warm ambient documentary lighting backdrop */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#235836]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top curatorial tag & presenter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#235836]/10">
          <div className="flex items-center gap-3">
            <MisahaLogo variant="mark-only" size="sm" />
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#235836] uppercase">
              <span>{t.meta.presentedBy}</span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-600">{t.meta.dateLocation}</span>
            </div>
          </div>

          <div className="text-xs font-medium text-stone-500 bg-[#235836]/5 px-3 py-1 rounded-full">
            {t.meta.datesRange}
          </div>
        </div>

        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#E86329]">
              <span className="w-2 h-2 rounded-full bg-[#E86329]" />
              <span className="font-semibold tracking-wide">
                {isAr ? t.meta.tagline : 'Every Age Carries a Story'}
              </span>
              <span className="text-stone-300">/</span>
              <span className="text-stone-500 text-xs">
                {isAr ? 'Every Age Carries a Story' : 'كل عمر شايل حكاية'}
              </span>
            </div>

            {/* Primary Cinematic Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B3E26] tracking-tight leading-[1.15]">
                {isAr ? 'لسه الحكاية مستمرة' : 'STILL, THE STORY CONTINUES'}
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-stone-700 tracking-normal italic">
                {isAr ? 'STILL, THE STORY CONTINUES' : 'لسه الحكاية مستمرة'}
              </p>
            </div>

            {/* Subtitle */}
            <div className="text-lg sm:text-xl font-medium text-[#2E7D47] border-s-2 border-[#E86329] ps-4 py-1">
              <p>{isAr ? t.meta.subtitle : 'Sudanese Elders: Memory, Displacement & Belonging'}</p>
              <p className="text-sm text-stone-500 font-normal mt-0.5">
                {isAr ? 'Sudanese Elders: Memory, Displacement & Belonging' : 'كبار السن السودانيون: الذاكرة، النزوح والانتماء'}
              </p>
            </div>

            {/* Supporting line */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              {t.hero.leadParagraph}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg bg-[#235836] text-white hover:bg-[#1A452A] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <span>{t.hero.exploreCta}</span>
                <span className={`inline-block ms-2 transition-transform duration-200 ${isAr ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                  {isAr ? '←' : '→'}
                </span>
              </button>

              <button
                onClick={onConcept}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg border border-[#235836]/25 bg-white/70 text-[#235836] hover:bg-[#235836]/5 transition-all duration-200 cursor-pointer"
              >
                {t.hero.conceptCta}
              </button>
            </div>

            {/* Core Values Ribbon */}
            <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-500 font-medium">
              <span>{isAr ? 'الذاكرة' : 'Memory'}</span>
              <span>·</span>
              <span>{isAr ? 'الكرامة' : 'Dignity'}</span>
              <span>·</span>
              <span>{isAr ? 'الحياة' : 'Life'}</span>
              <span>·</span>
              <span>{isAr ? 'الخبرة' : 'Experience'}</span>
              <span>·</span>
              <span>{isAr ? 'الانتماء' : 'Belonging'}</span>
            </div>
          </div>

          {/* Documentary Visual Canvas Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative accent card underneath */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#235836]/15 via-amber-200/20 to-[#E86329]/15 rounded-3xl blur-md -rotate-1 pointer-events-none" />

              <DocumentaryVisual
                type="jebana-coffee"
                lang={lang}
                captionAr="قعدة سودانية دافئة: جبنة القهوة بالهيل، مسبحة خشبية معتقة، وصور عائلية تحت نور شمس الصباح في القاهرة."
                captionEn="An intimate Sudanese morning: traditional clay Jebana coffee pot, aged prayer beads, and family memories in Cairo daylight."
                className="relative z-10 shadow-lg"
              />

              {/* Editorial Stamp callout */}
              <div className="absolute -bottom-6 -start-6 z-20 hidden sm:flex items-center gap-3 bg-[#FAF8F5] border border-[#235836]/20 p-3.5 rounded-xl shadow-md max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-[#E86329]/10 text-[#E86329] flex items-center justify-center font-bold text-lg shrink-0">
                  ☕
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#235836]">
                    {isAr ? 'مش استوديو… بيت' : 'Not a studio. A home.'}
                  </p>
                  <p className="text-stone-500 mt-0.5">
                    {isAr ? 'شاي أو قهوة، ونس، واستماع عميق' : 'Tea, coffee, familiar comfort, and deep listening'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
