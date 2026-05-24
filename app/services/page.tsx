export default function ServicesPage() {
  return (
    <div className="space-y-20">

      {/* HERO BANNER */}
      <section className="bg-white border-b py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Welding & Fabrication Services
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          We provide a wide range of services — from repairing farm and agricultural equipment 
          to creating specialized fabricated items built to your exact needs.
        </p>

        <p className="text-md text-gray-700 max-w-xl mx-auto mt-3 font-semibold">
          Fully mobile welding service — we come to you anywhere in the Pacific Northwest.
        </p>
      </section>

      {/* PRICING STRUCTURE */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Pricing & Quotes</h2>

        <p className="text-gray-700 text-lg">
          We offer <strong>free quotes</strong> for all projects. Once work begins, we charge an 
          hourly rate based on the type of welding and materials required. Material costs are added 
          only when needed, and we never charge hidden fees.
        </p>

        <p className="text-gray-700 text-lg">
          This ensures you always know what to expect — fair, transparent pricing for every job.
        </p>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="max-w-5xl mx-auto px-6 space-y-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What We Can Do</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">
              Farm & Agricultural Equipment
            </h3>
            <p className="text-gray-600">
              Repairs for tractors, implements, buckets, blades, frames, and heavy-use farm equipment.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">
              Trailer Repair & Reinforcement
            </h3>
            <p className="text-gray-600">
              Structural repairs, cracked frames, hitch fixes, ramp reinforcement, and custom add‑ons.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">
              Heavy Equipment Welding
            </h3>
            <p className="text-gray-600">
              On‑site welding for construction equipment, loaders, excavators, and industrial machinery.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">
              Custom Fabrication
            </h3>
            <p className="text-gray-600">
              Custom brackets, mounts, guards, frames, gates, and one‑off metal projects built to spec.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">
              Emergency Welding
            </h3>
            <p className="text-gray-600">
              Fast response for urgent repairs — broken equipment, cracked welds, and unexpected failures.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">
              MIG, TIG, Stick, Aluminum & Stainless
            </h3>
            <p className="text-gray-600">
              Skilled welding across multiple processes and metals for any type of repair or fabrication.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-4xl mx-auto px-6 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose NW Welding Repair?</h2>

        <ul className="space-y-3 text-gray-700 text-lg">
          <li>✓ Fully mobile — we come to your farm, job site, or equipment location</li>
          <li>✓ Fast response times for urgent repairs</li>
          <li>✓ Experienced welder with high‑quality workmanship</li>
          <li>✓ Fair, transparent pricing with free quotes</li>
          <li>✓ Locally owned and operated in the Pacific Northwest</li>
        </ul>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center space-y-4 pb-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>

        <p className="text-gray-700 text-lg">
          Whether you need equipment repaired or a custom project built, we’re here to help.
        </p>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <a
            href="https://calendly.com/YOUR-LINK-HERE"
            target="_blank"
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Schedule a Free Quote
          </a>

          <a
            href="tel:19712175616"
            className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition"
          >
            Emergency Repair
          </a>
        </div>
      </section>

    </div>
  );
}
