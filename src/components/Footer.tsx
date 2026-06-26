"use client";

import Image from "next/image";

const links = {
  Company: [
    { name: "About Us", href: "/#about" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Solutions", href: "/solutions" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms-of-service" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-28 h-8 sm:w-32 sm:h-9">
              <Image
                src="/whitelogo.png"
                alt="Darkhaven"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {Object.entries(links).flatMap(([, items]) =>
              items.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-light-3 text-sm hover:text-blue-light transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))
            )}
          </div>

          {/* CTA */}
          <a
            href="/#contact"
            className="text-sm font-medium text-dark bg-gradient-to-r from-gold-dark via-gold-light to-gold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Copyright bar - blue shining bg */}
      <div className="bg-gradient-to-r from-blue-deep via-blue-dark to-blue-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-xs text-blue-light/60">
            &copy; {new Date().getFullYear()} Darkhaven. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-light animate-pulse" />
              <span className="text-[11px] text-green-light font-medium">All Systems Operational</span>
            </div>
            <a href="mailto:support@darkhaven.ai" className="text-[11px] text-blue-light/60 hover:text-blue-light transition-colors">support@darkhaven.ai</a>
            <a href="tel:6575319327" className="text-[11px] text-blue-light/60 hover:text-blue-light transition-colors">(657) 531-9327</a>
            <span className="text-[11px] text-blue-light/60">300 Spectrum Center Dr Suite 400, Irvine, CA 92618</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
