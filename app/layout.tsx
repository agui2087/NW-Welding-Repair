import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NW Welding Repair",
  description: "NW Welding Repair website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-100 text-gray-900">
        <Header />

        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        <footer className="w-full bg-white border-t py-10 mt-10">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-3">

            <p className="text-gray-900 font-semibold text-lg">
              Erik Elias Ortega
            </p>

            <a
              href="mailto:northwestweldrepair@gmail.com"
              className="text-red-600 hover:underline font-medium"
            >
              northwestweldrepair@gmail.com
            </a>

            <a
              href="tel:19712175616"
              className="block text-gray-800 font-medium"
            >
              (971) 217‑5616
            </a>

            <p className="text-gray-700 font-medium">
              Sherwood, OR
            </p>

            <p className="text-gray-700 font-medium">
              Hours: 7am–5pm (Mon–Sat) • 24/7 Emergency Welding
            </p>

            <a
              href="https://www.instagram.com/nw_weldrepair?igsh=ODVhZHBhbGF6bTd6"
              target="_blank"
              className="flex justify-center items-center gap-2 text-red-600 font-semibold hover:underline mx-auto w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
              Instagram
            </a>

          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
