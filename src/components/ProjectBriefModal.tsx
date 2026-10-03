import React from 'react';
import { MisahaLogo } from './MisahaLogo';
import { Language } from '../data/translations';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Printable Brief Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] text-stone-900 rounded-2xl border border-[#235836]/20 shadow-2xl overflow-y-auto z-10 my-6">
        {/* Floating Print & Close Bar (Sticky) */}
        <div className="sticky top-0 inset-x-0 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-stone-200 px-6 py-3 flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
            <span className="w-2 h-2 rounded-full bg-[#E86329]" />
            <span>{isAr ? 'ملخص المشروع التنفيذي (PDF Brief)' : 'Executive Project Brief'}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#235836] text-white text-xs font-semibold hover:bg-[#1A452A] transition-colors cursor-pointer"
            >
              <span>🖨️</span>
              <span>{isAr ? 'طباعة / حفظ كملف PDF' : 'Print / Save as PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Dossier Document Content */}
        <div className="p-8 sm:p-12 space-y-8 font-serif">
          {/* Header Lockup */}
          <div className="border-b-2 border-[#235836] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <MisahaLogo variant="bilingual" size="md" />
              <div className="pt-2 text-xs font-mono tracking-widest text-[#E86329] uppercase">
                {isAr ? 'وثيقة تقديم مشروع وثائقي إنساني' : 'Humanitarian Documentary Project Proposal'}
              </div>
            </div>

            <div className="text-start sm:text-end text-xs font-mono text-stone-500 space-y-0.5">
              <div>MISaha Community | مساحة</div>
              <div>Cairo, Egypt · October 2026</div>
              <div>Ref: DOC-SUD-ELDERS-2026</div>
            </div>
          </div>

          {/* Title Banner & Campaign Visual */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B3E26] font-sans">
                {isAr ? 'لسه الحكاية مستمرة' : 'STILL, THE STORY CONTINUES'}
              </h1>
              <h2 className="text-xl sm:text-2xl text-[#E86329] italic font-semibold">
                {isAr
                  ? 'كبار السن السودانيون: الذاكرة، النزوح والانتماء'
                  : 'Sudanese Elders: Memory, Displacement & Belonging'}
              </h2>
              <div className="inline-block px-3 py-1 rounded bg-[#235836]/10 text-[#235836] text-xs font-mono font-bold">
                {isAr ? '«كل عمر شايل حكاية»' : '“Every Age Carries a Story”'}
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="w-32 sm:w-36 rounded-xl overflow-hidden shadow-md border-2 border-white bg-stone-200">
                <img
                  src="324ee987-04f4-4579-be97-4157f008519a.png"
                  alt="Official Campaign Poster"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section: Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-base font-bold font-sans uppercase tracking-wider text-[#235836] border-b border-stone-200 pb-1">
              {isAr ? '١. ملخص تنفيذي للمشروع' : '1. Executive Summary'}
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed font-sans">
              {isAr
                ? 'سلسلة توثيقية إنسانية ترصد وتخلّد الذاكرة الشفاهية والتجربة الإنسانية لكبار السن السودانيين المقيمين في مصر في أعقاب حرب أبريل ٢٠٢٣. ينفذ المشروع مجتمع مساحة خلال الفترة من ٥ إلى ٣١ أكتوبر ٢٠٢٦، عبر زيارات منزلية حميمة وجلسات ونس عفوية، بهدف حفظ التراث الثقافي والاجتماعي، وإعلاء كرامة كبار السن كحراس للذاكرة وليس كأرقام نزوح.'
                : 'A humanitarian documentary series preserving the oral memory and lived experiences of Sudanese elders living in Egypt following the war. Executed by MISaha Community from 5–31 October 2026 through intimate home visits, this project celebrates elders as Memory Keepers, Storytellers, and Witnesses rather than statistics.'}
            </p>
          </div>

          {/* Section: Core Parameters */}
          <div className="space-y-2">
            <h3 className="text-base font-bold font-sans uppercase tracking-wider text-[#235836] border-b border-stone-200 pb-1">
              {isAr ? '٢. المحددات الأساسية' : '2. Key Project Metrics'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
              <div className="p-3 rounded-lg bg-stone-100">
                <div className="text-stone-500 font-mono">
                  {isAr ? 'عدد المشاركين' : 'Participants'}
                </div>
                <div className="text-base font-bold text-stone-900">8–10 Elders</div>
              </div>
              <div className="p-3 rounded-lg bg-stone-100">
                <div className="text-stone-500 font-mono">{isAr ? 'الفئة العمرية' : 'Age Group'}</div>
                <div className="text-base font-bold text-stone-900">+60 Years</div>
              </div>
              <div className="p-3 rounded-lg bg-stone-100">
                <div className="text-stone-500 font-mono">{isAr ? 'النطاق الجغرافي' : 'Location'}</div>
                <div className="text-base font-bold text-stone-900">Cairo & Giza, Egypt</div>
              </div>
              <div className="p-3 rounded-lg bg-stone-100">
                <div className="text-stone-500 font-mono">{isAr ? 'فترة التنفيذ' : 'Timeline'}</div>
                <div className="text-base font-bold text-stone-900">5–31 Oct 2026</div>
              </div>
            </div>
          </div>

          {/* Section: Deliverables Ecosystem */}
          <div className="space-y-2">
            <h3 className="text-base font-bold font-sans uppercase tracking-wider text-[#235836] border-b border-stone-200 pb-1">
              {isAr ? '٣. المخرجات المتوقعة' : '3. Deliverables Ecosystem'}
            </h3>
            <ul className="list-disc ps-5 text-xs text-stone-700 space-y-1 font-sans">
              <li>
                <strong>8–10 Long-form Documentary Interviews</strong> (4K Master, Sony A7 III)
              </li>
              <li>
                <strong>20–30 Short Vertical Stories / Reels</strong> for diaspora digital networks
              </li>
              <li>
                <strong>8–10 Dignified Photographic Portraits</strong> for exhibition and catalog
              </li>
              <li>
                <strong>A Growing Digital Oral History Archive</strong> featuring audio clips, transcripts, and personal keepsakes
              </li>
            </ul>
          </div>

          {/* Section: Ethical Safeguarding Charter */}
          <div className="space-y-2">
            <h3 className="text-base font-bold font-sans uppercase tracking-wider text-[#235836] border-b border-stone-200 pb-1">
              {isAr ? '٤. ميثاق الكرامة والحماية الأخلاقية' : '4. Dignity & Safeguarding Charter'}
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              {isAr
                ? '«كرامة الإنسان أهم من اللقطة.» يلتزم المشروع بالموافقة المستنيرة المكتوبة، حق إيقاف التصوير أو حذف أي مقطع بطلب المشارك، الامتناع التام عن النبش في الصدمات أو استغلال الدموع، والحفاظ الكامل على الخصوصية والحدود الشخصية.'
                : '“Dignity comes before the shot.” Strict informed consent, participant ownership of all spoken words, zero retraumatization, no chasing tears for drama, and unconditional respect for privacy and elder well-being.'}
            </p>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-stone-300 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-stone-500">
            <div>Presented by MISaha Community | مساحة</div>
            <div>contact@misaha.org · Cairo 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
};
