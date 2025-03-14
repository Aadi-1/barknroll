import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700", // Adjust weight as needed
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fff5e6] text-[#006400]">
      {/* Hero Section */}
      <section className="py-10 px-4 text-center">
        <h1
          className={`${dancingScript.className} text-4xl md:text-5xl mb-6 text-green-800 font-weight:100`}
        >
          Have Questions or Ready to Book?
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We're excited to hear from you and meet your furry friends!
          <br /> Fill out our contact form, give us a call, or send us an email
          – whatever works best for you and your pet.
        </p>
      </section>

      {/* Contact Container */}
      <section className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap gap-10 text-center justify-center">
        {/* Contact Form Section */}
        <div className="contact-form-section w-full lg:w-2/3">
          <h2 className="text-3xl font-bold mb-6 ">
            Get in Touch
            <div className="mx-auto mt-1 h-0.5 w-1/6 bg-yellow-500"></div>
          </h2>
          <form className="bg-white p-6 rounded-xl shadow space-y-6">
            {/* Name and Email */}
            <div className="md:flex gap-4">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <label htmlFor="name" className="block font-bold mb-2">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Phone and Contact Preference */}
            <div className="md:flex gap-4">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <label htmlFor="phone" className="block font-bold mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="md:w-1/2">
                <label
                  htmlFor="contact-preference"
                  className="block font-bold mb-2"
                >
                  Preferred Contact Method
                </label>
                <select
                  id="contact-preference"
                  name="contact-preference"
                  className="w-full p-3 border border-gray-300 rounded"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                </select>
              </div>
            </div>

            {/* Address */}

            {/* Pet Name / Pet Type */}

            {/* Service Interested In */}
            <div>
              <label htmlFor="service" className="block font-bold mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full p-3 border border-gray-300 rounded"
              >
                <option value="">Please select a service</option>
                <option value="dog-walking">Dog Walking</option>
                <option value="pet-sitting">Pet Sitting</option>
                <option value="overnight">Overnight Care</option>
                <option value="other">Other (please specify)</option>
              </select>
            </div>

            {/* Additional Details / Questions */}
            <div>
              <label htmlFor="message" className="block font-bold mb-2">
                Additional Details / Questions
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your pet's needs, preferred schedule, or any questions you have."
                className="w-full p-3 border border-gray-300 rounded h-32 resize-none"
              />
            </div>

            {/* Preferred Consultation Date/Time */}
            <div>
              <label htmlFor="schedule" className="block font-bold mb-2">
                Preferred Consultation Date/Time (Optional)
              </label>
              <input
                type="text"
                id="schedule"
                name="schedule"
                placeholder="e.g. Weekdays after 5pm or Saturday mornings"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="mt-1"
              />
              <label htmlFor="newsletter" className="cursor-pointer">
                Subscribe to our newsletter for pet care tips and special offers
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#006400] text-white py-3 px-6 rounded-md text-lg font-bold hover:bg-[#004d00] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* First Box */}
          <div className="contact-info-section w-full lg:w-[350px] space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-4 underline underline-offset-3">
                Contact Information
              </h3>
              {/* Phone */}
              <div className="flex items-start gap-3 mb-4 justify-center">
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-3 mb-4 justify-center">
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>hello@barknroll.com</p>
                </div>
              </div>
              {/* Hours */}
              <div className="flex items-start gap-3 mb-4 justify-center">
                <div>
                  <h4 className="font-semibold">Hours of Operation</h4>
                  <p>Office: Mon-Fri, 9am-6pm</p>
                  <p>Service: 7 days, 6am-10pm</p>
                  <p>Overnight: Available upon request</p>
                </div>
              </div>
              {/* Social Links */}
              <h4 className="text-lg font-semibold mt-4">Follow Us</h4>
              <div className="flex gap-3 mt-2 justify-center">
                <Link
                  href="#"
                  className="w-9 h-9 bg-[#006400] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  FB
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 bg-[#006400] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  IG
                </Link>
              </div>
            </div>
          </div>

          {/* Second Box - For example, "What to Expect" */}
          <div className="contact-info-section w-full lg:w-[350px] space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-4 underline underline-offset-4">
                What to Expect
              </h3>
              <p className="leading-relaxed mb-3">
                After submitting your inquiry, we'll respond within 24 hours to
                schedule a free consultation where we discuss your pet's needs
                and create a customized care plan.
              </p>
              <p className="leading-relaxed">
                For urgent requests, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}

      {/* FAQ Section */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 ">
          Frequently Asked Questions
          <div className="mx-auto mt-2 h-0.5 w-1/4 bg-yellow-500"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Item 1 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Are you insured and bonded?
            </h3>
            <p className="leading-relaxed">
              Yes! All of our staff members are fully insured, bonded, and have
              undergone thorough background checks. We&apos;re also certified in
              pet first aid.
            </p>
          </div>
          {/* FAQ Item 2 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              How do I pay for services?
            </h3>
            <p className="leading-relaxed">
              We accept various payment methods including credit/debit cards,
              e-transfers, and mobile payments. Payment is typically due at the
              time of booking.
            </p>
          </div>
          {/* FAQ Item 3 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Do you offer services on holidays?
            </h3>
            <p className="leading-relaxed">
              Yes, we provide pet care 365 days a year, including holidays.
              There may be a small additional fee. Please book early as these
              dates fill up quickly!
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

      {/* Privacy Note */}
      <div className="max-w-3xl mx-auto text-center my-10 px-4 italic text-gray-700">
        <p>
          Your privacy matters to us. We promise that the information you share
          with Bark n&apos; Roll Pet Care will never be sold or shared with
          third parties. All pet and home information is stored securely and
          used solely to provide you with excellent pet care services.
        </p>
      </div>
    </main>
  );
}
