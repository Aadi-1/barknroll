"use client";

import { Dancing_Script } from "next/font/google";
import NavBar from "../components/navbar";
// If your NavBar/Header is rendered globally from layout.tsx, you don't need this:
// import NavBar from "@/components/NavBar";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function ThankYou() {
  return (
    <main className="w-full overflow-x-hidden bg-[#fff5e6] text-[#006400]">
      {/* Uncomment only if you DON'T render a header/nav globally */}
      <NavBar />

      {/* Hero / Thank You */}
      <section className="py-16 px-4 text-center">
        <h1
          className={`${dancingScript.className} text-6xl md:text-8xl text-green-800 mb-4`}
        >
          Thank you!
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We’ve received your message and will get back to you shortly.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
          <div className="mx-auto mt-2 h-0.5 w-1/4 bg-yellow-500"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Item 1 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Are you insured?</h3>
            <p className="leading-relaxed">
              Yes! All of our staff members are fully insured and have undergone
              thorough background checks. We&apos;re also certified in pet first
              aid.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              How do I pay for services?
            </h3>
            <p className="leading-relaxed">
              We accept various payment methods including credit/debit cards,
              Venmo/Zelle, and payment through the client portal. Payment is
              typically due at the time of booking.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Do you offer services on holidays?
            </h3>
            <p className="leading-relaxed">
              Yes, we provide pet care 365 days a year, including holidays with
              a 10% additional fee. Please book early as these dates fill up
              quickly!
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              What happens during the initial consultation?
            </h3>
            <p className="leading-relaxed">
              We&apos;ll meet you and your pet, discuss routines and special
              needs, and review service options. We also confirm home entry
              instructions and address any questions you have.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
