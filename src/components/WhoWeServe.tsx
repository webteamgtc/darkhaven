"use client";

import { motion } from "framer-motion";

const clients = [
  {
    type: "Enterprise Technology Teams",
    description: "Supporting internal teams with system planning, architecture, integration, and technology modernisation initiatives.",
    capabilities: ["System Modernization", "Digital Transformation", "Infrastructure Upgrade"],
  },
  {
    type: "AI-Driven Startups",
    description: "Helping early-stage teams shape AI-ready product foundations, data workflows, and scalable technical structures.",
    capabilities: ["AI Infrastructure", "Data Pipelines", "Scalable Architecture"],
  },
  {
    type: "Software-First Companies",
    description: "Providing backend engineering, API design, and system architecture support for digital products.",
    capabilities: ["Backend Engineering", "System Architecture", "API Design"],
  },
  {
    type: "Institutional Organizations",
    description: "Supporting structured technology planning for organizations with complex operational and governance requirements.",
    capabilities: ["Enterprise Security", "High Performance"],
  },
];

export default function WhoWeServe() {
  return (
    <section id="clients" className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-sm font-medium text-blue uppercase tracking-widest">Who We Serve</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mt-4 mb-4 sm:mb-6 text-text-dark">
            Partners in <span className="shimmer-blue">Digital Transformation</span>
          </h2>
          <p className="text-text-dark-3 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            We work with organizations building the next generation of digital
            infrastructure and intelligent systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-black/[0.04] hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-blue/40 font-semibold mb-1.5">
                    Segment {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-text-dark font-semibold text-lg sm:text-xl group-hover:text-blue-dark transition-colors duration-300">
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
