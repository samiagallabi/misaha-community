import React, { useState } from 'react';
import { Language, CONTENT } from '../data/translations';

interface WhyItMattersSectionProps {
  lang: Language;
}

export const WhyItMattersSection: React.FC<WhyItMattersSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);

  return (
    <section id="why-it-matters" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>02</span>
            <span className="text-stone-300">/</span>
            <span>{t.section2.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section2.heading : 'Memory Is Also a Homeland'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'Memory Is Also a Homeland' : 'الذاكرة أيضاً وطن'}
          </p>
        </div>

        {/* Editorial Essay Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-6 space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p className="font-medium text-stone-900 text-lg sm:text-xl leading-snug">
              {t.section2.lead}
            </p>
            <p>{t.section2.p1}</p>
          </div>

          <div className="lg:col-span-6 space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>{t.section2.p2}</p>
            <div className="p-4 rounded-xl bg-[#EBE3D3] border-s-4 border-[#235836] text-stone-800 text-sm">
              <span className="font-semibold block mb-1">
                {isAr ? 'حفظ الأثر الإنساني' : 'Preserving the Human Imprint'}
              </span>
              <span>
                {isAr
                  ? 'حين تسقط المدن وتتشتت العائلات، تصبح الذاكرة المحمولة في الصدور هي الوطن البديل الذي نبنيه ونحميه من الاندثار.'
                  : 'When cities collapse and families disperse, the living memory held in elder hearts becomes the surrogate homeland we must protect.'}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Typographic Roles: Anti-Generic-Card Treatment */}
        <div className="pt-6 border-t border-[#235836]/15">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-stone-500 font-mono">
              {t.section2.introRoles}
            </span>
            <span className="text-xs text-[#E86329]">
              {isAr ? 'اضغط على أي عنوان لاستكشاف البُعد الإنساني' : 'Click any title to explore its depth'}
            </span>
          </div>

          {/* Elegant Typographic List Accordion */}
          <div className="divide-y divide-[#235836]/15">
            {t.section2.roles.map((role, idx) => {
              const isSelected = selectedRoleIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedRoleIndex(idx)}
                  className={`group py-6 transition-all duration-300 cursor-pointer ${
                    isSelected ? 'bg-white/40 px-4 sm:px-6 rounded-2xl my-2 shadow-2xs' : 'hover:bg-black/[0.015] px-2'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-sm sm:text-base text-[#E86329] font-medium shrink-0">
                        0{idx + 1}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight transition-colors ${
                          isSelected
                            ? 'text-[#235836]'
                            : 'text-stone-800 group-hover:text-[#235836]'
                        }`}
                      >
                        {role.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-stone-500 uppercase tracking-wider ms-10 md:ms-0">
                      <span>{isAr ? (role as any).en : (role as any).ar}</span>
                      <span
                        className={`w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center transition-transform duration-300 text-stone-600 ${
                          isSelected ? 'rotate-90 bg-[#235836] text-white border-transparent' : 'group-hover:border-stone-500'
                        }`}
                      >
                        {isAr ? '←' : '→'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content Reveal */}
                  {isSelected && (
                    <div className="mt-4 ms-10 sm:ms-12 max-w-3xl pt-2 animate-in fade-in duration-300">
                      <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-serif">
                        {role.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
