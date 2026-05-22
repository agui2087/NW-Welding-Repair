import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-100 text-gray-900">

        {/* HEADER */}
        <header className="w-full bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Company Name */}
            <Link
              href="/"
              className="text-xl font-bold text-red-600 hover:text-red-700 transition"
            >
              NW Welding Repair
            </Link>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
          {children}
        </main>

      </body>
    </html>
  );
}