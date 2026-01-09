"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RequestAccountDeletionPage() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setResult(""); // Clear previous result
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );
    formData.append("subject", "Account Deletion Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult(
          "Request received. We will process your account deletion shortly."
        );
        form.reset();
      } else {
        setResult("Something went wrong. Please try again or contact support.");
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#FDFBFF] via-[#F7F2FF] to-[#FFF8F0]">
      {/* Background blobs matching main page */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F8B6FF] blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#FFC6A5] blur-[160px]" />
        <div className="absolute left-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[#B6E3FF] blur-[160px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center p-6">
        <div className="mb-8 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="w-full rounded-[32px] border border-white/40 bg-white p-8 shadow-[0_40px_120px_rgba(6,6,20,0.35)]">
          <h1 className="mb-2 text-3xl font-semibold text-[#0B090C]">
            Request Account Deletion
          </h1>
          <p className="mb-8 text-sm text-black/60">
            We&apos;re sorry to see you go. Submitting this form will initiate a
            request for the permanent deletion of your account and all
            associated data.
          </p>

          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">
                Email or Phone Number
              </label>
              <input
                className="h-12 rounded-full border border-black/10 bg-white/80 px-5 text-base outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10"
                name="contact"
                placeholder="your@email.com or +1 234 567 8900"
                required
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">
                Reason for leaving (Optional)
              </label>
              <textarea
                className="min-h-[100px] rounded-3xl border border-black/10 bg-white/80 px-5 py-4 text-base outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10"
                name="message"
                placeholder="Is there anything we could have done better?"
              />
            </div>

            <div className="mt-2">
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20"
                size="lg"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>

            {result && (
              <p
                className={`text-center text-sm font-medium mt-2 ${
                  result.includes("received")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
