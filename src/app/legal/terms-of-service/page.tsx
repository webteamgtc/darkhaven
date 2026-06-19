"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Description of Services" },
  { id: "use", title: "3. Use of Services" },
  { id: "ip", title: "4. Intellectual Property" },
  { id: "limitations", title: "5. Limitation of Liability" },
  { id: "warranties", title: "6. Warranties & Disclaimers" },
  { id: "termination", title: "7. Termination" },
  { id: "indemnification", title: "8. Indemnification" },
  { id: "governing", title: "9. Governing Law" },
  { id: "contact", title: "10. Contact Us" },
];

export default function TermsOfServicePage() {
  const [active, setActive] = useState("acceptance");

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const contentSections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: <p className="text-text-dark-2">By accessing or using Darkhaven&apos;s services, platform, or website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services. These terms apply to all users, clients, and visitors of Darkhaven&apos;s technology services.</p>,
    },
    {
      id: "services",
      title: "2. Description of Services",
      content: (
        <>
          <p className="mb-3 text-text-dark-2">Darkhaven provides technology and infrastructure services including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-2 text-text-dark-2">
            <li>Intelligent data systems and analytics</li>
            <li>AI and software engineering solutions</li>
            <li>Digital infrastructure and backend systems</li>
            <li>Enterprise technology consulting</li>
          </ul>
          <p className="mt-3 text-text-dark-2">Darkhaven reserves the right to modify, suspend, or discontinue any service at any time without prior notice.</p>
        </>
      ),
    },
    {
      id: "use",
      title: "3. Use of Services",
      content: (
        <>
          <p className="mb-3 text-text-dark-2">You agree to use our services only for lawful purposes and in accordance with these terms. You must not:</p>
          <ul className="list-disc pl-5 space-y-2 text-text-dark-2">
            <li>Use our services in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of our systems</li>
            <li>Interfere with or disrupt the integrity or performance of our services</li>
            <li>Reverse-engineer, decompile, or disassemble any software provided by Darkhaven</li>
            <li>Use our services to transmit malicious code or harmful content</li>
          </ul>
        </>
      ),
    },
    {
      id: "ip",
      title: "4. Intellectual Property",
      content: <p className="text-text-dark-2">All content, software, designs, and materials on Darkhaven&apos;s platform are the intellectual property of Darkhaven or its licensors. You may not reproduce, distribute, modify, or create derivative works without our written permission. Darkhaven retains all rights not expressly granted in these terms.</p>,
    },
    {
      id: "limitations",
      title: "5. Limitation of Liability",
      content: <p className="text-text-dark-2">To the maximum extent permitted by law, Darkhaven shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. This includes damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.</p>,
    },
    {
      id: "warranties",
      title: "6. Warranties & Disclaimers",
      content: <p className="text-text-dark-2">Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. Darkhaven does not warrant that our services will be uninterrupted, error-free, or free of harmful components. We make no guarantee regarding the results obtained from the use of our services.</p>,
    },
    {
      id: "termination",
      title: "7. Termination",
      content: <p className="text-text-dark-2">Either party may terminate the service relationship in accordance with the terms of any applicable service agreement. Upon termination, you must cease all use of our services and return or destroy any confidential information or materials provided by Darkhaven. Provisions that by their nature should survive termination will remain in effect.</p>,
    },
    {
      id: "indemnification",
      title: "8. Indemnification",
      content: <p className="text-text-dark-2">You agree to indemnify and hold Darkhaven, its officers, directors, employees, and agents harmless from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.</p>,
    },
    {
      id: "governing",
      title: "9. Governing Law",
      content: <p className="text-text-dark-2">These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through appropriate legal channels. Darkhaven retains final authority to interpret and enforce these terms.</p>,
    },
    {
      id: "contact",
      title: "10. Contact Us",
      content: (
        <>
          <p className="mb-3 text-text-dark-2">For questions regarding these Terms of Service, please contact:</p>
          <ul className="space-y-2 text-text-dark-2">
            <li><strong className="text-text-dark">Email:</strong> support@darkhaven.com</li>
            <li><strong className="text-text-dark">Phone:</strong> (657) 531-9327</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <main>
      <Navbar />
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-medium text-blue uppercase tracking-widest">Legal</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4 text-text-dark">Terms of Service</h1>
            <p className="text-sm text-text-dark-3">Last updated: June 2026</p>
          </div>

          <div className="flex gap-8 lg:gap-12">
            {/* Sticky Sidebar */}
            <nav className="hidden lg:block w-[260px] flex-shrink-0">
              <div className="sticky top-28">
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-blue">Contents</h3>
                <div className="space-y-1.5">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className="flex items-center justify-between w-full text-left text-sm px-3.5 py-2.5 rounded-lg transition-all duration-200 border"
                      style={active === s.id
                        ? { background: "rgba(59,130,246,0.06)", color: "#2563EB", borderColor: "#3B82F6", fontWeight: 600, boxShadow: "0 0 12px rgba(59,130,246,0.15)" }
                        : { color: "#6b6966", borderColor: "#f0f0f0", background: "#fafafa" }
                      }
                    >
                      <span>{s.title}</span>
                      <svg className="w-3.5 h-3.5 flex-shrink-0 ml-2" style={{ opacity: active === s.id ? 0.7 : 0.3 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile dropdown */}
            <div className="lg:hidden mb-6 w-full">
              <select
                onChange={(e) => scrollTo(e.target.value)}
                value={active}
                className="w-full bg-white border border-light-2 rounded-lg px-4 py-2.5 text-sm text-text-dark"
              >
                {sections.map((s) => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-4">
              {contentSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="border rounded-xl p-0 overflow-hidden"
                  style={{ borderColor: active === section.id ? "#3B82F6" : "#e8e8e8" }}
                >
                  {/* Heading with divider */}
                  <div
                    className="px-5 sm:px-6 py-3.5 sm:py-4 border-b"
                    style={{ borderColor: active === section.id ? "rgba(59,130,246,0.2)" : "#f0f0f0", background: active === section.id ? "rgba(59,130,246,0.03)" : "#fafafa" }}
                  >
                    <h2
                      className="text-sm sm:text-base font-semibold"
                      style={{ color: active === section.id ? "#2563EB" : "#0f0d0c" }}
                    >
                      {section.title}
                    </h2>
                  </div>
                  {/* Content body */}
                  <div className="px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}