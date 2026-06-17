"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Liquidity Aggregation",
    summary: "Connecting institutions to the world's deepest liquidity pools",
    description: "Deep, institutional-grade liquidity sourced from Tier-1 banks, ECNs, and MTFs — ensuring competitive spreads and reliable execution across all market conditions.",
    features: ["Tier-1 Bank Feeds", "ECN Aggregation", "Zero Last-Look", "Depth of Market"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Trading Infrastructure",
    summary: "Ultra-low latency systems built for institutional throughput",
    description: "Enterprise-grade trading infrastructure with ultra-low latency execution, co-located servers, and institutional-grade order management systems.",
    features: ["Co-Located Servers", "Sub-ms Execution", "Redundant Feeds", "OMS Integration"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Compliance & Risk",
    summary: "Multi-jurisdictional compliance safeguarding every transaction",
    description: "Comprehensive regulatory compliance infrastructure with automated monitoring, reporting, and multi-jurisdictional coverage across 40+ markets.",
    features: ["KYC/AML Automation", "Transaction Reporting", "Risk Monitoring", "Multi-License"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section id="solutions" className="relative py-16 sm:py-24 md:py-32 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-sm font-medium text-blue-light uppercase tracking-widest">What We Do</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-4 mb-4 sm:mb-6 text-white">
            Three Pillars of <span className="shimmer-gold">Excellence</span>
          </h2>
          <p className="text-text-light-2 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            End-to-end institutional solutions engineered for precision, reliability,
            and regulatory adherence across global markets.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-dark-2 rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-white/[0.05] hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center text-blue mb-5 group-hover:bg-blue/15 group-hover:scale-110 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-blue-light transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-gold text-sm font-medium mb-3">{pillar.summary}</p>
              <p className="text-text-light-3 text-sm leading-relaxed mb-5 group-hover:text-text-light-2 transition-colors duration-300">
                {pillar.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {pillar.features.map((feature, fi) => (
                  <span
                    key={fi}
                    className="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-blue/[0.06] text-blue-light/70 border border-blue/[0.08] rounded-full group-hover:text-blue-light group-hover:border-blue/15 transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
