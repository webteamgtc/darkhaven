"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "info", title: "1. Information We Collect" },
  { id: "use", title: "2. How We Use Your Information" },
  { id: "sharing", title: "3. Information Sharing" },
  { id: "security", title: "4. Data Security" },
  { id: "retention", title: "5. Data Retention" },
  { id: "cookies", title: "6. Cookies & Tracking" },
  { id: "rights", title: "7. Your Rights" },
  { id: "children", title: "8. Children's Privacy" },
  { id: "changes", title: "9. Changes to This Policy" },
  { id: "contact", title: "10. Contact Us" },
];

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState("info");

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

  return (
    <main>
      <Navbar />
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden" style={{ background: "#0F0F12" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A962" }}>Legal</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4 text-white">Privacy Policy</h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Last updated: June 2026</p>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
            {/* Sidebar */}
            <nav className="hidden lg:block">
              <div className="sticky top-28">
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9A962" }}>Contents</h3>
                <div className="space-y-1.5">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className="flex items-center justify-between w-full text-left text-sm px-3.5 py-2.5 rounded-lg transition-all duration-200 border"
                      style={active === s.id
                        ? { background: "rgba(201,169,98,0.1)", color: "#fff", borderColor: "rgba(201,169,98,0.25)", fontWeight: 500 }
                        : { color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.06)", background: "transparent" }
                      }
                    >
                      <span>{s.title}</span>
                      <svg className="w-3.5 h-3.5 flex-shrink-0 ml-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile dropdown */}
            <div className="lg:hidden mb-6">
              <select
                onChange={(e) => scrollTo(e.target.value)}
                value={active}
                className="w-full rounded-lg px-4 py-2.5 text-sm border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "#fff" }}
              >
                {sections.map((s) => (
                  <option key={s.id} value={s.id} style={{ background: "#1a1a1a" }}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Content */}
            <div className="space-y-0">
              {[
                {
                  id: "info",
                  title: "1. Information We Collect",
                  content: (
                    <>
                      <p className="mb-3">We may collect the following personal data:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Full name</li>
                        <li>Contact details (email, phone number)</li>
                        <li>Company name and role</li>
                        <li>Identification information (for verification)</li>
                        <li>Technical usage data (IP address, browser type, device information)</li>
                        <li>System interaction records</li>
                      </ul>
                    </>
                  ),
                },
                {
                  id: "use",
                  title: "2. How We Use Your Information",
                  content: (
                    <>
                      <p className="mb-3">Your personal data may be used to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Process service registrations and onboarding</li>
                        <li>Verify identity and eligibility</li>
                        <li>Communicate service-related updates and notifications</li>
                        <li>Manage security, access control, and system compliance</li>
                        <li>Conduct internal reporting and performance analysis</li>
                        <li>Improve and optimize our technology services</li>
                      </ul>
                      <p className="mt-3">We do not sell personal data to third parties.</p>
                    </>
                  ),
                },
                {
                  id: "sharing",
                  title: "3. Information Sharing",
                  content: (
                    <>
                      <p className="mb-3">Darkhaven does not share your personal information with third parties except in the following circumstances:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>With your explicit consent</li>
                        <li>With authorized service providers who assist in our operations under strict confidentiality</li>
                        <li>When required by law or legal process</li>
                        <li>To protect the rights, property, or safety of Darkhaven, our clients, or others</li>
                      </ul>
                    </>
                  ),
                },
                {
                  id: "security",
                  title: "4. Data Security",
                  content: (
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Personal data is handled securely and confidentially</li>
                      <li>Access is limited to authorized personnel only</li>
                      <li>Data is processed in accordance with applicable data protection laws</li>
                      <li>Data is retained only as long as necessary for service purposes</li>
                      <li>We employ industry-standard encryption and security protocols</li>
                    </ul>
                  ),
                },
                {
                  id: "retention",
                  title: "5. Data Retention",
                  content: <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When data is no longer needed, it is securely deleted or anonymized.</p>,
                },
                {
                  id: "cookies",
                  title: "6. Cookies & Tracking",
                  content: (
                    <>
                      <p className="mb-3">Our website may use cookies and similar tracking technologies to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Improve website performance and user experience</li>
                        <li>Remember your preferences and settings</li>
                      </ul>
                      <p className="mt-3">You can manage cookie preferences through your browser settings. Disabling cookies may affect certain website functionalities.</p>
                    </>
                  ),
                },
                {
                  id: "rights",
                  title: "7. Your Rights",
                  content: (
                    <>
                      <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Access your personal data held by us</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your personal data</li>
                        <li>Object to or restrict processing of your data</li>
                        <li>Request data portability</li>
                        <li>Withdraw consent at any time</li>
                      </ul>
                      <p className="mt-3">To exercise any of these rights, please contact us at support@darkhaven.com.</p>
                    </>
                  ),
                },
                {
                  id: "children",
                  title: "8. Children\u2019s Privacy",
                  content: <p>Darkhaven&apos;s services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.</p>,
                },
                {
                  id: "changes",
                  title: "9. Changes to This Policy",
                  content: <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>,
                },
                {
                  id: "contact",
                  title: "10. Contact Us",
                  content: (
                    <>
                      <p className="mb-3">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                      <ul className="space-y-2">
                        <li><strong className="text-white">Email:</strong> support@darkhaven.com</li>
                        <li><strong className="text-white">Phone:</strong> (657) 531-9327</li>
                      </ul>
                    </>
                  ),
                },
              ].map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="border-b py-6 sm:py-8"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <h2
                    className="text-base sm:text-lg font-semibold mb-3 pb-3 border-b"
                    style={{ color: "#C9A962", borderColor: "rgba(201,169,98,0.2)" }}
                  >
                    {section.title}
                  </h2>
                  <div className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
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
