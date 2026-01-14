import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFEDF2] to-[#FFF6F8] py-24 px-6">
      {/* Center content */}
      <div className="mx-auto max-w-4xl text-center">
        {/* Cards Image */}
        <div className="flex justify-center mb-12">
          <Image
            src="/Frame 1707492254.png"
            alt="Outfit preview cards"
            width={520}
            height={420}
            className="h-auto w-full max-w-md"
          />
        </div>
        
      {/* Footer */}
      <div className="mx-auto mt-24 flex max-w-6xl items-center justify-between text-sm text-[#6B6B6B] px-4">
        <span>© 2025 – Zuri all rights reserved.</span>

        <div className="flex gap-6">
          <Button
            variant="ghost"
            className="p-0 text-sm text-[#6B6B6B] hover:underline hover:bg-transparent"
          >
            Privacy Policy
          </Button>
          <Button
            variant="ghost"
            className="p-0 text-sm text-[#6B6B6B] hover:underline hover:bg-transparent"
          >
            Cookies
          </Button>
          <Button
            variant="ghost"
            className="p-0 text-sm text-[#6B6B6B] hover:underline hover:bg-transparent"
          >
            Terms & Conditions
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
}
