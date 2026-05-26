"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Modal state
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const images = [
    { src: "/backgrounds/IMG_0956.jpg", caption: "Recent welding project 1" },
    { src: "/backgrounds/IMG_0957.jpg", caption: "Recent welding project 2" },
    { src: "/backgrounds/IMG_0958.jpg", caption: "Recent welding project 3" },
  ];

  // Swipe tracking
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
      showPrev();
    } else if (swipeDistance < -50) {
      showNext();
    }
  };

  const showPrev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="space-y-16">

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/backgrounds/IMG_3653.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Reliable Welding, Fabrication & Emergency Repair
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mt-4 drop-shadow-md max-w-2xl mx-auto">
            Fast, dependable, and professional welding services for industrial, agricultural,
            and residential needs. Whether it’s a broken trailer, heavy equipment, or custom
            fabrication — we get the job done right.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://calendly.com/erikeo-northwestweldrepair/30min"
              target="_blank"
              className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition"
            >
              Schedule a Quote
            </a>

            <a
              href="tel:19712175616"
              className="bg-white text-red-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition"
            >
              Emergency Repair
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="w-full bg-white border-y py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 text-gray-700 text-sm font-semibold">
          <div className="flex items-center gap-2"><span className="text-red-600 text-lg">✓</span>Serving the Pacific Northwest</div>
          <div className="flex items-center gap-2"><span className="text-red-600 text-lg">✓</span>24/7 Emergency Welding</div>
          <div className="flex items-center gap-2"><span className="text-red-600 text-lg">✓</span>Fully Mobile Welding Service</div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Mobile Welding</h3>
          <p className="text-gray-600 text-sm">Fully equipped mobile welding for on‑site repairs and fabrication.</p>
        </div>

        <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Fabrication</h3>
          <p className="text-gray-600 text-sm">Custom metal fabrication built to your exact specifications.</p>
        </div>

        <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Emergency Repairs</h3>
          <p className="text-gray-600 text-sm">Fast response for urgent welding needs — trailers, equipment, and more.</p>
        </div>
      </section>

      {/* PHOTO GALLERY WITH CLICK + SWIPE */}
      <section className="max-w-5xl mx-auto px-6 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Recent Work</h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          A few examples of recent welding and fabrication projects.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg h-48 overflow-hidden shadow-sm cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={img.src}
                alt={img.caption}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="max-w-4xl mx-auto px-6 space-y-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Customer Reviews
        </h2>

        <div className="space-y-6">
          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <p className="text-gray-900 italic">
              “Fast, professional, and high‑quality work. Saved my trailer from falling apart.”
            </p>
            <p className="text-gray-400 font-semibold mt-2">— Carlos Aguilar</p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <p className="text-gray-900 italic">
              “Showed up same day for an emergency repair. Highly recommend.”
            </p>
            <p className="text-gray-400 font-semibold mt-2">— Aidan Kaiser</p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <p className="text-gray-900 italic">
              “Great communication and solid welding. Will hire again.”
            </p>
            <p className="text-gray-400 font-semibold mt-2">— Renee Chau</p>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0" onClick={() => setCurrentIndex(null)} />

          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-5xl font-bold z-50 select-none"
          >
            ‹
          </button>

          <div className="relative max-w-4xl w-full p-4 z-50">
            <Image
              src={images[currentIndex].src}
              alt="Expanded view"
              width={1200}
              height={900}
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <p className="text-center text-white mt-4 text-lg">
              {images[currentIndex].caption}
            </p>
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 text-white text-5xl font-bold z-50 select-none"
          >
            ›
          </button>
        </div>
      )}

    </div>
  );
}
