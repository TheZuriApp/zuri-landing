"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Stat } from "@/lib/landing-data";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";
import NavBar from "@/components/landing/nav-bar";
import { useState } from "react";
import { CtaSection } from "@/components/landing/cta-section";

type TermsOfServiceProps = {
  onWaitlist: () => void;
};

export default function TermsOfService({ onWaitlist }: TermsOfServiceProps) {
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
            Terms and Conditions <span className="text-[#5B5757]"></span>
          </h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="prose prose-sm sm:prose-base max-w-none">
          {/* Introduction */}
          <div className="mb-8 text-gray-700 leading-relaxed space-y-4 font-geist text-[14px]">
            <p>
              Welcome to the Zuri website (zuri.in), owned and operated by Zuri
              Technologies Private Limited. These Terms of Service ("Terms")
              govern your access to and use of our website, including all
              content, functionality, and services offered thereon.
            </p>

            <p>
              By accessing or using the website, you confirm that you are at
              least 18 years old and agree to be bound by these Terms, forming a
              binding legal contract between you and Zuri Technologies Private
              Limited. If you disagree with any part of these terms, you must
              not use the website.
            </p>

            <p>
              The website provides information, updates, and links related to
              the Zuri application, alongside curated fashion recommendations,
              some of which contain affiliate links. Zuri retains all rights,
              title, and interest in its proprietary technology, including the
              Virtual Try-On (VTO) methodology and any content, branding, or
              trademarks displayed on the website. Your use of this site is
              subject to the conditions of use, content guidelines, and the
              exclusive jurisdiction detailed below.
            </p>
          </div>

          {/* Section*/}
          <div className="mb-12">
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-6 font-geist">
              Key Conditions of Use:
            </h2>
            <ul className="list-disc ml-5 space-y-4 text-gray-700 text-[14px] font-geist">
              <li>
                <strong className="text-[#2B2B2B]">
                  Affiliate Disclaimer:
                </strong>{" "}
                Some links on the website are affiliate links, meaning Zuri
                earns a commission on qualifying purchases made through those
                links at no extra cost to you. This relationship does not
                influence our product recommendations.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">
                  Intellectual Property (IP):
                </strong>{" "}
                All software, designs, text, and images related to Zuri are our
                exclusive property. You may not copy, reverse engineer, or
                commercially exploit any website content without our express
                written permission.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">User Conduct:</strong> You
                agree not to use the website for any unlawful purpose, including
                posting malicious code, infringing on others' rights, or
                disseminating harmful content.
              </li>
              <li>
                <strong className="text-[#2B2B2B]">
                  Governing Law & Jurisdiction:
                </strong>{" "}
                These Terms are governed by the Laws of India. You agree to
                submit to the exclusive jurisdiction of the Courts in Kolkata,
                West Bengal, India for the resolution of any disputes arising
                out of these Terms.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CtaSection />
    </header>
  );
}
