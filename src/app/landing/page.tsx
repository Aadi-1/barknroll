"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import { CheckCircle, Phone, Shield, Star } from "lucide-react";
import { Dancing_Script } from "next/font/google";

// Optional: set your public phone number here to enable the Call button.
// Example:
//   const PHONE = "8054049981"; // no dashes/spaces, just digits
const PHONE = "8054049981";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function LandingCustom() {
  const router = useRouter();
  const pathname = usePathname();
  const navigatingRef = useRef(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const track = (name: string, extra: Record<string, any> = {}) => {
    const params = {
      source_page: pathname || "/landing",
      ...extra,
    };
    sendGAEvent("event", name, params);
    sendGTMEvent({ event: name, ...params });
  };

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (navigatingRef.current) return;
    navigatingRef.current = true;
    track("book_appt_click", {
      cta_location: "hero_or_sticky",
      cta_text: "Book Free Meet & Greet",
    });
    setTimeout(() => router.push("/contact"), 250);
  };

  const handleCallClick = () => {
    track("call_click", { cta_location: "sticky", cta_text: "Call Now" });
  };

  return (
    <main className="scroll-smooth relative overflow-x-hidden min-h-screen bg-gradient-to-br from-[#f5f0e8] to-[#e8ddd0] font-serif">
      {/* ABOVE THE FOLD */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 pt-6 md:pt-8">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 items-center">
          {/* Right column image (desktop only) */}
          <div className="order-1 md:order-2 md:justify-self-end w-full hidden md:block">
            <div className="relative mx-auto md:mx-0 w-full max-w-[360px] rounded-3xl overflow-hidden shadow-xl">
              <div className="relative w-full h-[380px]">
                <Image
                  src="/dogwalkingstock.jpg"
                  alt="Happy dog on a walk with Bark n’ Roll"
                  fill
                  className="object-cover"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 767px) 0px, 360px" // 0 on mobile so it’s not chosen
                />
              </div>
            </div>
          </div>

          {/* Left column */}
          <div className="order-2 md:order-1">
            {/* New logo with a little breathing room on all viewports */}
            <div className="py-2 sm:py-3">
              <Image
                src="/bnbNamelogo2.png"
                alt="Bark n’ Roll Pet Care brand wordmark"
                width={340}
                height={130}
                className="mx-auto md:mx-0 w-60 sm:w-72 md:w-80 lg:w-[340px] h-auto"
                priority
              />
            </div>

            {/* Mobile hero image (small, balanced) */}
            <div className="md:hidden mt-3">
              <div className="relative w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden shadow">
                <div className="relative w-full h-40 sm:h-44">
                  <Image
                    src="/dogwalkingstock.jpg"
                    alt="Dog enjoying a walk"
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 767px) 420px, 0px" // 0 on desktop
                  />
                </div>
              </div>
            </div>

            <h1 className="mt-2 md:mt-1 text-[#2d4a35] font-extrabold leading-tight text-[28px] sm:text-4xl md:text-5xl text-center md:text-left">
              <span className="block">
                Trusted, Loving{" "}
                <span className="inline md:hidden">
                  <br />
                </span>
                <span className="text-[#2d6b59]">Pet Sitting</span> & Dog
                Walking
              </span>
              <span className="block">in Simi Valley</span>
            </h1>

            {/* Trust row */}
            <div className="mt-3 md:mt-4 flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-3 text-[#2d4a35]/90">
              <span className="inline-flex items-center gap-2 text-[16px] sm:text-xl font-semibold">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7" /> Fully insured
              </span>
              <span className="inline-flex items-center gap-2 text-[16px] sm:text-xl font-semibold">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />{" "}
                Background-checked
              </span>
              <span className="inline-flex items-center gap-2 text-[16px] sm:text-xl font-semibold">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" /> Pet
                CPR/First-Aid Certified
              </span>
            </div>

            <p className="mt-3 md:mt-4 text-lg sm:text-2xl md:text-2xl text-[#2d4a35]/90 max-w-2xl text-center md:text-left font-medium">
              Because your furry family deserves the best care—even when you
              can’t be there.
            </p>

            {/* Desktop CTAs (mobile uses sticky bar) */}
            <div className="mt-5 hidden md:flex items-center gap-3 justify-start">
              <Link
                href="/contact"
                onClick={handleBookClick}
                aria-label="Book a free meet and greet"
                className="inline-block text-center bg-[#4a7c59] hover:bg-[#3d694b] text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg transition"
              >
                Book a Free Meet & Greet
              </Link>
              {!!PHONE && (
                <a
                  href={`tel:+1${PHONE}`}
                  onClick={handleCallClick}
                  aria-label="Call now"
                  className="inline-flex items-center justify-center gap-2 text-[#2d4a35] bg-white border border-[#4a7c59]/40 px-5 py-3 rounded-full text-base font-semibold shadow-sm hover:shadow transition"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Two separate boxes: Deal (left) and Testimonials (right) */}
        <div className="mt-7 md:mt-9 grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Deal box */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border-4 border-[#4a7c59] shadow-xl">
            <h2 className="text-2xl sm:text-3xl text-center text-[#2d4a35] font-extrabold mb-5">
              Try the New Client Deal!!
            </h2>
            <div className="w-full sm:w-96 mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border-2 border-[#4a7c59] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9c7a]" />
              <h3 className="text-lg text-[#4a7c59] font-bold mb-2">
                3 Walks or Sits (30 min)
              </h3>
              <div className="inline-flex items-baseline justify-center gap-2 mb-1">
                <span className="text-4xl text-[#2d4a35] font-extrabold">
                  $67
                </span>
                <span className="text-xl text-red-800 line-through opacity-60">
                  $75
                </span>
              </div>
              <div className="text-lg text-[#2d4a35]/80 mb-4">10% off!!</div>
              <p className="text-gray-700 text-sm leading-snug">
                Perfect for trying us out — great value for new clients! Redeem
                within 60 days.
              </p>
              <div className="mt-5">
                <Link
                  href="/contact"
                  onClick={handleBookClick}
                  className="inline-block bg-[#4a7c59] hover:bg-[#3d694b] text-white px-6 py-3 rounded-full text-base font-bold shadow-md transition"
                >
                  Start My Trial
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials box */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border-4 border-[#4a7c59] shadow-xl">
            <h3 className="text-2xl text-[#2d4a35] font-extrabold mb-4 text-center md:text-left">
              Why Pet Parents Choose Us
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  quote:
                    "Bark n’ Roll took amazing care of Luna while we were away. Loved the daily photo updates!",
                  name: "Jane S.",
                },
                {
                  quote:
                    "Reliable and so friendly. Our dog actually waits by the door for their walker!",
                  name: "Marcus T.",
                },
                {
                  quote:
                    "Super easy to book a meet & greet. We felt at ease from day one.",
                  name: "Ana G.",
                },
              ].map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-[#4a7c59]/30 p-4 bg-gray-50"
                >
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#f5a524] fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-[#2d4a35] text-sm">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-[#2d4a35]/70">
                    — {t.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pt-10 relative z-10 max-w-5xl mx-auto px-5 pb-6">
        <h2 className="text-2xl sm:text-2xl text-[#2d4a35] font-extrabold mb-4 text-center">
          What's Included?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            "Walks and Sits starting at 30-min up to 90-min",
            "Photo & text update after every visit",
            "Flexible scheduling — no long-term contracts",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-4 border-2 border-[#4a7c59]/50 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-0.5 text-[#4a7c59]" />
                <p className="text-[#2d4a35]">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 pt-6 pb-2">
        <h2 className="text-2xl sm:text-2xl text-[#2d4a35] font-extrabold mb-4 text-center">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            {
              title: "Expert Dog Walking",
              desc: "Daily walks matched to your pup’s energy & routine.",
              img: "/dogwalk4.svg",
              alt: "Dog Walking",
            },
            {
              title: "In-Home Pet Sitting",
              desc: "Stress-free care in your home while you’re away.",
              img: "/dogwalk2.svg",
              alt: "Pet Sitting",
            },
            {
              title: "Bed n’ Breakfast",
              desc: "Evening & morning check-ins for maximum comfort.",
              img: "/bednbreak.svg",
              alt: "Bed n Breakfast",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-4 border-4 border-[#4a7c59] shadow-md w-72 hover:shadow-lg transition flex flex-col"
            >
              <Image
                src={card.img}
                alt={card.alt}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg text-[#4a7c59] font-bold mb-2 text-center">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm text-center leading-relaxed flex-grow">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 pt-6 pb-20">
        <h2 className="text-xl sm:text-2xl text-[#2d4a35] font-extrabold mb-4 text-center">
          FAQ
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "How soon will you contact me after I submit the form?",
              a: "We typically respond within a few hours during the day (24 hours max).",
            },
            {
              q: "Do you offer meet-and-greet before starting?",
              a: "Yes — your first meet & greet is free so your pet can get comfortable!",
            },
            {
              q: "What areas do you serve?",
              a: "Simi Valley and nearby neighborhoods. Message us to confirm your location.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-xl bg-white border border-[#4a7c59]/30 p-4"
            >
              <summary className="cursor-pointer list-none text-[#2d4a35] font-semibold">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-[#2d4a35]/90">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 border-t border-[#4a7c59]/30 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="max-w-5xl mx-auto px-3 py-2.5 flex items-center gap-2">
          <Link
            href="/contact"
            onClick={handleBookClick}
            className="basis-2/3 text-center bg-[#4a7c59] hover:bg-[#3d694b] text-white px-3 py-2.5 rounded-full text-sm font-bold shadow-md transition"
          >
            Book a Free Meet & Greet
          </Link>
          {!!PHONE && (
            <a
              href={`tel:+1${PHONE}`}
              onClick={handleCallClick}
              className="basis-1/3 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full border border-[#4a7c59]/40 text-[#2d4a35] bg-white text-sm font-semibold shadow-sm"
              aria-label="Call now"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
