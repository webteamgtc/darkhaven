"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2026", event: "Company Founded" },
  { year: "2026", event: "Core AI Infrastructure Development" },
  { year: "2026", event: "Enterprise Software Expansion" },
  { year: "2026", event: "Global Technology Partnerships" },
];

const credentials = [
  { label: "Multi-Disciplinary Engineering", detail: "AI + Data + Software + Infrastructure integration" },
  { label: "Secure System Design", detail: "Security-first architecture across all systems" },
  { label: "Scalable Technology Frameworks", detail: "Built for enterprise-level growth and complexity" },
];

export default function WhoWeAre() {
  return (
    <section id="about" className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-blue uppercase tracking-widest">Who We Are</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mt-4 mb-4 sm:mb-6 text-text-dark leading-[1.15]"
            >
              Built on <span className="shimmer-blue">Precision</span>,<br />Driven by Engineering
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-dark-2 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6"
            >
              Darkhaven is a technology company focused on building intelligent digital
              infrastructure across AI systems, software engineering, and enterprise backend
              architecture.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-dark-3 text-sm leading-relaxed mb-6 sm:mb-8"
            >
              We design and develop systems that enable organizations to operate with
              greater efficiency, scalability, and intelligence in a data-driven world.
              
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-dark-3 text-sm leading-relaxed mb-6 sm:mb-8"
            >
            
              Founded in 2026, we operate with a long-term vision of building resilient
              digital ecosystems that support modern enterprises.
            </motion.p>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="text-blue font-medium text-sm w-12">{item.year}</span>
                  <div className="w-6 h-px bg-blue/20 group-hover:bg-blue/40 transition-colors" />
                  <span className="text-text-dark-2 text-sm">{item.event}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Credentials */}
          <div className="space-y-5">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-black/[0.04] hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue flex-shrink-0 group-hover:bg-blue/15 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-text-dark font-semibold text-base mb-1">{cred.label}</h3>
                    <p className="text-text-dark-3 text-sm leading-relaxed">{cred.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-blue/5 to-gold/5 rounded-2xl p-6 border border-blue/10"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-blue font-semibold mb-2">Our Mission</div>
                  <p className="text-text-dark-2 text-sm leading-relaxed">
                    To build intelligent, scalable, and secure digital infrastructure
                    that empowers organizations to transform complexity into structured,
                    data-driven ecosystems.
                  </p>
                </div>
                <div className="h-px bg-blue/10" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold-dark font-semibold mb-2">Our Vision</div>
                  <p className="text-text-dark-2 text-sm leading-relaxed">
                    To be the world&apos;s most trusted technology infrastructure provider,
                    setting the standard for AI systems, data engineering, and operational resilience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
