// import Image from "next/image";
// import React, { useEffect, useRef } from "react";

// export default function OutfitImages() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const scrollSpeed = 1;
//     const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

//     const autoScroll = () => {
//       scrollAmount += scrollSpeed;

//       if (scrollAmount >= maxScroll) {
//         scrollAmount = 0;
//       }

//       scrollContainer.scrollLeft = scrollAmount;
//     };

//     const intervalId = setInterval(autoScroll, 30);

//     return () => clearInterval(intervalId);
//   }, []);

//   const outfitImages = [
//     "/images/outfitls/o4.png",
//     "/images/outfitls/o5.png",
//     "/images/outfitls/o6.png",
//     "/images/outfitls/o7.png",
//     "/images/outfitls/o1.png",
//     "/images/outfitls/o2.png",
//     "/images/outfitls/o3.png",
//   ];

//   // Random rotation angles for each image
//   const rotations = [-8, 5, -3, 7, -5, 4, -6, 8, -4, 6, -7, 3, -2, 5];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//         <div className="flex flex-col bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
//           {/* have to adjust the positioning of this text later */}
//           <div className="mb-4 sm:mb-6 md:mb-8">
//             <h1 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
//               We Make Fashion <span className="text-[#920146]">Feel Easy</span>
//             </h1>
//             <p className="text-sm sm:text-base md:text-sm text-gray-600 max-w-2xl px-2 sm:px-0">
//               Get fashion advice made for your body, your skin tone, and your
//             </p>
//             <p className="text-sm sm:text-base md:text-sm text-gray-600 max-w-2xl px-2 sm:px-0">
//               unique style. Get fashion advice made for your body.
//             </p>
//           </div>

//           <div className="mb-8 mt-4 overflow-hidden">
//             <div
//               ref={scrollRef}
//               className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-1 sm:pb-2"
//               style={{ scrollBehavior: "auto" }}
//             >
//               {[...outfitImages, ...outfitImages].map((img, idx) => (
//                 <div
//                   key={idx}
//                   className="shrink-0 w-24 h-32 sm:w-24 sm:h-32 md:w-[124px] md:h-[161px] rounded-xl sm:rounded-2xl mr-3 sm:mr-2 md:mr-3 overflow-hidden transition-all duration-300"
//                   style={{
//                     transform: `rotate(${
//                       rotations[idx % rotations.length]
//                     }deg)`,
//                     marginTop: idx % 2 === 0 ? "0" : "1rem",
//                   }}
//                 >
//                   <img
//                     src={img}
//                     alt={`Outfit ${idx + 1}`}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* App Screenshots Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 md:gap-8 items-center">
//           {/* Left Screenshot Card */}
//           <div className="relative bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden">
//             {/* Phone area */}
//             <div className="flex justify-center pt-4 sm:pt-6 md:pt-8">
//               <div className="w-[180px] h-[350px] sm:w-[240px] sm:h-[460px] md:w-[280px] md:h-[540px] lg:w-[300px] lg:h-[580px] rounded-[26px] sm:rounded-[32px] md:rounded-[36px] bg-gray-200 flex pt-3 sm:pt-4 items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
//                 <img
//                   src="/Mask group (1).png"
//                   alt="Phone Screenshot"
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Text area (pulled up to overlap) */}
//             <div className="bg-gradient-to-b from-white to-pink-100 px-4 sm:px-5 md:px-6 pt-5 sm:pt-6 md:pt-7 pb-5 sm:pb-6 md:pb-7 -mt-20 sm:-mt-28 md:-mt-32 relative z-10">
//               <p className="text-center text-gray-700 text-sm sm:text-base md:text-sm leading-relaxed">
//                 Get fashion advice made for your body, your skin tone, and your
//                 style. Get fashion advice made for your body, your skin tone,
//                 and your style.
//               </p>
//             </div>
//           </div>

//           {/* Right Screenshot */}
//           <div className="relative bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden">
//             {/* Phone area */}
//             <div className="flex justify-center pt-4 sm:pt-6 md:pt-8">
//               <div className="w-[180px] h-[350px] sm:w-[240px] sm:h-[460px] md:w-[280px] md:h-[540px] lg:w-[300px] lg:h-[580px] rounded-[26px] sm:rounded-[32px] md:rounded-[36px] bg-gray-200 flex pt-3 sm:pt-4 items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
//                 <img
//                   src="/Frame 1707492289 (1).png"
//                   alt="Phone Screenshot"
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Text area (pulled up to overlap) */}
//             <div className="bg-gradient-to-b from-white to-pink-100 px-4 sm:px-5 md:px-6 pt-5 sm:pt-6 md:pt-7 pb-5 sm:pb-6 md:pb-7 -mt-20 sm:-mt-28 md:-mt-32 relative z-10">
//               <p className="text-center text-gray-700 text-sm sm:text-base md:text-sm leading-relaxed">
//                 Get fashion advice made for your body, your skin tone, and your
//                 style. Get fashion advice made for your body, your skin tone,
//                 and your style.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";

