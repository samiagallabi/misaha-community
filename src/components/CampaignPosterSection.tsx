import React, { useState } from 'react';
import { MisahaLogo } from './MisahaLogo';
import { Language } from '../data/translations';

interface CampaignPosterSectionProps {
  lang: Language;
}

export const CampaignPosterSection: React.FC<CampaignPosterSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [imageError, setImageError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const posterSrc = '324ee987-04f4-4579-be97-4157f008519a.png';

  return (
    <section id="campaign-poster" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>{isAr ? 'الهوية البصرية للمشروع' : 'Visual Identity & Key Art'}</span>
            <span className="text-stone-300">/</span>
            <span>{isAr ? '1 أكتوبر' : '1 October'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? 'الملصق الرسمي للحملة' : 'Official Campaign Poster'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr
              ? 'اليوم العالمي لكبار السن — 1 أكتوبر 2026'
              : 'International Day of Older Persons — 1 October 2026'}
          </p>
          <p className="text-base text-stone-600 mt-3 max-w-2xl leading-relaxed">
            {isAr
              ? 'الملصق البصري الرسمي لسلسلة «لسه الحكاية مستمرة»، يعكس روح اللقاء، وقار الذاكرة، ودفء الأنس السوداني في ضيافة القاهرة.'
              : 'The official campaign visual for “Still, The Story Continues”, embodying warm hospitality, enduring dignity, and living Sudanese memory overlooking the Nile.'}
          </p>
        </div>

        {/* Poster Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Poster Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group cursor-pointer max-w-md w-full" onClick={() => setLightboxOpen(true)}>
              {/* Soft decorative shadow backdrop */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#235836]/20 via-[#E86329]/15 to-amber-200/30 rounded-3xl blur-xl transition-all duration-300 group-hover:scale-105 pointer-events-none" />

              {/* Poster Container with archival frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#ECE5D8] transition-transform duration-300 group-hover:-translate-y-1">
                {!imageError ? (
                  <img
                    src={posterSrc}
                    alt={isAr ? 'ملصق حملة لسه الحكاية مستمرة' : 'Still, The Story Continues Campaign Poster'}
                    className="w-full h-auto object-cover block select-none"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Stylized Resilient Vector Poster Fallback */
                  <div className="p-8 text-center space-y-6 bg-gradient-to-b from-[#F7F3EB] via-[#EFE7D8] to-[#E3D8C3] min-h-[560px] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-start">
                        <MisahaLogo variant="bilingual" size="sm" />
                        <div className="text-end text-[11px] font-mono text-[#E86329] leading-tight font-bold">
                          <div>اليوم العالمي لكبار السن</div>
                          <div className="text-xs">1 أكتوبر</div>
                        </div>
                      </div>

                      <div className="pt-4 space-y-1">
                        <h3 className="font-extrabold text-2xl text-[#1B3E26]">
                          لسه الحكاية مستمرة
                        </h3>
                        <div className="text-xs font-serif italic text-stone-600">
                          STILL, THE STORY CONTINUES
                        </div>
                        <div className="text-[11px] text-[#2E7D47] font-medium">
                          كبار السن السودانيون: الذاكرة، النزوح والانتماء
                        </div>
                      </div>
                    </div>

                    {/* Illustration of elder gathering */}
                    <div className="p-6 rounded-xl bg-white/60 border border-[#235836]/15 space-y-2">
                      <div className="text-4xl">🫖 ☕ 🌿</div>
                      <div className="font-serif italic text-sm text-[#1B3E26] font-bold">
                        «كل عمر شايل حكاية»
                      </div>
                      <div className="text-xs text-stone-500">
                        Every Age Carries a Story
                      </div>
                    </div>

                    {/* 4 Pillars Footer */}
                    <div className="pt-4 border-t border-stone-300/80 text-[11px] text-stone-700 space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-start font-mono">
                        <div>• زيارات منزلية</div>
                        <div>• قعدة سودانية</div>
                        <div>• حكايات وتجارب</div>
                        <div>• ذاكرة وانتماء</div>
                      </div>
                      <div className="pt-2 text-stone-500 text-[10px]">
                        5 - 31 أكتوبر 2026 — مصر
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-2">
                  <span className="p-2.5 rounded-full bg-black/60 backdrop-blur-xs flex items-center gap-1.5">
                    <span>🔍</span>
                    <span>{isAr ? 'اضغط لتكبير الملصق بدقة كاملة' : 'Click to inspect high-res poster'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Poster Breakdown & Narrative Elements (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1B3E26]">
                {isAr ? 'عناصر الملصق والدلالات البصرية' : 'Poster Elements & Semiotics'}
              </h3>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {isAr
                  ? 'تم إطلاق هذا الملصق تزامناً مع اليوم العالمي لكبار السن (1 أكتوبر)، ليكون البوابة البصرية لمشروع التوثيق طوال شهر أكتوبر 2026. يجسّد الملصق الألفة والسكينة، جامعاً بين ملامح الوطن السوداني الأصيل وأفق القاهرة الحاضنة.'
                  : 'Launched on the International Day of Older Persons (1 October), this official poster serves as the thematic beacon for MISaha’s storytelling throughout October 2026. It anchors the warmth of homeland memories with the hospitality of Cairo.'}
              </p>
            </div>

            {/* 4 Structural Pillars from the Poster */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#235836]/15 space-y-1">
                <div className="flex items-center gap-2 text-[#235836] font-bold text-sm">
                  <span>🏡</span>
                  <span>{isAr ? 'زيارات منزلية' : 'Home Visits'}</span>
                </div>
                <p className="text-xs text-stone-600">
                  {isAr
                    ? 'اللقاءات تتم داخل بيوت كبار السن وفي مساحاتهم المألوفة.'
                    : 'Conversations take place within the comfort of personal homes.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#235836]/15 space-y-1">
                <div className="flex items-center gap-2 text-[#E86329] font-bold text-sm">
                  <span>☕</span>
                  <span>{isAr ? 'قعدة سودانية' : 'Sudanese Gatherings'}</span>
                </div>
                <p className="text-xs text-stone-600">
                  {isAr
                    ? 'شاي أو قهوة بالهيل، ونس عائلي، واستماع يسبق التسجيل.'
                    : 'Cardamom coffee, unhurried ease, and familiar hospitality.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#235836]/15 space-y-1">
                <div className="flex items-center gap-2 text-[#2E7D47] font-bold text-sm">
                  <span>💬</span>
                  <span>{isAr ? 'حكايات وتجارب' : 'Stories & Experiences'}</span>
                </div>
                <p className="text-xs text-stone-600">
                  {isAr
                    ? 'سرد متدفق عن الحياة، العمل، الحب، وتحديات النزوح.'
                    : 'Oral histories of careers, love, memory, and starting again.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#235836]/15 space-y-1">
                <div className="flex items-center gap-2 text-[#1B3E26] font-bold text-sm">
                  <span>👥</span>
                  <span>{isAr ? 'ذاكرة وانتماء' : 'Memory & Belonging'}</span>
                </div>
                <p className="text-xs text-stone-600">
                  {isAr
                    ? 'حفظ الهوية والتراث الشفاهي لأجيال السودان القادمة.'
                    : 'Preserving cultural memory as an enduring homeland.'}
                </p>
              </div>
            </div>

            {/* Poster Motto */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#1B3E26] to-[#285E39] text-white space-y-1">
              <p className="text-xs text-[#E86329] font-mono uppercase tracking-wider font-semibold">
                {isAr ? 'شعار الملصق التوثيقي:' : 'Poster Core Inscription:'}
              </p>
              <p className="text-base sm:text-lg font-bold font-serif">
                «هذه ليست مقابلات عن الحرب فقط ... إنها لقاءات عن الحياة.»
              </p>
              <p className="text-xs text-stone-300 font-serif italic">
                “These are not just interviews about war ... They are conversations about life.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-2xl max-h-[92vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 end-0 text-white hover:text-stone-300 text-sm font-mono flex items-center gap-1 cursor-pointer"
            >
              <span>✕</span>
              <span>{isAr ? 'إغلاق' : 'Close'}</span>
            </button>
            <img
              src={posterSrc}
              alt="Full Resolution Campaign Poster"
              className="max-h-[85vh] w-auto rounded-xl shadow-2xl object-contain border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};
