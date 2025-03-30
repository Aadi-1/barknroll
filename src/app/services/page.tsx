import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700", // Adjust weight as needed
});

export default function ServicesPage() {
  return (
    <main className=" w-full overflow-x-hidden bg-white">
      {/* Container */}
      <section className=" mx-auto px-6 py-12 bg-orange-100 border-b border-green-700">
        {/* Heading */}
        <h1
          className={`${dancingScript.className} text-center text-4xl md:text-5xl mb-6 text-green-800 font-weight:100`}
        >
          Our Services
          <div className="mx-auto mt-2 h-0.5 w-1/10 bg-yellow-500"></div>
        </h1>
        <p className="text-center text-green-800 mt-10">
          Every service comes with a written update and photos!
        </p>
      </section>
      {/*Services*/}
      <section className="bg-white text-green-800 ">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4 ">
            <div className="shrink-0">
              {/* Replace with your own icon/image */}
              <Image
                src="/dogwalk3.svg"
                alt="Dog Walking"
                width={80}
                height={80}
                className="mx-auto md:mx-0"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                Dog Walking
              </h2>
              <ul className="list-disc list-inside space-y-1 text-green-900 list-none">
                <li>
                  <strong>Time Slot Options:</strong>{" "}
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2 text-center">
                          Service
                        </th>
                        <th className="border px-4 py-2 text-center">30 min</th>
                        <th className="border px-4 py-2 text-center">45 min</th>
                        <th className="border px-4 py-2 text-center">60 min</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 text-center">
                          Dog Walking
                        </td>
                        <td className="border px-4 py-2 text-center">$25</td>
                        <td className="border px-4 py-2 text-center">$35</td>
                        <td className="border px-4 py-2 text-center">$45</td>
                      </tr>
                    </tbody>
                  </table>
                </li>

                <li>
                  <strong>Walk & Exercise: </strong> We’ll come to your home,
                  leash up, and head out for fresh air and fun.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-2 h-0.5 w-3/4 bg-yellow-500"></div>
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4 ">
            <div className="shrink-0">
              {/* Replace with your own icon/image */}
              <Image
                src="/dogwalk2.svg"
                alt="Dog Walking"
                width={80}
                height={80}
                className="mx-auto md:mx-0"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                Pet Sitting
              </h2>
              <ul className="list-disc list-inside space-y-1 text-green-900  list-none">
                <li>
                  <strong>Time Slot Options:</strong>
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2 text-center">
                          Service
                        </th>
                        <th className="border px-4 py-2 text-center">30 min</th>
                        <th className="border px-4 py-2 text-center">45 min</th>
                        <th className="border px-4 py-2 text-center">60 min</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 text-center">
                          Pet Sitting
                        </td>
                        <td className="border px-4 py-2 text-center">$25</td>
                        <td className="border px-4 py-2 text-center">$35</td>
                        <td className="border px-4 py-2 text-center">$45</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <strong>Customized Care:</strong> We’ll feed, refresh water,
                  handle bathroom breaks, give medications and offer playtime or
                  walks.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-2 h-0.5 w-3/4 bg-yellow-500"></div>
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="shrink-0">
              {/* Replace with your own icon/image for Custom Service */}
              <Image
                src="/bednbreak.svg"
                alt="Custom Service"
                width={80}
                height={80}
                className="mx-auto md:mx-0"
              />
            </div>
            <div>
              <h2 className="text-lg text-green-800 mb-2">
                <span className="text-xl font-semibold text-green-800 mb-2">
                  Bed n&apos; Breakfast ($95):
                </span>{" "}
                2 hour night visit, 1 hour morning visit
              </h2>
              <ul className="list-disc list-inside space-y-1 text-green-900 list-none">
                <li>
                  <strong>Evening Visit (e.g., 5:00–7:00 PM):</strong> We arrive
                  at your home in the early evening for a 2‑hour care session.
                </li>
                <li>
                  <strong>Overnight Absence:</strong> After we finish the
                  evening visit, we leave your home for the night, but return
                  early in the morning to make sure your pet starts the day off
                  right.
                </li>
                <li>
                  <strong>Morning Visit (e.g., 7:00–8:00 AM):</strong> We come
                  back for a 1‑hour check‑in to feed breakfast, refresh water,
                  let your pet outside, and offer playtime or a short walk.
                  Afterward, we’ll send another update so you know how
                  everything went.
                </li>
                <li>
                  <strong>Extras:</strong> During these sessions, we can take
                  your pet on brief walks, administer medications if needed, and
                  ensure they’re comfortable for the day ahead.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-2 h-0.5 w-3/4 bg-yellow-500"></div>
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4 ">
            <div className="shrink-0">
              {/* Replace with your own icon/image */}
              <Image
                src="/overnights1.svg"
                alt="Dog Walking"
                width={80}
                height={80}
                className="mx-auto md:mx-0"
              />
            </div>
            <div>
              <h2 className="text-lg text-green-800 mb-2">
                <span className="text-xl font-semibold text-green-800 mb-2">
                  Overnights:
                </span>{" "}
                Special Request Only*
              </h2>
              <ul className="list-disc list-inside space-y-1 text-green-900  list-none">
                <li>
                  <strong>Our typical overnight schedule:</strong>
                </li>
                <li>
                  <strong>Dinner Visit (5:00–7:00 PM):</strong> We arrive at
                  your home around dinner time for a 2‑hour care session. During
                  this visit, we spend quality time with your pet and send you a
                  detailed update at the end.
                </li>
                <li>
                  <strong>Dinner Break (7:00–7:30 PM):</strong> Our caregiver
                  takes a short 30 - 45‑minute break to grab dinner.
                </li>
                <li>
                  <strong>
                    Overnight Coverage (From 7:45 PM Until Morning):
                  </strong>{" "}
                  After dinner, we return and stay with your pet for the rest of
                  the night, ensuring they’re safe, comfortable, and well-cared
                  for.
                </li>
                <li>
                  <strong>Morning Visit:</strong> In the early morning, we
                  perform about an hour-long visit, complete with another
                  update, to help your pet start the day on a positive note.
                </li>
                <li>
                  <strong>Extras:</strong> During this time, we can talk your
                  pet on walks, feed them medication, and give them time
                  outside.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-2 h-0.5 w-3/4 max-w-lg"></div>
        <div className="max-w-4xl mx-auto my-6 p-6 bg-orange-100 rounded-md text-center shadow border-2 ">
          <h2 className="text-2xl font-bold text-green-800 mb-2">Pricing</h2>
          <p className="text-green-900 mb-4">
            All services are customized to your pet’s needs. Contact us for a
            personalized quote!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
          >
            Book a Service
          </Link>
        </div>
      </section>
    </main>
  );
}
