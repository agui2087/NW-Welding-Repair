"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const images = [
    { src: "/backgrounds/IMG_0956.jpg", caption: "Recent welding project 1" },
    { src: "/backgrounds/IMG_0957.jpg", caption: "Recent welding project 2" },
    { src: "/backgrounds/IMG_0958.jpg", caption: "Recent welding project 3" },
  ];

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
    if (swipeDistance > 50) showPrev();
    else if (swipeDistance < -50) showNext();
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
    <div className="space-y-12">

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
            and residential needs.
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

      <section className="w-full bg-white border-y py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 text-gray-700 text-sm font-semibold">
          <div className="flex items-center gap-2"><span className="text-red-600 text-lg">✓</span>Serving the Pacific Northwest</div>
          <div className="flex items-center gap-2"><span className="text-red-600 text-lg">✓</span>24/7 Emergency Welding</div>
          <div className="flex items-center gap-2"><span className="text-red-600 text-lg">✓</span>Fully Mobile Welding Service</div>
        </div>
      </section>

      <section className="w-full bg-white border-y py-4">
        <div className="max-w-5xl mx-auto flex justify-center">
          <a
            href="https://www.instagram.com/nw_weldrepair?igsh=ODVhZHBhbGF6bTd6"
            target="_blank"
            className="text-red-600 font-semibold hover:underline"
          >
            Follow us on Instagram @nw_weldrepair
          </a>
        </div>
      </section>

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

      <section className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-800 leading-relaxed">
              “Fast, professional, and high‑quality work. Saved my trailer from falling apart.”
            </p>
            <p className="text-red-600 font-semibold mt-4 text-sm">— Carlos Aguilar</p>
          </div>

          <div className="bg-white border p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-800 leading-relaxed">
              “Showed up same day for an emergency repair. Highly recommend.”
            </p>
            <p className="text-red-600 font-semibold mt-4 text-sm">— Aidan Kaiser</p>
          </div>

          <div className="bg-white border p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-800 leading-relaxed">
              “Great communication and solid welding. Will hire again.”
            </p>
            <p className="text-red-600 font-semibold mt-4 text-sm">— Renee Chau</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Why Choose Us
        </h2>

        <div className="bg-white border p-6 rounded-xl shadow-md max-w-3xl mx-auto space-y-4 text-center">
          <p className="text-gray-700 leading-relaxed">
            NW Welding Repair is built on the belief that skilled trades should support the community.
            We take pride in helping local businesses, farmers, homeowners, and equipment owners keep
            their operations running safely and smoothly.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether it’s a scheduled project or an emergency repair, we show up ready to work, ready to
            solve problems, and ready to help our neighbors get back on track.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Service Area
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          NW Welding Repair proudly serves the greater Portland metro area, including:
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-gray-800 font-semibold">
          <span className="bg-gray-100 border px-4 py-2 rounded-lg">Portland</span>
          <span className="bg-gray-100 border px-4 py-2 rounded-lg">Beaverton</span>
          <span className="bg-gray-100 border px-4 py-2 rounded-lg">Hillsboro</span>
          <span className="bg-gray-100 border px-4 py-2 rounded-lg">Surrounding Areas</span>
        </div>
      </section>

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
