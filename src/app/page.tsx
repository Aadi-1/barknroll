"use client";
import Image from "next/image";
import { Dancing_Script, Lora } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import PetCarousel from "./components/carousel";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700", // Adjust weight as needed
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
    <main className="w-full overflow-x-hidden">
      <div>
        <section className="relative w-full min-h-[90vh] flex flex-col bg-orange-100  items-center  border-b border-black">
          <Image
            src="/pawprintbackground.svg"
            alt="Paw Print"
            width={450}
            height={50}
            className="
              hidden 
              sm:block 
              absolute 
              top-10 
              left-8 
              opacity-30 
              rotate-6
            "
          />
          <Image
            src="/pawprintbackground.svg"
            alt="Paw Print"
            width={350}
            height={60}
            className="
              hidden 
              md:block 
              absolute 
              top-1/4 
              right-1 
              opacity-20 
              rotate-30
            "
          />
          <Image
            src="/pawprintbackground.svg"
            alt="Paw Print"
            width={275}
            height={40}
            className="
              hidden
              md:block
              absolute
              bottom-0
              left-10
              opacity-30
              -rotate-20
            "
          />
          <div>
            <Image
              src="/bnrlogoborder2.svg" // image from public folder
              width={370}
              height={370}
              alt="Bark n't Roll Logo"
              className="mx-auto "
            />
          </div>
          {/* Tagline (large screen only) */}
          <h1
            className={`${dancingScript.className} hidden md:block text-5xl text-green-800 text-center font-weight:100 logo`}
          >
            For all your furry, feathered, and finned friends’ needs!
          </h1>

          {/* Tagline (small screen) */}
          <h1
            className={`${lora.className} text-green-800 pt-8 text-2xl italic text-center w-full px-4`}
          >
            Pet Sitting, Dog Walking &amp; More in the Simi Valley Area!
          </h1>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-10 w-full md:flex-row">
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
        </section>
        <section
          id="servicesHome"
          className="bg-white flex flex-col  items-center py-10 border-b border-black"
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
          {/* total Class */}
          <div className="flex flex-col md:flex-row gap-6 py-10 items-start">
            {/* Dog Walking */}
            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-800 bg-white shadow-sm p-4">
              <Image
                src="/dogwalk4.svg" // image from public folder
                width={80}
                height={100}
                alt="Dog-Walking"
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
            {/* Pet SItting */}
            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-800 bg-white shadow-sm p-4">
              <Image
                src="/dogwalk2.svg" // image from public folder
                width={80}
                height={100}
                alt="Dog-Walking"
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
            {/* Bed n&apos;t Breakfast */}
            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-800 bg-white shadow-sm p-4">
              <Image
                src="/bednbreak.svg" // image from public folder
                width={80}
                height={100}
                alt="overnights-img"
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
            {/* Example logos (replace with your actual images/paths) */}
            <Image
              src="/petsitterinsurance.svg"
              alt="Insurance 1"
              width={120}
              height={80}
              className="object-contain"
            />
            <Image
              src="/petsitterplus.svg"
              alt="Insurance 2"
              width={120}
              height={80}
              className="object-contain"
            />
            <Image
              src="/petcpr.svg"
              alt="Insurance 3"
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
        </section>
        <section
          id="lastCTA"
          className="bg-white flex flex-col  items-center py-10 border-b border-black"
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
    </main>
  );
}
