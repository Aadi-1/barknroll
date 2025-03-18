"use client";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { useEffect } from "react";
import { useState } from "react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700", // Adjust weight as needed
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
              bottom-20
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
              alt="Bark n' Roll Logo"
              className="mx-auto "
            />
          </div>
          <div className="flex">
            <h1
              className={`${dancingScript.className} text-5xl text-green-700 font-weight:100 logo hidden md:block`}
            >
              For all your furry, feathered, and finned friends’ needs!{" "}
            </h1>
          </div>
          <div className="flex ">
            <h1 className="text-green-700 pt-8 text-2xl italic ">
              Pet Sitting, Dog Walking & More in the Simi Valley Area!
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md-justify-center gap-4 pt-10 ">
            <a href="/contact">
              <span className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                New Client?{" "}
                <span className="underline underline-offset-4">
                  Book a Meet-and-Greet
                </span>
              </span>
            </a>
            <a
              href="https://0523barknroll.petsoftware.net/clientportal/login?goto=https://0523barknroll.petsoftware.net/clientportal/schedule.owl"
              target="_blank"
            >
              <span className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Returning Client?{" "}
                <span className="underline underline-offset-4">Log In</span>
              </span>
            </a>
          </div>
        </section>
        <section
          id="servicesHome"
          className="bg-white flex flex-col  items-center py-10"
        >
          <h1 className="text-3xl text-green-800 pt-10 ">
            Our Services
            <div className="mx-auto mt-2 h-0.5 w-3/4 bg-yellow-500"></div>
          </h1>
          <div className="flex flex-col md:flex-row gap-6 py-10 items-start">
            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-700 bg-white shadow-sm p-4">
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
                <span className="block text-center text-xl ">
                  Our 30, 45, or 60‐minute walks give your pup the exercise,
                  fun, and focus they crave.
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-700 bg-white shadow-sm p-4">
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
                <span className="block text-center text-xl ">
                  Our 30, 45, or 60‐minute check‐ins include feeding and
                  playtime, keeping your furry friend relaxed and secure.
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-70 h-90 rounded-lg border-2 border-green-700 bg-white shadow-sm p-4">
              <Image
                src="/overnights1.svg" // image from public folder
                width={80}
                height={100}
                alt="Dog-Walking"
                className="mx-auto mb-3"
              />
              <h3 className="text-green-800 mb-4 text-xl">Overnights</h3>
              <p className="text-green-800 text-md leading-normal text-justify w-full">
                <span className="block text-center font-semibold">
                  Going away for a night?
                </span>
                <br />
                <span className="block text-center text-xl">
                  We’ll keep your pet comfy and content with bedtime check‐ins
                  and early‐morning walks.
                </span>
              </p>
            </div>
          </div>
          <div>
            <a href="/services">
              <span className="inline-block bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-800 transition-colors">
                Learn More
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
