"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Intelligent Data Systems",
    summary: "Structured data ecosystems for modern enterprises",
    description: "We design structured data systems that enable organizations to collect, process, and operationalize information efficiently across distributed environments.",
    features: ["Data Processing", "Real-Time Integration", "Distribution Systems", "Analytics"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "AI & Software Engineering",
    summary: "Intelligent frameworks for automation and decision support",
    description: "We build artificial intelligence frameworks and enterprise software solutions that support automation, decision systems, and operational intelligence.",
    features: ["AI Frameworks", "Automation", "Decision Systems", "Operational Intelligence"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Digital Infrastructure & Backend",
    summary: "Scalable backend architectures for enterprise reliability",
    description: "We develop scalable backend architectures, cloud-based systems, and enterprise infrastructure that ensure reliability, security, and performance.",
    features: ["Cloud Systems", "Backend Architecture", "Enterprise Infrastructure", "High Availability"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
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
            Three Pillars of <span className="shimmer-gold">Intelligent Infrastructure</span>
          </h2>
          <p className="text-text-light-2 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            End-to-end technology solutions engineered for intelligence, scalability,
            and operational resilience across digital environments.
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
