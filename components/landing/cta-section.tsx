import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#FFEDF2] to-[#FFF6F8] py-4 sm:py-4 md:py-8 lg:py-12 px-4 sm:px-6">
      {/* Center content */}
      <div className="mx-auto max-w-4xl text-center">
        {/* Cards Image */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <Image
            src="/Frame 1707492254.png"
            alt="Outfit preview cards"
            width={520}
            height={420}
            className="h-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-md"
          />
        </div>
        
      {/* Footer */}
      <div className="mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col sm:flex-row max-w-6xl items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-[#6B6B6B]">
        <span className="order-2 sm:order-1">© 2025 – Zuri all rights reserved.</span>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2">
          <Link href="/privacy-policy">
            <Button
              variant="ghost"
              className="p-0 text-xs sm:text-sm text-[#6B6B6B] hover:underline hover:bg-transparent"
            >
              Privacy Policy
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="p-0 text-xs sm:text-sm text-[#6B6B6B] hover:underline hover:bg-transparent"
          >
            Cookies
          </Button>
          <Link href="/terms-of-service">
            <Button
              variant="ghost"
              className="p-0 text-xs sm:text-sm text-[#6B6B6B] hover:underline hover:bg-transparent"
            >
              Terms & Conditions
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
