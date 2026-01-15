import Image from "next/image";

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
      className="relative w-[130px] h-[85px]  hidden lg:block -right-[120%] -top-[15%] z-10"
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
      className="relative w-[130px] h-[85px]  hidden lg:block -right-[117%] top-[8%] z-10"
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

