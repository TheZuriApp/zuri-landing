import Image from "next/image";
import { Card } from "@/components/ui/card";

export function OutfitGallerySection() {
  return (
    <section className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#2B2B2B] sm:text-4xl">
          We Make Fashion <span className="text-[#D96A7B]">Feel Easy</span>
        </h2>
        <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
          Get fashion advice made for your body, your skin tone, and your unique style.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white/70 p-6 shadow-[0_18px_60px_rgba(12,6,24,0.06)]">
        <div className="flex gap-6 overflow-x-auto pb-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-3xl bg-[#FDF7F9] px-6 py-10 shadow-[0_14px_40px_rgba(15,15,23,0.06)]"
            >
              <div className="relative h-64 w-32 sm:h-72 sm:w-36">
                <Image
                  src={`/outfits/outfit-${index + 1}.png`}
                  alt="Outfit preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="flex h-full flex-col items-center justify-between bg-white/80 p-8">
          <div className="relative h-80 w-full max-w-xs">
            <Image
              src="/screens/closet.png"
              alt="Zuri closet screen"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-6 text-center text-sm text-[#6B6B6B] sm:text-base">
            Get fashion advice made for your body, your skin tone, and your wardrobe.
          </p>
        </Card>
        <Card className="flex h-full flex-col items-center justify-between bg-white/80 p-8">
          <div className="relative h-80 w-full max-w-xs">
            <Image
              src="/screens/ask-zuri.png"
              alt="Ask Zuri screen"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-6 text-center text-sm text-[#6B6B6B] sm:text-base">
            Ask Zuri anything style-related and get personalized answers in seconds.
          </p>
        </Card>
      </div>
    </section>
  );
}

