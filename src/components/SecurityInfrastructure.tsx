"use client";

import { motion } from "framer-motion";

const trustCards = [
  {
    title: "Security-First Architecture",
    text: "Security is embedded at the system level across all infrastructure layers, ensuring consistent protection from data to application environments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Data Protection Framework",
    text: "Structured data governance models with controlled access, encryption standards, and secure lifecycle management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
        <path d="M12 14v3" />
      </svg>
    ),
  },
  {
    title: "High-Availability Engineering",
    text: "Infrastructure designed for fault tolerance, redundancy, and continuous system uptime across distributed environments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Operational Governance",
    text: "Internal compliance frameworks aligned with global security and operational best practices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

const trustTags = [
  "Security Architecture Design",
  "Data Encryption Standards",
  "Access Control Systems",
  "Infrastructure Monitoring",
  "Risk Control Frameworks",
  "Audit-Ready Systems",
  "Enterprise Governance Models",
];

export default function SecurityInfrastructure() {
  return (
    <section
      id="security"
      aria-label="Security and Infrastructure Standards"
      className="relative w-full overflow-hidden py-16 sm:py-24 md:py-32"
      style={{ background: "#05070A" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: "#05070A" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 30%, #0B1220 0%, transparent 60%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }}
      />
      {/* Glow points */}
      {[
        { w: 260, h: 260, top: "6%", left: "8%", opacity: 0.18, delay: "0s" },
        { w: 200, h: 200, top: "18%", right: "12%", opacity: 0.14, delay: "-4s" },
        { w: 320, h: 320, bottom: "22%", left: "4%", opacity: 0.1, delay: "-8s" },
        { w: 180, h: 180, bottom: "12%", right: "18%", opacity: 0.16, delay: "-2s" },
      ].map((gp, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: gp.w,
            height: gp.h,
            top: gp.top,
            left: gp.left,
            right: gp.right,
            bottom: gp.bottom,
            opacity: gp.opacity,
            background: "radial-gradient(circle, rgba(45,107,255,0.55) 0%, rgba(45,107,255,0) 70%)",
            filter: "blur(30px)",
            animation: `secFloat 14s ease-in-out infinite`,
            animationDelay: gp.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1: Hero Trust Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center border rounded-full mb-5 sm:mb-6"
              style={{
                borderColor: "#2D6BFF",
                color: "#2D6BFF",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 14px",
              }}
            >
              Security &amp; Infrastructure
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] text-white mb-4 sm:mb-5">
              Security &amp; Infrastructure Standards
            </h2>
            <p className="text-base leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
              Enterprise-grade security architecture designed for system integrity, data protection,
              and operational resilience across distributed environments.
            </p>
          </motion.div>

          {/* Network visual with shield */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-56 sm:h-64 lg:h-72 flex items-center justify-center"
          >
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 420 280"
              aria-hidden="true"
            >
              {/* Connection lines */}
              <line x1="60" y1="60" x2="210" y2="140" stroke="rgba(45,107,255,0.35)" strokeWidth={1} strokeDasharray="6 4" className="animate-dashFlow" />
              <line x1="360" y1="60" x2="210" y2="140" stroke="rgba(45,107,255,0.35)" strokeWidth={1} strokeDasharray="6 4" className="animate-dashFlow" />
              <line x1="60" y1="220" x2="210" y2="140" stroke="rgba(45,107,255,0.35)" strokeWidth={1} strokeDasharray="6 4" className="animate-dashFlow" />
              <line x1="360" y1="220" x2="210" y2="140" stroke="rgba(45,107,255,0.35)" strokeWidth={1} strokeDasharray="6 4" className="animate-dashFlow" />
              <line x1="60" y1="60" x2="360" y2="220" stroke="rgba(45,107,255,0.35)" strokeWidth={1} strokeDasharray="6 4" className="animate-dashFlow" />
              <line x1="360" y1="60" x2="60" y2="220" stroke="rgba(45,107,255,0.35)" strokeWidth={1} strokeDasharray="6 4" className="animate-dashFlow" />

              {/* Outer nodes */}
              <circle cx="60" cy="60" r="5" fill="rgba(45,107,255,0.55)" className="animate-nodePulse" />
              <circle cx="360" cy="60" r="5" fill="rgba(45,107,255,0.55)" className="animate-nodePulse" style={{ animationDelay: "-1s" }} />
              <circle cx="60" cy="220" r="5" fill="rgba(45,107,255,0.55)" className="animate-nodePulse" style={{ animationDelay: "-2s" }} />
              <circle cx="360" cy="220" r="5" fill="rgba(45,107,255,0.55)" className="animate-nodePulse" style={{ animationDelay: "-3s" }} />

              {/* Secondary nodes */}
              <circle cx="150" cy="40" r="3" fill="rgba(45,107,255,0.55)" className="animate-nodePulse" style={{ animationDelay: "-0.5s" }} />
              <circle cx="270" cy="40" r="3" fill="rgba(45,107,255,0.55)" className="animate-nodePulse" style={{ animationDelay: "-1.5s" }} />
              <circle cx="150" cy="240" r="3" fill="rgba(45,107,255,0.55)" className="animate-nodePulse" style={{ animationDelay: "-2.5s" }} />
              <circle cx="270" cy="240" r="3" fill="rgba(45,107,255,0.55)" className="animate-nodePulse" style={{ animationDelay: "-3.5s" }} />
            </svg>

            {/* Shield icon with pulse */}
            <div className="relative flex items-center justify-center" style={{ width: 96, height: 96 }}>
              <div
                className="absolute rounded-full"
                style={{
                  inset: -12,
                  background: "radial-gradient(circle, rgba(45,107,255,0.35) 0%, transparent 70%)",
                  animation: "shieldPulse 3s ease-in-out infinite",
                }}
              />
              <svg
                className="relative z-10"
                style={{ width: 52, height: 52, color: "#2D6BFF", filter: "drop-shadow(0 0 18px rgba(45,107,255,0.5))" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Layer 2: Trust Cards Grid */}
        <div className="pt-10 sm:pt-14 lg:pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {trustCards.map((card, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl p-6 sm:p-7 transition-all duration-350 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2D6BFF";
                  e.currentTarget.style.background = "rgba(255,255,255,0.045)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.35), 0 0 24px rgba(45,107,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl mb-4"
                  style={{
                    background: "rgba(45,107,255,0.1)",
                    border: "1px solid rgba(45,107,255,0.2)",
                    color: "#2D6BFF",
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm sm:text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {card.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Layer 3: Trust Tags */}
        <div className="pt-10 sm:pt-14 lg:pt-16">
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", WebkitMaskImage: "linear-gradient(90deg, black 90%, transparent 100%)" }}>
            {trustTags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex-shrink-0 rounded-full px-4 py-2.5 text-[13px] font-medium cursor-default transition-all duration-250 hover:text-white"
                style={{
                  background: "rgba(45,107,255,0.08)",
                  border: "1px solid rgba(45,107,255,0.25)",
                  color: "rgba(255,255,255,0.85)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(45,107,255,0.16)";
                  e.currentTarget.style.borderColor = "rgba(45,107,255,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(45,107,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(45,107,255,0.25)";
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Layer 4: Footer Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 sm:pt-14 lg:pt-16 text-center"
        >
          <p className="text-sm leading-relaxed max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Darkhaven builds structured, auditable, and scalable infrastructure systems designed
            for long-term operational resilience.
          </p>
        </motion.div>
      </div>

      {/* Custom keyframes via style tag workaround — use Tailwind @keyframes in globals.css instead */}
      <style jsx>{`
        @keyframes secFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(18px, -24px) scale(1.05); }
          66% { transform: translate(-12px, 14px) scale(0.95); }
        }
        @keyframes shieldPulse {
          0%, 100% { transform: scale(0.9); opacity: 0.5; }
          50% { transform: scale(1.25); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
