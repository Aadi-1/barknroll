"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import { CheckCircle, Phone, Shield, Star } from "lucide-react";

// Optional: set your public phone number here to enable the Call button.
// Example:
//   const PHONE = "8054049981"; // no dashes/spaces, just digits
const PHONE = "8054049981";

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
      {/* Decorative Pawprint Background (desktop only) */}
      <Image
        src="/pawprintbackground.svg"
        alt="Paw Print"
        width={450}
        height={50}
        className="hidden md:block absolute top-10 left-8 opacity-30 rotate-6 pointer-events-none select-none"
        priority
      />

      {/* HERO – message match + primary CTA above the fold */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 pt-10 pb-8">
        <div className="text-center">
          <Image
            src="/bnrlogoborder.svg"
            alt="Bark n' Roll Logo"
            width={160}
            height={90}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2d4a35] font-extrabold leading-tight">
            Trusted Dog Walking & Pet Sitting in Simi Valley
          </h1>
          {/* Trust badges */}
          <div className="mt-5 text-lg flex flex-wrap items-center justify-center gap-4 text-[#2d4a35]/80">
            <span className="inline-flex items-center gap-2">
              <Shield className="w-6 h-6" /> Fully insured
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="w-6 h-6" /> Background-checked
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="w-6 h-6" /> Pet CPR/First‑Aid Certified
            </span>
          </div>

          {/* Social proof row */}
          {/* Social-proof row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            {/* ...your other badges... */}

            {/* Stars + caption (two lines, same div, white background) */}
            <div className="inline-flex flex-col items-center text-center bg-white px-4 py-2 rounded-lg shadow border">
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-500 text-xl leading-none"
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="mt-1 text-sm md:text-base font-medium text-green-800">
                5-star service loved by local pet parents
              </span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-6 hidden md:flex items-center justify-center gap-3">
            <Link
              href="/contact"
              onClick={handleBookClick}
              aria-label="Book a free meet and greet"
              className="inline-block w-full sm:w-auto text-center bg-[#4a7c59] hover:bg-[#3d694b] text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg transition"
            >
              Book a Free Meet & Greet
            </Link>
            {!!PHONE && (
              <a
                href={`tel:+1${PHONE}`}
                onClick={handleCallClick}
                aria-label="Call now"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-[#2d4a35] bg-white border border-[#4a7c59]/40 px-5 py-3 rounded-full text-base font-semibold shadow-sm hover:shadow transition"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            )}
          </div>
        </div>
      </section>

      {/* BENEFITS – concise & scannable */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            "Walks and Sits starting at 30‑min up to 90-min",
            "Photo & text update after every visit",
            "Flexible scheduling — no long‑term contracts",
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

      {/* PACKAGE – only the 3‑walk deal, now 10% off ($67.50) */}
      <section id="deals" className="relative z-10 max-w-5xl mx-auto px-5 pb-2">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-[#4a7c59] shadow-xl">
          <h2 className="text-2xl sm:text-3xl text-center text-[#2d4a35] font-extrabold mb-6">
            New Client Starter Deal
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="w-full sm:w-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border-2 border-[#4a7c59] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4a7c59] to-[#6b9c7a]"></div>
              <h3 className="text-lg text-[#4a7c59] font-bold mb-2">
                3 Walks or Sits (30 min)
              </h3>
              <div className="inline-flex items-baseline justify-center gap-2 mb-1">
                <span className="text-4xl text-[#2d4a35] font-extrabold">
                  $67
                </span>
                <span className="text-lg text-red-800 line-through opacity-60">
                  $75
                </span>
              </div>
              <div className="text-lg text-[#2d4a35]/80 mb-4">10% off!!</div>
              <p className="text-gray-700 text-sm leading-snug">
                Perfect for trying us out — great value for new clients!
              </p>
              <div className="mt-5">
                <Link
                  href="/contact"
                  onClick={handleBookClick}
                  className="inline-block bg-[#4a7c59] hover:bg-[#3d694b] text-white px-6 py-3 rounded-full text-base font-bold shadow-md transition"
                >
                  Claim This Deal Now!
                </Link>
              </div>
            </div>
            <div className="text-center sm:text-left text-[#2d4a35]/90 max-w-md">
              <ul className="space-y-2 text-sm">
                <li>• New customers only</li>
                <li>• Redeem all walks within 60 days</li>
                <li>
                  • Walks can be exchanged for equivalent pet‑sitting time
                </li>
              </ul>
              <p className="mt-3 text-xs text-[#2d4a35]/70">
                No long commitments required. Simple, transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES – concise cards */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 pt-6 pb-2">
        <h2 className="text-xl sm:text-2xl text-[#2d4a35] font-extrabold mb-4 text-center">
          What We Do
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
              title: "In‑Home Pet Sitting",
              desc: "Stress‑free care in your home while you’re away.",
              img: "/dogwalk2.svg",
              alt: "Pet Sitting",
            },
            {
              title: "Bed n’ Breakfast",
              desc: "Evening & morning check‑ins for maximum comfort.",
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

      {/* TESTIMONIALS – social proof near CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 pt-6 pb-4">
        <div className="bg-white rounded-3xl p-6 border-2 border-[#4a7c59]/50 shadow">
          <h2 className="text-xl sm:text-2xl text-[#2d4a35] font-extrabold mb-4 text-center">
            Why Pet Parents Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
          <div className="mt-5 text-center">
            <Link
              href="/contact"
              onClick={handleBookClick}
              className="inline-block bg-[#4a7c59] hover:bg-[#3d694b] text-white px-6 py-3 rounded-full text-base font-bold shadow-md transition"
            >
              Book Your Free Meet & Greet
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ – handles common objections */}
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
              q: "Do you offer meet‑and‑greet before starting?",
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

      {/* STICKY MOBILE CTA – always one tap away */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 border-t border-[#4a7c59]/30 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2">
          <Link
            href="/contact"
            onClick={handleBookClick}
            className="flex-1 text-center bg-[#4a7c59] hover:bg-[#3d694b] text-white px-4 py-3 rounded-full text-base font-bold shadow-md transition"
          >
            Book a Free Meet & Greet
          </Link>
          {!!PHONE && (
            <a
              href={`tel:+1${PHONE}`}
              onClick={handleCallClick}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-[#4a7c59]/40 text-[#2d4a35] bg-white font-semibold shadow-sm"
              aria-label="Call now"
            >
              <Phone className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
