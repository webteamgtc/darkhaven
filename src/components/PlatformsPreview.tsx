import Link from "next/link";

const platforms = [
  {
    id: "trading-system",
    icon: "⚡",
    label: "Trading System",
    title: "Darkhaven Trading System",
    desc: "Institutional-grade forex & crypto trading platform with advanced execution, liquidity aggregation, and white-label support.",
    tag: "Forex · Crypto",
  },
  {
    id: "crm-system",
    icon: "👤",
    label: "CRM System",
    title: "MT4/MT5 CRM System",
    desc: "Comprehensive CRM built for forex brokers — manage customers, automate marketing, and run multi-level commission rebates.",
    tag: "Broker Tools",
  },
  {
    id: "copy-community",
    icon: "🔗",
    label: "Copy Trading",
    title: "Cross Platform Follow-Up Community",
    desc: "Cross-platform copy trading between MT4 & MT5 with millisecond latency, mobile cloud operation, and private deployment.",
    tag: "MT4 · MT5",
  },
  {
    id: "ai-stock-selection",
    icon: "🤖",
    label: "AI Stock Selection",
    title: "Darkhaven AI Quant Stock Selection",
    desc: "Global AI-powered quantitative stock selection combining hundreds of factors, machine learning, and real-time portfolio monitoring.",
    tag: "AI · Quant",
  },
  {
    id: "futures-arbitrage",
    icon: "📉",
    label: "Hedge Arbitrage",
    title: "Darkhaven Futures Hedge Arbitrage System",
    desc: "Quantitative hedge arbitrage for futures markets — automated trading, extreme value recognition, and strict risk controls.",
    tag: "Futures · Quant",
  },
  {
    id: "forex-ea",
    icon: "🧠",
    label: "Forex EA",
    title: "Darkhaven Forex EA Asset Management",
    desc: "AI-driven autonomous forex trading with deep learning, multi-strategy execution, and 24/5 all-weather cloud deployment.",
    tag: "Forex · AI",
  },
  {
    id: "ai-customer-service",
    icon: "💬",
    label: "AI Support",
    title: "Darkhaven AI Customer Service System",
    desc: "GPT-powered autonomous customer service handling 10,000+ inquiries per minute — 24/7, multi-channel, and low-cost.",
    tag: "GPT · Automation",
  },
];

export default function PlatformsPreview() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="platforms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-sm font-medium text-blue uppercase tracking-widest">Our Platforms</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-5 text-text-dark">
            Technology <span className="shimmer-blue">Platforms & Systems</span>
          </h2>
          <p className="text-text-dark-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A suite of institutional-grade trading, CRM, and AI systems. Click any platform to explore its full capabilities.
          </p>
        </div>

        {/* Cards Grid */}
        {/* Row 1 - 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {platforms.slice(0, 4).map((p) => (
            <Link
              key={p.id}
              href={`/platforms#${p.id}`}
              className="group bg-light rounded-2xl border border-light-2 p-5 sm:p-6 hover:border-blue/25 hover:shadow-xl hover:shadow-blue/8 transition-all duration-300 flex flex-col"
            >
              {/* Icon + Tag row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue/[0.08] border border-blue/15 flex items-center justify-center text-xl group-hover:bg-blue/[0.14] transition-colors flex-shrink-0">
                  {p.icon}
                </div>
                <span className="text-[10px] font-semibold text-blue bg-blue/[0.07] border border-blue/15 px-2 py-1 rounded-full whitespace-nowrap">
                  {p.tag}
                </span>
              </div>
              <p className="text-[11px] font-semibold text-blue uppercase tracking-widest mb-1">{p.label}</p>
              <h3 className="text-sm sm:text-[15px] font-semibold text-text-dark mb-2 leading-snug group-hover:text-blue transition-colors">
                {p.title}
              </h3>
              <p className="text-text-dark-3 text-xs sm:text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-blue text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Explore platform
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
              className="group bg-light rounded-2xl border border-light-2 p-5 sm:p-6 hover:border-blue/25 hover:shadow-xl hover:shadow-blue/8 transition-all duration-300 flex flex-col"
            >
              {/* Icon + Tag row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue/[0.08] border border-blue/15 flex items-center justify-center text-xl group-hover:bg-blue/[0.14] transition-colors flex-shrink-0">
                  {p.icon}
                </div>
                <span className="text-[10px] font-semibold text-blue bg-blue/[0.07] border border-blue/15 px-2 py-1 rounded-full whitespace-nowrap">
                  {p.tag}
                </span>
              </div>
              <p className="text-[11px] font-semibold text-blue uppercase tracking-widest mb-1">{p.label}</p>
              <h3 className="text-sm sm:text-[15px] font-semibold text-text-dark mb-2 leading-snug group-hover:text-blue transition-colors">
                {p.title}
              </h3>
              <p className="text-text-dark-3 text-xs sm:text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-blue text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Explore platform
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
