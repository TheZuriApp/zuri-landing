import Image from "next/image";
import { ChevronRight, Icon } from "lucide-react";
import React from "react";

interface OutfitCardProps {
  imageSrc: string;
  title?: string;
}

export function OutfitCard1({ imageSrc }: OutfitCardProps) {
  return (
    <div className="relative hidden lg:block w-[145px] h-[180px] -rotate-6 z-10 -left-[38%] top-[15%]">
      
      <div className="relative w-full h-full rounded-3xl bg-[#F5F3F4] border border-white shadow-[0_18px_35px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col">
        
        <div className="relative flex-1 flex items-center justify-center px-6 pt-2">
          
          <img
            src={imageSrc}
            alt="Outfit"
            className="max-h-full object-contain"
          />
        </div>
        <div className="h-[52px] bg-white flex items-center justify-center shadow-[0_-6px_16px_rgba(0,0,0,0.08)]">
          
          <div className="px-5 py-2 text-[14px] font-normal font-outfit text-[#979797] bg-white rounded-full shadow-md">
            
            Add to closet
          </div>
        </div>
      </div>
    </div>
  );
}

export function OutfitCard2({ imageSrc, title }: OutfitCardProps) {
  return (
    <div className="relative w-40 h-[85px]  hidden lg:block -left-[34%] top-[35%] z-10">
      {/* Speech bubble */}
      {title && (
        <div className="absolute -top-[25%] left-[15%] -translate-x-1/2 z-10 -rotate-18 shadow-2xl rounded-3xl">
          <div className="bg-white px-4 py-2 rounded-full shadow-md text-[12px] font-normal text-[#7C7475]">
            Do these shoes go <br /> with my outfit?
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-[#BBBFC8] border border-[#FFFFFF] w-[120px] h-[125px] -xl -rotate-6 rounded-lg">
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt="Outfit" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export function OutfitCard3({ imageSrc, title }: OutfitCardProps) {
  return (
    <div className="relative w-[140px] h-[85px]  hidden lg:block -right-[110%] -top-[70%] z-10">
      {/* Speech bubble */}
      {title && (
        <div className="absolute -top-[25%] left-[5%]  z-10 rotate-8 shadow-2xl rounded-3xl">
          <div className="bg-white px-4 py-2 rounded-full shadow-md text-[12px] font-medium text-[#7C7475] font-outfit">
            {title}
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-[#FDCAD7] border border-[#FFFFFF] w-[120px] h-[125px] -xl rotate-14 rounded-lg">
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt="Outfit" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export function OutfitCard4({ imageSrc, title }: OutfitCardProps) {
  return (
    <div className="relative w-[180px] h-[95px]  hidden lg:block -right-[110%] -top-[35%] z-10">
      {/* Speech bubble */}
      {title && (
        <div className="absolute -top-[52%] left-[15%] -translate-x-1/2 z-10 shadow-2xl rounded-3xl">
          <div className="bg-white px-4 py-2 rounded-full shadow-md text-[12px] font-medium text-[#7C7475] font-outfit">
            What can I wear with these jeans?
          </div>
        </div>
      )}

      {/* Card */}
      <div className="bg-[#F4EEF0] border border-[#FFFFFF] w-[120px] h-[125px] -xl -rotate-2.23 rounded-lg">
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt="Outfit" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export function QuoteCard() {
  return (
    <div className="relative top-20 left-0 hidden lg:block">
      {/* Card */}
      <div
        className="
      relative
      w-[210px] h-[95px]
      rounded-[12px]
      bg-white
      pt-12
      pb-4
      flex items-center justify-center
    "
      >
        <div
          className="
        absolute
        top-2.5 left-3.5
        h-8 w-8
        rounded-full
        bg-[#F7EFEF]
        flex items-center justify-center
      "
        >
          <Image src="/zuri-logo.png" alt="Zuri" width={24} height={24} />
        </div>
        <p
          className="
        font-outfit
        text-[14px]
        text-[#7C7475]
        font-normal
        text-left
        
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
    <div className="relative w-[150px] h-[120px] flex items-center justify-center -right-115 -top-60 lg:block sm:block">
      {/* Scale wrapper */}
      <div className="origin-top-left scale-[0.45]">
        {/* Outer card */}
        <div className="relative w-[360px] rounded-4xl bg-white px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between rounded-2xl bg-[#F9F9F9] px-6 py-6">
            <div className="flex items-center gap-4 text-[#8B8B8B]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                <img src="/images/hero/file.svg" alt="file svg" />
              </div>
              <span className="text-[16px] font-outfit font-normal">
                Ask Zuri
              </span>
            </div>

            <ChevronRight className="h-7 w-7 text-[#3C4043]" />
          </div>
        </div>
      </div>
    </div>
  );
}
