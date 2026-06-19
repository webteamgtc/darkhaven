import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Capabilities — Darkhaven",
  description: "Explore Darkhaven's core capabilities across intelligent data systems, AI & software engineering, and digital infrastructure.",
};

const capabilities = [
  {
    title: "Intelligent Data Systems",
    description: "We design structured data systems that enable organizations to collect, process, and operationalize information efficiently across distributed environments.",
    items: [
      "Real-time data processing & analytics",
      "Distributed data architecture design",
      "Automated data pipeline engineering",
      "Enterprise data governance frameworks",
      "Cross-platform data integration systems",
    ],
  },
  {
    title: "AI & Software Engineering",
    description: "We build artificial intelligence frameworks and enterprise software solutions that support automation, decision systems, and operational intelligence.",
    items: [
      "Custom AI/ML model development",
      "Decision system architecture",
      "Enterprise software engineering",
      "Process automation platforms",
      "Operational intelligence tools",
    ],
  },
  {
    title: "Digital Infrastructure & Backend Systems",
    description: "We develop scalable backend architectures, cloud-based systems, and enterprise infrastructure that ensure reliability, security, and performance.",
    items: [
      "Cloud infrastructure engineering",
      "Scalable backend system design",
      "API & microservices architecture",
      "High-availability system deployment",
      "Infrastructure monitoring & optimization",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <main>
      <Navbar />
      <section className="relative py-16 sm:py-24 md:py-32 bg-dark overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue/[0.06] rounded-full blur-[200px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-medium text-blue-light uppercase tracking-widest">Our Capabilities</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6 text-white">
              Enterprise-Grade <span className="shimmer-blue">Technology Capabilities</span>
            </h1>
            <p className="text-text-light-2 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Darkhaven delivers structured, scalable, and intelligent technology solutions across three core capability domains.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-dark-2 rounded-2xl border border-white/[0.06] p-6 sm:p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/[0.08] border border-blue/15 mb-4">
                      <span className="text-xs font-semibold text-blue-light">0{i + 1}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">{cap.title}</h2>
                    <p className="text-text-light-2 text-sm sm:text-base leading-relaxed">{cap.description}</p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {cap.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-text-light-2 text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
