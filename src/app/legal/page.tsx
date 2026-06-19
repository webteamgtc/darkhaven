import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Legal Center — Darkhaven",
  description: "Darkhaven Legal Center — Privacy Policy, Terms of Service, and Disclaimer.",
};

const legalPages = [
  {
    title: "Privacy Policy",
    description: "How Darkhaven collects, uses, and protects your personal information.",
    href: "/legal/privacy-policy",
  },
  {
    title: "Terms of Service",
    description: "The terms and conditions governing your use of Darkhaven's services and platform.",
    href: "/legal/terms-of-service",
  },
  {
    title: "Disclaimer",
    description: "Important legal disclaimers regarding Darkhaven's technology services and content.",
    href: "/legal/disclaimer",
  },
];

export default function LegalCenterPage() {
  return (
    <main>
      <Navbar />
      <section className=" pt-16 sm:pt-24 md:pt-32 bg-white mb-10 md:mb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-medium text-blue uppercase tracking-widest">Legal Center</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6 text-text-dark">
              Legal <span className="shimmer-blue">Center</span>
            </h1>
            <p className="text-text-dark-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Access Darkhaven&apos;s legal documents, policies, and terms governing our technology services and platform usage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {legalPages.map((page, i) => (
              <Link
                key={i}
                href={page.href}
                className="group bg-light rounded-2xl border border-light-2 p-6 sm:p-8 hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center mb-4 group-hover:bg-blue/15 transition-colors">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-text-dark mb-2 group-hover:text-blue transition-colors">{page.title}</h2>
                <p className="text-text-dark-3 text-sm leading-relaxed">{page.description}</p>
                <div className="mt-4 flex items-center gap-1 text-blue text-sm font-medium">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
