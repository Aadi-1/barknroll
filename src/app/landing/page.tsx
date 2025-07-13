"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function LandingCustom() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="scroll-smooth relative overflow-x-hidden min-h-screen bg-gradient-to-br from-[#f5f0e8] to-[#e8ddd0] font-serif">
      {/* Decorative Pawprint Background */}
      <Image
        src="/pawprintbackground.svg"
        alt="Paw Print"
        width={450}
        height={50}
        className="hidden sm:block absolute top-10 left-8 opacity-30 rotate-6"
      />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <Image
            src="/bnrlogoborder.svg"
            alt="Bark n' Roll Logo"
            width={200}
            height={112}
            className="mx-auto mb-6"
          />
          <h1 className="text-5xl text-[#4a7c59] italic mb-2">
            Bark n' Roll Pet Care
          </h1>
          <p className="text-lg font-bold text-[#2d4a35] mb-10">
            Pet Sitting, Dog Walking &amp; More in the Simi Valley Area!
          </p>
          <div className="text-center mb-12">
            <Link
              href="#deals"
              className="inline-block bg-[#4a7c59] text-white px-6 py-3 rounded-lg font-semibold animate-bounce hover:bg-[#3b6652] transition"
            >
              VIEW OUR DEALS
            </Link>
          </div>
        </header>

        {/* Services */}
        <section className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="bg-white rounded-2xl p-4 border-4 border-[#4a7c59] shadow-md w-72 hover:shadow-lg transition flex flex-col">
            <Image
              src="/dogwalk4.svg"
              alt="Dog Walking"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl text-[#4a7c59] font-semibold mb-2 text-center">
              Expert Dog Walking
            </h3>
            <p className="text-gray-600 text-md text-center leading-relaxed flex-grow">
              We give your pup daily walks that fit their energy and style.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border-4 border-[#4a7c59] shadow-md w-72 hover:shadow-lg transition flex flex-col">
            <Image
              src="/dogwalk2.svg"
              alt="Pet Sitting"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl text-[#4a7c59] font-semibold mb-2 text-center">
              Pet Sitting Services
            </h3>
            <p className="text-gray-600 text-md text-center leading-relaxed flex-grow">
              We care for your pet at home, just like you would.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border-4 border-[#4a7c59] shadow-md w-72 hover:shadow-lg transition flex flex-col">
            <Image
              src="/bednbreak.svg"
              alt="Bed n Breakfast"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl text-[#4a7c59] font-semibold mb-2 text-center">
              Bed n' Breakfast
            </h3>
            <p className="text-gray-600 text-md text-center leading-relaxed flex-grow">
              We visit your pet at night and in the morning so they feel happy.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="deals"
          className="bg-white rounded-3xl p-10 border-4 border-[#4a7c59] shadow-xl mb-16"
        >
          <h2 className="text-4xl text-[#4a7c59] font-bold text-center mb-8">
            Our Package Deals!
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* Starter Pack */}
            <div className="w-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border-2 border-[#4a7c59] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9c7a]"></div>
              <h3 className="text-2xl text-[#4a7c59] font-bold mb-2">
                Starter Pack
              </h3>
              <div className="flex items-baseline justify-center space-x-2 mb-1">
                <span className="text-3xl text-[#2d4a35] font-bold">$69</span>
                <span className="text-xl text-red-800 line-through opacity-60">
                  $75
                </span>
              </div>
              <div className="text-sm text-gray-700 mb-4">($23 per walk)</div>
              <p className="text-gray-600 text-sm leading-snug">
                <strong className="text-xl">3 Walks</strong>
                <br />
                Perfect for trying our services!
              </p>
            </div>

            {/* Popular Pack */}
            <div className="w-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border-2 border-[#4a7c59] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9c7a]"></div>
              <h3 className="text-2xl text-[#4a7c59] font-bold mb-2">
                Popular Pack
              </h3>
              <div className="flex items-baseline justify-center space-x-2 mb-1">
                <span className="text-3xl text-[#2d4a35] font-bold">$110</span>
                <span className="text-xl text-red-800 line-through opacity-60">
                  $125
                </span>
              </div>
              <div className="text-sm text-gray-700 mb-4">($22 per walk)</div>
              <p className="text-gray-600 text-sm leading-snug">
                <strong className="text-xl">5 Walks</strong>
                <br />
                Most popular choice!
              </p>
            </div>

            {/* Rock Star Pack */}
            <div className="w-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border-2 border-[#4a7c59] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9c7a]"></div>
              <h3 className="text-2xl text-[#4a7c59] font-bold mb-2">
                Rock Star Pack
              </h3>
              <div className="flex items-baseline justify-center space-x-2 mb-1">
                <span className="text-3xl text-[#2d4a35] font-bold">$200</span>
                <span className="text-xl text-red-800 line-through opacity-60">
                  $250
                </span>
              </div>
              <div className="text-sm text-gray-700 mb-4">($20 per walk)</div>
              <p className="text-gray-600 text-sm leading-snug">
                <strong className="text-xl">10 Walks</strong>
                <br />
                Maximum savings!
              </p>
            </div>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg border-l-4 border-[#4a7c59] font-semibold text-[#2d4a35] text-center">
            All packages must be redeemed within 60 days
            <br />
            Walks can be exchanged for pet sitting services!
            <br />
            <span className="text-xl mt-2">
              Package Deals Only For NEW CUSTOMERS!
            </span>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-br from-[#4a7c59] to-[#6b9c7a] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition"
            >
              Book Your Meet &amp; Greet!
            </Link>
          </div>
        </section>

        {/* CTA */}
      </div>
    </main>
  );
}
