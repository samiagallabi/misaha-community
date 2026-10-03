import React, { useState, useEffect } from 'react';
import { MisahaLogo } from './MisahaLogo';
import { Language, CONTENT } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenPartnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenPartnerModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const t = CONTENT[lang];
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setScrolled(currentScroll > 40);

      // Section tracker
      const sectionIds = [
        'hero',
        'idea',
        'campaign-poster',
        'why-it-matters',
        'experience',
        'voices',
        'themes',
        'signature',
        'outputs',
        'visual-approach',
        'safeguarding',
        'timeline',
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'idea', label: t.nav.story },
    { id: 'campaign-poster', label: isAr ? 'الملصق' : 'Poster' },
    { id: 'why-it-matters', label: t.nav.whyMatters },
    { id: 'experience', label: t.nav.experience },
    { id: 'voices', label: t.nav.voices },
    { id: 'themes', label: t.nav.themes },
    { id: 'outputs', label: t.nav.outputs },
    { id: 'safeguarding', label: t.nav.ethics },
    { id: 'timeline', label: t.nav.timeline },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#235836]/10 py-3'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        {/* Reading progress bar */}
        <div
          className="absolute bottom-0 inset-x-0 h-[2px] bg-[#E86329] origin-left transition-all duration-150"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
            transformOrigin: isAr ? 'right' : 'left',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: MISaha Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#235836] rounded-sm"
            aria-label="MISaha Community"
          >
            <MisahaLogo
              variant="bilingual"
              size="sm"
              className="cursor-pointer"
            />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-[#235836] ${
                    isActive ? 'text-[#235836] font-semibold' : 'text-stone-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#235836] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Language Toggle + Partner Button + Mobile Menu) */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#235836]/20 bg-white/80 hover:bg-[#235836]/5 text-xs font-semibold text-[#235836] shadow-2xs transition-colors cursor-pointer select-none"
              title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <span className={isAr ? 'text-[#235836] font-bold' : 'text-stone-400'}>العربية</span>
              <span className="text-stone-300">|</span>
              <span className={!isAr ? 'text-[#235836] font-bold' : 'text-stone-400'}>EN</span>
            </button>

            {/* Partner CTA */}
            <button
              onClick={onOpenPartnerModal}
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#235836] text-white hover:bg-[#1b462a] active:bg-[#163822] shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              {t.closing.ctaPartner}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-[#235836] hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 inset-x-0 bg-[#FAF8F5] border-b border-[#235836]/15 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-start py-2.5 px-3 rounded-lg text-base font-medium text-stone-700 hover:text-[#235836] hover:bg-[#235836]/5 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg bg-[#235836] text-white hover:bg-[#1b462a] transition-colors"
              >
                {t.closing.ctaPartner}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
