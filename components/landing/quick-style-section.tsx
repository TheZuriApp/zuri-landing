import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";

export default function QuickStyleSection() {
  const outfitImages = [
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400",
    "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400",
  ];

  const circleOutfits = [
    "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=300",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300",
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 rounded-t-[48px]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        {/* Left Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border-[#E0D4D7] border-[0.6px] overflow-hidden flex flex-col">
          <div className="flex justify-center items-end mb-4 sm:mb-6 flex-1 min-h-[180px] sm:min-h-[220px] md:min-h-[171px]">
            <div className="flex flex-row items-end justify-center gap-2 sm:gap-3 md:gap-4 w-full">
              <Image
                src="/Group 1707491973.png"
                alt="PNG1"
                width={399.5}
                height={258.08}
                className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[170px] lg:max-w-[250px] xl:max-w-[399.5px] h-[140px] sm:h-[151px] object-contain"
              />

              <Image
                src="/Frame 1707492130.png"
                alt="PNG2"
                width={399.5}
                height={258.08}
                className="max-w-[140px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[399.5px] h-[160px] sm:h-[181px] object-contain"
              />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 bg-gradient-to-b from-pink-100 to-white rounded-b-2xl sm:rounded-b-3xl p-4 sm:p-5 md:p-6">
            <h2 className="text-sm sm:text-base md:text-[14.4px] font-semibold text-gray-800">
              Quick Style
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-sm font-geist lg:text-base leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your
              closet or finding that one specific look for you, Zuri has sorted
              your looks to make sure you stay a 10/10. Walk into every room
              with Main Character energy! No more boring outfits anymore - just
              head-turning style that's unapologetically you!
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border-[#E0D4D7] border-[0.6px] overflow-hidden flex flex-col">
          <div className="flex justify-center items-end mb-4 sm:mb-6 flex-1 min-h-[180px] sm:min-h-[220px] md:min-h-[171px]">
            <div className="flex flex-row items-end justify-center gap-2 sm:gap-3 md:gap-4 w-full">
              <img
                src="/Frame 1707492214.png"
                alt="PNG1"
                className="w-[180px] max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[270px] h-[140px] sm:h-[151px] object-contain"
              />

              <img
                src="/Group 1707491972.png"
                alt="PNG2"
                className="w-[180px] max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[270px] h-[140px] sm:h-[151px] object-contain"
              />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 bg-gradient-to-b from-pink-100 to-white rounded-b-2xl sm:rounded-b-3xl p-4 sm:p-5 md:p-6">
            <h2 className="text-sm sm:text-base md:text-[14.4px] font-semibold text-gray-800">
              Quick Style
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-sm font-geist lg:text-base leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your
              closet or finding that one specific look for you, Zuri has sorted
              your looks to make sure you stay a 10/10. Walk into every room
              with Main Character energy! No more boring outfits anymore - just
              head-turning style that's unapologetically you!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        {/* Left Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border-[#E0D4D7] border-[0.6px] overflow-hidden flex flex-col">
          {/* Top Image Section */}
          <div className="flex justify-center items-end mb-4 sm:mb-6 flex-1 min-h-[180px] sm:min-h-[220px] md:min-h-[171px]">
            <img
              src="/Group 1707491916.png"
              alt="Featured outfit"
              className="w-[200px] max-w-[260px] sm:max-w-[300px] md:max-w-[211px] lg:max-w-[360px] h-auto object-contain rounded-xl sm:rounded-2xl"
            />
          </div>

          <div className="space-y-3 sm:space-y-4 bg-gradient-to-b from-pink-100 to-white rounded-b-2xl sm:rounded-b-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-center">
            <h2 className="text-sm sm:text-base md:text-[14.4px] font-geist font-semibold text-gray-800">
              Quick Style
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-sm font-geist lg:text-base leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your
              closet or finding that one specific look for you, Zuri has sorted
              your looks to make sure you stay a 10/10. Walk into every room
              with Main Character energy! No more boring outfits anymore - just
              head-turning style that's unapologetically you!
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border-[#E0D4D7] border-[0.6px] overflow-hidden flex flex-col">
          <div className="flex justify-center items-end mb-4 sm:mb-6 flex-1 min-h-[180px] sm:min-h-[220px] md:min-h-[231px]">
           <img
  src="/Group 1707491947.png"
  alt="Featured outfit"
  className="
    w-[360px]
    sm:w-[300px]
    md:w-[340px]
    lg:w-[380px]
    object-contain
    rounded-xl sm:rounded-2xl px-4
  "
/>

          </div>

          <div className="space-y-3 sm:space-y-4 bg-gradient-to-b from-pink-100 to-white rounded-b-2xl sm:rounded-b-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-center">
            <h2 className="text-sm sm:text-base md:text-[14.4px] font-semibold text-gray-800">
              Quick Style
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-sm font-geist lg:text-base leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your
              closet or finding that one specific look for you, Zuri has sorted
              your looks to make sure you stay a 10/10. Walk into every room
              with Main Character energy! No more boring outfits anymore - just
              head-turning style that's unapologetically you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
