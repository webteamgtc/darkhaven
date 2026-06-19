import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Solutions — Darkhaven",
  description: "Darkhaven's solutions empower organizations with intelligent systems, scalable architecture, and secure digital infrastructure.",
};

const solutions = [
  {
    title: "For Enterprise Technology Teams",
    description: "Supporting internal system modernization and digital transformation for organizations upgrading their technology stack.",
    features: [
      { name: "System Modernization", detail: "Legacy system migration and upgrade roadmaps" },
      { name: "Digital Transformation", detail: "End-to-end digital strategy and implementation" },
      { name: "Infrastructure Upgrade", detail: "Cloud migration and hybrid infrastructure design" },
    ],
  },
  {
    title: "For AI-Driven Startups",
    description: "Building scalable AI and data infrastructure foundations for the next generation of intelligent applications.",
    features: [
      { name: "AI Infrastructure", detail: "MLOps pipelines and model deployment frameworks" },
      { name: "Data Pipelines", detail: "Scalable data ingestion and processing systems" },
      { name: "Scalable Architecture", detail: "Architecture designed for rapid growth" },
    ],
  },
  {
    title: "For Software-First Companies",
    description: "Providing backend engineering and system architecture support for companies building software-centric products.",
    features: [
      { name: "Backend Engineering", detail: "High-performance backend system development" },
      { name: "System Architecture", detail: "Microservices and distributed system design" },
      { name: "API Design", detail: "RESTful and GraphQL API architecture" },
    ],
  },
  {
    title: "For Institutional Organizations",
    description: "Delivering secure, high-performance digital systems for organizations requiring enterprise-grade reliability.",
    features: [
      { name: "Enterprise Security", detail: "Security-first architecture and compliance frameworks" },
      { name: "High Performance", detail: "Optimized systems for mission-critical workloads" },
      { name: "Compliance Ready", detail: "Built-in audit and governance capabilities" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <Navbar />
      <section className="relative py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm font-medium text-blue uppercase tracking-widest">Solutions</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6 text-text-dark">
              Solutions for <span className="shimmer-blue">Every Scale</span>
            </h1>
            <p className="text-text-dark-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Darkhaven delivers tailored technology solutions designed to meet the unique demands of each organization type.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="bg-light rounded-2xl border border-light-2 p-6 sm:p-8 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/[0.08] border border-blue/15 mb-4">
                  <span className="text-xs font-semibold text-blue">{sol.title.split(" ").slice(-2).join(" ")}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-text-dark mb-3">{sol.title}</h2>
                <p className="text-text-dark-3 text-sm sm:text-base leading-relaxed mb-6">{sol.description}</p>
                <div className="space-y-3">
                  {sol.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-text-dark font-medium text-sm">{feat.name}</span>
                        <span className="text-text-dark-3 text-xs block">{feat.detail}</span>
                      </div>
                    </div>
                  ))}
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
