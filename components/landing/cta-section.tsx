import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


function onWaitlist() {}
export function CtaSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#FFEDF2] to-[#FFF6F8] pt-4 pb-4 sm:pt-4 sm:pb-4 md:pt-8 md:pb-8 lg:pt-12 lg:pb-12 px-4 sm:px-6">
      {/* Center content */}
      <div className="mx-auto max-w-4xl text-center">
        {/* Cards Image */}
        <div className="flex mb-8 sm:mb-10 md:mb-12 flex-col justify-center items-center">
          <Image
            src="/images/cta/G2.png"
            alt="Outfit preview cards"
            width={520}
            height={420}
            className="h-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-md "
          />
          <div>
            <h1 className="sm:text-[40px] text-[28px] font-bold text-[#333333] font-feilds">
              Get started for free
            </h1>
            <span className="font-medium font-geist sm:text-[14px] text-[10px] text-[#828282]">
              Get fashion advice made for your body, your skin tone, 
            </span>
          </div>
          {/* play store app store logo */}
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
                  <span className="text-left text-[8px] sm:text-xs text-[#333333]">
                    Get it on
                  </span>
                  <div className="text-left text-[10px] sm:text-xs font-semibold text-[#000000]">
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
                  <span className="text-left text-[8px] sm:text-xs text-[#333333]">
                    Download on
                  </span>
                  <div className="text-left text-[10px] sm:text-xs font-semibold text-[#000000]">
                    App Store
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>
        {/* Footer */}
        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#6B6B6B]">
            {/* Left – Copyright */}
            <span className="order-3 sm:order-1 text-center sm:text-left">
              © 2026 – Zuri all rights reserved.
            </span>

            {/* Center – Social Media */}
            <div className="order-1 sm:order-2 flex items-center gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white shadow hover:bg-gray-100"
              >
                <img src="/images/cta/v1.svg" alt="social 1" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white shadow hover:bg-gray-100"
              >
                <img src="/images/cta/v2.svg" alt="social 2" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white shadow hover:bg-gray-100"
              >
                <img src="/images/cta/v3.svg" alt="social 3" />
              </Button>
            </div>

            {/* Right – CTAs */}
            <div className="order-2 sm:order-3 flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy">
                <Button
                  variant="ghost"
                  className="p-0 text-[#6B6B6B] hover:underline hover:bg-transparent"
                >
                  Privacy Policy
                </Button>
              </Link>

              <Button
                variant="ghost"
                className="p-0 text-[#6B6B6B] hover:underline hover:bg-transparent"
              >
                Cookies
              </Button>

              <Link href="/terms-of-service">
                <Button
                  variant="ghost"
                  className="p-0 text-[#6B6B6B] hover:underline hover:bg-transparent"
                >
                  Terms & Conditions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
