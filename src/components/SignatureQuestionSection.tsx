import React, { useState } from 'react';
import { Language, CONTENT } from '../data/translations';

interface SignatureQuestionSectionProps {
  lang: Language;
}

export const SignatureQuestionSection: React.FC<SignatureQuestionSectionProps> = ({
  lang,
}) => {
  const t = CONTENT[lang];
  const isAr = lang === 'ar';
  const [reflectionInput, setReflectionInput] = useState('');
  const [hasShared, setHasShared] = useState(false);

  const handleShare = (e: React.FormEvent) => {
    e.preventDefault();
    if (reflectionInput.trim()) {
      setHasShared(true);
    }
  };

  return (
    <section
      id="signature"
      className="relative min-h-[85vh] flex flex-col justify-center items-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#142E1D] via-[#102517] to-[#0D1F13] text-[#FAF8F5] overflow-hidden select-none"
    >
      {/* Delicate warm amber aura in background */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#E86329]/10 blur-[90px] pointer-events-none" />

      {/* Decorative hairline compass / crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[80vw] h-[1px] bg-stone-300" />
        <div className="h-[80vh] w-[1px] bg-stone-300 absolute" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        {/* Curatorial Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-mono uppercase tracking-widest text-[#E86329]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E86329] animate-ping" />
          <span>{t.signature.tag}</span>
        </div>

        {/* Quiet Preface */}
        <p className="text-base sm:text-lg font-serif italic text-stone-300/90 tracking-wide">
          {t.signature.preface}
        </p>

        {/* The Signature Question in Large Arabic Typography */}
        <div className="space-y-6 px-4">
          <blockquote className="font-amiri text-3xl sm:text-5xl lg:text-6xl text-[#FFFBF5] leading-[1.35] sm:leading-[1.3] font-bold drop-shadow-sm">
            «لو السودان قاعد قدامك الليلة وبيسمعك… تقول ليهو شنو؟»
          </blockquote>

          <div className="max-w-2xl mx-auto pt-2">
            <p className="font-serif italic text-base sm:text-xl text-stone-300/80 leading-relaxed">
              “If Sudan were sitting in front of you tonight and could hear you, what would you say to it?”
            </p>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-sm text-stone-400 font-sans max-w-xl mx-auto">
          {t.signature.subtext}
        </p>

        {/* Interactive Contemplation: Whisper / Reflection Box */}
        <div className="pt-6 max-w-lg mx-auto w-full">
          {!hasShared ? (
            <form onSubmit={handleShare} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={reflectionInput}
                  onChange={(e) => setReflectionInput(e.target.value)}
                  placeholder={
                    isAr
                      ? 'اكتب كلمتك للسودان هنا بصمت…'
                      : 'Write your whisper to Sudan here in stillness…'
                  }
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-stone-100 placeholder-stone-400/70 focus:outline-none focus:border-[#E86329] text-sm backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={!reflectionInput.trim()}
                  className="absolute end-2 top-2 bottom-2 px-4 rounded-lg bg-[#E86329] hover:bg-[#d65720] text-white text-xs font-semibold disabled:opacity-40 transition-colors cursor-pointer"
                >
                  {isAr ? 'حفظ في القلب' : 'Preserve'}
                </button>
              </div>
              <div className="text-[11px] text-stone-400/80 font-mono">
                {isAr
                  ? 'هذه الكلمات تُحفظ كجزء من سجل التضامن الإنساني للمشروع'
                  : 'Words honored as part of the solidarity registry for this project'}
              </div>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-white/10 border border-white/25 backdrop-blur-sm text-xs sm:text-sm text-stone-200 animate-in fade-in duration-300">
              <span className="text-[#E86329] font-bold block mb-1">
                {isAr ? 'شكراً لمشاركتك الوجدانية' : 'Thank you for your silent tribute'}
              </span>
              <span>
                {isAr
                  ? '«وصلت كلمتك… والحكاية باقية في قلوب أهلها.»'
                  : '“Your words resonate… the story endures in the hearts of its people.”'}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
