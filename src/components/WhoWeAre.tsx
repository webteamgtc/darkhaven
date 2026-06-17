"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2012", event: "Founded in London" },
  { year: "2015", event: "FCA Authorization" },
  { year: "2017", event: "CySEC & ASIC Licensing" },
  { year: "2019", event: "$1B AUM Milestone" },
  { year: "2021", event: "350+ Institutional Clients" },
  { year: "2024", event: "40+ Regulated Markets" },
];

const credentials = [
  { label: "Multi-Regulated", detail: "FCA, CySEC, ASIC, FSCA authorized" },
  { label: "Institutional Technology", detail: "Ultra-low latency, co-located infrastructure" },
  { label: "Fund Security", detail: "Segregated accounts, ISO 27001 certified" },
];

export default function WhoWeAre() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-4 mb-4 sm:mb-6 text-text-dark leading-[1.15]"
            >
              Built on <span className="shimmer-blue">Precision</span>,<br />Driven by Trust
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-dark-2 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6"
            >
              DrakHaven is an institutional-grade financial infrastructure provider
              delivering deep liquidity, cutting-edge technology, and robust compliance
              solutions. We serve as the backbone for brokers, prop firms, and financial
              institutions operating in the world&apos;s most demanding markets.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-dark-3 text-sm leading-relaxed mb-6 sm:mb-8"
            >
              Founded in 2012, we&apos;ve grown from a London-based liquidity provider
              to a global infrastructure platform trusted by 350+ institutional
              clients across 40+ regulated markets.
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
                    To provide institutional-grade infrastructure that empowers financial
                    institutions to operate with confidence, precision, and compliance
                    across global markets.
                  </p>
                </div>
                <div className="h-px bg-blue/10" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold-dark font-semibold mb-2">Our Vision</div>
                  <p className="text-text-dark-2 text-sm leading-relaxed">
                    To be the world&apos;s most trusted institutional infrastructure provider,
                    setting the standard for liquidity, technology, and regulatory excellence.
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
