"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Stat } from "@/lib/landing-data";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";
import NavBar from "@/components/landing/nav-bar";
import {
  OutfitCard1,
  OutfitCard2,
  OutfitCard3,
  OutfitCard4,
  QuoteCard,
  AskZuriCard,
} from "@/components/ui/outfitCard";
import { useState } from "react";

type HeroSectionProps = {
  onWaitlist: () => void;
};

export function HeroSection({ onWaitlist }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative sm:min-h-screen min-h-[70vh] flex flex-col gap-4 pt-2 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 -z-10" />
      {/* /* Subtle dot pattern overlay */}
      {/* Grid background (masked) */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(226,92,126,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226,92,126,0.06) 1px, transparent 1px)
    `,
          backgroundSize: "56px 56px",
          WebkitMaskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        black 15%,
        black 85%,
        transparent 100%
      ),
      linear-gradient(
        black 0%,
        black 45%,
        transparent 100%
      )
    `,
          WebkitMaskComposite: "destination-in",
          maskComposite: "intersect",
        }}
      />

      {/* SVG (NO mask applied) */}
      <img
        src="/Vector 447.svg"
        alt="Dot pattern"
        className="
    absolute
    top-[75%]
    sm:top-[73%]
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    z-0
  "
      />

      <NavBar />
      <section className="relative min-h-[400px] sm:min-h-[600px] md:min-h-[700px] flex flex-col pt-20 sm:pt-24 md:pt-32 px-4 pb-4 sm:pb-4 md:pb-8">
        {/* Text content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="font-fields font-semibold text-3xl sm:text-4xl md:text-[48px] leading-tight sm:leading-none tracking-normal text-center text-[#2B2B2B]">
            Your Personal Stylist
          </h1>

          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#920146]">
            Powered by AI
          </h1>

          <p
            className="
    mx-auto
    mt-4
    max-w-md
    text-[12px]
    leading-[30px]
    font-geist
    font-light
    text-center
    tracking-[0]
    text-[#6B6B6B]
    px-2
  "
          >
            {/* Get fashion advice made simple, personal, and perfectly you. */}
            Look Styled. Feel Confident. Every day.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-5">
            <Button
              className="bg-[#ffffff] hover:bg-[#f0f0f0] px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-sm h-10 sm:h-11 w-auto max-w-[200px] sm:max-w-none sm:w-auto mx-auto sm:mx-0"
              onClick={onWaitlist}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/playstore.svg"
                  alt="Google Play"
                  width={28}
                  height={28}
                  className="w-[30px] h-[37.5px] sm:w-7 sm:h-7"
                ></Image>
                <div className="flex flex-col">
                  <span className="text-left text-[4px] sm:text-xs text-[#333333]">
                    Get it on
                  </span>
                  <div className="text-left text-[8px] sm:text-xs font-semibold text-[#000000]">
                    Google Play
                  </div>
                </div>
              </div>
            </Button>
            <Button
              className="bg-[#ffffff] hover:bg-[#f0f0f0] px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-sm h-10 sm:h-11 w-auto max-w-[200px] sm:max-w-none sm:w-auto mx-auto sm:mx-0"
              onClick={onWaitlist}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/ios.svg"
                  alt="App Store"
                  width={28}
                  height={28}
                  className="w-[30px] h-[37.5px] sm:w-7 sm:h-7"
                ></Image>
                <div className="flex flex-col">
                  <span className="text-left text-[4px] sm:text-xs text-[#333333]">
                    Download on
                  </span>
                  <div className="text-left text-[8px] sm:text-xs font-semibold text-[#000000]">
                    App Store
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        <div className="relative w-full flex justify-center mt-4 sm:mt-8 md:mt-12 px-4">
          {/* Wrapper */}
          <div className="relative w-full max-w-[700px] h-[280px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            {/* Center Phone */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="rounded-[30px] sm:rounded-[35px] md:rounded-[40px] bg-[#E9E6E6] p-2 sm:p-2.5 md:p-3 h-[280px] w-[140px] sm:h-[350px] sm:w-[175px] md:h-[420px] md:w-[210px] lg:h-[500px] lg:w-[250px]">
                <Image
                  src="/Mask group.png"
                  alt="Phone mockup"
                  width={245}
                  height={495}
                  className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] w-full h-full object-cover"
                />
              </div>
            </div>

            {/* LEFT SIDE FLOATING CARDS - Hidden on mobile, shown on larger screens */}

            <OutfitCard1 imageSrc="/d1.png" title="How do I look?" />
            <OutfitCard2 imageSrc="/d2.png" title="How do I look?" />
            <QuoteCard />
            <Image
              src="/Group 1707491891.png"
              alt="card"
              width={160}
              height={160}
              className="hidden lg:block absolute left-[0%] w-auto h-auto top-20"
            />

            {/* RIGHT SIDE FLOATING CARDS - Hidden on mobile, shown on larger screens */}

            <AskZuriCard />

            <Image
              src="/Group 1707491950.png"
              alt="card"
              width={160}
              height={160}
              className="hidden lg:block absolute right-[0%] w-auto h-auto top-70"
            />
            <OutfitCard3 imageSrc="/d4.png" title="Help me style this?" />
            <OutfitCard4 imageSrc="/d3.png" title="How do I look?" />
          </div>
        </div>
      </section>
    </header>
  );
}
