export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-20">

      {/* PAGE TITLE */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Contact NW Welding Repair
        </h1>

        <p className="text-gray-600 text-lg">
          Send us a message and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* CONTACT INFO CARD */}
      <div className="bg-white border p-6 rounded-lg shadow-sm space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>

        <p className="text-gray-600">
          <span className="font-semibold text-gray-900">Phone:</span> (971) 217‑5616  
          <br />
          <span className="font-semibold text-gray-900">Email:</span> Erikeo@northwestweldrepair.com
        </p>

        <p className="text-gray-600 text-sm">
          Business Hours: 7am – 5pm (Closed Sundays)
        </p>
      </div>

      {/* CONTACT FORM */}
      <form
        action="https://formspree.io/f/mdajzqwd"
        method="POST"
        className="space-y-6 bg-white p-6 border rounded-lg shadow-sm"
      >

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            name="fullName"
            type="text"
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="(971) 217‑5616"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            What do you need help with?
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Describe your project or repair..."
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}
