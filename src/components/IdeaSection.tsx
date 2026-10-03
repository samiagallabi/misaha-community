import React from 'react';
import { DocumentaryVisual } from './DocumentaryVisual';
import { Language, CONTENT } from '../data/translations';

interface IdeaSectionProps {
  lang: Language;
}

export const IdeaSection: React.FC<IdeaSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';

  return (
    <section id="idea" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>01</span>
            <span className="text-stone-300">/</span>
            <span>{t.section1.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section1.heading : 'A Space for Stories'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'A Space for Stories' : 'مساحة للحكاية'}
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-base sm:text-lg text-stone-700 leading-relaxed space-y-4">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#235836] first-letter:me-2">
                {t.section1.p1}
              </p>
              <p>{t.section1.p2}</p>

              {/* Poetic Short Paragraph */}
              <div className="py-2">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#E86329] block">
                  {t.section1.p3}
                </span>
              </div>

              <p>{t.section1.p4}</p>
            </div>

            {/* Prominent High-Contrast Callout Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1B3E26] to-[#285E39] p-8 text-white shadow-md my-8">
              <div className="absolute top-0 end-0 w-36 h-36 bg-[#E86329]/15 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-2">
                <p className="text-base sm:text-lg text-stone-200 font-light">
                  {t.section1.callout}
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FAF8F5] tracking-tight">
                  {t.section1.calloutEmphasized}
                </p>
              </div>
            </div>

            {/* Quick Reality Markers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              {t.section1.details.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#235836]">
                    {item.label}
                  </div>
                  <div className="text-sm text-stone-600 leading-snug">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 space-y-6">
            <DocumentaryVisual
              type="tea-tray"
              lang={lang}
              captionAr="صينية شاي سودانية بالنعناع والبلح: كرم الضيافة الذي يسبق أي سؤال وأي تسجيل."
              captionEn="A tray of red mint tea and dates: the warmth of hospitality that precedes any recorded interview."
            />

            {/* Quotation card */}
            <div className="p-6 rounded-2xl bg-[#F3ECE0] border border-[#235836]/10 text-stone-700">
              <p className="font-serif italic text-base leading-relaxed">
                {isAr
                  ? '«نحن لا نطلب منهم إلقاء خطابات أو تقديم شهادات رسمية… نأتي لنشرب معهم الشاي، ونستمع إلى ما يقوله القلب.»'
                  : '“We do not ask for speeches or formal testimonies. We come to share a cup of tea, and listen to what the heart wishes to recount.”'}
              </p>
              <div className="mt-3 text-xs font-semibold text-[#235836]">
                {isAr ? '— فريق مساحة الميداني، القاهرة' : '— MISaha Field Team, Cairo'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
