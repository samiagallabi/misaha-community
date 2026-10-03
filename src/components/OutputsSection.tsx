import React from 'react';
import { Language, CONTENT } from '../data/translations';

interface OutputsSectionProps {
  lang: Language;
}

export const OutputsSection: React.FC<OutputsSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';

  return (
    <section id="outputs" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>06</span>
            <span className="text-stone-300">/</span>
            <span>{t.section6.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section6.heading : 'One Conversation. Many Stories.'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'One Conversation. Many Stories.' : 'من قعدة واحدة… حكايات كثيرة'}
          </p>
          <p className="text-base text-stone-600 mt-3 max-w-2xl">
            {t.section6.subheading}
          </p>
        </div>

        {/* Central Source of Truth: The One Conversation Origin Node */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#235836] to-[#174326] text-white shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#E86329] uppercase tracking-wider font-bold">
                {isAr ? 'نقطة الانطلاق العفوية' : 'The Creative Origin'}
              </span>
              <h3 className="text-2xl font-bold">
                {isAr
                  ? 'قعدة حميمة واحدة في بيت المشارك'
                  : 'A Single Intimate Living Room Conversation'}
              </h3>
              <p className="text-stone-300 text-sm max-w-xl">
                {isAr
                  ? 'شاي أو قهوة، استماع عاطفي عميق، وتوثيق يحترم خصوصية المكان — تتفرع منه مخرجات مستدامة تعيش لأجيال.'
                  : 'Shared tea, deep empathy, and unobtrusive recording branching naturally into an enduring multimedia archive.'}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 text-xs font-mono bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#E86329]" />
              <span>{isAr ? 'منظومة متعددة الوسائط' : 'Multi-channel Ecosystem'}</span>
            </div>
          </div>
        </div>

        {/* 4 Primary Documentary Deliverables (Clean Architectural Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.section6.outputs.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-[#235836]/15 shadow-2xs hover:border-[#235836]/35 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#235836] tabular-nums">
                    {item.metric}
                  </span>
                  <span className="text-xs font-mono text-stone-400 uppercase">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#1B3E26] group-hover:text-[#235836] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                {isAr ? (item as any).en : (item as any).ar}
              </div>
            </div>
          ))}
        </div>

        {/* Extended Cultural Preservations Grid */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F4EFE6] border border-[#235836]/10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#235836] mb-6">
            {isAr ? 'روافد توثيقية إضافية مرافقة للمشروع:' : 'Additional Storytelling Dimensions:'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.section6.secondaryOutputs.map((sec, idx) => (
              <div key={idx} className="space-y-1.5 border-s-2 border-[#E86329] ps-4">
                <h5 className="text-sm font-bold text-stone-900">
                  {sec.title}
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
