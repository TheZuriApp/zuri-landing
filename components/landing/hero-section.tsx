import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Stat } from "@/lib/landing-data";
import { ArrowUpRight, Star } from "lucide-react";

type HeroSectionProps = {
  onWaitlist: () => void;
};

export function HeroSection({ onWaitlist }: HeroSectionProps) {
  return (
    <header className="relative min-h-screen flex flex-col gap-4 pt-2 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-linear-to-b from-[#FFF5F7] via-[#FFF0F3] to-white -z-10" />
      {/* /* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.75]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E25C7E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <Image
          src="/Vector 447.svg"
          alt="Dot pattern"
          fill
        />
      </div>

      {/* nav bar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex items-center justify-center px-4">
        <div
          className="
            flex items-center gap-6
            rounded-full
            border border-black/5
            bg-white/30
            px-6 py-2
            h-14
            w-full
            max-w-6xl
            shadow-[0_10px_30px_rgba(12,6,24,0.07)]
            backdrop-blur-md
          "
        >
          <Image src="/Group 1778.png" alt="Zuri logo" width={40} height={40} />

          <div className="flex-1" />
          <nav className="flex items-center gap-5 text-sm">
            <button className="text-sm font-outfit text-[#555555] tracking-wide">
              CAREER
            </button>
            <button className="text-sm font-outfit text-[#555555] tracking-wide">
              CONTACT US
            </button>
            <button className="text-sm font-outfit text-[#555555] tracking-wide">
              ZURI MAGAZINE
            </button>
          </nav>

          <div className="flex-1" />

          <button
            className="
          rounded-full
          bg-linear-to-r from-[#E25C7E33] to-[#F2D1DA]
          px-4 py-1
          text-sm font-outfit text-[#4E4D4D]
          shadow-sm
          hover:opacity-90
          transition
          "
          >
            Try for free
          </button>
        </div>
      </div>
      <section className="relative min-h-[700px] flex flex-col pt-32">
        {/* Text content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="font-fields font-semibold text-5xl leading-none tracking-normal text-center text-[#2B2B2B]">
            Your Personal Stylist
          </h1>

          <h1 className="mt-2 text-5xl font-semibold leading-tight text-[#D96A7B] sm:text-4xl lg:text-5xl">
            Powered by AI
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm text-[#6B6B6B] sm:text-base font-geist">
            Get fashion advice made simple, personal, and perfectly you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-5">
            <Button
              className="bg-[#ffffff] hover:bg-[#f0f0f0] px-5 py-2 text-sm font-medium rounded-sm h-11"
              onClick={onWaitlist}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/playstore.svg"
                  alt="Google Play"
                  width={28}
                  height={28}
                ></Image>
                <div className="flex flex-col">
                  <span className="text-left text-xs text-[#333333]">
                    Get it on
                  </span>
                  <div className="text-left text-xs font-semibold text-[#000000]">
                    Google Play
                  </div>
                </div>
              </div>
            </Button>
            <Button
              className="bg-[#ffffff] hover:bg-[#f0f0f0] px-5 py-2 text-sm font-medium rounded-sm h-11"
              onClick={onWaitlist}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/ios.svg"
                  alt="Google Play"
                  width={28}
                  height={28}
                ></Image>
                <div className="flex flex-col">
                  <span className="text-left text-xs text-[#333333]">
                    Download on
                  </span>
                  <div className="text-left text-xs font-semibold text-[#000000]">
                    App Store
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        <div className="relative w-full flex justify-center mt-8">
          {/* Wrapper */}
          <div className="relative w-[700px] h-[550px]">
            {/* Center Phone */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 z-30">
              <div className="rounded-[40px] bg-[#EDEDED] p-3 shadow-2xl h-[500px] w-[250px]">
                <Image
                  src="/Mask group.png"
                  alt="Phone mockup"
                  width={245}
                  height={495}
                  className="rounded-[32px]"
                />
              </div>
            </div>

            {/* LEFT SIDE FLOATING CARDS */}

            <Image
              src="/Group 1707491969.png"
              alt="card"
              width={140}
              height={140}
              className="absolute -left-[100px] top-[40px] z-10"
            />

            <Image
              src="/Group 1707491891.png"
              alt="card"
              width={150}
              height={150}
              className="absolute left-12 top-[60px] z-10"
            />

            <Image
              src="/Group 1707491965.png"
              alt="card"
              width={130}
              height={130}
              className="absolute -left-[50px] top-[240px] z-10"
            />

            <Image
              src="/Frame 1707492289.png"
              alt="card"
              width={160}
              height={160}
              className="absolute left-12 top-[340px] z-10"
            />

            {/* RIGHT SIDE FLOATING CARDS */}

            <Image
              src="/Frame 1707492175.png"
              alt="card"
              width={150}
              height={150}
              className="absolute right-12 top-[70px] z-20"
            />

            <Image
              src="Group 1707491966.svg"
              alt="card"
              width={180}
              height={180}
              className="absolute -right-[120px] top-6 rotate-12 z-10"
            />

            <Image
              src="/Group 1707491965.png"
              alt="card"
              width={130}
              height={130}
              className="absolute -right-[70px] top-[210px] rotate-12 z-20"
            />

            <Image
              src="/Group 1707491950.png"
              alt="card"
              width={160}
              height={160}
              className="absolute right-12 top-[300px] z-10"
            />
          </div>
        </div>
      </section>
    </header>
  );
}
