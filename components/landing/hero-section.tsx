import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Stat } from "@/lib/landing-data";
import { ArrowUpRight, Star } from "lucide-react";
import {
  OutfitCard1,
  OutfitCard2,
  OutfitCard3,
  OutfitCard4,
} from "@/components/ui/outfitCard";

type HeroSectionProps = {
  onWaitlist: () => void;
};

export function HeroSection({ onWaitlist }: HeroSectionProps) {
  return (
    <header className="relative min-h-screen flex flex-col gap-4 pt-2 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F7] via-[#FFF0F3] to-white -z-10" />
      {/* /* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(226,92,126,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226,92,126,0.06) 1px, transparent 1px)
    `,
          // size of grid
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
      >
        <Image src="/Vector 447.svg" alt="Dot pattern" fill />
      </div>

      {/* nav bar */}
      <div className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex items-center justify-center px-2 sm:px-4">
        <div
          className="
            flex items-center gap-2 sm:gap-4 md:gap-6
            rounded-full
            border border-black/5
            bg-[#FFFFFF80]
            px-3 sm:px-4 md:px-6 py-2
            h-12 sm:h-14
            w-full
            max-w-6xl
            shadow-[0_10px_30px_rgba(12,6,24,0.07)]
            backdrop-blur-md
          "
        >
          <Image
            src="/Group 1778.png"
            alt="Zuri logo"
            width={52}
            height={103}
            className="w-[52px] h-[103px] sm:w-10 sm:h-10"
          />

          <div className="flex-1 hidden md:block" />
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm">
            <button className="text-[10.8px] xl:text-sm font-outfit text-[#555555] tracking-wide hover:text-[#E25C7E] transition-colors">
              CAREER
            </button>
            <button className="text-[10.8px] xl:text-sm font-outfit text-[#555555] tracking-wide hover:text-[#E25C7E] transition-colors">
              CONTACT US
            </button>
            <button className="text-[10.8px] xl:text-sm font-outfit text-[#555555] tracking-wide hover:text-[#E25C7E] transition-colors">
              ZURI MAGAZINE
            </button>
          </nav>

          <div className="flex-1 hidden md:block" />

          <button
            className="
    rounded-full
    bg-gradient-to-r
    from-[#F2D1DA]
    to-[rgba(226,92,126,0.2)]
    px-[20px]
    py-[10px]
    text-[12px]
    leading-[100%]
    tracking-[0]
    font-outfit
    font-normal
    text-[#4E4D4D]
    shadow-[0_4px_12px_0_rgba(226,92,126,0.2)]
    hover:opacity-100
    transition
    whitespace-nowrap
  "
          >
            Try for free
          </button>
        </div>
      </div>
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex flex-col pt-20 sm:pt-24 md:pt-32 px-4">
        {/* Text content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="font-fields font-semibold text-3xl sm:text-4xl md:text-[48px] leading-tight sm:leading-none tracking-normal text-center text-[#2B2B2B]">
            Your Personal Stylist
          </h1>

          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#D96A7B]">
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
            Get fashion advice made simple, personal, and perfectly you.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-5">
            <Button
              className="bg-[#ffffff] hover:bg-[#f0f0f0] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-sm h-10 sm:h-11 w-full sm:w-auto"
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
              className="bg-[#ffffff] hover:bg-[#f0f0f0] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-sm h-10 sm:h-11 w-full sm:w-auto"
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

        <div className="relative w-full flex justify-center mt-6 sm:mt-8 md:mt-12 px-4">
          {/* Wrapper */}
          <div className="relative w-full max-w-[700px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
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

            <Image
              src="/Frame 1707492289.png"
              alt="card"
              width={160}
              height={160}
              className="hidden lg:block absolute left-[0%] w-auto h-auto top-80"
            />
            <Image
              src="/Group 1707491891.png"
              alt="card"
              width={160}
              height={160}
              className="hidden lg:block absolute left-[0%] w-auto h-auto top-20"
            />

            {/* RIGHT SIDE FLOATING CARDS - Hidden on mobile, shown on larger screens */}

            <Image
              src="/Frame 1707492175.png"
              alt="card"
              width={150}
              height={150}
              className="
        hidden lg:block absolute
        right-[0%]
        top-20
        w-auto h-auto
      "
            />


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
