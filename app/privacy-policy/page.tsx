"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          Zuri Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none text-black/80">
          <p className="mb-6">
            This Privacy Policy describes how Zuri Technologies Private Limited
            (&quot;Zuri,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) handles information collected via the Zuri Website
            (stylmezuri.com) and distinguishes it from the sensitive data
            handled by the Zuri mobile application. The purpose of this website
            policy is primarily to cover browsing and contact inquiries, while
            directing users to the comprehensive in-app policy for details on
            personal data, virtual try-ons (VTO), and biometric information
            collected within the mobile application. We are committed to
            complying with applicable Indian data protection laws, including the
            Digital Personal Data Protection Act, 2023 (DPDP Act).
          </p>

          <p className="mb-8">
            Our commitment is to transparency in data collection and usage on
            the website. We collect non-sensitive data to improve your
            experience and communicate effectively. For any concerns regarding
            data privacy, please reach out to our designated contact provided on
            the website.
          </p>

          <h2 className="mb-4 text-xl font-semibold text-black">
            1. Information Collected by the Website
          </h2>
          <ul className="mb-8 list-disc space-y-2 pl-5">
            <li>
              <strong>Contact Information:</strong> Names and email addresses
              submitted through contact forms or newsletter sign-ups.
            </li>
            <li>
              <strong>Usage Data:</strong> Non-personal data like IP addresses,
              browser type, referring pages, and device identifiers for
              analytics.
            </li>
            <li>
              <strong>Cookies & Tracking:</strong> We use cookies for essential
              website functionality, analytics, and to track traffic generated
              from our affiliate marketing links.
            </li>
          </ul>

          <h2 className="mb-4 text-xl font-semibold text-black">
            2. How We Use Your Information & Our Commitments
          </h2>
          <ul className="mb-8 list-disc space-y-2 pl-5">
            <li>
              <strong>Service Delivery:</strong> To respond to your inquiries
              and send you requested newsletters or updates.
            </li>
            <li>
              <strong>Security:</strong> To protect the integrity and security
              of the website and prevent unauthorized access or fraud.
            </li>
            <li>
              <strong>Sensitive Data:</strong> Please Note: Any sensitive
              personal data (e.g., user photos, body measurements, precise
              location) required for the Virtual Try-On service is strictly
              handled within the Zuri Mobile Application and is governed by the
              dedicated Zuri App Privacy Policy, which you are required to
              accept upon registration.
            </li>
          </ul>

          <h2 className="mb-4 text-xl font-semibold text-black">
            3. Your Data Principal Rights (Under DPDP Act)
          </h2>
          <p className="mb-4">
            As a Data Principal (user), you maintain comprehensive rights over
            your personal data processed by Zuri:
          </p>
          <ul className="mb-8 list-disc space-y-2 pl-5">
            <li>
              <strong>Right to Access Information:</strong> You have the right
              to request a summary of the Personal Data we hold about you and
              the processing activities we undertake.
            </li>
            <li>
              <strong>Right to Correction and Completion:</strong> You have the
              right to request that we correct or update any inaccurate or
              incomplete personal data we hold about you.
            </li>
            <li>
              <strong>Right to Erasure (Deletion):</strong> You have the right
              to request the deletion of your Personal Data once the purpose for
              which it was collected is no longer being served.
            </li>
            <li>
              <strong>Right to Grievance Redressal:</strong> You have the right
              to file a complaint or request assistance regarding the exercise
              of your rights with our designated Data Protection Officer (DPO)
              or Grievance Officer, whose contact information is available in
              the designated section of this Policy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
