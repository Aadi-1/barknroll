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
    <main className="w-full">
      <div>
        <section className="w-full min-h-[70vh] flex flex-col bg-orange-100  items-center ">
          <div>
            <Image
              src="/barknroll.png" // image from public folder
              width={350}
              height={350}
              alt="Bark n' Roll Logo"
              className="mx-auto"
            />
          </div>
          <div className="flex">
            <h1
              className={`${dancingScript.className} text-5xl text-green-800 font-weight:100`}
            >
              We let the good times roll, one wag at a time!{" "}
            </h1>
          </div>
          <div className="flex ">
            <h1 className="text-green-800 pt-10 text-xl">
              Professional Dog-Walking Services
            </h1>
          </div>
          <div className="flex flex-row  gap-4 pt-10 ">
            <a href="">
              <span className="text-white border-2 border-black px-4 py-4 rounded-lg bg-green-700">
                Book your Consulation
              </span>
            </a>
            <a href="#servicesHome">
              <span className="text-white border-2 border-black px-4 py-4 rounded-lg bg-green-700">
                Our Services
              </span>
            </a>
          </div>
        </section>
        <section
          id="servicesHome"
          className="bg-white flex flex-col h-[70vh] items-center bg-orange-200"
        >
          <h1 className="text-3xl text-green-800 pt-10 underline underline-offset-5">
            Our Services
          </h1>
          <div></div>
        </section>
      </div>
    </main>
  );
}
