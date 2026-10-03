import React, { useState } from 'react';
import { Language, CONTENT } from '../data/translations';

interface ThemesSectionProps {
  lang: Language;
}

export const ThemesSection: React.FC<ThemesSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';
  const [activeThemeId, setActiveThemeId] = useState(t.section5.themes[0].id);

  const selectedTheme =
    t.section5.themes.find((th) => th.id === activeThemeId) || t.section5.themes[0];

  return (
    <section id="themes" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>05</span>
            <span className="text-stone-300">/</span>
            <span>{t.section5.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section5.heading : 'What Do We Talk About?'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'What Do We Talk About?' : 'عن ماذا نحكي؟'}
          </p>
          <p className="text-base text-stone-600 mt-3 max-w-2xl">
            {t.section5.subheading}
          </p>
        </div>

        {/* 2-Column Interactive Theme Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Themes List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
              {t.section5.instruction}
            </div>

            <div className="divide-y divide-stone-100 bg-white rounded-2xl border border-[#235836]/10 shadow-2xs overflow-hidden">
              {t.section5.themes.map((theme, index) => {
                const isSelected = activeThemeId === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setActiveThemeId(theme.id)}
                    className={`w-full text-start p-4 sm:p-5 flex items-center justify-between transition-colors duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#235836]/5 text-[#235836]'
                        : 'hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#E86329]">
                        0{index + 1}
                      </span>
                      <span className="text-base sm:text-lg font-bold">
                        {isAr ? theme.titleAr : theme.titleEn}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-mono transition-transform duration-200 ${
                        isSelected ? 'text-[#235836] font-bold' : 'text-stone-400'
                      }`}
                    >
                      {isAr ? '←' : '→'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Detail & Sample Questions Card (7 cols, sticky) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-[#235836]/20 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 uppercase mb-2">
                  <span className="text-[#E86329] font-semibold">
                    {isAr ? 'محور الحوار' : 'Conversation Path'}
                  </span>
                  <span>
                    {isAr ? selectedTheme.titleEn : selectedTheme.titleAr}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3E26]">
                  {isAr ? selectedTheme.titleAr : selectedTheme.titleEn}
                </h3>
                <p className="text-stone-600 mt-2 text-sm sm:text-base leading-relaxed">
                  {isAr ? selectedTheme.descAr : selectedTheme.descEn}
                </p>
              </div>

              {/* Sample Questions */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#235836]">
                  {isAr ? 'نماذج من أسئلة الاستماع:' : 'Sample Questions We Ask:'}
                </div>

                <div className="space-y-3">
                  {(isAr ? selectedTheme.questionsAr : selectedTheme.questionsEn).map(
                    (q, qIdx) => (
                      <div
                        key={qIdx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80 hover:border-[#235836]/30 transition-colors"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#E86329]/10 text-[#E86329] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {qIdx + 1}
                        </span>
                        <p className="text-sm sm:text-base font-serif text-stone-800 leading-relaxed">
                          «{q}»
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Footer note */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>
                  {isAr
                    ? 'الأسئلة دافع للاسترسال وليست استبياناً إلزامياً'
                    : 'Questions serve as gentle prompts, never a rigid questionnaire'}
                </span>
                <span className="text-[#235836] font-medium font-mono">
                  MISaha Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
