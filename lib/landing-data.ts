import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Globe,
  Heart,
  ImagePlus,
  MessageCircleQuestion,
  Palette,
  ShieldCheck,
  Shuffle,
  ShoppingBag,
  Shirt,
  Sparkles,
  Wand2,
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  status: string;
  icon: LucideIcon;
};

export type WorkflowStep = {
  title: string;
  description: string;
  meta: string;
};

export type Stat = {
  label: string;
  value: string;
};

export const features: Feature[] = [
  {
    title: "AI Fit Checks",
    description:
      "Upload a mirror snap and get instant notes on proportions, palette, and mood.",
    status: "Beta Wave • Invite Only",
    icon: Sparkles,
  },
  {
    title: "Wardrobe Brain",
    description:
      "Digitize your closet once and let Zuri remember every piece, texture, and story.",
    status: "Coming Soon",
    icon: Camera,
  },
  {
    title: "Event Styling",
    description:
      "Tell us the vibe, weather, or dress code and we compose looks that feel like you.",
    status: "Arriving Summer",
    icon: Wand2,
  },
  {
    title: "Taste Graph",
    description:
      "Borrow inspiration from thousands of curated street looks that match your energy.",
    status: "Curating",
    icon: Globe,
  },
  {
    title: "Closet Shuffle",
    description:
      "Spin up unexpected combos from what you already own with one tap of the shuffle button.",
    status: "Testing",
    icon: Shuffle,
  },
  {
    title: "Generate Closet from Pictures",
    description:
      "Drop a batch of garment photos and let Zuri catalog silhouettes, colors, and metadata automatically.",
    status: "Coming Soon",
    icon: ImagePlus,
  },
  {
    title: "Virtual Try-On",
    description:
      "Preview drape and pairing ideas without changing clothes thanks to our photoreal overlays.",
    status: "Beta Wave",
    icon: Shirt,
  },
  {
    title: "Generated Looks",
    description:
      "Ask for a mood or event and receive cohesive outfits rendered from your wardrobe DNA.",
    status: "Curating",
    icon: Palette,
  },
  {
    title: "Saved Favorites",
    description:
      "Bookmark your best fits, captures, and AI suggestions in one evolving inspiration stack.",
    status: "Always On",
    icon: Heart,
  },
  {
    title: "Wishlist Drops",
    description:
      "Track dream pieces from our exclusive product catalog and get alerts when they unlock.",
    status: "VIP Preview",
    icon: ShoppingBag,
  },
  {
    title: "Ask Zuri",
    description:
      "Chat with our fashion co-pilot about anything style-related and get contextual answers instantly.",
    status: "Live",
    icon: MessageCircleQuestion,
  },
  {
    title: "Privacy Shield",
    description:
      "Your archive is encrypted by default and never used to train outside models.",
    status: "Locked In",
    icon: ShieldCheck,
  },
];

export const workflow: WorkflowStep[] = [
  {
    title: "Capture Your Fit",
    description:
      "Shoot a quick mirror selfie or drop a carousel. Zuri reads garments, drape, color, and context instantly.",
    meta: "8 seconds",
  },
  {
    title: "Let Zuri Analyze",
    description:
      "Our AI co-stylist blends taste graphs with your wardrobe DNA to flag wins, tweaks, and smart swaps.",
    meta: "Real-time",
  },
  {
    title: "Share or Iterate",
    description:
      "Lock the fit, ask for alternates, or ping Ask Zuri for deeper styling cues.",
    meta: "1 tap",
  },
];

export const stats: Stat[] = [
  { label: "Looks stress-tested", value: "42K+" },
  { label: "Closets digitized", value: "18K+" },
  { label: "Cities on waitlist", value: "27" },
];
