"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Example images with known width/height, or use your own dimensions
const petImages = [
  { src: "/pet1.png", alt: "Happy Pup 1", width: 800, height: 600 },
  { src: "/pet2.png", alt: "Happy Pup 2", width: 600, height: 450 },
];

export default function PetCarousel() {
  // Embla settings
  const options = { containScroll: false };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 2500 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white py-10 border-b border-black">
      <h2 className="text-2xl text-center font-bold text-green-800 mb-6">
        Our Happy Pets
        <div className="mx-auto mt-2 h-0.5 w-1/10 bg-yellow-500"></div>
      </h2>

      {/* Embla container */}
      <div className="embla">
        <div className="embla__viewport mx-auto max-w-3xl " ref={emblaRef}>
          {/* Container that holds all slides */}
          <div className="embla__container flex">
            {petImages.map((img, index) => (
              <div
                key={index}
                className="embla__slide flex-shrink-0 w-auto p-2 flex justify-center"
              >
                {/* 
                  Use actual width/height so Next.js knows the aspect ratio.
                  'object-contain' ensures the whole image is visible if the container shrinks.
                  'max-w-full' prevents the image from overflowing on smaller screens.
                */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={250}
                  height={250}
                  className="rounded shadow object-contain max-w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-4 gap-4">
          <button
            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
            onClick={scrollPrev}
          >
            &lt;
          </button>
          <button
            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
            onClick={scrollNext}
          >
            &gt;
          </button>
        </div>
      </div>

      <p className="text-center text-green-700 mt-4 pt-3">
        Meet some of the pets we care for!
      </p>
    </section>
  );
}
