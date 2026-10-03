import React from 'react';
import { Language, CONTENT } from '../data/translations';

interface TimelineSectionProps {
  lang: Language;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';

  return (
    <section id="timeline" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>09</span>
            <span className="text-stone-300">/</span>
            <span>{t.section9.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section9.heading : 'October 2026 Journey'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'October 2026 Journey' : 'رحلة أكتوبر 2026'}
          </p>
          <p className="text-base text-stone-600 mt-3 max-w-2xl">
            {t.section9.subheading}
          </p>
        </div>

        {/* Dynamic Horizontal/Vertical Milestone Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.section9.milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#235836]/15 hover:border-[#235836]/35 shadow-2xs transition-all duration-300 flex flex-col justify-between space-y-4 group relative"
            >
              {/* Top week tag */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E86329] uppercase px-2.5 py-0.5 rounded-full bg-[#E86329]/10">
                    {m.badge}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <div className="font-mono text-xs font-semibold text-[#235836] border-b border-stone-100 pb-2">
                  {m.period}
                </div>

                <h3 className="text-lg font-bold text-[#1B3E26] group-hover:text-[#235836] transition-colors">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {m.desc}
                </p>
              </div>

              {/* Progress status note */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>{isAr ? 'القاهرة — مصر' : 'Cairo, Egypt'}</span>
                <span className="text-[#235836] font-semibold">Oct 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradual Publishing Note */}
        <div className="mt-12 p-6 rounded-xl bg-white/70 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-stone-700">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#235836]/10 text-[#235836] flex items-center justify-center font-bold text-sm shrink-0">
              📅
            </span>
            <p>
              {isAr
                ? 'النشر التراكمي: لا ننتظر نهاية المشروع، بل نبث القصص والشهادات على مدار الشهر لصناعة حوار مجتمعي حي ومستمر.'
                : 'Cumulative Storytelling: We publish stories and reflections progressively throughout October, cultivating ongoing dialogue.'}
            </p>
          </div>
          <div className="shrink-0 text-xs font-mono text-[#235836] font-semibold">
            MISaha Editorial Calendar
          </div>
        </div>
      </div>
    </section>
  );
};
