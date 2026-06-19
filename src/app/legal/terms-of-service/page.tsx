"use client";

import { useState } from "react";
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

  return (
    <main>
      <Navbar />
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden" style={{ background: "#0F0F12" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A962" }}>Legal</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4 text-white">Terms of Service</h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Last updated: June 2026</p>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
            <nav className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9A962" }}>Contents</h3>
                <div className="space-y-1">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActive(s.id);
                        document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors"
                      style={active === s.id ? { background: "rgba(201,169,98,0.12)", color: "#fff" } : { color: "rgba(255,255,255,0.55)" }}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            <div className="lg:hidden mb-6">
              <select
                onChange={(e) => {
                  setActive(e.target.value);
                  document.getElementById(e.target.value)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                value={active}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-2.5 text-sm"
              >
                {sections.map((s) => (
                  <option key={s.id} value={s.id} style={{ background: "#1a1a1a" }}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-10 text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              <div id="acceptance">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>1. Acceptance of Terms</h2>
                <p>By accessing or using Darkhaven&apos;s services, platform, or website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services. These terms apply to all users, clients, and visitors of Darkhaven&apos;s technology services.</p>
              </div>

              <div id="services">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>2. Description of Services</h2>
                <p className="mb-3">Darkhaven provides technology and infrastructure services including but not limited to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Intelligent data systems and analytics</li>
                  <li>AI and software engineering solutions</li>
                  <li>Digital infrastructure and backend systems</li>
                  <li>Enterprise technology consulting</li>
                </ul>
                <p className="mt-3">Darkhaven reserves the right to modify, suspend, or discontinue any service at any time without prior notice.</p>
              </div>

              <div id="use">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>3. Use of Services</h2>
                <p className="mb-3">You agree to use our services only for lawful purposes and in accordance with these terms. You must not:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use our services in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of our systems</li>
                  <li>Interfere with or disrupt the integrity or performance of our services</li>
                  <li>Reverse-engineer, decompile, or disassemble any software provided by Darkhaven</li>
                  <li>Use our services to transmit malicious code or harmful content</li>
                </ul>
              </div>

              <div id="ip">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>4. Intellectual Property</h2>
                <p>All content, software, designs, and materials on Darkhaven&apos;s platform are the intellectual property of Darkhaven or its licensors. You may not reproduce, distribute, modify, or create derivative works without our written permission. Darkhaven retains all rights not expressly granted in these terms.</p>
              </div>

              <div id="limitations">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>5. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Darkhaven shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. This includes damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.</p>
              </div>

              <div id="warranties">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>6. Warranties &amp; Disclaimers</h2>
                <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. Darkhaven does not warrant that our services will be uninterrupted, error-free, or free of harmful components. We make no guarantee regarding the results obtained from the use of our services.</p>
              </div>

              <div id="termination">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>7. Termination</h2>
                <p>Either party may terminate the service relationship in accordance with the terms of any applicable service agreement. Upon termination, you must cease all use of our services and return or destroy any confidential information or materials provided by Darkhaven. Provisions that by their nature should survive termination will remain in effect.</p>
              </div>

              <div id="indemnification">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>8. Indemnification</h2>
                <p>You agree to indemnify and hold Darkhaven, its officers, directors, employees, and agents harmless from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.</p>
              </div>

              <div id="governing">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>9. Governing Law</h2>
                <p>These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through appropriate legal channels. Darkhaven retains final authority to interpret and enforce these terms.</p>
              </div>

              <div id="contact">
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#C9A962" }}>10. Contact Us</h2>
                <p className="mb-3">For questions regarding these Terms of Service, please contact:</p>
                <ul className="space-y-2">
                  <li><strong className="text-white">Email:</strong> support@darkhaven.com</li>
                  <li><strong className="text-white">Phone:</strong> (657) 531-9327</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
