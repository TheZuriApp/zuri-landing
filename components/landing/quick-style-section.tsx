import Image from "next/image";

export default function QuickStyleSection() {
  return (
    <div className="sm:min-h-screen min-h-[50vh] bg-white rounded-t-[40px] md:rounded-t-[64px]">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-8 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-[24px] md:text-[31.5px] font-fields mb-3 md:mb-4">
            How Zuri <span className="text-[#920146]">Styles You Better</span>
          </h1>
          <p className="text-[#4F4E4E] text-[13px] md:text-[14px] font-geist px-4">
            Everything you need to look put-together - effortlessly.
          </p>
        </div>

        {/* Main Content: Flex for Mobile, Grid for Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-4 items-center">
          {/* Text Column */}
          <div className="order-2 md:order-1 md:col-start-2 md:col-span-5 space-y-10 md:space-y-16 text-center md:text-left">
            <div>
              <h2 className="text-[20px] md:text-[22px] font-fields mb-2 md:mb-3">
                Shop What <span className="text-[#920146]">Suits You</span>
              </h2>
              <p className="text-[#4F4E4E] text-[13px] leading-relaxed max-w-[380px] mx-auto md:mx-0">
                Curated outfits and products tailored to your body type, style,
                and the occasion - so you always know what works for you.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] md:text-[22px] font-fields mb-2 md:mb-3">
                Ask Your <span className="text-[#920146]">AI Stylist</span>
              </h2>
              <p className="text-[#4F4E4E] text-[13px] leading-relaxed max-w-[380px] mx-auto md:mx-0">
                Get real-time styling advice from a fashion expert who
                understands your taste, preferences, and lifestyle.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] md:text-[22px] font-fields mb-2 md:mb-3">
                Your Wardrobe,{" "}
                <span className="text-[#920146]">Reimagined</span>
              </h2>
              <p className="text-[#4F4E4E] text-[13px] leading-relaxed max-w-[380px] mx-auto md:mx-0">
                Build your virtual closet and discover fresh outfit combinations
                from the pieces you already own.
              </p>
            </div>
          </div>

          {/* Phone Column */}
          <div className="order-2 md:order-1 md:col-span-6 flex justify-center w-full">
            <div className="relative w-[210px] h-[400px] md:w-[234px] md:h-[445px] flex justify-center items-center mx-auto">
              <img
                src="/images/quickStyle/k1.png"
                alt="Phone Frame"
                className="absolute w-[234px] h-[445px] object-cover z-0"
              />

              <img
                src="/images/quickStyle/k2.png"
                alt="Phone Screen Content"
                className="absolute w-[83%] h-[91%] object-fill z-10 justify-center mx-auto pl-2 sm:w-[75%] sm:h-[82%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
