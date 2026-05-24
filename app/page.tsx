export default function Home() {
  return (
    <div className="space-y-16">

      {/* HERO SECTION */}
      <section className="text-center space-y-6 px-6 pt-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Reliable Welding, Fabrication & Emergency Repair
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fast, dependable, and professional welding services for industrial, agricultural, 
          and residential needs. Whether it’s a broken trailer, heavy equipment, or custom 
          fabrication — we get the job done right.
        </p>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <a
            href="https://calendly.com/YOUR-LINK-HERE"
            target="_blank"
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Schedule a Quote
          </a>

          <a
            href="tel:19712175616"
            className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition"
          >
            Emergency Repair
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="w-full bg-white border-y py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 text-gray-700 text-sm font-semibold">

          <div className="flex items-center gap-2">
            <span className="text-red-600 text-lg">✓</span>
            Licensed & Insured
          </div>

          <div className="flex items-center gap-2">
            <span className="text-red-600 text-lg">✓</span>
            Serving the Pacific Northwest
          </div>

          <div className="flex items-center gap-2">
            <span className="text-red-600 text-lg">✓</span>
            24/7 Emergency Welding
          </div>

          <div className="flex items-center gap-2">
            <span className="text-red-600 text-lg">✓</span>
            Fully Mobile Welding Service
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Mobile Welding</h3>
          <p className="text-gray-600 text-sm">
            Fully equipped mobile welding for on‑site repairs and fabrication.
          </p>
        </div>

        <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Fabrication</h3>
          <p className="text-gray-600 text-sm">
            Custom metal fabrication built to your exact specifications.
          </p>
        </div>

        <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Emergency Repairs</h3>
          <p className="text-gray-600 text-sm">
            Fast response for urgent welding needs — trailers, equipment, and more.
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY PLACEHOLDER */}
      <section className="max-w-5xl mx-auto px-6 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Recent Work
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Upload your photos and I’ll plug them in here with clean descriptions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 border rounded-lg h-48 flex items-center justify-center text-gray-500">
            Photo 1 Placeholder
          </div>

          <div className="bg-gray-100 border rounded-lg h-48 flex items-center justify-center text-gray-500">
            Photo 2 Placeholder
          </div>

          <div className="bg-gray-100 border rounded-lg h-48 flex items-center justify-center text-gray-500">
            Photo 3 Placeholder
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="max-w-4xl mx-auto px-6 space-y-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Customer Reviews
        </h2>

        <div className="space-y-6">
          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic">
              “Fast, professional, and high‑quality work. Saved my trailer from falling apart.”
            </p>
            <p className="text-gray-900 font-semibold mt-2">— Carlos Aguilar</p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic">
              “Showed up same day for an emergency repair. Highly recommend.”
            </p>
            <p className="text-gray-900 font-semibold mt-2">— Aidan Kaiser</p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic">
              “Great communication and solid welding. Will hire again.”
            </p>
            <p className="text-gray-900 font-semibold mt-2">— Renee Chau</p>
          </div>
        </div>
      </section>

    </div>
  );
}
