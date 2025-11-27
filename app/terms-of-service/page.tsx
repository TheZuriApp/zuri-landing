"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#FDFBFF] via-[#F7F2FF] to-[#FFF8F0] px-6 py-12 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F8B6FF] blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#FFC6A5] blur-[160px]" />
        <div className="absolute left-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[#B6E3FF] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Zuri Terms of Service
        </h1>

        <div className="prose prose-slate max-w-none text-black/80">
          <p className="mb-6">
            Welcome to the Zuri website (zuri.in), owned and operated by Zuri
            Technologies Private Limited. These Terms of Service ("Terms")
            govern your access to and use of our website, including all content,
            functionality, and services offered thereon. By accessing or using
            the website, you confirm that you are at least 18 years old and
            agree to be bound by these Terms, forming a binding legal contract
            between you and Zuri Technologies Private Limited. If you disagree
            with any part of these terms, you must not use the website.
          </p>

          <p className="mb-8">
            The website provides information, updates, and links related to the
            Zuri application, alongside curated fashion recommendations, some of
            which contain affiliate links. Zuri retains all rights, title, and
            interest in its proprietary technology, including the Virtual Try-On
            (VTO) methodology and any content, branding, or trademarks displayed
            on the website. Your use of this site is subject to the conditions
            of use, content guidelines, and the exclusive jurisdiction detailed
            below.
          </p>

          <h2 className="mb-4 text-xl font-semibold text-black">
            Key Conditions of Use:
          </h2>
          <ul className="mb-8 list-disc space-y-2 pl-5">
            <li>
              <strong>Affiliate Disclaimer:</strong> Some links on the website
              are affiliate links, meaning Zuri earns a commission on qualifying
              purchases made through those links at no extra cost to you. This
              relationship does not influence our product recommendations.
            </li>
            <li>
              <strong>Intellectual Property (IP):</strong> All software,
              designs, text, and images related to Zuri are our exclusive
              property. You may not copy, reverse engineer, or commercially
              exploit any website content without our express written
              permission.
            </li>
            <li>
              <strong>User Conduct:</strong> You agree not to use the website
              for any unlawful purpose, including posting malicious code,
              infringing on others' rights, or disseminating harmful content.
            </li>
            <li>
              <strong>Governing Law & Jurisdiction:</strong> These Terms are
              governed by the Laws of India. You agree to submit to the
              exclusive jurisdiction of the Courts in Kolkata, West Bengal,
              India for the resolution of any disputes arising out of these
              Terms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
