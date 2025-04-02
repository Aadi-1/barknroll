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
          The passionate pet lovers behind Bark n&apos; Roll Pet Care
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
          <div className="w-full md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/jason.jpg"
                alt="Jason Berrietter"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Jason Berreitter</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Founder & Head Pet Care Specialist
            </p>
            <p className="mb-4 leading-relaxed">
              Jason founded Bark n&apos; Roll Pet Care in 2020 after 5 years of
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
        <div className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/avatar.svg"
                alt="Kaitlin Pedigo"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Kaitlin Pedigo</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Pet Care Provider
            </p>
            <p className="mb-4 leading-relaxed">
              Kaitlin joined Bark n’ Roll soon after it was founded and brings a
              warm, patient approach to every pet she cares for.
            </p>
            {/* <p className="italic">Proud pet parent to: .......</p> */}
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/liz.jpg"
                alt="Liz Calvaresi"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Liz Calvaresi</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Pet Care Provider
            </p>
            <p className="mb-4 leading-relaxed">
              Liz has been part of our team since 2020, offering gentle,
              attentive service that makes each animal feel at ease.
            </p>
            {/* <p className="italic">Proud pet parent to: ....</p> */}
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/nicole.JPG"
                alt="Nicole Iverson"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Nicole Iverson</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Pet Care Provider
            </p>
            <p className="mb-4 leading-relaxed">
              Nicole’s calm demeanor and love for all creatures ensure pets of
              any age or temperament feel safe and happy.
            </p>
            {/* <p className="italic">Proud pet parent to: .....</p> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full md:w-1/3">
            <div className="relative w-full h-64">
              <Image
                src="/avatar.svg"
                alt="Erin Berreitter"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-2">Erin Berreitter</h3>
            <p className="text-lg italic text-yellow-500 mb-4">
              Part-time Pet Care Provider
            </p>
            <p className="mb-4 leading-relaxed">
              Erin provides part‑time support to the Bark n’ Roll crew, sharing
              her compassionate energy and a special knack for bonding with shy
              pets.
            </p>
            {/* <p className="italic">Proud pet parent to: ...</p> */}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-[#f0f8f0] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="mb-4 leading-relaxed text-lg">
            Bark n&apos; Roll Pet Care was born from Jason&apos;s dream to
            create a service that treats animals like family, not just clients.
            What began as a solo operation has grown into a trusted team serving
            the Simi Valley area.
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

          <Link
            href="/contact"
            className="inline-block bg-[#006400] text-white px-6 py-3 rounded-lg font-bold transition-colors hover:bg-[#004d00]"
          >
            Book Your Consultation Today
          </Link>
        </div>
      </section>
    </main>
  );
}
