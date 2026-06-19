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
            <span className="text-sm font-medium text-blue uppercase tracking-widest">Contact Us</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mt-4 mb-4 sm:mb-6 text-text-dark">
              Let&apos;s Build Something{" "}
              <span className="shimmer-blue">Extraordinary</span>
            </h2>
            <p className="text-text-dark-3 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Reach out to discuss how Darkhaven can help power your technology infrastructure and digital operations.
            </p>
            <div className="space-y-4 mb-6">
              <a href="mailto:support@darkhaven.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue/15 transition-colors">
                  <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-dark-3 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm font-medium text-text-dark group-hover:text-blue transition-colors">support@darkhaven.com</p>
                </div>
              </a>
              <a href="tel:6575319327" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue/15 transition-colors">
                  <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-dark-3 uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-sm font-medium text-text-dark group-hover:text-blue transition-colors">(657) 531-9327</p>
                </div>
              </a>
            </div>
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
              <h3 className="text-lg sm:text-xl font-semibold text-text-dark mb-5 sm:mb-6">Send Us a Message</h3>
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
                    <option>AI & Software Engineering</option>
                    <option>Data Infrastructure</option>
                    <option>Digital Integration</option>
                    <option>Enterprise Consulting</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-deep via-blue to-blue-light text-white rounded-full hover:shadow-xl hover:shadow-blue/25 transition-all duration-300 relative overflow-hidden group mt-2"
                >
                  <span className="relative z-10">Send Message</span>
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
