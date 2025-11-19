import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Stat } from "@/lib/landing-data";
import { ArrowUpRight, Star } from "lucide-react";

type HeroSectionProps = {
  stats: Stat[];
  onWaitlist: () => void;
  onSneakPeek: () => void;
};

export function HeroSection({
  stats,
  onWaitlist,
  onSneakPeek,
}: HeroSectionProps) {
  return (
    <header className="flex flex-col gap-12 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 rounded-full border border-black/5 bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(12,6,24,0.07)] backdrop-blur">
          <Image
            src="/zuri-logo.jpeg"
            alt="Zuri logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-black/70">
              Zuri
            </p>
          </div>
        </div>
        <Badge
          variant="outline"
          className="rounded-full border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black/70"
        >
          Pre-launch
        </Badge>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <Badge variant="accent" className="w-fit">
            New drop • Coming soon
          </Badge>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-[#0B090C] sm:text-5xl lg:text-6xl">
              Your AI-stylist that texts back before the party starts.
            </h1>
            <p className="text-lg leading-relaxed text-black/60 sm:text-xl">
              Zuri is the pre-launch mobile app for people who obsess over fit,
              fabric, and feeling. We blend AI critiques with wardrobe
              intelligence so every look feels intentional and documented.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="group w-full sm:w-auto"
              variant="gradient"
              onClick={onWaitlist}
            >
              Join the waitlist
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto">
              Watch the prototype
              <Star className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-black/5 bg-white/80 px-5 py-4 text-center shadow-[0_10px_40px_rgba(15,15,23,0.08)] backdrop-blur"
              >
                <p className="text-2xl font-semibold text-[#0B090C]">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Card className="space-y-6 rounded-[40px] border-0 bg-white/80 p-8">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs tracking-[0.4em]">
              Preview
            </Badge>
            <p className="text-sm text-black/50">Early Access Build 07</p>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-[#0B090C]">
              Upload your mirror selfie
            </p>
            <p className="text-sm leading-relaxed text-black/60">
              Zuri breaks down silhouette, palette, texture, layering, and
              social context before you even lock the fit.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-linear-to-br from-white to-[#F6F1FF] p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#0B090C]">
                    Fit Insight
                  </p>
                  <p className="text-sm text-black/50">AI critique</p>
                </div>
                <Badge className="bg-black text-white">Coming Soon</Badge>
              </div>
              <p className="text-lg leading-relaxed text-black/70">
                Waist-up balance looks sharp. Consider swapping the sneakers for
                a slimmer profile to keep the line clean.
              </p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-black/40">
                <span className="rounded-full border border-black/10 px-3 py-1">
                  Layering
                </span>
                <span className="rounded-full border border-black/10 px-3 py-1">
                  Palette
                </span>
                <span className="rounded-full border border-black/10 px-3 py-1">
                  Texture
                </span>
              </div>
            </div>
          </div>
          <Button variant="secondary" className="w-full" onClick={onSneakPeek}>
            See more sneak peeks
          </Button>
        </Card>
      </div>
    </header>
  );
}
