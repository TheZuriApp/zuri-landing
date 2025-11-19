"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type WaitlistModalProps = {
  open: boolean;
  onClose: () => void;
};

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur">
      <div className="relative w-full max-w-lg rounded-[32px] border border-white/40 bg-white p-8 shadow-[0_40px_120px_rgba(6,6,20,0.35)]">
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="outline">Waitlist</Badge>
            <h3 className="mt-4 text-3xl font-semibold text-[#0B090C]">
              Join the private drop
            </h3>
            <p className="text-sm text-black/60">
              Secure a spot for early access, IRL drops, and Zuri office hours.
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <WaitlistForm />
      </div>
    </div>
  );
}

function WaitlistForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(
      data.success
        ? "Success! You're on the list."
        : "Something went wrong. Try again."
    );
    setIsSubmitting(false);
    if (data.success) {
      form.reset();
    }
  };

  return (
    <form className="mt-8 flex flex-col gap-5" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-black">Full name</label>
        <input
          className="h-12 rounded-full border border-black/10 bg-white/80 px-5 text-base outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10"
          name="name"
          placeholder="Amara Kole"
          required
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-black">Email</label>
        <input
          className="h-12 rounded-full border border-black/10 bg-white/80 px-5 text-base outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10"
          name="email"
          placeholder="amara@studio.com"
          required
          type="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-black">
          Tell us about your style goals
        </label>
        <textarea
          className="min-h-[130px] rounded-3xl border border-black/10 bg-white/80 px-5 py-4 text-base outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10"
          name="message"
          placeholder="Need help with launch-week fits, capsule planning, or styling feedback..."
          required
        />
      </div>
      <Button
        className="w-full"
        variant="gradient"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Lock my spot"}
      </Button>
      <p className="text-center text-sm text-black/60">{result}</p>
    </form>
  );
}
