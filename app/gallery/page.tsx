"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const images = [
    { src: "/backgrounds/IMG_8181.png", caption: "will fill later" },
    { src: "/backgrounds/IMG_0953.jpg", caption: "will fill later" },
    { src: "/backgrounds/IMG_0954.jpg", caption: "will fill later" },
    { src: "/backgrounds/IMG_0955.jpg", caption: "will fill later" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

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
    <div className="space-y-12">

      {/* PAGE TITLE */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Recent Work</h1>
        <p className="text-gray-700 mt-2">
          Real project photos from NW Welding Repair. Tap any image to view it larger.
        </p>
      </section>

      {/* 2×2 IMAGE GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={img.src}
              alt={`Gallery image ${index + 1}`}
              width={800}
              height={800}
              className="object-cover w-full h-64 sm:h-72"
            />
          </div>
        ))}
      </section>

      {/* TEXT BELOW GALLERY */}
      <p className="text-center text-gray-600 text-lg pb-10">
        More photos coming soon.
      </p>

      {/* MODAL */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* CLOSE ON BACKGROUND CLICK */}
          <div
            className="absolute inset-0"
            onClick={() => setCurrentIndex(null)}
          />

          {/* LEFT ARROW */}
          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-5xl font-bold select-none z-50"
          >
            ‹
          </button>

          {/* IMAGE + CAPTION */}
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

          {/* RIGHT ARROW */}
          <button
            onClick={showNext}
            className="absolute right-4 text-white text-5xl font-bold select-none z-50"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
