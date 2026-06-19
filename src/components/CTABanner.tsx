"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-blue uppercase tracking-widest">Get Started</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mt-4 mb-4 sm:mb-6 text-text-dark">
              Build the Next Generation of{" "}
              <span className="shimmer-blue">Digital Infrastructure</span>
            </h2>
            <p className="text-text-dark-3 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Partner with Darkhaven to develop scalable, intelligent, and secure technology systems.
            </p>
            <div className="space-y-3">
              {[
                "Dedicated onboarding specialist",
                "Custom integration roadmap",
                "90-day performance guarantee",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-dark-2 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-light rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-black/[0.04] shadow-lg shadow-blue/5">
              <h3 className="text-lg sm:text-xl font-semibold text-text-dark mb-5 sm:mb-6">Request a Demo</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-dark-3 mb-1.5 uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 bg-white rounded-xl border border-black/[0.06] text-text-dark text-sm placeholder:text-text-dark-3/50 focus:border-blue/40 focus:ring-2 focus:ring-blue/10 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-dark-3 mb-1.5 uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 bg-white rounded-xl border border-black/[0.06] text-text-dark text-sm placeholder:text-text-dark-3/50 focus:border-blue/40 focus:ring-2 focus:ring-blue/10 outline-none transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-dark-3 mb-1.5 uppercase tracking-wider">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-black/[0.06] text-text-dark text-sm placeholder:text-text-dark-3/50 focus:border-blue/40 focus:ring-2 focus:ring-blue/10 outline-none transition-all"
                    placeholder="john@institution.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-dark-3 mb-1.5 uppercase tracking-wider">
                    Area of Interest
                  </label>
                  <select className="w-full px-4 py-2.5 bg-white rounded-xl border border-black/[0.06] text-text-dark text-sm focus:border-blue/40 focus:ring-2 focus:ring-blue/10 outline-none transition-all">
                    <option>Liquidity Aggregation</option>
                    <option>Trading Infrastructure</option>
                    <option>Compliance & Risk</option>
                    <option>Full Platform</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-deep via-blue to-blue-light text-white rounded-full hover:shadow-xl hover:shadow-blue/25 transition-all duration-300 relative overflow-hidden group mt-2"
                >
                  <span className="relative z-10">Schedule Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-shine via-white/20 to-blue-shine -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
                <p className="text-[11px] text-text-dark-3/60 text-center mt-3">
                  By submitting, you agree to our Privacy Policy. We&apos;ll never share your data.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
