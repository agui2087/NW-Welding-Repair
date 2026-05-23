"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mdajzqwd", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

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

      {/* SUCCESS POPUP */}
      {status === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded relative">
          <strong className="font-bold">Message Sent!</strong>
          <span className="block sm:inline ml-2">
            Thanks for reaching out — we’ll get back to you shortly.
          </span>
        </div>
      )}

      {/* ERROR POPUP */}
      {status === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded relative">
          <strong className="font-bold">Something went wrong.</strong>
          <span className="block sm:inline ml-2">
            Please try again or call us directly.
          </span>
        </div>
      )}

      {/* CONTACT FORM */}
      <form
        onSubmit={handleSubmit}
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
          disabled={status === "loading"}
          className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
}
