import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700", // Adjust weight as needed
});

export const metadata: Metadata = {
  title: "Bark n' Roll Pet Care",
  description: "Best pet care service in town!",
  icons: {
    icon: "/favicon.ico",
  },
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
        <div className="bg-gradient-to-l from-green-100 to-white text-green-800 shadow-lg border-b">
          <nav className="flex items-center justify-between px-8 py-4 ">
            <div className="flex items-center gap-3">
              <a href="/">
                <h1
                  className={`${dancingScript.className} text-3xl font-bold logo hidden md:block`}
                >
                  Bark n' Roll Pet Care
                </h1>
              </a>
            </div>
            {/* Navigation Links */}
            <div className="flex gap-6 text-lg font-medium ">
              <a href="/" className="underline decoration-2 underline-offset-3">
                Home
              </a>

              <a
                href="/services"
                className="underline decoration-2 underline-offset-3"
              >
                Services
              </a>
              <a
                href="/about"
                className="underline decoration-2 underline-offset-3"
              >
                About Us
              </a>

              <a
                href="/contact"
                className="underline decoration-2 underline-offset-3"
              >
                Contact Us/FAQ
              </a>
            </div>
          </nav>
        </div>

        {/* Render Page Content */}
        {children}
        <Analytics />
      </body>
      <footer className="bg-black text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-center md:text-left">
            © 2025 Bark n' Roll Pet Care – All Rights Reserved
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="...">
              <Image
                src="/fblogo2.png"
                alt="Facebook"
                width={35}
                height={250}
                className="pt-1"
              />
            </a>
            <a href="#" aria-label="Instagram" className="...">
              <Image
                src="/instalogo.png"
                alt="Instagram"
                width={50}
                height={250}
                className=""
              />
            </a>
          </div>
          <div className="text-sm text-center md:text-right flex flex-col md:flex-row items-center gap-2">
            <a href="tel:8044049981" className="hover:underline">
              804-404-9981
            </a>
            <span className="hidden md:inline-block mx-2">|</span>
            <a
              href="mailto:barknrollpetcare@gmail.com"
              className="hover:underline"
            >
              barknrollpetcare@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </html>
  );
}
