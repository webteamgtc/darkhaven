"use client";

import { motion } from "framer-motion";

const licenses = [
  { regulator: "FCA", jurisdiction: "United Kingdom", status: "Authorized" },
  { regulator: "CySEC", jurisdiction: "Cyprus / EU", status: "Licensed" },
  { regulator: "ASIC", jurisdiction: "Australia", status: "Registered" },
  { regulator: "FSCA", jurisdiction: "South Africa", status: "Authorized" },
  { regulator: "CIMA", jurisdiction: "Cayman Islands", status: "Registered" },
  { regulator: "SCB", jurisdiction: "Bahamas", status: "Licensed" },
];

const standards = [
  { name: "SOC 2 Type II", description: "Security & availability controls audited annually" },
  { name: "ISO 27001", description: "Information security management certified" },

];

export default function Compliance() {
  return (
    <section id="compliance" className="relative py-24 md:py-32 bg-dark overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-green/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-green-light uppercase tracking-widest">Regulatory Compliance</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-4 mb-6 text-white leading-[1.15]"
            >
              Regulated Across <span className="shimmer-green">Jurisdictions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-light-2 text-lg leading-relaxed mb-8"
            >
              Multi-jurisdictional compliance isn&apos;t just a checkbox — it&apos;s foundational
              to how we operate. Every service, every market, every transaction adheres
              to the highest regulatory standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
            >
              {standards.map((standard, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="bg-dark-2 rounded-xl p-4 border border-white/[0.05] flex items-start gap-3 group hover:border-green/20 hover:shadow-md hover:shadow-green/5 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm">{standard.name}</span>
                    <p className="text-text-light-3 text-xs mt-0.5">{standard.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-dark-2 rounded-2xl border border-white/[0.05] overflow-hidden">
              <div className="grid grid-cols-[auto_1fr_auto] gap-0">
                <div className="grid grid-cols-[auto_1fr_auto] gap-0 col-span-3 border-b border-white/[0.06]">
                  <div className="px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-text-light-3/50 font-semibold border-r border-white/[0.04] w-16">ID</div>
                  <div className="px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-text-light-3/50 font-semibold border-r border-white/[0.04]">Regulator & Jurisdiction</div>
                  <div className="px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-text-light-3/50 font-semibold w-24 text-right">Status</div>
                </div>
                {licenses.map((license, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="contents group"
                  >
                    <div className="px-5 py-3.5 border-r border-b border-white/[0.04] text-text-light-3/40 font-mono text-xs w-16 group-hover:bg-green/[0.03] transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="px-5 py-3.5 border-r border-b border-white/[0.04] group-hover:bg-green/[0.03] transition-colors">
                      <div className="text-white font-semibold text-sm group-hover:text-green-light transition-colors">{license.regulator}</div>
                      <div className="text-text-light-3 text-xs mt-0.5">{license.jurisdiction}</div>
                    </div>
                    <div className="px-5 py-3.5 border-b border-white/[0.04] w-24 text-right group-hover:bg-green/[0.03] transition-colors">
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green" />
                        <span className="text-green-light">{license.status}</span>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-text-light-3/40 text-xs mt-3 text-right">
              All licenses active and in good standing as of Q4 2024
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
