import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700", // Adjust weight as needed
});

export default function About() {
  return (
    <main className="bg-[#fff5e6] text-[#006400]">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1
          className={`${dancingScript.className} text-5xl text-green-800 font-weight:100 `}
        >
          Meet Our Pawsome Team
        </h1>
        <p className="text-lg md:text-xl mb-8 pt-5">
          The passionate pet lovers behind Bark n' Roll Pet Care
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-10 relative">
          Our Staff
          <div className="mt-4 mx-auto h-1 w-36 bg-gradient-to-r from-yellow-500 via-[#006400] to-yellow-500"></div>
        </h2>

        {/* Team Member 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/sarah.jpg"
                alt="Jason Berrietter"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Jason Berreitter</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Founder & Head Pet Care Specialist
            </p>
            <p className="mb-4 leading-relaxed">
              Jason founded Bark n' Roll Pet Care in 2020 after 5 years of
              dog-walking experience. Jason is certified in Pet First Aid and
              specializes in senior pet care.
            </p>
            <p className="italic">
              {/* Proud pet parent to: Max (Golden Retriever), Luna (Tabby Cat), and
              Chip (Rabbit) */}
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/marcus.jpg"
                alt="Kaitlin Siple"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Kaitlin Siple</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Pet Care Provider
            </p>
            <p className="mb-4 leading-relaxed">LIMELFMLSINFLSNF</p>
            <p className="italic">Proud pet parent to: .......</p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/maria.jpg"
                alt="Liz Calvaresi"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Liz Calvaresi</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Pet Care Provider
            </p>
            <p className="mb-4 leading-relaxed">linaeflinaeflnaefln</p>
            <p className="italic">Proud pet parent to: ....</p>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/nicole.jpg"
                alt="nicole"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Nicole ...</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Pet Care Provider
            </p>
            <p className="mb-4 leading-relaxed">naeflnaelfinaeflinaeflin.</p>
            <p className="italic">Proud pet parent to: .....</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/erin.jpg"
                alt="Erin Berrietter"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Erin Berreitter</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Part-time Pet Cre Provider
            </p>
            <p className="mb-4 leading-relaxed">kknafkjnekfuneafuknaefu</p>
            <p className="italic">Proud pet parent to: ...</p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-[#f0f8f0] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="mb-4 leading-relaxed text-lg">
            Bark n' Roll Pet Care was born from Jason's dream to create a
            service that treats animals like family, not just clients. What
            began as a solo operation has grown into a trusted team serving the
            Simi Valley area
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            We believe every pet deserves the highest quality care tailored to
            their individual needs. Whether it’s a high-energy dog needing long
            walks or a senior cat requiring special attention, we treat every
            pet with expertise and love.
          </p>
          <p className="mb-8 leading-relaxed text-lg">
            All staff members are fully insured, background-checked, and
            certified in pet first aid. We continuously update our skills to
            provide the best care.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#006400] text-white px-6 py-3 rounded-lg font-bold transition-colors hover:bg-[#004d00]"
          >
            Book Your Consultation Today
          </a>
        </div>
      </section>
    </main>
  );
}
