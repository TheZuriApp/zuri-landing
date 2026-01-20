"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Stat } from "@/lib/landing-data";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";
import NavBar from "@/components/landing/nav-bar";
import { useState } from "react";
import { CtaSection } from "@/components/landing/cta-section";

type PrivacyPolicyProps = {
  onWaitlist: () => void;
};

export default function PrivacyPolicy({ onWaitlist }: PrivacyPolicyProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative min-h-[90vh] sm:min-h-screen flex flex-col gap-4 pt-2 overflow-hidden">
      <div className="absolute inset-0 -z-10" />
      {/* Navbar section */}
      <NavBar />
      {/* heading section */}
      <section className="relative bg-[#F9F1F4] min-h-[200px] sm:min-h-[300px] md:min-h-[350px] flex flex-col pt-20 sm:pt-24 md:pt-32 px-4 pb-4 sm:pb-4 md:pb-8">
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(226,92,126,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226,92,126,0.06) 1px, transparent 1px)
    `,
            backgroundSize: "56px 56px",
            WebkitMaskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        black 15%,
        black 85%,
        transparent 100%
      ),
      linear-gradient(
        black 0%,
        black 45%,
        transparent 100%
      )
    `,
            WebkitMaskComposite: "destination-in",
            maskComposite: "intersect",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="font-outfit font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-normal text-[#5B5757]">
            Privacy <span className="text-[#5B5757]">Policy</span>
          </h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="prose prose-sm sm:prose-base max-w-none">
          {/* Introduction */}
          <div className="mb-8 text-gray-700 leading-relaxed space-y-4 font-geist text-[14px]">
            <p>
              This Privacy Policy describes how Zuri Technologies Private
              Limited ("Zuri," "we," "us," or "our") handles information
              collected via the Zuri Website (stylmezuri.com) and distinguishes
              it from the sensitive data handled by the Zuri mobile application.
            </p>
            <p>
              The purpose of this website policy is primarily to cover browsing
              and contact inquiries, while directing users to the comprehensive
              In-app policy for details on personal data, virtual try-ons (VTO),
              and biometric information collected within the mobile application.
              We are committed to complying with applicable Indian data
              protection laws, including the Digital Personal Data Protection
              Act, 2023 (DPDP Act).
            </p>
            <p>
              Our commitment is to transparency in data collection and usage on
              the website. We collect non-sensitive data to improve your
              experience and communicate effectively. For any concerns regarding
              data privacy, please reach out to our designated contact provided
              on the website.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12 font-geist">
            <h2 className="text-[24px] font-medium leading-6 tracking-normal text-[#2B2B2B] mb-6 [text-edge:cap]">
              1. Information Collected by the Website
            </h2>
            <ul className="list-disc ml-5 space-y-4 text-gray-700 text-[14px]">
              <li>
                <strong className="text-[#2B2B2B]">Contact Information:</strong>{" "}
                We may collect your name and email address if you choose to sign
                up for our waitlist or contact us directly.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Usage Data:</strong>{" "}
                Non-personal data like IP addresses, browser type, referring
                pages, and device identifiers for analytics.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Cookies & Tracking:</strong>{" "}
                We use cookies for essential website functionality, analytics,
                and to track traffic generated from our affiliate marketing
                links.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12 font-geist">
            <h2 className="text-[24px] font-medium leading-[30px] tracking-normal text-[#2B2B2B] mb-6 [text-edge:cap]">
              2. How We Use Your Information & Our Commitments
            </h2>
            <ul className="list-disc ml-5 space-y-4 text-gray-700 text-[14px]">
              <li>
                <strong className="text-[#2B2B2B]">Service Delivery:</strong> To
                manage waitlist entries and communicate updates regarding the
                Zuri application.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Security:</strong> To protect
                our website from malicious activity and ensure a safe browsing
                experience for all users.
              </li>
            </ul>

            <div className="mt-8 bg-[#F9F1F4] rounded-sm p-6">
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3">
                Sensitive Data Notice
              </h3>
              <p className="text-gray-700 leading-relaxed text-[14px]">
                Zuri Technologies Private Limited does not collect sensitive
                personal data such as financial information, biometric data, or
                health records through this website.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12 font-geist">
            <h2 className="text-[24px] font-medium leading-[20px] tracking-normal text-[#2B2B2B] mb-6 [text-edge:cap]">
              3. Your Data Principal Rights (Under DPDP Act)
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-[14px]">
              As a Data Principal (user), you maintain comprehensive rights over
              your personal data processed by Zuri:
            </p>
            <ul className="list-disc ml-5 space-y-4 text-gray-700 text-[14px]">
              <li>
                <strong className="text-[#2B2B2B]">
                  Right to Access Information:
                </strong>{" "}
                You have the right to request a summary of the Personal Data we
                hold about you and the processing activities we undertake.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">
                  Right to Correction and Completion:
                </strong>{" "}
                You have the right to request that we correct or update any
                inaccurate or incomplete personal data we hold about you.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">
                  Right to Erasure (Deletion):
                </strong>{" "}
                You have the right to request the deletion of your Personal Data
                once the purpose for which it was collected is no longer being
                served.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">
                  Right to Grievance Redressal:
                </strong>{" "}
                You have the right to file a complaint or request assistance
                regarding the exercise of your rights with our designated Data
                Protection Officer (DPO).
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CtaSection />
    </header>
  );
}
