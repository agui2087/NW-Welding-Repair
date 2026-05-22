export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">

      <h1 className="text-3xl font-bold text-gray-900">
        Contact NW Welding Repair
      </h1>

      <p className="text-gray-600">
        Send us a message and we’ll get back to you as soon as possible.
      </p>

      <form className="space-y-6 bg-white p-6 border rounded-lg shadow-sm">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            What do you need help with?
          </label>
          <textarea
            rows={5}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Describe your project or repair..."
          />
        </div>

        <button
          type="button"
          className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}