import Image from "next/image";
import { ChevronRight, Icon } from "lucide-react";

interface OutfitCardProps {
  imageSrc: string;
  title?: string;
}

export function OutfitCard1({ imageSrc, title }: OutfitCardProps) {
  return (
    <div
      className="relative w-[130px] h-[85px]  hidden lg:block -left-[28%] top-[22%] z-10"
    >
      {/* Speech bubble */}
      {title && (
        <div className="absolute -top-[25%] left-[15%] -translate-x-1/2 z-10">
          <div className="bg-white px-4 py-2 rounded-3xl shadow-md text-[10px] font-medium text-gray-700">
            {title}
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-[#E7CED3] w-[120px] h-[125px] -xl -rotate-6 rounded-lg">
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt="Outfit" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}



export function OutfitCard2({ imageSrc, title }: OutfitCardProps) {
  return (
    <div
      className="relative w-[130px] h-[85px]  hidden lg:block -left-[28%] top-[42%] z-10"
    >
      {/* Speech bubble */}
      {title && (
        <div className="absolute -top-[25%] left-[15%] -translate-x-1/2 z-10 -rotate-18">
          <div className="bg-white px-4 py-2 rounded-full shadow-md text-[10px] font-medium text-gray-700">
            {title}
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-[#BBBFC8] w-[120px] h-[125px] -xl -rotate-6 rounded-lg">
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt="Outfit" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}


export function OutfitCard3({ imageSrc, title }: OutfitCardProps) {
  return (
    <div
      className="relative w-[130px] h-[85px]  hidden lg:block -right-[125%] -top-[48%] z-10"
    >
      {/* Speech bubble */}
      {title && (
        <div className="absolute -top-[25%] left-[5%]  z-10 rotate-8">
          <div className="bg-white px-4 py-2 rounded-full shadow-md text-[10px] font-medium text-gray-700">
            {title}
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-[#FDCAD7] w-[120px] h-[125px] -xl rotate-14 rounded-lg">
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt="Outfit" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}



export function OutfitCard4({ imageSrc, title }: OutfitCardProps) {
  return (
    <div
      className="relative w-[130px] h-[85px]  hidden lg:block -right-[115%] -top-[25%] z-10"
    >
      {/* Speech bubble */}
      {title && (
        <div className="absolute -top-[25%] left-[15%] -translate-x-1/2 z-10">
          <div className="bg-white px-4 py-2 rounded-full shadow-md text-[10px] font-medium text-gray-700">
            {title}
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-[#F4EEF0] w-[120px] h-[125px] -xl -rotate-2.23 rounded-lg">
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt="Outfit" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export function QuoteCard() {
  return (
    <div className="relative top-50 left-0 hidden lg:block">
  {/* Card */}
  <div
    className="
      relative
      w-[180px] h-[93px]
      rounded-[12px]
      bg-white
      p-4
      pt-8
      flex items-center justify-center
    "
  >
    {/* Logo */}
    <div
      className="
        absolute
        top-2.5 left-3.5
        h-6 w-6
        rounded-full
        bg-[#F7EFEF]
        flex items-center justify-center
      "
    >
      <Image
        src="/zuri-logo.png"
        alt="Zuri"
        width={18}
        height={18}
      />
    </div>
<div className="flex-1"></div>
    {/* Quote */}
    <p
      className="
        font-outfit
        text-[10.8px]
        text-[#5A5252]
        font-normal
        text-center
      "
    >
      “A wrap dress will flatter your <br />
      waist beautifully”
    </p>
  </div>
</div>

  );
}

export function AskZuriCard() {
  return (
    <div className="relative w-[200px] h-[122px] flex items-center justify-center -right-123 -top-45 lg:block">
  {/* Scale wrapper */}
  <div className="origin-top-left scale-[0.45]">
    
    {/* Outer card */}
    <div className="relative w-[640px] rounded-4xl bg-white px-10 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      
      {/* Avatars */}
      <div className="mb-10 flex items-center">
        <div className="flex -space-x-4">
          {[
            "/images/hero/s1.png",
            "/images/hero/s2.png",
            "/images/hero/s3.png",
          ].map((src, i) => (
            <div
              key={i}
              className="h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-md"
            >
              <img
                src={src}
                alt="User"
                className="object-cover h-[130px] w-[130px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Input-style CTA */}
      <div className="flex items-center justify-between rounded-2xl bg-[#F9F9F9] px-6 py-6">
        <div className="flex items-center gap-4 text-[#8B8B8B]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
            {/* this icon will change to file icon */}
            <span className="text-xl">🤍</span>
          </div>
          <span className="text-lg font-medium">Ask Zuri</span>
        </div>

        <ChevronRight className="h-7 w-7 text-[#3C4043]" />
      </div>
    </div>

  </div>
</div>

  );
}
