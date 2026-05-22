import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">

      {/* HERO */}
      <section className="text-center space-y-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          NW Welding Repair
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Reliable welding, fabrication, and repair services for industrial,
          agricultural, and emergency needs. Built strong. Built fast. Built right.
        </p>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Request a Quote
          </Link>

          <Link
            href="/emergency-repairs"
            className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition"
          >
            Emergency Repair
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <Link href="/emergency-repairs" className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Emergency Repairs</h3>
          <p className="text-gray-600 text-sm">
            Fast response within ~2 hours for urgent welding needs.
          </p>
        </Link>

        <Link href="/fabrication" className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Fabrication</h3>
          <p className="text-gray-600 text-sm">
            Custom metal fabrication built to your exact specifications.
          </p>
        </Link>

        <Link href="/agricultural-industrial" className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">
            Agricultural & Industrial
          </h3>
          <p className="text-gray-600 text-sm">
            Heavy-duty repair and welding for field and industrial equipment.
          </p>
        </Link>

        <Link href="/contact" className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
          <p className="text-gray-600 text-sm">
            Get a quote or talk directly with our team.
          </p>
        </Link>

      </section>

    </div>
  );
}