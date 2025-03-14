import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700", // Adjust weight as needed
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bark n' Roll Pet Care",
  description: "Best pet care service in town!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>Bark n' Roll Pet Care | Dog Walking, Pet Sitting & More</title>
          <meta
            name="Bark n' Roll Pet Care"
            content="Bark n' Roll Pet Care offers professional dog walking, pet sitting, and overnight services to keep your furry friends happy and healthy."
          />
        </Head>
        {/* Navbar */}
        <div className="bg-gradient-to-l from-green-100 to-white text-green-800 shadow-md">
          <nav className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-3">
              <a href="/">
                <h1 className={`${dancingScript.className} text-3xl font-bold`}>
                  Bark n' Roll Pet Care
                </h1>
              </a>
            </div>
            {/* Navigation Links */}
            <div className="flex gap-6 text-lg font-medium ">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/about">About Us</a>

              <a href="/contact">Contact Us/FAQ</a>
            </div>
          </nav>
        </div>

        {/* Render Page Content */}
        {children}
      </body>
    </html>
  );
}
