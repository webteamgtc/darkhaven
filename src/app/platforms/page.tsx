"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ──────────────────────────────────────────────────────────────────

const sections = [
    {
    id: "trading-system",
    nav: "White-Label Market Infrastructure",
    title: "White-Label Market Technology Infrastructure",
    description:
      "Darkhaven builds configurable, white-label software infrastructure for institutional and market-service clients. Our technology can support client-managed workflows across foreign exchange, derivatives and digital-asset-related environments, with each client responsible for its own operational, regulatory and commercial framework.",
    features: [
      {
        icon: "⚡",
        title: "High-Performance System Architecture",
        desc: "Engineered for efficient data processing, workflow handling and resilient technical performance within client-managed environments.",
      },
      {
        icon: "💧",
        title: "Liquidity Connectivity Framework",
        desc: "Configurable technology connectors enable clients to integrate selected liquidity sources, pricing feeds and internal systems within their own operating environment.",
      },
      {
        icon: "📊",
        title: "Configurable Multi-Asset Setup",
        desc: "Clients can configure supported instrument categories, data environments and workflows to align with their own business, technical and regulatory requirements.",
      },
      {
        icon: "📋",
        title: "Configurable Workflow Controls",
        desc: "Tools that enable clients to configure routing logic, permissions, workflow parameters and operational processes within their own deployment.",
      },
      {
        icon: "🛡️",
        title: "Operational Risk-Control Tooling",
        desc: "Configurable monitoring, rule-management and reporting capabilities support client-defined operational controls. Clients remain responsible for their own risk policies and decisions.",
      },
      {
        icon: "🎨",
        title: "Brand & Interface Configuration",
        desc: "White-label interface, identity and experience settings help clients present the technology under their own brand and operating model.",
      },
      {
        icon: "🏛️",
        title: "Resilient Technical Architecture",
        desc: "Modular infrastructure designed to support continuity, observability and operational stability across client deployments.",
      },
      {
        icon: "📈",
        title: "Modular Scalability",
        desc: "Flexible components can be configured to support evolving workflow volumes, user requirements and technical integrations.",
      },
      {
        icon: "🏷️",
        title: "White-Label Deployment",
        desc: "Darkhaven delivers configurable, client-deployed technology that can be integrated into a client's own branded environment and operated independently by that client.",
      },
      {
        icon: "🕐",
        title: "Technical Support",
        desc: "Technical support is available for authorized client teams in accordance with the applicable service and support arrangements.",
      },
    ],
    footer:
      "Darkhaven provides technology and technical support only. Clients remain responsible for their own regulatory obligations, customer communications, data governance, commercial arrangements and operational decisions.",
  },
    {
    id: "crm-system",
    nav: "Client-Configured CRM & Workflow Infrastructure",
    title: "Client-Configured CRM & Workflow Infrastructure",
    description:
      "Darkhaven builds configurable CRM and workflow software for institutional clients operating approved third-party environments, including MT4 and MT5-connected workflows where permitted. The system helps authorized client teams organize customer records, configure operational processes, manage communications and connect selected third-party systems within their own independently operated environment.",
    features: [
      {
        icon: "👤",
        title: "Customer Record Management",
        desc: "Centralize client-provided records, interaction histories and operational notes within a configurable client-managed environment.",
      },
      {
        icon: "🎯",
        title: "Lead Workflow Management",
        desc: "Configure lead-routing stages, task assignments and follow-up workflows for authorized client teams.",
      },
      {
        icon: "📣",
        title: "Communication Automation",
        desc: "Create configurable email and SMS communication workflows, subject to each client's own consent, privacy and communication requirements.",
      },
      {
        icon: "💎",
        title: "Referral & Partner Configuration",
        desc: "Support configurable referral, partner and commission-recording workflows based on client-defined commercial arrangements.",
      },
      {
        icon: "💰",
        title: "Third-Party Service Workflows",
        desc: "Enable clients to configure workflows for selected third-party services or integrations within their own operational environment.",
      },
      {
        icon: "📉",
        title: "Engagement Workflow Insights",
        desc: "Provide configurable reporting views that help client teams review workflow activity, communication status and operational engagement metrics.",
      },
      {
        icon: "💹",
        title: "Configurable Service Modules",
        desc: "Modular CRM components can be configured around a client's selected service workflows, permissions and internal processes.",
      },
      {
        icon: "⚙️",
        title: "Operational Process Configuration",
        desc: "Automation and configurable task-management tools support structured internal workflows and team coordination.",
      },
      {
        icon: "🤝",
        title: "Customer Interaction Management",
        desc: "Authorized client teams can organize customer interactions, preferences and service records in accordance with their own data-governance framework.",
      },
    ],
    footer:
      "Darkhaven provides technology and technical support only. Clients remain responsible for their own regulatory obligations, customer communications, data governance, commercial arrangements and operational decisions.",
  },
    {
    id: "copy-community",
    nav: "Client-Deployed Workflow Synchronization Software",
    title: "Client-Deployed Workflow Synchronization Software",
    description:
      "Darkhaven builds configurable, client-deployed workflow synchronization software for qualified institutional clients. The software can connect with compatible third-party environments to support client-defined permissions, workflow configurations and technical administration. Each client independently operates its own environment and remains responsible for all customer-facing, regulatory, commercial and operational activities.",
    features: [
      {
        icon: "🔗",
        title: "Cross-Environment Configuration",
        desc: "Support client-defined configurations across compatible third-party environments, subject to available integrations and applicable requirements.",
      },
      {
        icon: "⚡",
        title: "Performance-Oriented Architecture",
        desc: "Designed to support efficient data exchange and workflow synchronization across client-managed environments. Actual performance depends on deployment, connectivity and third-party systems.",
      },
      {
        icon: "📱",
        title: "Browser & Mobile Access",
        desc: "Browser-based administrative access helps authorized client teams review and manage configured workflows across approved devices.",
      },
      {
        icon: "☁️",
        title: "Cloud Deployment Options",
        desc: "Flexible deployment options can be configured according to a client's selected cloud environment, technical requirements and data-governance framework.",
      },
      {
        icon: "🔒",
        title: "Private Deployment Configuration",
        desc: "Support client-controlled domains, permissions and environment settings under the applicable deployment arrangement.",
      },
      {
        icon: "👥",
        title: "Role-Based Administration",
        desc: "Configure access roles, permissions and operational controls for authorized client teams.",
      },
      {
        icon: "📋",
        title: "Client-Defined Workflow Rules",
        desc: "Clients can configure internal workflow rules, review processes and authorization settings within their independently operated environment.",
      },
      {
        icon: "📊",
        title: "Activity Logs & Reporting",
        desc: "Configurable logs and reporting views help client teams review system activity, workflow status and technical events.",
      },
      {
        icon: "🔌",
        title: "Integration Management",
        desc: "Support the administration of selected compatible third-party integrations within a client-managed technical environment.",
      },
      {
        icon: "🕐",
        title: "Technical Support",
        desc: "Darkhaven provides technical implementation and support services to authorized client teams under the applicable service arrangement.",
      },
    ],
  },
    {
    id: "ai-stock-selection",
    nav: "AI Research & Analytical Infrastructure",
    title: "AI Research & Analytical Infrastructure",
    description:
      "Darkhaven builds configurable AI research and analytical software infrastructure for business clients. The framework supports client-authorized data connections, configurable analysis workflows and controlled model environments within each client's independently operated technical infrastructure. Clients determine their own data sources, access permissions, workflow settings, review procedures and permitted use cases. Darkhaven provides software and technical support only.",
    features: [
      {
        icon: "🔌",
        title: "Client-Authorized Data Connectivity",
        desc: "Support configurable connections to selected third-party data sources authorized by the client. Availability depends on the client's own agreements, permissions and technical environment.",
      },
      {
        icon: "🤖",
        title: "AI & Machine Learning Tooling",
        desc: "Configurable AI and machine-learning tools support data processing, pattern analysis and model experimentation within a client-managed environment.",
      },
      {
        icon: "📐",
        title: "Configurable Analytical Inputs",
        desc: "Clients can define, document and review analytical inputs, parameters and calculation logic according to their own internal requirements.",
      },
      {
        icon: "🗂️",
        title: "Research Workflow Configuration",
        desc: "Configure internal research stages, review procedures and authorization workflows for designated client teams.",
      },
      {
        icon: "📡",
        title: "Data Monitoring & Version Control",
        desc: "Maintain visibility over data updates, configuration changes and model versions through client-defined logs and review records.",
      },
      {
        icon: "👥",
        title: "Role-Based Administration",
        desc: "Configure user roles, approval flows and access permissions within the client's independently administered environment.",
      },
      {
        icon: "📋",
        title: "Internal Review Workspace",
        desc: "Organize analytical materials, documentation and internal review records for authorized client teams.",
      },
      {
        icon: "⏳",
        title: "Scheduled Processing",
        desc: "Support repeatable data-processing tasks and scheduled workflows based on client-configured parameters.",
      },
      {
        icon: "🔗",
        title: "Integration Management",
        desc: "Help client teams administer compatible integrations, data mappings and system connections across selected environments.",
      },
      {
        icon: "🛡️",
        title: "Model Governance Tooling",
        desc: "Configurable documentation, alerts and approval controls can support a client's internal model-governance processes.",
      },
      {
        icon: "🏗️",
        title: "Client-Deployed Architecture",
        desc: "Software can be deployed within a client-controlled environment, with business use, user access and operating decisions managed independently by that client.",
      },
    ],
    footer:
      "This page describes business-to-business technology services. Darkhaven does not provide investment advice, make or endorse recommendations or selections relating to securities or other financial instruments, manage portfolios or assets, execute transactions, or accept, hold or transfer customer funds or digital assets.",
  },
    {
    id: "ai-stock-selection",
    nav: "Quantitative Research & Workflow Infrastructure",
    title: "Quantitative Research & Workflow Infrastructure",
    description:
      "Darkhaven builds configurable, client-deployed software infrastructure for business clients that require structured data analysis, model governance and operational workflow support. The technology supports client-defined data inputs, analytical parameters, review controls and scheduled processing within independently operated client environments. Each client remains solely responsible for its own permitted use cases, regulatory obligations, operational decisions and customer-facing activities.",
    features: [
      {
        icon: "🗂️",
        title: "Historical Data Processing",
        desc: "Organize and process client-authorized historical datasets within client-defined analytical workflows.",
      },
      {
        icon: "🔗",
        title: "Cross-Source Data Mapping",
        desc: "Configure data mapping and comparison logic across selected client-authorized data sources and technical environments.",
      },
      {
        icon: "📐",
        title: "Configurable Quantitative Models",
        desc: "Provide a framework through which clients can configure, test, document and review their own analytical models and parameters.",
      },
      {
        icon: "🤖",
        title: "Scheduled Workflow Automation",
        desc: "Support repeatable, client-defined processing tasks, notifications and administrative workflows based on approved configurations.",
      },
      {
        icon: "🛡️",
        title: "Client-Defined Control Frameworks",
        desc: "Enable clients to configure review stages, approval rules, access permissions and internal governance controls.",
      },
      {
        icon: "📊",
        title: "Scenario & Sensitivity Analysis",
        desc: "Support internal scenario review and parameter testing using client-selected assumptions, datasets and analytical settings.",
      },
      {
        icon: "📡",
        title: "Data Quality Monitoring",
        desc: "Provide tools that help client teams monitor data availability, processing status and configuration changes across approved workflows.",
      },
      {
        icon: "📋",
        title: "Review & Audit Records",
        desc: "Maintain configurable logs, version histories and documentation records to support client-defined review processes.",
      },
      {
        icon: "👥",
        title: "Role-Based Administration",
        desc: "Apply client-defined roles, permissions and segregation-of-responsibility settings for authorized teams.",
      },
      {
        icon: "🧩",
        title: "Modular Deployment Architecture",
        desc: "Deploy modular components within a client-controlled environment, subject to each client's integration, governance and infrastructure requirements.",
      },
    ],
    footer:
      "Darkhaven provides software and technical services only. It does not provide investment advice, create or endorse trading strategies, make investment or trading decisions, operate a trading venue, execute or route transactions, manage accounts or assets, custody funds or digital assets, or offer services directly to retail users.",
  },
   {
    id: "futures-arbitrage",
    nav: "AI-Enabled Workflow & Analytics Infrastructure",
    title: "AI-Enabled Workflow & Analytics Infrastructure",
    description:
      "Darkhaven builds configurable, client-deployed software infrastructure for qualified business clients. The technology supports client-defined data processing, analytical workflows, model configuration and technical administration across selected, client-authorized third-party environments. Each client independently determines its permitted use cases, operational controls, regulatory responsibilities and customer-facing activities.",
    features: [
      {
        icon: "🤖",
        title: "AI & Machine Learning Tooling",
        desc: "Configurable AI and machine-learning tools support data processing, model testing and analytical workflows within a client-controlled environment.",
      },
      {
        icon: "⚙️",
        title: "Client-Defined Workflow Automation",
        desc: "Support scheduled, repeatable data-processing and administrative workflows based on configurations established and overseen by the client.",
      },
      {
        icon: "🧩",
        title: "Modular Workflow Configuration",
        desc: "Flexible modules allow clients to configure parameters, permissions, review stages and internal workflow logic according to their own requirements.",
      },
      {
        icon: "🛡️",
        title: "Governance & Approval Controls",
        desc: "Configure access roles, approval paths and review procedures to support a client's internal governance framework.",
      },
      {
        icon: "☁️",
        title: "Cloud Deployment Options",
        desc: "Deployment options can be configured around a client's selected cloud environment, technical requirements and data-governance arrangements.",
      },
      {
        icon: "📋",
        title: "Model Versioning & Documentation",
        desc: "Maintain configurable records of model versions, workflow changes, analytical parameters and related internal documentation.",
      },
      {
        icon: "📡",
        title: "Data & System Monitoring",
        desc: "Help authorized client teams review data availability, processing status, system events and configuration updates across approved workflows.",
      },
      {
        icon: "⏳",
        title: "Operational Efficiency Tools",
        desc: "Task coordination and automation features help authorized teams manage repeatable internal processes in a more structured manner.",
      },
      {
        icon: "🕐",
        title: "Scheduling & Status Visibility",
        desc: "Support planned processing schedules, workflow status views and technical administration under the applicable client deployment arrangement.",
      },
    ],
    footer:
      "Darkhaven provides software and technical support only. It does not provide investment advice, create or endorse trading strategies, execute transactions, operate customer accounts, manage assets, custody funds or digital assets, or provide services directly to retail users.",
  },

   {
    id: "ai-customer-service",
    nav: "AI Customer Service & Workflow Software",
    title: "AI Customer Service & Workflow Software",
    description:
      "Darkhaven builds configurable AI-powered customer service and workflow software for business clients. The software can support client-defined knowledge bases, communication workflows, inquiry classification and service-routing processes across approved customer channels. Each client controls its own content, permissions, customer communications, data practices and operational decisions.",
    features: [
      {
        icon: "🤖",
        title: "AI-Assisted Response Workflows",
        desc: "Configurable language-model tooling can help client teams structure response drafts, classify inquiries and support approved service workflows.",
      },
      {
        icon: "⚡",
        title: "Scalable Inquiry Handling",
        desc: "The system is designed to support configurable volumes of customer inquiries, subject to deployment architecture, connected services and client-defined workflows.",
      },
      {
        icon: "⚙️",
        title: "Workflow Automation Tools",
        desc: "Automate selected routine tasks such as routing, tagging, status updates and knowledge-base retrieval within client-approved processes.",
      },
      {
        icon: "🧑‍💼",
        title: "Human Review & Escalation",
        desc: "Configure escalation paths, review queues and handoff rules so complex, sensitive or regulated inquiries can be directed to authorized client personnel.",
      },
      {
        icon: "🕐",
        title: "Availability Configuration",
        desc: "Clients can configure service schedules, channels and escalation coverage according to their own operational requirements.",
      },
      {
        icon: "🌐",
        title: "Multi-Channel Integration",
        desc: "Connect approved communication channels and customer-service tools within a client-managed environment, subject to available integrations.",
      },
    ],
    footer:
      "Darkhaven provides software and technical support only. Clients remain responsible for the accuracy of customer-facing content, applicable consent requirements, data protection obligations and human review processes.",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export default function PlatformsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsScrolling(true);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <div className="pt-20 pb-10 sm:pt-28 sm:pb-12 bg-gradient-to-b from-slate-50 to-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-blue uppercase tracking-widest">Our Platforms</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4 text-text-dark">
            Technology <span className="shimmer-blue">Platforms & Systems</span>
          </h1>
          <p className="text-text-dark-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A suite of institutional-grade trading, CRM, and AI systems built for brokers, exchanges, and investors.
          </p>
        </div>
      </div>

      {/* Sticky Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

        {/* Mobile Tabs - outside flex, full width */}
        <div className="lg:hidden w-full mb-8 overflow-x-auto">
          <div className="flex gap-2 pb-2 min-w-max">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeSection === s.id
                    ? "bg-blue text-white shadow-md shadow-blue/20"
                    : "bg-slate-100 text-text-dark-3 hover:bg-slate-200"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12 relative">

          {/* Sticky Sidebar - desktop only */}
          <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
            <div className="sticky top-28 rounded-2xl border border-black/[0.07] bg-white shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-slate-50 border-b border-black/[0.06]">
                <p className="text-xs font-semibold text-text-dark-3 uppercase tracking-widest">Platforms</p>
              </div>
              <nav className="py-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 border-l-2 ${
                      activeSection === s.id
                        ? "border-blue bg-blue/[0.06] text-blue font-medium"
                        : "border-transparent text-text-dark-3 hover:bg-slate-50 hover:text-text-dark"
                    }`}
                  >
                    {s.nav}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-20 sm:space-y-28">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                {/* Section Header */}
                <div className="mb-8 sm:mb-10">
                
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-dark mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-text-dark-3 text-sm sm:text-base leading-relaxed max-w-3xl">
                    {section.description}
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                  {section.features.map((feat, j) => (
                    <div
                      key={j}
                      className="group bg-light rounded-xl border border-light-2 p-5 hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue/[0.08] border border-blue/15 flex items-center justify-center mb-4 text-lg group-hover:bg-blue/[0.12] transition-colors">
                        {feat.icon}
                      </div>
                      <h3 className="text-sm sm:text-[15px] font-semibold text-text-dark mb-2 leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-text-dark-3 text-xs sm:text-sm leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Optional Footer Text */}
                {"footer" in section && section.footer && (
                  <p className="mt-8 text-text-dark-3 text-sm sm:text-base leading-relaxed border-t border-black/[0.06] pt-6">
                    {section.footer}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
