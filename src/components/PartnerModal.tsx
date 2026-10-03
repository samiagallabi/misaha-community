import React, { useState } from 'react';
import { MisahaLogo } from './MisahaLogo';
import { Language } from '../data/translations';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialType?: 'partner' | 'contact';
}

export const PartnerModal: React.FC<PartnerModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialType = 'partner',
}) => {
  const [activeTab, setActiveTab] = useState<'partner' | 'contact'>(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    interest: 'institutional',
    message: '',
  });

  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl border border-[#235836]/20 shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-6 bg-[#1B3E26] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MisahaLogo variant="mark-only" theme="inverted" size="sm" />
            <div>
              <h3 className="font-bold text-lg">
                {activeTab === 'partner'
                  ? isAr
                    ? 'الشراكة مع مساحة'
                    : 'Partner With MISaha'
                  : isAr
                  ? 'التواصل مع فريق المشروع'
                  : 'Contact Project Team'}
              </h3>
              <p className="text-xs text-stone-300">
                {isAr
                  ? 'مشروع توثيق كبار السن السودانيين — أكتوبر 2026'
                  : 'Sudanese Elders Documentary Project — Oct 2026'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-stone-200 bg-stone-100/60 p-1">
          <button
            onClick={() => {
              setActiveTab('partner');
              setSubmitted(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'partner'
                ? 'bg-white text-[#235836] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {isAr ? 'شراكة ودعم مؤسسي' : 'Institutional Partnership'}
          </button>
          <button
            onClick={() => {
              setActiveTab('contact');
              setSubmitted(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-white text-[#235836] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {isAr ? 'استفسار أو اقتراح مشارك' : 'General Inquiry & Nominations'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#235836]/10 text-[#235836] flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <h4 className="text-xl font-bold text-[#1B3E26]">
                {isAr ? 'شكراً لاهتمامكم النبيل' : 'Thank You For Your Invaluable Interest'}
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                {isAr
                  ? 'تم استلام رسالتكم بنجاح. سيقوم منسق الشراكات والتوثيق بمجتمع مساحة بالتواصل معكم في أقرب وقت لمناقشة آفاق التعاون.'
                  : 'Your note has been received. Our partnership and storytelling coordination team at MISaha Community will reach out shortly.'}
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#235836] text-white text-xs font-semibold hover:bg-[#1A452A] transition-colors"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? 'د. / أ. محمد أحمد' : 'Your name'}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-[#235836] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.org"
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-[#235836] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'المؤسسة / الجهة' : 'Organization / Initiative'}
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={isAr ? 'منظمة، مؤسسة ثقافية، جهة مانحة' : 'Institution or Independent'}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-[#235836] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'نوع الشراكة المقترحة' : 'Nature of Collaboration'}
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-[#235836] bg-white"
                  >
                    <option value="institutional">
                      {isAr ? 'دعم أو تمويل مؤسسي' : 'Institutional Funder / Grant'}
                    </option>
                    <option value="cultural">
                      {isAr ? 'شراكة ثقافية / أرشيفية' : 'Cultural / Archival Partner'}
                    </option>
                    <option value="media">
                      {isAr ? 'نشر وتغطية إعلامية' : 'Media & Broadcast Co-publisher'}
                    </option>
                    <option value="community">
                      {isAr ? 'اقتراح مشارك / عائلة سودانية' : 'Participant Nomination / Family'}
                    </option>
                    <option value="technical">
                      {isAr ? 'دعم فني / لوجستي' : 'Technical & Production Support'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {isAr ? 'الرسالة / تفاصيل التعاون *' : 'Message / Partnership Proposal *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isAr
                      ? 'شاركونا فكرتكم أو اهتمامكم بدعم هذا المشروع الإنساني…'
                      : 'Share your partnership scope or ideas with us…'
                  }
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-[#235836] bg-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-stone-500 font-mono">
                  {isAr ? 'MISaha Community — القاهرة ٢٠٢٦' : 'MISaha Community — Cairo 2026'}
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
                  >
                    {isAr ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold bg-[#235836] hover:bg-[#1A452A] text-white rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    {isAr ? 'إرسال الرسالة' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
