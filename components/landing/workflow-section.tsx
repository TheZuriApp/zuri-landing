import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { WorkflowStep } from "@/lib/landing-data";
import {
  ArrowUpRight,
  Clock3,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";

type WorkflowSectionProps = {
  workflow: WorkflowStep[];
  onWaitlist: () => void;
};

export function WorkflowSection({ workflow, onWaitlist }: WorkflowSectionProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 rounded-[36px] border border-black/5 bg-white/80 p-10 shadow-[0_30px_80px_rgba(12,6,24,0.08)] backdrop-blur">
        <Badge variant="accent" className="w-fit">
          How it works
        </Badge>
        <h2 className="text-3xl font-semibold text-[#0B090C]">
          A loop built for making last-minute outfit decisions calm again.
        </h2>
        <div className="space-y-8">
          {workflow.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-6 rounded-3xl border border-black/5 bg-white/70 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white text-lg font-semibold">
                0{index + 1}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <p className="text-lg font-semibold text-[#0B090C]">
                    {step.title}
                  </p>
                  <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                    {step.meta}
                  </span>
                </div>
                <p className="text-base text-black/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Card className="rounded-[36px] border-0 bg-[#0B090C] text-white">
          <CardHeader className="gap-6">
            <Badge variant="outline" className="w-fit border-white/30 text-white">
              Beta promises
            </Badge>
            <div className="space-y-3">
              <CardTitle className="text-3xl text-white">
                Built with trust first
              </CardTitle>
              <CardDescription className="text-white/70">
                We are pre-launch but not careless. Every feature arrives with privacy
                and taste guardrails.
              </CardDescription>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <ShieldCheck className="h-5 w-5" />
                <p className="text-sm text-white/80">
                  Encrypted wardrobe vault with zero ad partners
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <MessageCircleQuestion className="h-5 w-5" />
                <p className="text-sm text-white/80">
                  Ask Zuri answers styling curveballs in under a minute
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <Clock3 className="h-5 w-5" />
                <p className="text-sm text-white/80">
                  Response time under five minutes during launches
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className="rounded-[36px] border-0 bg-white/80 p-8">
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="outline" className="w-fit">
                Why waitlist
              </Badge>
              <h3 className="mt-4 text-2xl font-semibold text-[#0B090C]">
                Early birds get:
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-5 py-4">
                <p className="text-lg font-medium text-black/80">
                  Lifetime access to Ask Zuri office hours
                </p>
                <Badge className="bg-black text-white">Limited 250</Badge>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-5 py-4">
                <p className="text-lg font-medium text-black/80">
                  Priority for feature votes and IRL drops
                </p>
                <Badge variant="outline">Founding list</Badge>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-5 py-4">
                <p className="text-lg font-medium text-black/80">
                  Custom taste graph calibration
                </p>
                <Badge variant="outline">Launch bonus</Badge>
              </div>
            </div>
            <Button className="w-full" variant="gradient" onClick={onWaitlist}>
              Claim my spot
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

