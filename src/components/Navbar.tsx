"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Clients", href: "#clients" },
  { name: "Values", href: "#values" },
  { name: "Compliance", href: "#compliance" },
  { name: "Contact", href: "#contact" },
];

const tickerItems = [
  "FCA Authorized · United Kingdom",
  "CySEC Licensed · European Union",
  "ASIC Registered · Australia",
  "FSCA Authorized · South Africa",
  "$2.5B+ Assets Under Management",
  "350+ Institutional Clients Worldwide",
  "40+ Regulated Markets",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.7);
      const sectionEls = navLinks.map((s) => document.getElementById(s.href.replace("#", "")));
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(navLinks[i].href.replace("#", ""));
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Over hero (dark) or over dark sections → white text. Otherwise → dark text
  const whatWeDoEl = typeof document !== "undefined" ? document.getElementById("solutions") : null;
  const complianceEl = typeof document !== "undefined" ? document.getElementById("compliance") : null;
  const isOverDarkSection = (el: HTMLElement | null) => el !== null && el.getBoundingClientRect().top <= 80 && el.getBoundingClientRect().bottom > 80;
  const isDark = isHeroVisible || isOverDarkSection(whatWeDoEl) || isOverDarkSection(complianceEl);

  return (
    <>
      {/* Marquee Ticker */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-blue-deep/90 backdrop-blur-sm border-b border-blue/10 overflow-hidden h-8 flex items-center">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-8 text-xs text-blue-light/70 font-medium flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-green/60" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? "bg-dark/80 backdrop-blur-2xl border-b border-blue/5"
              : "bg-white/80 backdrop-blur-2xl border-b border-black/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue to-blue-dark flex items-center justify-center shadow-lg shadow-blue/20">
                <span className="text-white font-bold text-base">D</span>
              </div>
              <span className={`text-lg font-semibold transition-colors duration-500 ${isDark ? "text-white" : "text-text-dark"}`}>
                Drak<span className="shimmer-blue">Haven</span>
              </span>
            </a>

            <div className={`hidden lg:flex items-center gap-1 rounded-full px-1.5 py-1 transition-all duration-500 ${
              isDark
                ? "bg-white/[0.03] border border-white/[0.04]"
                : "bg-black/[0.03] border border-black/[0.04]"
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-[13px] rounded-full transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white bg-blue shadow-md shadow-blue/20"
                      : isDark
                        ? "text-text-light-3 hover:text-white hover:bg-white/[0.04]"
                        : "text-text-dark-3 hover:text-text-dark hover:bg-black/[0.04]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-blue to-blue-dark text-white rounded-full hover:shadow-lg hover:shadow-blue/25 transition-all duration-300"
              >
                Book a Demo
              </a>
            </div>

            <button className={`lg:hidden transition-colors duration-500 ${isDark ? "text-white" : "text-text-dark"}`} onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`lg:hidden backdrop-blur-2xl border-t transition-colors duration-500 ${
                isDark
                  ? "bg-dark-2/98 border-blue/10"
                  : "bg-white/98 border-black/[0.04]"
              }`}
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-sm transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-blue bg-blue/5"
                        : isDark
                          ? "text-text-light-3 hover:text-white"
                          : "text-text-dark-3 hover:text-text-dark"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full mt-3 text-center px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue to-blue-dark text-white rounded-full"
                >
                  Book a Demo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
