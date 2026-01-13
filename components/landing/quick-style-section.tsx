import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';

export default function QuickStyleSection() {
  const outfitImages = [
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
    'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
    'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400',
    'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400',
  ];

  const circleOutfits = [
    'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=300',
    'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300',
  ];

  return (
    <div className="min-h-screen bg-white p-8 rounded-t-4xl shadow-2xl">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-8">
        
        {/* Left Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border-[#E0D4D7] border-[0.6px]" >
          <div className="flex justify-center mb-6" style={{
      backgroundImage: `url('data:image/svg+xml,<svg width="1000" height="400" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M0,50 Q25,25 50,50 T100,50" stroke="%23e5e7eb" fill="none" stroke-width="0.5"/></pattern></defs><rect width="1000" height="400" fill="url(%23wave)"/></svg>')`,
      backgroundSize: 'cover'
    }}>
            <img src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400" 
                 alt="Featured outfit" 
                 className="w-48 h-64 object-cover rounded-2xl" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Quick Style</h2>
            <p className="text-gray-600 leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your closet or finding that one specific look for you, Zuri has sorted your looks to make sure you stay a 10/10. Walk into every room with Main Character energy! No more boring outfits anymore - just head-turning style that's unapologetically you!
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border-[#E0D4D7] border-[0.6px]">
          <div className="flex justify-end items-start gap-4 mb-8">
            <div className="bg-gray-50 rounded-2xl px-4 py-2">
              <p className="text-gray-700">What should I pack for my Goa Trip?</p>
            </div>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" 
                 alt="User" 
                 className="w-12 h-12 rounded-full object-cover" />
          </div>

          <div className="space-y-3 mb-8">
            <div className="bg-pink-50 rounded-2xl px-4 py-3 ml-12">
              <p className="text-sm text-gray-700">Brunch plan? Go playful floral prints</p>
            </div>
            <div className="bg-pink-50 rounded-2xl px-4 py-3 ml-12">
              <p className="text-sm text-gray-700">Try warm sunset tones they'll make your glow pop</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Quick Style</h2>
            <p className="text-gray-600 leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your closet or finding that one specific look for you, Zuri has sorted your looks to make sure you stay a 10/10. Walk into every room with Main Character energy! No more boring outfits anymore - just head-turning style that's unapologetically you!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Circular Layout Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border-[#E0D4D7] border-[0.6px]">
          <div className="relative w-80 h-80 mx-auto mb-6">
            {/* Center large circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-pink-200 overflow-hidden">
              <img src={circleOutfits[0]} alt="Center outfit" className="w-full h-full object-cover" />
            </div>
            
            {/* Surrounding circles */}
            {circleOutfits.slice(1).map((img, idx) => {
              const angle = (idx * 360) / 4;
              const radius = 100;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={idx}
                  className="absolute w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <img src={img} alt={`Outfit ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Quick Style</h2>
            <p className="text-gray-600 leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your closet or finding that one specific look for you, Zuri has sorted your looks to make sure you stay a 10/10. Walk into every room with Main Character energy! No more boring outfits anymore - just head-turning style that's unapologetically you!
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border-[#E0D4D7] border-[0.6px]">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {outfitImages.map((img, idx) => (
              <div key={idx} className="relative group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                  <img src={img} alt={`Outfit ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Heart className="w-4 h-4 text-pink-500" fill="currentColor" />
                </button>
                <div className="mt-2 flex gap-2">
                  <button className="flex-1 bg-pink-50 text-pink-600 text-xs py-2 rounded-lg font-medium hover:bg-pink-100 transition-colors">
                    Try on
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Quick Style</h2>
            <p className="text-gray-600 leading-relaxed">
              No more 'nothing to wear' meltdowns! Whether you're shuffling your closet or finding that one specific look for you, Zuri has sorted your looks to make sure you stay a 10/10. Walk into every room with Main Character energy! No more boring outfits anymore - just head-turning style that's unapologetically you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}