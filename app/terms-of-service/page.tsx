"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        {/* Header Section */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Zuri Terms of Service
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last Updated: December 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="lead text-lg text-slate-800">
            Welcome to the Zuri website (zuri.in), owned and operated by{" "}
            <strong>Zuri Technologies Private Limited</strong>. These Terms of
            Service (&quot;Terms&quot;) govern your access to and use of our
            website, including all content, functionality, and services offered
            thereon.
          </p>

          <p>
            By accessing or using the website, you confirm that you are at least
            18 years old and agree to be bound by these Terms, forming a binding
            legal contract between you and Zuri Technologies Private Limited. If
            you disagree with any part of these terms, you must not use the
            website.
          </p>

          <p>
            The website provides information, updates, and links related to the
            Zuri application, alongside curated fashion recommendations, some of
            which contain affiliate links. Zuri retains all rights, title, and
            interest in its proprietary technology, including the Virtual Try-On
            (VTO) methodology and any content, branding, or trademarks displayed
            on the website. Your use of this site is subject to the conditions
            of use, content guidelines, and the exclusive jurisdiction detailed
            below.
          </p>

          <h2 className="mt-12 text-xl font-bold text-slate-900">
            Key Conditions of Use:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
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
              infringing on others&apos; rights, or disseminating harmful
              content.
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
