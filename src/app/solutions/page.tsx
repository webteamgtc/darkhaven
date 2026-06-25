import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Solutions — Darkhaven | Enterprise Technology & Scalable Digital Systems",
  description: "Darkhaven's solutions empower organizations with AI-driven analytics, cloud-native platforms, secure infrastructure, and modular software architecture for modern enterprises.",
};

const solutions = [
  {
    label: "TECHNOLOGY TEAMS",
    title: "For Internal Technology Teams",
    description: "Supporting teams that are planning system improvements, software upgrades, or new digital workflows.",
    features: [
      { name: "System Review", detail: "Assessing current systems and identifying technical priorities" },
      { name: "Upgrade Planning", detail: "Supporting migration, modernization, and improvement roadmaps" },
      { name: "Integration Planning", detail: "Exploring how systems, data, and workflows can connect more effectively" },
    ],
  },
  {
    label: "AI-FOCUSED STARTUPS",
    title: "For AI-Focused Startups",
    description: "Supporting early-stage teams exploring AI-enabled products, data workflows, and technical foundations.",
    features: [
      { name: "AI Use-Case Discovery", detail: "Identifying practical opportunities for AI within a product or workflow" },
      { name: "Data Workflow Planning", detail: "Structuring how information can be collected, processed, and used" },
      { name: "Product Architecture Support", detail: "Planning adaptable technical foundations for early product development" },
    ],
  },
  {
    label: "SOFTWARE PRODUCT TEAMS",
    title: "For Software Product Teams",
    description: "Supporting product-focused companies with backend planning, application development, and integration requirements.",
    features: [
      { name: "Backend Development Support", detail: "Assisting with backend services and application logic" },
      { name: "System Architecture Planning", detail: "Mapping technical components, workflows, and service requirements" },
      { name: "API & Integration Design", detail: "Planning APIs and connections between digital systems" },
    ],
  },
  {
    label: "STRUCTURED ORGANISATIONS",
    title: "For Organisations with Complex Requirements",
    description: "Supporting organisations that require clearer technical planning, structured workflows, and considered system design.",
    features: [
      { name: "Security Considerations", detail: "Considering access, permissions, and data handling during system planning" },
      { name: "Reliability Planning", detail: "Including maintainability, recovery, and continuity considerations in project design" },
      { name: "Documentation Support", detail: "Supporting technical documentation, process mapping, and handover requirements" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-20 pb-16 sm:py-24 md:py-32 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
          
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
                  <span className="text-xs font-semibold text-blue">{sol.label}</span>
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
