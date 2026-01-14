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
    <div className="min-h-screen bg-white p-8 rounded-t-4xl shadow-2xl">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[6fr_4fr] gap-8 mb-8">
        {/* Left Card */}
        <div className="bg-white rounded-3xl shadow-sm border-[#E0D4D7] border-[0.6px]">
          <div
            className="flex justify-center mb-6"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg width="1000" height="400" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M0,50 Q25,25 50,50 T100,50" stroke="%23e5e7eb" fill="none" stroke-width="0.5"/></pattern></defs><rect width="1000" height="400" fill="url(%23wave)"/></svg>')`,
              backgroundSize: "cover",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400"
              alt="Featured outfit"
              className="w-48 h-64 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-4 bg-linear-to-b from-pink-100 to-white rounded-b-3xl p-4">
            <h2 className="text-[24px] font-semibold text-gray-800">
              Quick Style
            </h2>
            <p className="text-gray-600 text-[20px] leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your
              closet or finding that one specific look for you, Zuri has sorted
              your looks to make sure you stay a 10/10. Walk into every room
              with Main Character energy! No more boring outfits anymore - just
              head-turning style that's unapologetically you!
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-3xl shadow-sm border-[#E0D4D7] border-[0.6px]">
          <div
            className="flex justify-center mb-6"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg width="1000" height="400" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M0,50 Q25,25 50,50 T100,50" stroke="%23e5e7eb" fill="none" stroke-width="0.5"/></pattern></defs><rect width="1000" height="400" fill="url(%23wave)"/></svg>')`,
              backgroundSize: "cover",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400"
              alt="Featured outfit"
              className="w-48 h-64 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-4 bg-linear-to-b from-pink-100 to-white rounded-b-3xl p-4">
            <h2 className="text-[24px] font-semibold text-gray-800">
              Quick Style
            </h2>
            <p className="text-gray-600 text-[20px] leading-relaxed">
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
      <div className="max-w-7xl mx-auto grid md:grid-cols-[4fr_6fr] gap-8">
        {/* Left Card */}
        <div className="bg-white rounded-3xl shadow-sm border-[#E0D4D7] border-[0.6px]">
          {/* Top Image Section */}
          <div
            className="relative flex items-center justify-center h-[420px] rounded-t-3xl"
            // style={{
            //   backgroundImage: `url("/f5526bc83722092216251403d8280b53f46c3cc7.png")`,
            //   backgroundRepeat: "repeat",
            //   backgroundSize: "auto",
            // }}
          >
            <img
              src="/Group 1707491916.png"
              alt="Featured outfit"
              className="
      w-[420px]
      h-auto
      object-contain
      rounded-2xl
    "
            />
          </div>

          <div className="space-y-4 bg-linear-to-b from-pink-100 to-white rounded-b-3xl p-4">
            <h2 className="text-[24px] font-semibold text-gray-800">
              Quick Style
            </h2>
            <p className="text-gray-600 text-[20px] leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your
              closet or finding that one specific look for you, Zuri has sorted
              your looks to make sure you stay a 10/10. Walk into every room
              with Main Character energy! No more boring outfits anymore - just
              head-turning style that's unapologetically you!
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-3xl shadow-sm border-[#E0D4D7] border-[0.6px]">
          <div
            className="relative flex items-center justify-center h-[420px] rounded-t-3xl"
            // style={{
            //   backgroundImage: `url('data:image/svg+xml,<svg width="1000" height="400" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M0,50 Q25,25 50,50 T100,50" stroke="%23e5e7eb" fill="none" stroke-width="0.5"/></pattern></defs><rect width="1000" height="400" fill="url(%23wave)"/></svg>')`,
            //   backgroundSize: "cover",
            // }}
          >
            <img
              src="\Group 1707491947.png"
              alt="Featured outfit"
              className="
      w-[460px]
      h-auto
      object-contain
      rounded-2xl
    "            />
          </div>

          <div className="space-y-4 bg-linear-to-b from-pink-100 to-white rounded-b-3xl p-4">
            <h2 className="text-[24px] font-semibold text-gray-800">
              Quick Style
            </h2>
            <p className="text-gray-600 text-[20px] leading-relaxed">
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
