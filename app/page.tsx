"use client";

import { useState } from "react";
import { HeroSection } from "@/components/landing/hero-section";
import QuickStyleSection from "@/components/landing/quick-style-section";
import OutfitImages from "@/components/landing/outfit-gallery-section";
import FAQAccordion from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const openWaitlist = () => setWaitlistOpen(true);

  return (
    <div className="relative bg-white overflow-x-hidden">
      <div className="relative z-10 w-full overflow-x-hidden">
        <HeroSection
          onWaitlist={openWaitlist}
        />
      </div>
      <QuickStyleSection/>
      <OutfitImages/>
      <FAQAccordion/>
      <CtaSection/>
    </div>
  );
}
