import React, { useState } from 'react';
import { DocumentaryVisual } from './DocumentaryVisual';
import { Language, CONTENT } from '../data/translations';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = t.section3.steps;
  const currentStep = steps[activeStepIndex];

  // Visual mapping for each step
  const visualTypes: Array<'window-light' | 'jebana-coffee' | 'tea-tray' | 'archival-keepsakes' | 'elder-hands' | 'archival-keepsakes'> = [
    'window-light',
    'jebana-coffee',
    'tea-tray',
    'archival-keepsakes',
    'elder-hands',
    'archival-keepsakes',
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>03</span>
            <span className="text-stone-300">/</span>
            <span>{t.section3.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section3.heading : 'Not an Interview. A Conversation.'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'Not an Interview. A Conversation.' : 'مش مقابلة… قعدة'}
          </p>
          <p className="text-base text-stone-600 mt-3 max-w-2xl">
            {t.section3.subheading}
          </p>
        </div>

        {/* Interactive Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left / Steps Navigation Rail (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative border-s-2 border-stone-200 ms-4 ps-6 space-y-8">
              {steps.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`relative cursor-pointer transition-all duration-200 group ${
                      isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* Stepper Dot on the vertical line */}
                    <div
                      className={`absolute -start-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'border-[#235836] bg-[#235836] ring-4 ring-[#235836]/15'
                          : 'border-stone-400 bg-[#FAF8F5] group-hover:border-[#E86329]'
                      }`}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>

                    {/* Step Card */}
                    <div
                      className={`p-5 rounded-xl border transition-all duration-200 ${
                        isActive
                          ? 'bg-white border-[#235836]/25 shadow-xs'
                          : 'border-transparent hover:border-stone-200 hover:bg-stone-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-[#E86329]">
                            {step.number}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-[#1B3E26]">
                            {isAr ? step.titleAr : step.titleEn}
                          </h3>
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                          {isAr ? step.titleEn : step.titleAr}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-[#2E7D47] mb-2">
                        {isAr ? step.subtitleAr : step.subtitleEn}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed">
                        {isAr ? step.descAr : step.descEn}
                      </p>

                      {/* Sensory detail pill on active */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500 italic font-serif">
                          <span className="text-[#E86329]">✨</span>
                          <span>
                            {isAr ? step.sensoryDetailAr : step.sensoryDetailEn}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right / Visual Stage Detail Column (5 cols, sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#235836]/15 shadow-sm space-y-5">
              <div className="flex items-center justify-between text-xs font-mono text-stone-500 border-b border-stone-100 pb-3">
                <span className="uppercase tracking-wider text-[#235836] font-semibold">
                  {isAr ? 'تفاصيل الجلسة' : 'Stage Focus'}
                </span>
                <span>
                  {currentStep.number} / 06
                </span>
              </div>

              {/* Dynamic Visual for currently selected step */}
              <DocumentaryVisual
                type={visualTypes[activeStepIndex]}
                lang={lang}
                captionAr={currentStep.sensoryDetailAr}
                captionEn={currentStep.sensoryDetailEn}
              />

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-[#1B3E26]">
                  {isAr ? currentStep.titleAr : currentStep.titleEn} — {isAr ? currentStep.subtitleAr : currentStep.subtitleEn}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed font-serif">
                  {isAr ? currentStep.descAr : currentStep.descEn}
                </p>
              </div>

              {/* Step Navigation Prev/Next */}
              <div className="pt-2 flex items-center justify-between text-xs border-t border-stone-100">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  {isAr ? 'المرحلة السابقة' : 'Previous Step'}
                </button>
                <button
                  disabled={activeStepIndex === steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-md bg-[#235836] text-white hover:bg-[#1A452A] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  {isAr ? 'المرحلة التالية' : 'Next Step'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
