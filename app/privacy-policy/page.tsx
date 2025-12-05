"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last Updated: December 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="lead text-lg text-slate-800">
            This Privacy Policy describes how{" "}
            <strong>Zuri Technologies Private Limited</strong> ("Zuri," "we,"
            "us," or "our") handles information collected via the Zuri Website
            (stylmezuri.com) and distinguishes it from the sensitive data
            handled by the Zuri mobile application.
          </p>

          <p>
            The purpose of this website policy is primarily to cover browsing
            and contact inquiries, while directing users to the comprehensive
            in-app policy for details on personal data, virtual try-ons (VTO),
            and biometric information collected within the mobile application.
            We are committed to complying with applicable Indian data protection
            laws, including the Digital Personal Data Protection Act, 2023 (DPDP
            Act).
          </p>

          <p>
            Our commitment is to transparency in data collection and usage on
            the website. We collect non-sensitive data to improve your
            experience and communicate effectively. For any concerns regarding
            data privacy, please reach out to our designated contact provided on
            the website.
          </p>

          <h2 className="mt-12 text-xl font-bold text-slate-900">
            1. Information Collected by the Website
          </h2>
          <ul className="list-disc pl-5 space-y-2">
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

          <h2 className="mt-12 text-xl font-bold text-slate-900">
            2. How We Use Your Information & Our Commitments
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Service Delivery:</strong> To respond to your inquiries
              and send you requested newsletters or updates.
            </li>
            <li>
              <strong>Security:</strong> To protect the integrity and security
              of the website and prevent unauthorized access or fraud.
            </li>
          </ul>

          <div className="my-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-2 font-semibold text-slate-900">
              Sensitive Data Notice
            </h3>
            <p className="text-sm text-slate-700">
              Any sensitive personal data (e.g., user photos, body measurements,
              precise location) required for the Virtual Try-On service is
              strictly handled within the{" "}
              <strong>Zuri Mobile Application</strong> and is governed by the
              dedicated Zuri App Privacy Policy, which you are required to
              accept upon registration.
            </p>
          </div>

          <h2 className="mt-12 text-xl font-bold text-slate-900">
            3. Your Data Principal Rights (Under DPDP Act)
          </h2>
          <p>
            As a Data Principal (user), you maintain comprehensive rights over
            your personal data processed by Zuri:
          </p>
          <ul className="list-disc pl-5 space-y-2">
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
