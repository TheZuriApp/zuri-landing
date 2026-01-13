import Image from "next/image";
import { Card } from "@/components/ui/card";

export function AppPreviewSection() {
  return (
    <section className="space-y-8 rounded-[40px] bg-white/80 p-8 shadow-[0_22px_70px_rgba(12,6,24,0.08)]">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="bg-gradient-to-b from-white to-[#FFEFF3] p-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D96A7B]">
                Quick Style
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2B2B2B]">
                No more &ldquo;nothing to wear&rdquo; meltdowns.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
                Whether you&apos;re shuffling your closet or finding that one specific look for you,
                Zuri has sorted your looks to make sure you stay a 10/10.
                Walk into every room with Main Character energy.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-72 w-40">
                <Image
                  src="/screens/quick-style-main.png"
                  alt="Quick style assistant"
                  fill
                  className="rounded-[36px] object-contain"
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-b from-white to-[#FFF6F0] p-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D96A7B]">
              Ask Zuri
            </p>
            <h3 className="text-2xl font-semibold text-[#2B2B2B]">
              Outfit questions, answered in seconds.
            </h3>
            <p className="text-sm leading-relaxed text-[#6B6B6B]">
              From trip packing to weddings and everything in between, send a snap or describe
              the vibe and Zuri will build looks that match your body, taste, and wardrobe.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

