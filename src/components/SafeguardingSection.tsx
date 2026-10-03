import React from 'react';
import { Language, CONTENT } from '../data/translations';

interface SafeguardingSectionProps {
  lang: Language;
}

export const SafeguardingSection: React.FC<SafeguardingSectionProps> = ({
  lang,
}) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';

  return (
    <section id="safeguarding" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>08</span>
            <span className="text-stone-300">/</span>
            <span>{t.section8.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section8.heading : 'The Story Belongs to the Storyteller'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'The Story Belongs to the Storyteller' : 'الحكاية ملك لصاحبها'}
          </p>
          <p className="text-base sm:text-lg text-stone-600 mt-3 max-w-2xl">
            {t.section8.desc}
          </p>
        </div>

        {/* Central Moral Highlight */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-[#1B3E26] via-[#235836] to-[#1B3E26] text-white shadow-md text-center space-y-2">
          <p className="text-2xl sm:text-4xl font-extrabold text-[#FAF8F5] tracking-tight">
            {isAr ? t.section8.highlightAr : t.section8.highlightEn}
          </p>
          <p className="text-stone-300 font-serif italic text-base sm:text-lg">
            {isAr ? t.section8.highlightEn : t.section8.highlightAr}
          </p>
        </div>

        {/* The 7 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.section8.principles.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#235836]/15 hover:border-[#235836]/35 transition-all duration-200 shadow-2xs space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#E86329]">
                    0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#235836]/40" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#1B3E26]">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-mono text-stone-400">
                <span className="text-[#235836]">✓</span>
                <span>{isAr ? 'التزام أخلاقي غير قابل للتفاوض' : 'Non-negotiable ethical pact'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
