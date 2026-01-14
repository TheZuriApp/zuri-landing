import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function OutfitImages() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;

      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(autoScroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  const outfitImages = [
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop",
  ];

  // Random rotation angles for each image
  const rotations = [-8, 5, -3, 7, -5, 4, -6, 8, -4, 6, -7, 3, -2, 5];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16">
          {/* have to adjust the positioning of this text later */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
              We Make Fashion <span className="text-[#E25C7E]">Feel Easy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl px-2 sm:px-0">
              Get fashion advice made for your body, your skin tone, and your
              unique style. Get fashion advice made for your body.
            </p>
          </div>

          <div className="mb-12 sm:mb-16 md:mb-20 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2"
              style={{ scrollBehavior: "auto" }}
            >
              {[...outfitImages, ...outfitImages].map((img, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-32 h-52 sm:w-40 sm:h-64 md:w-48 md:h-80 rounded-xl sm:rounded-2xl mr-4 sm:mr-6 md:mr-10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{
                    transform: `rotate(${
                      rotations[idx % rotations.length]
                    }deg)`,
                    marginTop: idx % 2 === 0 ? "0" : "1rem",
                  }}
                >
                  <img
                    src={img}
                    alt={`Outfit ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Screenshots Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Screenshot Card */}
          <div className="relative bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Phone area */}
            <div className="flex justify-center pt-6 sm:pt-8 md:pt-10">
              <div className="w-[200px] h-[390px] sm:w-[260px] sm:h-[500px] md:w-[300px] md:h-[580px] lg:w-[320px] lg:h-[620px] rounded-[30px] sm:rounded-[35px] md:rounded-[40px] bg-gray-200 flex pt-3 sm:pt-4 items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                <img
                  src="/Mask group (1).png"
                  alt="Phone Screenshot"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Text area (pulled up to overlap) */}
            <div className="bg-gradient-to-b from-white to-pink-100 px-4 sm:px-5 md:px-6 pt-6 sm:pt-7 md:pt-8 pb-6 sm:pb-7 md:pb-8 -mt-24 sm:-mt-32 md:-mt-40 relative z-10">
              <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Get fashion advice made for your body, your skin tone, and your
                style. Get fashion advice made for your body, your skin tone,
                and your style.
              </p>
            </div>
          </div>

          {/* Right Screenshot */}
          <div className="relative bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Phone area */}
            <div className="flex justify-center pt-6 sm:pt-8 md:pt-10">
              <div className="w-[200px] h-[390px] sm:w-[260px] sm:h-[500px] md:w-[300px] md:h-[580px] lg:w-[320px] lg:h-[620px] rounded-[30px] sm:rounded-[35px] md:rounded-[40px] bg-gray-200 flex pt-3 sm:pt-4 items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                <img
                  src="/Frame 1707492289 (1).png"
                  alt="Phone Screenshot"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Text area (pulled up to overlap) */}
            <div className="bg-gradient-to-b from-white to-pink-100 px-4 sm:px-5 md:px-6 pt-6 sm:pt-7 md:pt-8 pb-6 sm:pb-7 md:pb-8 -mt-24 sm:-mt-32 md:-mt-40 relative z-10">
              <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Get fashion advice made for your body, your skin tone, and your
                style. Get fashion advice made for your body, your skin tone,
                and your style.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
