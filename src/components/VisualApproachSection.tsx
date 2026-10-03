import React from 'react';
import { DocumentaryVisual } from './DocumentaryVisual';
import { Language, CONTENT } from '../data/translations';

interface VisualApproachSectionProps {
  lang: Language;
}

export const VisualApproachSection: React.FC<VisualApproachSectionProps> = ({
  lang,
}) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';

  return (
    <section id="visual-approach" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#235836]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E86329] mb-3">
            <span>07</span>
            <span className="text-stone-300">/</span>
            <span>{t.section7.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3E26] tracking-tight">
            {isAr ? t.section7.heading : 'Visual Language'}
          </h2>
          <p className="text-xl font-serif text-stone-600 italic mt-1">
            {isAr ? 'Visual Language' : 'كيف سنصوّر؟'}
          </p>
        </div>

        {/* Cinematic Highlight Banner */}
        <div className="mb-12 p-8 rounded-2xl bg-white border border-[#235836]/20 shadow-xs text-center space-y-2">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#1B3E26]">
            {isAr ? t.section7.highlightAr : t.section7.highlightEn}
          </p>
          <p className="text-stone-500 font-serif italic text-base sm:text-lg">
            {isAr ? t.section7.highlightEn : t.section7.highlightAr}
          </p>
        </div>

        {/* 2-Column Content + Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Visual Canvas Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <DocumentaryVisual
              type="elder-hands"
              lang={lang}
              captionAr="الأيدي التي بنت وعلّمت وربّت: اللقطات القريبة ترصد الملمس والتاريخ دون أي دراما مصطنعة."
              captionEn="Hands that built, taught, and nurtured: intimate close-ups capturing lived history without forced drama."
            />
            <div className="p-4 rounded-xl bg-white/70 border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
              <span className="font-mono font-semibold text-[#235836]">
                Rig: Sony A7 III + 35mm Prime
              </span>
              <span>Available Daylight & Ambient Audio</span>
            </div>
          </div>

          {/* Technical and Aesthetic Specifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              {t.section7.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.section7.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-stone-200 hover:border-[#235836]/30 transition-colors space-y-1"
                >
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E86329]">
                    {spec.label}
                  </div>
                  <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {spec.val}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#EBE3D3] border-s-4 border-[#235836] text-xs sm:text-sm text-stone-800">
              <span className="font-semibold block mb-0.5">
                {isAr ? 'الضيف لا المقتحم:' : 'A Respectful Guest:'}
              </span>
              <span>
                {isAr
                  ? 'لا نغير ترتيب أثاث الغرفة، لا نطلب إعادة حركات مفتعلة، ولا نُجبر المتحدث على النظر إلى ضوء مبهر.'
                  : 'We do not rearrange domestic furniture, demand artificial retakes, or force participants into glaring studio lights.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
