"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = ({
    logoSrc = "/zuri.png",
    links = [
        { label: "CAREER", href: "/coming-soon" },
        { label: "CONTACT US", href: "/contact-us" },
        // { label: "ZURI MAGAZINE", href: "#" },
    ],
    ctaText = "Start Styling",
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex items-center justify-center px-2 sm:px-4">
            <div
                className="
          flex items-center justify-between lg:justify-start gap-2 sm:gap-4 md:gap-6
          rounded-full border border-black/5 bg-white/50
          px-3 sm:px-4 md:px-6 py-2
          h-12 sm:h-14 w-full max-w-6xl
          shadow-[0_10px_30px_rgba(12,6,24,0.07)]
          backdrop-blur-md
        "
            >
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src={logoSrc}
                        alt="Logo"
                        width={52}
                        height={103}
                        className="w-8 h-auto sm:w-10 md:w-12 rounded-full"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="flex-1 hidden lg:block" />
                <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
                    {links.map((link) => (
                        // 1. Capitalized Link
                        // 2. Key moved to the outermost element
                        <Link href={link.href} key={link.label}>
                            <button className="text-[10.8px] xl:text-sm font-outfit text-[#555555] tracking-wide hover:text-[#920146] transition-colors">
                                {link.label}
                            </button>
                        </Link>
                    ))}
                </nav>
                <div className="flex-1 hidden lg:block" />

                {/* Action Button & Mobile Toggle */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={null}
                        className="
              hidden sm:block rounded-full bg-gradient-to-r from-[#F2D1DA] to-[rgba(226,92,126,0.2)]
              px-5 py-2.5 text-[12px] leading-none font-outfit text-[#4E4D4D]
              shadow-[0_4px_12px_0_rgba(226,92,126,0.2)] hover:opacity-90 transition whitespace-nowrap
            "
                    >
                        {ctaText}
                    </button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-[#555555] hover:text-[#920146] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed top-16 left-2 right-2 z-50 bg-white/80 rounded-2xl shadow-[0_10px_30px_rgba(12,6,24,0.07)] backdrop-blur-xl border border-white/20">
                    <nav className="flex flex-col p-4 gap-1">
                        {links.map((link) => (
                            <button
                                key={link.label}
                                className="text-sm font-outfit text-[#555555] tracking-wide hover:text-[#920146] transition-colors text-left py-3 border-b border-black/5 last:border-0"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={onCtaClick}
                            className="
                mt-4 w-full rounded-full bg-gradient-to-r from-[#F2D1DA] to-[rgba(226,92,126,0.2)]
                py-3 text-[12px] font-outfit text-[#4E4D4D] shadow-[0_4px_12px_0_rgba(226,92,126,0.2)]
              "
                        >
                            {ctaText}
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;