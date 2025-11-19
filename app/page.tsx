"use client";

import { useState } from "react";
import { DropAlert } from "@/components/landing/drop-alert";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { HeroSection } from "@/components/landing/hero-section";
import { SneakPeekModal } from "@/components/landing/sneak-peek-modal";
import { WaitlistModal } from "@/components/landing/waitlist-modal";
import { WorkflowSection } from "@/components/landing/workflow-section";
import { features, sneakPeeks, stats, workflow } from "@/lib/landing-data";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [sneakPeekOpen, setSneakPeekOpen] = useState(false);
  const openWaitlist = () => setWaitlistOpen(true);
  const openSneakPeek = () => setSneakPeekOpen(true);

  return (
    <div className="relative overflow-hidden bg-linear-to-b from-[#FDFBFF] via-[#F7F2FF] to-[#FFF8F0]">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F8B6FF] blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#FFC6A5] blur-[160px]" />
        <div className="absolute left-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[#B6E3FF] blur-[160px]" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-8 lg:px-12">
        <HeroSection
          stats={stats}
          onWaitlist={openWaitlist}
          onSneakPeek={openSneakPeek}
        />
        <FeatureGrid features={features} />
        <WorkflowSection workflow={workflow} onWaitlist={openWaitlist} />
        <DropAlert />
        <footer className="pb-6 text-center text-xs uppercase tracking-[0.3em] text-black/40">
          Zuri © {new Date().getFullYear()} • Pre-launch studio drop
        </footer>
      </div>
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
      <SneakPeekModal
        open={sneakPeekOpen}
        onClose={() => setSneakPeekOpen(false)}
        slides={sneakPeeks}
      />
    </div>
  );
}
