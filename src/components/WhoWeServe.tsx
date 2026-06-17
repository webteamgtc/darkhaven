"use client";

import { motion } from "framer-motion";

const clients = [
  {
    type: "Forex Brokers",
    description: "Multi-asset brokerage firms seeking institutional liquidity, competitive spreads, and regulatory compliance across jurisdictions.",
    capabilities: ["Liquidity Provision", "Risk Management", "Regulatory Coverage"],
  },
  {
    type: "Prop Trading Firms",
    description: "Proprietary trading operations demanding ultra-low latency execution, deep market access, and scalable infrastructure.",
    capabilities: ["Low-Latency Execution", "Market Access", "Scalable Infra"],
  },
  {
    type: "Hedge Funds & Asset Managers",
    description: "Sophisticated investment managers requiring best execution, comprehensive reporting, and institutional-grade operational support.",
    capabilities: ["Best Execution", "Prime Services", "Custom Solutions"],
  },
  {
    type: "Banks & Financial Institutions",
    description: "Systemically important institutions needing robust, compliant infrastructure with enterprise-level reliability and security.",
    capabilities: ["Enterprise Security", "Compliance Framework", "24/5 Support"],
  },
];

export default function WhoWeServe() {
  return (
    <section id="clients" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue uppercase tracking-widest">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-4 mb-6 text-text-dark">
            Partners in <span className="shimmer-blue">Institutional Finance</span>
          </h2>
          <p className="text-text-dark-3 text-lg max-w-2xl mx-auto">
            We serve the most demanding participants in global financial markets —
            where precision and reliability are non-negotiable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-black/[0.04] hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-blue/40 font-semibold mb-1.5">
                    Segment {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-text-dark font-semibold text-xl group-hover:text-blue-dark transition-colors duration-300">
                    {client.type}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue/8 flex items-center justify-center text-blue/40 group-hover:text-blue group-hover:bg-blue/12 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
              <p className="text-text-dark-3 text-sm leading-relaxed mb-4 group-hover:text-text-dark-2 transition-colors duration-300">
                {client.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {client.capabilities.map((cap, ci) => (
                  <span
                    key={ci}
                    className="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-light-2 text-text-dark-3 rounded-full group-hover:bg-blue/[0.06] group-hover:text-blue-dark transition-all duration-300"
                  >
                    {cap}
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
