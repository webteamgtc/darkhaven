"use client";

import { motion } from "framer-motion";

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
              Built for <span className="shimmer-blue">Thoughtful Technology</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-dark-2 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6"
            >
              Darkhaven is an independent technology company focused on AI applications, software engineering, data systems, and digital infrastructure.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-dark-3 text-sm leading-relaxed mb-5 sm:mb-6"
            >
              We work with organizations that need clearer systems, stronger technical foundations, and practical solutions for evolving operational needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-text-dark-3 text-sm leading-relaxed mb-6 sm:mb-8"
            >
              Our approach combines structured planning, engineering discipline, and adaptable technology design.
            </motion.p>

            {/* Our Focus */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3"
            >
              <h3 className="text-text-dark font-semibold text-base mb-3">Our Focus</h3>
              {[
                "AI-enabled business systems",
                "Data architecture and integration",
                "Software and platform engineering",
                "Digital infrastructure design",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.06 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
                  <span className="text-text-dark-2 text-sm">{item}</span>
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
                     To be a trusted technology infrastructure partner, supporting practical AI systems, data engineering, and operational resilience.

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
