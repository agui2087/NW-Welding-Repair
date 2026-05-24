export default function EmergencyRepairsPage() {
  return (
    <div className="space-y-20">

      {/* HERO BANNER */}
      <section className="bg-white border-b py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Emergency Welding Repairs
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          When equipment breaks unexpectedly, every minute counts. We provide fast, reliable 
          emergency welding services to get you back up and running as quickly as possible.
        </p>

        <p className="text-md text-gray-700 max-w-xl mx-auto mt-3 font-semibold">
          Average response time: <span className="text-red-600 font-bold">~2 hours</span> depending on location.
        </p>
      </section>

      {/* WHAT COUNTS AS AN EMERGENCY — BOXED STYLE */}
      <section className="max-w-5xl mx-auto px-6 space-y-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Counts as an Emergency?</h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          If the situation is stopping your work, creating a safety risk, or causing costly downtime, 
          it qualifies as an emergency. Here are the most common scenarios:
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">Work Stoppage</h3>
            <p className="text-gray-600">
              Breaks or failures that prevent you from continuing your job or completing a task.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">Safety Concerns</h3>
            <p className="text-gray-600">
              Cracked welds, unstable parts, or structural issues that pose a risk to people or equipment.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">Time‑Sensitive Damage</h3>
            <p className="text-gray-600">
              Damage that worsens the longer you wait, increasing repair cost or downtime.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">Costly Downtime</h3>
            <p className="text-gray-600">
              Equipment failures that delay work, slow production, or cost you money every hour.
            </p>
          </div>

        </div>
      </section>

      {/* COMBINED SECTION: WHAT TO EXPECT */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-10">
        <h2 className="text-3xl font-bold text-gray-900">What to Expect During an Emergency Call</h2>

        <div className="space-y-8 text-gray-700 text-lg max-w-2xl mx-auto">

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Before We Arrive</h3>
            <p>
              Turn off equipment, keep the area clear, and take a photo of the damage if possible. 
              This helps us assess the situation quickly and safely.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Availability</h3>
            <p>
              We offer extended emergency availability, including after-hours and weekend response 
              when possible. Travel radius varies based on location and urgency.
            </p>
          </div>

          <p className="text-gray-700 text-lg">
            ✓ We respond as quickly as possible based on distance and current workload.
          </p>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center space-y-4 pb-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900">Need Emergency Welding Right Now?</h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          If your equipment is down or your work has stopped, call immediately. We’ll get to you 
          as fast as possible.
        </p>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <a
            href="tel:19712175616"
            className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition"
          >
            Call for Emergency Repair
          </a>
        </div>
      </section>

    </div>
  );
}
