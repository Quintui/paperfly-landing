import Link from "next/link";
import {
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_WEBSITE,
  DEMO_BOOKING_URL,
} from "@/lib/constants";
import Image from "next/image";
import { MobileMenu } from "@/components/mobile-menu";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 border-b">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={122} height={28} />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#005DF2] transition-colors"
            >
              Back to Home
            </Link>
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#005DF2] text-white px-4 py-2 rounded-md hover:bg-[#004acf] transition-colors"
            >
              Book a Demo
            </a>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Effective Date: {currentDate}</p>

          <div className="prose prose-lg max-w-none">
            <p>
              At {COMPANY_NAME} (accessible at {COMPANY_WEBSITE}), your privacy
              is important to us. This Privacy Policy explains what information
              we collect, how we use it, and the choices you have regarding your
              personal data. By using our website or platform, you agree to the
              practices described below.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Information We Collect
            </h2>
            <h3 className="text-xl font-bold mt-6 mb-2">
              Personal Information
            </h3>
            <p>
              When you interact with {COMPANY_NAME}—by signing up, using our
              tools, or contacting us—we may collect:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company/organization name</li>
              <li>Billing and payment details</li>
              <li>Content or documents you upload or generate</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2">Usage Data</h3>
            <p>
              We automatically collect data about how you access and use our
              platform, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referral URLs</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2">
              Cookies & Tracking Technologies
            </h3>
            <p>
              We use cookies and similar tools to enhance your experience,
              understand user behavior, and improve our services. You can manage
              cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and operate the {COMPANY_NAME} platform</li>
              <li>Process transactions and manage user accounts</li>
              <li>Respond to customer support requests</li>
              <li>Improve our tools and user experience through analytics</li>
              <li>
                Send relevant updates, product information, and marketing
                communications (you can opt out anytime)
              </li>
              <li>Meet legal obligations and enforce terms of use</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              3. Sharing Your Information
            </h2>
            <p>
              We do not sell your data. We may share information with trusted
              third parties who help us operate
              {COMPANY_NAME}, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Payment processors</li>
              <li>Hosting providers</li>
              <li>Analytics tools</li>
              <li>Legal or regulatory authorities (when required by law)</li>
            </ul>
            <p>
              All third-party providers are contractually obligated to protect
              your information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Retention</h2>
            <p>
              We retain personal data only as long as needed for business
              purposes, legal compliance, or to fulfill any ongoing
              service-related functions. You can request data deletion at any
              time by contacting us.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
            <p>
              We apply industry-standard safeguards—encryption, access controls,
              secure servers—to protect your information. However, no system is
              completely immune to risk. We recommend taking precautions to keep
              your credentials and data secure.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access or receive a copy of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Object to or restrict certain data uses</li>
            </ul>
            <p>
              To make a data request, email us at{" "}
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-[#005DF2] hover:underline"
              >
                {COMPANY_EMAIL}
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              7. International Users
            </h2>
            <p>
              If you access {COMPANY_NAME} from outside our country of
              operation, note that your information may be processed and stored
              in countries with different data protection laws.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              8. Third-Party Websites
            </h2>
            <p>
              Our platform may include links to third-party websites. We are not
              responsible for the content or privacy practices of those sites.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Policy Updates</h2>
            <p>
              We may update this policy to reflect changes in our practices or
              legal obligations. The "Effective Date" will be updated
              accordingly. We recommend reviewing this page periodically.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p>
              For any questions or concerns about this Privacy Policy or your
              data, please reach out to us at:
            </p>
            <p className="mt-4">
              <strong>{COMPANY_NAME}</strong>
              <br />
              Email:{" "}
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-[#005DF2] hover:underline"
              >
                {COMPANY_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
