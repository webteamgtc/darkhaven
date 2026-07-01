import Link from "next/link";

const platforms = [
  {
    id: "trading-system",
    icon: "⚡",
    tag: "MARKET TECHNOLOGY",
    label: "WHITE-LABEL SOFTWARE",
    title: "White-Label Market Infrastructure",
    desc: "Configurable software infrastructure for client-managed market-service environments, including workflow tools, selected integrations and operational administration features.",
  },
  {
    id: "crm-system",
    icon: "👤",
    tag: "CLIENT OPERATIONS",
    label: "CRM SOFTWARE",
    title: "MT4/MT5-Connected CRM Software",
    desc: "Configurable CRM and workflow software that helps client teams organize records, communications, permissions and selected third-party system connections.",
  },
  {
    id: "copy-community",
    icon: "🔗",
    tag: "WORKFLOW TOOLS",
    label: "SYNCHRONIZATION SOFTWARE",
    title: "Cross-Environment Workflow Software",
    desc: "Client-deployed workflow synchronization tools for compatible third-party environments, with configurable permissions, administrative controls and deployment settings.",
  },
  {
    id: "ai-stock-selection",
    icon: "🤖",
    tag: "AI · ANALYTICS",
    label: "RESEARCH INFRASTRUCTURE",
    title: "AI Research & Analytical Infrastructure",
    desc: "Configurable AI and data-processing tooling that supports client-authorized research workflows, analytical inputs, model testing and governance processes.",
  },
  {
    id: "futures-arbitrage",
    icon: "📉",
    tag: "DATA · MODELS",
    label: "QUANTITATIVE WORKFLOWS",
    title: "Quantitative Research & Workflow Infrastructure",
    desc: "Client-configured software for structured data processing, model documentation, review workflows and operational controls within independently managed environments.",
  },
  {
    id: "forex-ea",
    icon: "🧠",
    tag: "AI · AUTOMATION",
    label: "WORKFLOW SOFTWARE",
    title: "AI-Enabled Workflow & Analytics Infrastructure",
    desc: "Modular tools that support client-defined data processing, model configuration, scheduled workflows and technical administration across approved environments.",
  },
  {
    id: "ai-customer-service",
    icon: "💬",
    tag: "AI · SUPPORT",
    label: "CUSTOMER SERVICE SOFTWARE",
    title: "AI Customer Service & Workflow Software",
    desc: "Configurable AI-powered software for inquiry management, response workflows, escalation routing and client-controlled service administration.",
  },
];

export default function PlatformsPreview() {
  return (
    <section className="py-10 sm:py-16 bg-gray-100" id="platforms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-sm font-medium text-blue uppercase tracking-widest">Our Technology</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-5 text-text-dark">
            Client-Deployed <span className="shimmer-blue">Technology Systems</span>
          </h2>
          <p className="text-text-dark-3 text-base sm:text-lg mx-auto leading-relaxed">
            Darkhaven builds configurable white-label software, CRM, AI and data infrastructure for independent business clients. Each solution is delivered for client deployment and administration within the client&apos;s own operating environment. Darkhaven provides technology and implementation support only.
          </p>
        </div>

        {/* Cards Grid */}
        {/* Row 1 - 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {platforms.slice(0, 4).map((p) => (
            <Link
              key={p.id}
              href={`/platforms#${p.id}`}
              className="group bg-white rounded-2xl border border-light-2 p-5 sm:p-6 hover:border-blue/25 hover:shadow-xl hover:shadow-blue/8 transition-all duration-300 flex flex-col"
            >
              {/* Icon + Tag row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue/[0.08] border border-blue/15 flex items-center justify-center text-xl group-hover:bg-blue/[0.14] transition-colors flex-shrink-0">
                  {p.icon}
                </div>
              
              </div>
              <p className="text-[11px] font-semibold text-blue uppercase tracking-widest mb-1">{p.label}</p>
              <h3 className="text-sm sm:text-[15px] font-semibold text-text-dark mb-2 leading-snug group-hover:text-blue transition-colors">
                {p.title}
              </h3>
              <p className="text-text-dark-3 text-xs sm:text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-black text-xs font-medium opacity-100 hover:text-blue group-hover:opacity-100 transition-opacity duration-200">
                Explore solution
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2 - 3 cards full width */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {platforms.slice(4).map((p) => (
            <Link
              key={p.id}
              href={`/platforms#${p.id}`}
              className="group bg-white rounded-2xl border border-light-2 p-5 sm:p-6 hover:border-blue/25 hover:shadow-xl hover:shadow-blue/8 transition-all duration-300 flex flex-col"
            >
              {/* Icon + Tag row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue/[0.08] border border-blue/15 flex items-center justify-center text-xl group-hover:bg-blue/[0.14] transition-colors flex-shrink-0">
                  {p.icon}
                </div>
               
              </div>
              <p className="text-[11px] font-semibold text-blue uppercase tracking-widest mb-1">{p.label}</p>
              <h3 className="text-sm sm:text-[15px] font-semibold text-text-dark mb-2 leading-snug group-hover:text-blue transition-colors">
                {p.title}
              </h3>
              <p className="text-text-dark-3 text-xs sm:text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-black hover:text-blue text-xs font-medium opacity-100 group-hover:opacity-100 transition-opacity duration-200">
                Explore solution
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/platforms"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue to-blue-dark text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-blue/25 transition-all duration-300"
          >
            View All Platforms
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}