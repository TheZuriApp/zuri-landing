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
          <h1 className="font-fields font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-normal text-[#2B2B2B]">
            Privacy <span className="text-[#D96A7B]">Policy</span>
          </h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="prose prose-sm sm:prose-base max-w-none">
          {/* Introduction */}
          <div className="mb-8 text-gray-700 leading-relaxed space-y-4 font-geist">
            <p>
              This Privacy Policy describes how Zuri Technologies Private Limited ("Zuri," "we," "us," or "our") handles information collected via the Zuri Website (stylmezuri.com) and distinguishes it from the sensitive data handled by the Zuri mobile application.
            </p>
            <p>
              The purpose of this website policy is primarily to cover browsing and contact inquiries, while directing users to the comprehensive In-app policy for details on personal data, virtual try-ons (VTO), and biometric information collected within the mobile application. We are committed to complying with applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
            <p>
              Our commitment is to transparency in data collection and usage on the website. We collect non-sensitive data to improve your experience and communicate effectively. For any concerns regarding data privacy, please reach out to our designated contact provided on the website.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2B2B2B] mb-6 font-geist">1. Information Collected by the Website</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong className="text-[#2B2B2B]">Contact Information:</strong> Some links on the website are affiliate links, meaning Zuri earns a commission on qualifying purchases made through those links at no extra cost to you. This relationship does not influence our product recommendations.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Usage Data:</strong> Non-personal data like IP addresses, browser type, referring pages, and device identifiers for analytics.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Cookies & Tracking:</strong> We use cookies for essential website functionality, analytics, and to track traffic generated from our affiliate marketing links.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Governing Law & Jurisdiction:</strong> These Terms are governed by the Laws of India. You agree to submit to the exclusive jurisdiction of the Courts in Kolkata, West Bengal, India for the resolution of any disputes arising out of these Terms.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2B2B2B] mb-6">2. How We Use Your Information & Our Commitments</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong className="text-[#2B2B2B]">Service Delivery:</strong> Some links on the website are affiliate links, meaning Zuri earns a commission on qualifying purchases made through those links at no extra cost to you. This relationship does not influence our product recommendations.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Security:</strong> Non-personal data like IP addresses, browser type, referring pages, and device identifiers for analytics.
              </li>
            </ul>

            <div className="mt-8 bg-[#F9F1F4] rounded-sm p-6">
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3">Sensitive Data Notice</h3>
              <p className="text-gray-700 leading-relaxed">
                Some links on the website are affiliate links, meaning Zuri earns a commission on qualifying purchases made through those links at no extra cost to you. This relationship does not influence our product recommendations.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2B2B2B] mb-6">3. Your Data Principal Rights (Under DPDP Act)</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a Data Principal (user), you maintain comprehensive rights over your personal data processed by Zuri:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong className="text-[#2B2B2B]">Right to Access Information:</strong> You have the right to request a summary of the Personal Data we hold about you and the processing activities we undertake.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Right to Correction and Completion:</strong> You have the right to request that we correct or update any inaccurate or incomplete personal data we hold about you.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Right to Erasure (Deletion):</strong> You have the right to request the deletion of your Personal Data once the purpose for which it was collected is no longer being served.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Right to Grievance Redressal:</strong> You have the right to file a complaint or request assistance regarding the exercise of your rights with our designated Data Protection Officer (DPO) or Grievance Officer, whose contact information is available in the designated section of this Policy.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CtaSection/>
    </header>
  );
}
