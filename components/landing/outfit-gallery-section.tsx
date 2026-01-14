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
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col bg-gray-50 rounded-3xl p-8 mb-16">
          {/* have to adjust the positioning of this text later */}
          <div className="mb-8 left-[50px] top-[50px]">
            <h1 className="text-[52px] font-bold text-gray-900 mb-4">
              We Make Fashion <span className="text-[#E25C7E]">Feel Easy</span>
            </h1>
            <p className="text-[20px] text-gray-600 max-w-2xl">
              Get fashion advice made for your body, your skin tone, and your
              unique style. Get fashion advice made for your body.
            </p>
          </div>

          <div className="mb-20 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: "auto" }}
            >
              {[...outfitImages, ...outfitImages].map((img, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-48 h-80 rounded-2xl mr-10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{
                    transform: `rotate(${
                      rotations[idx % rotations.length]
                    }deg)`,
                    marginTop: idx % 2 === 0 ? "0" : "2rem",
                  }}
                >
                  <img
                    src={img}
                    alt={`Outfit ${idx + 1}`}
                    className="w-full h-full object-cover mr-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Screenshots Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center flex-col mb-16">
          {/* Left Screenshot Card */}
          <div className="relative bg-gray-50 rounded-3xl overflow-hidden">
            {/* Phone area */}
            <div className="flex justify-center pt-10 ">
              <div className="w-[320px] h-[620px] rounded-[40px] bg-gray-200 flex  pt-4 items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                <img
                  src="/Mask group (1).png"
                  alt="Phone Screenshot"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Text area (pulled up to overlap) */}
            <div className="bg-gradient-to-b from-white to-pink-100 px-6 pt-8 pb-8 -mt-40 relative z-10">
              <p className="text-center text-gray-700 text-[18px] leading-relaxed">
                Get fashion advice made for your body, your skin tone, and your
                style. Get fashion advice made for your body, your skin tone,
                and your style.
              </p>
            </div>
          </div>

          {/* Right Screenshot */}
          <div className="relative bg-gray-50 rounded-3xl overflow-hidden">
            {/* Phone area */}
            <div className="flex justify-center pt-10 ">
              <div className="w-[320px] h-[620px] rounded-[40px] bg-gray-200 flex pt-4 items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                <img
                  src="/Frame 1707492289 (1).png"
                  alt="Phone Screenshot"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Text area (pulled up to overlap) */}
            <div className="bg-gradient-to-b from-white to-pink-100 px-6 pt-8 pb-8 -mt-40 relative z-10">
              <p className="text-center text-gray-700 text-[18px] leading-relaxed">
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
