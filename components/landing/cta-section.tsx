import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="mt-4 rounded-t-[56px] bg-[#FDE5EE] px-6 pb-10 pt-12 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <div className="flex gap-4 sm:gap-6">
          <div className="relative h-64 w-40 -rotate-6 sm:h-72 sm:w-44">
            <Image
              src="/cta/left.png"
              alt="Zuri outfit preview left"
              fill
              className="rounded-[32px] object-cover shadow-[0_20px_60px_rgba(12,6,24,0.2)]"
            />
          </div>
          <div className="relative h-72 w-44 sm:h-80 sm:w-52">
            <Image
              src="/cta/center.png"
              alt="Zuri outfit preview center"
              fill
              className="rounded-[32px] object-cover shadow-[0_24px_70px_rgba(12,6,24,0.25)]"
            />
          </div>
          <div className="relative h-64 w-40 rotate-6 sm:h-72 sm:w-44">
            <Image
              src="/cta/right.png"
              alt="Zuri outfit preview right"
              fill
              className="rounded-[32px] object-cover shadow-[0_20px_60px_rgba(12,6,24,0.2)]"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2B2B2B] sm:text-4xl">
            Get started for free
          </h2>
          <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
            Get fashion advice made for your body, your skin tone, and your wardrobe.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Image
            src="/google-play.png"
            alt="Get it on Google Play"
            width={160}
            height={48}
            className="cursor-pointer"
          />
          <Image
            src="/app-store.png"
            alt="Download on App Store"
            width={160}
            height={48}
            className="cursor-pointer"
          />
        </div>

        <div className="mt-4 flex w-full flex-col items-center justify-between gap-4 text-xs text-[#8B8B8B] sm:flex-row">
          <span>© {new Date().getFullYear()} – Zuri, all rights reserved.</span>
          <div className="flex gap-4">
            <Button asChild variant="ghost" size="sm" className="h-auto px-0 text-xs text-[#8B8B8B] hover:text-[#2B2B2B]">
              <a href="/privacy-policy">Privacy Policy</a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="h-auto px-0 text-xs text-[#8B8B8B] hover:text-[#2B2B2B]">
              <a href="/terms-of-service">Terms and conditions</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

