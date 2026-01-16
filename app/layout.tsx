import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zuri | AI Closet Stylist & Virtual Try-On",
  description:
    "Zuri blends smart wardrobe digitization, virtual try-ons, and instant styling guidance so every look feels curated before you leave home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