type Slide = {
  image: string;
  title: string;
};

const originalSlides: Slide[] = [
  { image: "/images/outfitls/p1.png", title: "Wedding Chic" },
  { image: "/images/outfitls/p2.png", title: "Date Night Chic" },
  { image: "/images/outfitls/p3.png", title: "Brunch Chic" },
  { image: "/images/outfitls/p4.png", title: "Office Chic" },
  { image: "/images/outfitls/p5.png", title: "Vacation Chic" },
];

// clone first + last for infinite effect
const slides: Slide[] = [
  originalSlides[originalSlides.length - 1],
  ...originalSlides,
  originalSlides[0],
];

export default function InfiniteOutfitCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(1);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* ------------------ AUTO SLIDE ------------------ */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ------------------ CENTER ACTIVE CARD ------------------ */
  useEffect(() => {
    const container = containerRef.current;
    const card = cardRefs.current[activeIndex];
    if (!container || !card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  /* ------------------ INFINITE SNAP FIX ------------------ */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (activeIndex === slides.length - 1) {
      // reached fake last → snap to real first
      setTimeout(() => {
        container.scrollTo({ left: 0, behavior: "auto" });
        setActiveIndex(1);
      }, 500);
    }

    if (activeIndex === 0) {
      // reached fake first → snap to real last
      setTimeout(() => {
        const lastCard = cardRefs.current[slides.length - 2];
        if (!lastCard) return;

        container.scrollTo({
          left:
            lastCard.offsetLeft -
            container.offsetWidth / 2 +
            lastCard.offsetWidth / 2,
          behavior: "auto",
        });

        setActiveIndex(slides.length - 2);
      }, 500);
    }
  }, [activeIndex]);

  /* ------------------ RESET TYPEWRITER ON SLIDE CHANGE ------------------ */
  useEffect(() => {
    setText("");
    setIsDeleting(false);
  }, [activeIndex]);

  /* ------------------ TYPEWRITER EFFECT ------------------ */
  useEffect(() => {
    const fullText = slides[activeIndex]?.title ?? "";
    const typeSpeed = 90;
    const deleteSpeed = 60;
    const pause = 900;

    let timer: NodeJS.Timeout;

    if (!isDeleting && text.length < fullText.length) {
      timer = setTimeout(
        () => setText(fullText.slice(0, text.length + 1)),
        typeSpeed,
      );
    } else if (!isDeleting && text.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(
        () => setText(fullText.slice(0, text.length - 1)),
        deleteSpeed,
      );
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, activeIndex]);

  return (
    <div className="sm:min-h-screen bg-white flex items-center justify-center px-6 min-h-[50vh]" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-2 md:py-4">
        <div className="flex flex-col bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6 md:mb-8 justify-center text-center">
            <h1 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-3 sm:mb-4">
              We Make Fashion <span className="text-[#920146]">Feel Easy</span>
            </h1>
            <p className="mx-auto text-sm sm:text-base md:text-sm text-gray-600 max-w-2xl ">
              Get fashion advice made for your body, your skin tone, and your
            </p>
            <p className="mx-auto text-sm sm:text-base md:text-sm text-gray-600 max-w-2xl">
              unique style. Get fashion advice made for your body.
            </p>
          </div>

          <div
            ref={containerRef}
            className="flex  gap-4 sm:gap-15 overflow-hidden max-w-6xl"
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`relative shrink-0 w-[180px] sm:w-[360px] sm:h-[520px] h-[240px]
              rounded-[28px] overflow-hidden transition-all duration-500
              ${
                i === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-100"
              }
            `}
              >
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {i === activeIndex && (
                  <div
                    className="
    absolute bottom-8 left-1/2 -translate-x-1/2
    px-8 py-4 rounded-full
    bg-linear-to-b from-[#505050]/70 to-[#434343]/70
    backdrop-blur-[2px]
    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
  "
                  >
                    <p className="text-lg font-medium text-white whitespace-nowrap flex items-center">
                      {text}
                      <span className="ml-1 inline-block w-[2px] h-5 bg-white/80 animate-pulse" />
                    </p>

                    {/* fake noise overlay */}
                    <div
                      className="
      pointer-events-none absolute inset-0 rounded-full
      bg-[url('/noise.png')]
      opacity-10
      mix-blend-overlay
    "
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
