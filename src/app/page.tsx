"use client";
import Image from "next/image";
import { Dancing_Script, Lora } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import PetCarousel from "./components/carousel";
import NavBar from "./components/navbar";
import Script from "next/script";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

const lora = Lora({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="w-full overflow-x-hidden font-serif">
      <NavBar />
      <div>
        {/* HERO – compact height, darker greens, mobile image under logo */}
        <section className="relative w-full min-h-[72vh] flex flex-col items-center border-b border-black bg-gradient-to-br from-[#f5f0e8] to-[#e8ddd0]">
          {/* Decorative pawprint moved to bottom-right on desktop */}
          <Image
            src="/pawprintbackground.svg"
            alt="Paw Print"
            width={420}
            height={60}
            loading="lazy"
            className="hidden md:block absolute bottom-6 right-6 opacity-25 rotate-12"
          />

          <div className="w-full max-w-6xl px-5 pt-6 md:pt-10 grid md:grid-cols-[1.1fr_0.9fr] items-center gap-5 md:gap-8">
            {/* LEFT: logo + headline + tagline + buttons */}
            <div className="order-2 md:order-1 md:pl-6 lg:pl-10">
              {/* Use same name logo as landing page */}
              <Image
                src="/bnbNamelogo2.png"
                alt="Bark n’ Roll Pet Care brand wordmark"
                width={340}
                height={130}
                loading="eager"
                className="mx-auto md:mx-0 w-56 sm:w-64 md:w-80 lg:w-[340px] h-auto"
              />

              {/* Mobile hero image (under logo like landing) */}
              <div className="md:hidden mt-3">
                <div className="relative w-full max-w-[440px] mx-auto rounded-2xl overflow-hidden shadow">
                  <div className="relative w-full h-48 sm:h-56">
                    <Image
                      src="/dogwalkingstock.jpg"
                      alt="Dog enjoying a walk"
                      fill
                      fetchPriority="high"
                      priority
                      sizes="(max-width: 767px) 440px, 0px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Headline (darker green) */}
              <h1 className="mt-3 md:mt-2 text-[#245c48] font-extrabold leading-tight text-[28px] sm:text-3xl md:text-4xl text-center md:text-left">
                <span className="block">
                  Trusted, Loving{" "}
                  <span className="inline md:hidden">
                    <br />
                  </span>
                  <span className="text-[#245c48]">Pet Sitting</span> & Dog
                  Walking
                </span>
                <span className="block">in Simi Valley</span>
              </h1>

              {/* Subcopy (darker green, larger) */}
              <p className="mt-3 text-lg sm:text-xl md:text-2xl text-[#245c48]/90 max-w-2xl text-center md:text-left font-medium">
                Because your furry family deserves the best care—even when you
                can’t be there.
              </p>

              {/* Buttons (keep original look, one line on desktop) */}
              <div className="flex flex-col sm:flex-row sm:flex-nowrap items-center justify-center md:justify-start gap-3 pt-8">
                <Link href="/contact">
                  <span className="inline-block bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors text-center">
                    New Client?{" "}
                    <span className="underline underline-offset-4">
                      Book a Meet-and-Greet
                    </span>
                  </span>
                </Link>
                <a
                  href="https://0523barknroll.petsoftware.net/clientportal/login?goto=https://0523barknroll.petsoftware.net/clientportal/schedule.owl"
                  target="_blank"
                >
                  <span className="inline-block bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors text-center">
                    Returning Client?{" "}
                    <span className="underline underline-offset-4">Log In</span>
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT: hero image (bigger on desktop) */}
            <div className="order-1 md:order-2 w-full hidden md:block md:justify-self-end">
              <div className="relative mx-auto md:mx-0 w-full max-w-[420px] rounded-3xl overflow-hidden shadow-xl">
                <div className="relative w-full h-[430px]">
                  <Image
                    src="/dogwalkingstock.jpg"
                    alt="Happy dog on a walk with Bark n’ Roll"
                    fill
                    fetchPriority="high"
                    priority
                    sizes="(max-width: 767px) 0px, 420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clean, crisp fade between hero and services (line removed) */}
        <div aria-hidden="true" className="relative -mt-px w-full">
          <div className="h-8 sm:h-12 bg-gradient-to-b from-[#e8ddd0] via-[#f1ebe3] to-white" />
        </div>

        {/* SERVICES HOME */}
        <section
          id="servicesHome"
          className="bg-white flex flex-col items-center py-10 border-b border-black"
        >
          <h2 className="text-3xl text-green-800 pt-10 ">
            Our Services
            <div className="mx-auto mt-2 h-0.5 w-3/4 bg-yellow-500"></div>
          </h2>
          <p className="text-lg text-green-800 mt-4 text-center md:text-left">
            Every service comes with a{" "}
            <span className="font-semibold">written update </span> and{" "}
            <span className="font-semibold">photos</span>!
          </p>
          <div className="flex flex-col md:flex-row gap-6 py-10 items-start">
            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-800 bg-white shadow-sm p-4">
              <Image
                src="/dogwalk4.svg"
                width={80}
                height={100}
                alt="Dog-Walking"
                loading="lazy"
                className="mx-auto mb-3"
              />
              <h3 className="text-green-800 mb-4 text-xl">Dog Walking</h3>
              <p className="text-green-800 text-md leading-normal text-justify w-full">
                <span className="block text-center font-semibold">
                  Pressed for time?
                </span>
                <br />
                <span className={`${lora.className} block text-center text-xl`}>
                  Our 30, 45, or 60‐minute walks give your pup the exercise,
                  fun, and focus they crave.
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-800 bg-white shadow-sm p-4">
              <Image
                src="/dogwalk2.svg"
                width={80}
                height={100}
                alt="Pet-Sitting"
                loading="lazy"
                className="mx-auto mb-3"
              />
              <h3 className="text-green-800 mb-4 text-xl">Pet Sitting</h3>
              <p className="text-green-800 text-md leading-normal text-justify w-full">
                <span className="block text-center font-semibold">
                  Busy day ahead?
                </span>
                <br />
                <span className={`${lora.className} block text-center text-xl`}>
                  Our 30, 45, or 60‐minute check‐ins include feeding and
                  playtime, keeping your furry friend relaxed and secure.
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-800 bg-white shadow-sm p-4">
              <Image
                src="/bednbreak.svg"
                width={80}
                height={100}
                alt="overnights-img"
                loading="lazy"
                className="mx-auto mb-3"
              />
              <h3 className="text-green-800 mb-4 text-xl">
                Bed n&apos; Breakfast
              </h3>
              <p className="text-green-800 text-md leading-normal text-justify w-full">
                <span className="block text-center font-semibold">
                  Going away for a night?
                </span>
                <br />
                <span className={`${lora.className} block text-center text-xl`}>
                  Our BnB service includes a 2 hour evening visit and a 1 hour
                  morning visit. <br />
                  <span className="text-xs font-semibold">
                    *OVERNIGHTS are Special Request Only*
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-2 text-green-800">
              For more information on Full Pricing & Details on our Services{" "}
            </p>
            <Link href="/services">
              <span className="inline-block bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-800 transition-colors">
                Learn More
              </span>
            </Link>
          </div>
        </section>

        <PetCarousel />

        <section className="bg-orange-100 px-8 py-6 border-b border-black">
          <h2 className="text-2xl text-center font-semibold text-green-800 mb-4">
            Our Insurance Partners
            <div className="mx-auto mt-2 h-0.5 w-1/6 bg-yellow-500"></div>
          </h2>

          <p className="text-center text-green-800 mb-6">
            We are{" "}
            <span className="font-semibold underline underline-offset-4">
              fully insured
            </span>{" "}
            and{" "}
            <span className="font-semibold underline underline-offset-4">
              Pet CPR Certified
            </span>{" "}
            through these trusted providers.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Image
              src="/petsitterinsurance.svg"
              alt="Insurance 1"
              width={120}
              height={80}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/petsitterplus.svg"
              alt="Insurance 2"
              width={120}
              height={80}
              loading="lazy"
              className="object-contain"
            />
            <Image
              src="/petcpr.svg"
              alt="Insurance 3"
              width={120}
              height={80}
              loading="lazy"
              className="object-contain"
            />
          </div>
        </section>

        <section
          id="lastCTA"
          className="bg-white flex flex-col items-center py-10 border-b border-black"
        >
          <h2 className="text-green-800 text-xl font-semibold">
            Ready to book?
          </h2>
          <Link href="/contact" className="pt-8">
            <span className="inline-block bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              <span className="underline underline-offset-4">
                Book a Meet-and-Greet
              </span>
            </span>
          </Link>
        </section>
      </div>

      {/* Sticky CTA (bottom-right) — matches landing page button style */}
      <Link
        href="/contact"
        aria-label="Book a free meet and greet"
        className="fixed bottom-4 right-4 z-40 bg-[#4a7c59] hover:bg-[#3d694b] text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-md transition"
      >
        Book a Free Meet &amp; Greet
      </Link>
    </main>
  );
}
