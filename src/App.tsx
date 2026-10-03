/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IdeaSection } from './components/IdeaSection';
import { WhyItMattersSection } from './components/WhyItMattersSection';
import { ExperienceSection } from './components/ExperienceSection';
import { VoicesSection } from './components/VoicesSection';
import { ThemesSection } from './components/ThemesSection';
import { SignatureQuestionSection } from './components/SignatureQuestionSection';
import { OutputsSection } from './components/OutputsSection';
import { VisualApproachSection } from './components/VisualApproachSection';
import { SafeguardingSection } from './components/SafeguardingSection';
import { TimelineSection } from './components/TimelineSection';
import { FinalSection } from './components/FinalSection';
import { PartnerModal } from './components/PartnerModal';
import { ProjectBriefModal } from './components/ProjectBriefModal';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { CampaignPosterSection } from './components/CampaignPosterSection';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerModalType, setPartnerModalType] = useState<'partner' | 'contact'>('partner');
  const [briefModalOpen, setBriefModalOpen] = useState(false);

  // Sync HTML document direction and language
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-[#24211D] font-cairo ${lang === 'en' ? 'font-jakarta' : ''}`}>
      {/* Viewport Top Reading Progress Bar */}
      <ReadingProgressBar lang={lang} />

      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenPartnerModal={() => {
          setPartnerModalType('partner');
          setPartnerModalOpen(true);
        }}
      />

      {/* Main Presentation Sections */}
      <main>
        {/* Cinematic Hero */}
        <HeroSection
          lang={lang}
          onExplore={() => scrollToSection('idea')}
          onConcept={() => scrollToSection('idea')}
        />

        {/* Section 01: The Idea (A Space for Stories) */}
        <IdeaSection lang={lang} />

        {/* Official Campaign Poster Section */}
        <CampaignPosterSection lang={lang} />

        {/* Section 02: Why This Matters (Memory Is Also a Homeland) */}
        <WhyItMattersSection lang={lang} />

        {/* Section 03: The Experience (Not an Interview. A Conversation.) */}
        <ExperienceSection lang={lang} />

        {/* Section 04: Faces of Sudanese Memory */}
        <VoicesSection lang={lang} />

        {/* Section 05: Themes & Questions */}
        <ThemesSection lang={lang} />

        {/* Signature Question: Contemplative Full-Screen Pause */}
        <SignatureQuestionSection lang={lang} />

        {/* Section 06: Story Ecosystem Outputs */}
        <OutputsSection lang={lang} />

        {/* Section 07: Visual Approach */}
        <VisualApproachSection lang={lang} />

        {/* Section 08: Dignity & Safeguarding */}
        <SafeguardingSection lang={lang} />

        {/* Section 09: October 2026 Timeline */}
        <TimelineSection lang={lang} />

        {/* Final Emotional Closing & CTAs */}
        <FinalSection
          lang={lang}
          onOpenPartner={() => {
            setPartnerModalType('partner');
            setPartnerModalOpen(true);
          }}
          onOpenContact={() => {
            setPartnerModalType('contact');
            setPartnerModalOpen(true);
          }}
          onOpenBrief={() => setBriefModalOpen(true)}
        />
      </main>

      {/* Modals */}
      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
        lang={lang}
        initialType={partnerModalType}
      />

      <ProjectBriefModal
        isOpen={briefModalOpen}
        onClose={() => setBriefModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
