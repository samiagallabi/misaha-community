import React, { useState } from 'react';
import { Language, CONTENT } from '../data/translations';

interface VoicesSectionProps {
  lang: Language;
}

export const VoicesSection: React.FC<VoicesSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';
  const [activeProfileId, setActiveProfileId] = useState(t.section4.profilesSample[0].id);

  const selectedProfile = t.section4.profilesSample.find((p) => p.id === activeProfileId) || t.section4.profilesSample[0];

  return (
    <section id="voices" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>04</span>
            <span className="text-stone-300">/</span>
            <span>{t.section4.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section4.heading : 'Faces of Sudanese Memory'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'Faces of Sudanese Memory' : 'وجوه من ذاكرة السودان'}
          </p>
          <p className="text-base sm:text-lg text-stone-600 mt-3">
            {t.section4.subheading}
          </p>
        </div>

        {/* Highlight Callout: Depth over speed */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#235836]/15 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[#E86329] font-bold tracking-wider">
              {isAr ? 'المبدأ الجوهري للأرشيف' : 'Core Archival Principle'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3E26]">
              {isAr ? t.section4.quoteHighlightAr : t.section4.quoteHighlightEn}
            </h3>
            <p className="text-stone-500 font-sans text-sm">
              {isAr ? t.section4.quoteHighlightEn : t.section4.quoteHighlightAr}
            </p>
          </div>

          <div className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed border-s-2 border-[#235836]/30 ps-4">
            {t.section4.diversityStatement}
          </div>
        </div>

        {/* Elegant Statistic Displays (Tabular Figures) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {t.section4.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/70 border border-[#235836]/10 text-center space-y-1 hover:border-[#235836]/30 transition-colors"
            >
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#235836] tabular-nums">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-800">
                {stat.label}
              </div>
              <div className="text-[11px] text-stone-500 font-mono uppercase tracking-wider">
                {stat.en}
              </div>
            </div>
          ))}
        </div>

        {/* Sample Profile Archive Showcase */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="text-lg font-bold text-[#1B3E26]">
              {isAr ? 'نماذج استرشادية من الأرشيف الحي' : 'Curatorial Sample Narratives'}
            </h4>
            <span className="text-xs text-stone-500 font-mono">
              {isAr ? 'اختر شخصية لاستعراض شهادتها ومقتناها' : 'Select a participant to view their testimony'}
            </span>
          </div>

          {/* Profile Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {t.section4.profilesSample.map((profile) => {
              const isSelected = activeProfileId === profile.id;
              return (
                <button
                  key={profile.id}
                  onClick={() => setActiveProfileId(profile.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#235836] text-white shadow-xs font-semibold'
                      : 'bg-white/80 border border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {isAr ? profile.nameAr : profile.nameEn}
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Profile Card */}
          <div className="bg-white rounded-2xl border border-[#235836]/15 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#E86329]/10 text-[#E86329]">
                    {isAr ? selectedProfile.originAr : selectedProfile.originEn}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {isAr ? selectedProfile.roleAr : selectedProfile.roleEn}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3E26]">
                  {isAr ? selectedProfile.nameAr : selectedProfile.nameEn}
                </h3>

                <blockquote className="text-base sm:text-lg font-serif italic text-stone-800 leading-relaxed ps-4 border-s-2 border-[#235836] py-1 bg-stone-50/60 rounded-e-lg p-3">
                  {isAr ? selectedProfile.reflectionAr : selectedProfile.reflectionEn}
                </blockquote>

                <div className="pt-2 flex items-start gap-2 text-xs text-stone-600">
                  <span className="font-semibold text-[#235836] shrink-0 font-mono">
                    {isAr ? 'المقتنى المحمول:' : 'Cherished Keepsake:'}
                  </span>
                  <span>{isAr ? selectedProfile.keepsakeAr : selectedProfile.keepsakeEn}</span>
                </div>
              </div>

              <div className="lg:col-span-4 p-5 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-3 text-xs text-stone-600">
                <div className="font-bold text-[#235836] uppercase tracking-wider font-mono text-[11px]">
                  {isAr ? 'بيانات التوثيق' : 'Documentary Entry'}
                </div>
                <div className="space-y-1.5 divide-y divide-stone-100">
                  <div className="flex justify-between py-1">
                    <span>{isAr ? 'العمر' : 'Age'}</span>
                    <span className="font-mono font-bold text-stone-800">{selectedProfile.age}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>{isAr ? 'الموقع الأصلي' : 'Origin'}</span>
                    <span className="font-semibold text-stone-800">{isAr ? selectedProfile.originAr : selectedProfile.originEn}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>{isAr ? 'تاريخ التوثيق' : 'Session Period'}</span>
                    <span className="text-stone-800">Oct 2026</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>{isAr ? 'مقر اللقاء' : 'Setting'}</span>
                    <span className="text-stone-800">{isAr ? 'منزل المشارك (القاهرة)' : 'Home in Cairo'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
