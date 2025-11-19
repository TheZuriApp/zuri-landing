"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { SneakPeek } from "@/lib/landing-data";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type SneakPeekModalProps = {
  open: boolean;
  onClose: () => void;
  slides: SneakPeek[];
};

export function SneakPeekModal({ open, onClose, slides }: SneakPeekModalProps) {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"idle" | "out" | "in">("idle");
  const [animating, setAnimating] = useState(false);
  const timeouts = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  useEffect(() => {
    return () => {
      timeouts.current.forEach((timeout) => clearTimeout(timeout));
      timeouts.current = [];
    };
  }, []);

  useEffect(() => {
    if (open) {
      setIndex(0);
      setFadeState("idle");
      setAnimating(false);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const current = slides[index];

  const schedule = (fn: () => void, delay: number) => {
    const timeout = setTimeout(() => {
      fn();
      timeouts.current = timeouts.current.filter(
        (stored) => stored !== timeout
      );
    }, delay);
    timeouts.current.push(timeout);
  };

  const transitionTo = (nextIndex: number) => {
    if (animating || slides.length <= 1) {
      return;
    }
    setAnimating(true);
    setFadeState("out");
    schedule(() => {
      setIndex(nextIndex);
      setFadeState("in");
      schedule(() => {
        setFadeState("idle");
        setAnimating(false);
      }, 220);
    }, 200);
  };

  const goNext = () => {
    transitionTo((index + 1) % slides.length);
  };

  const goPrev = () => {
    transitionTo((index - 1 + slides.length) % slides.length);
  };

  const transitionClass =
    fadeState === "out"
      ? "opacity-0 translate-y-2"
      : "opacity-100 translate-y-0";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur">
      <div className="relative w-full max-w-3xl rounded-[36px] border border-white/20 bg-white/95 p-8 shadow-[0_50px_120px_rgba(8,6,24,0.35)]">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <Badge variant="outline" className="w-fit">
              Sneak peek
            </Badge>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/50">
                {current.status}
              </p>
              <h3 className="text-3xl font-semibold text-[#0B090C]">
                {current.title}
              </h3>
              <p className="text-sm text-black/50">{current.summary}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div
          className={`mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] transition-all duration-300 ease-out ${transitionClass}`}
        >
          <div className="rounded-[32px] border border-black/5 bg-linear-to-br from-white to-[#F5F0FF] p-6 shadow-[0_20px_60px_rgba(12,6,24,0.08)]">
            <p className="text-sm font-semibold text-[#0B090C]">Insight</p>
            <p className="mt-3 text-lg leading-relaxed text-black/70">
              {current.insight}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-black/40">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(12,6,24,0.08)]">
            <div className="grow rounded-3xl border border-black/5 bg-linear-to-br from-[#050505] via-[#111111] to-[#1f1f1f] p-6 text-white">
              <p className="mt-4 text-2xl font-semibold">{current.title}</p>
              <p className="mt-2 text-sm text-white/70">{current.summary}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goPrev}
                  disabled={animating}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goNext}
                  disabled={animating}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                {slides.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-2 w-2 rounded-full ${
                      dotIndex === index ? "bg-black" : "bg-black/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
