import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Capabilities — Darkhaven | Intelligent Data, AI Engineering & Cloud Infrastructure",
  description: "Discover Darkhaven's core capabilities: intelligent data systems, AI and software engineering, and digital infrastructure built for enterprise-scale operations.",
};

const capabilities = [
  {
    title: "Data Systems & Integration",
    description: "We help organizations structure operational data, map information workflows, and plan integrations between essential systems.",
    items: [
      "Data structure and workflow mapping",
      "Data pipeline planning",
      "API and system integration design",
      "Reporting and dashboard foundations",
      "Technical Data Access & Governance Considerations",
    ],
  },
  {
    title: "AI Applications & Software Engineering",
    description: "We support the planning and development of AI-enabled applications, internal tools, and workflow automation solutions.",
    items: [
      "AI use-case discovery",
      "AI-enabled application development",
      "Internal tools and workflow systems",
      "Automation design",
      "Backend and API development",
      "Technical proof-of-concept support",
    ],
  },
  {
    title: "Backend Systems & Digital Infrastructure",
    description: "We support the design and development of backend services, APIs, cloud-ready environments, and technical foundations for digital products.",
    items: [
      "Backend architecture planning",
      "API and integration services",
      "Cloud environment setup",
      "Deployment workflow design",
      "System documentation and handover",
      "Monitoring and maintenance planning",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-20 pb-16 sm:py-24 md:py-32 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6 text-text-dark">
              Technology Services &amp; <span className="shimmer-blue">Capabilities</span>
            </h1>
            <p className="text-text-dark-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Darkhaven supports organizations with technology planning, software development, data systems, and digital infrastructure projects.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-light rounded-2xl border border-light-2 p-6 sm:p-8 lg:p-10 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/[0.08] border border-blue/15 mb-4">
                      <span className="text-xs font-semibold text-blue">0{i + 1}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-text-dark mb-3">{cap.title}</h2>
                    <p className="text-text-dark-3 text-sm sm:text-base leading-relaxed">{cap.description}</p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {cap.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-text-dark-2 text-sm sm:text-base">{item}</span>
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
