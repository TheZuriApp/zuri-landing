import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 text-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
        <Image
          src="/under-construction.png"
          alt="Illustration showing the website is under construction"
          fill
          className="object-contain"
          priority // Ensures this loads immediately
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
        Coming Soon
      </h1>
      
      <p className="mt-4 text-lg text-gray-600 max-w-md">
        We're currently working hard to bring you something amazing. 
        Stay tuned for updates!
      </p>

    </main>
  );
}