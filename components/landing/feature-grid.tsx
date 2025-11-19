import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Feature } from "@/lib/landing-data";

type FeatureGridProps = {
  features: Feature[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-4">
        <Badge variant="outline" className="w-fit">
          Feature set
        </Badge>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B090C]">
            Everything we are shipping with a coming-soon glow.
          </h2>
          <p className="max-w-3xl text-base text-black/60">
            We are designing for style obsessives who need fast critique loops,
            wardrobe intelligence, and human backup. Every module is nearly
            ready, and this is your sneak peek.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} className="rounded-[32px] border-0 p-7">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-black text-white">
                    <feature.icon className="h-10 w-10 p-2.5" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <Badge variant="outline" className="text-[11px]">
                  {feature.status}
                </Badge>
              </div>
              <CardDescription className="text-base leading-relaxed text-black/60">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

