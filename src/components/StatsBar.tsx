"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "", prefix = "", decimals = 0 }: {
  target: number; suffix?: string; prefix?: string; decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Number((eased * target).toFixed(decimals)));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, decimals]);

  return <span ref={ref}>{prefix}{decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 2.5, prefix: "$", suffix: "B+", decimals: 1, label: "Assets Under Management" },
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 350, suffix: "+", label: "Clients Worldwide" },
  { value: 40, suffix: "+", label: "Regulated Markets" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-light border-y border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center py-10 lg:py-14 relative group"
            >
              {index > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gradient-to-b from-transparent via-blue/15 to-transparent hidden lg:block" />
              )}
              <div className="text-3xl md:text-4xl font-semibold text-blue mb-2 inline-block">
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-sm text-text-dark-3 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
