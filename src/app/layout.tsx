import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700", // Adjust weight as needed
});

export const metadata: Metadata = {
  title: "Bark n' Roll Pet Care",
  description: "Best Dog Walking service in Simi Valley!",
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
        <GoogleTagManager gtmId="GTM-KNBDPQ8X" />
        <Head>
          <title>Bark n' Roll Pet Care | Dog Walking, Pet Sitting & More</title>
          <meta
            name="Bark n' Roll Pet Care"
            content="Bark n' Roll Pet Care offers professional dog walking, pet sitting, and overnight services to keep your furry friends happy and healthy."
          />
        </Head>
        {/* Navbar */}

        {/* Render Page Content */}
        {children}
        <Analytics />
        <footer className="bg-black text-white py-6">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-center md:text-left">
              © 2025 Created By{" "}
              <a href="https://www.clickbuilt.net/" target="_blank">
                {" "}
                ClickBuilt{" "}
              </a>{" "}
              – All Rights Reserved
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
      </body>
    </html>
  );
}
