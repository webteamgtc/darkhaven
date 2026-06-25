"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    const mouse = { x: -1000, y: -1000, radius: 200 };

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      baseSize: number; size: number;
      colorR: number; colorG: number; colorB: number;
      baseAlpha: number; alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = 220;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const colors = [
        { r: 59, g: 130, b: 246 },
        { r: 96, g: 165, b: 250 },
        { r: 245, g: 158, b: 11 },
        { r: 251, g: 191, b: 36 },
        { r: 16, g: 185, b: 129 },
      ];
      for (let i = 0; i < particleCount; i++) {
        const c = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          baseSize: Math.random() * 2 + 0.8,
          size: 0,
          colorR: c.r, colorG: c.g, colorB: c.b,
          baseAlpha: Math.random() * 0.3 + 0.1,
          alpha: 0,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003;

      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        gradient.addColorStop(0, "rgba(59,130,246,0.08)");
        gradient.addColorStop(0.3, "rgba(59,130,246,0.04)");
        gradient.addColorStop(0.6, "rgba(245,158,11,0.02)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (mouse.x > 0) {
        for (let i = 0; i < 3; i++) {
          const phase = (time * 0.6 + i / 3) % 1;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, phase * 250, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(59,130,246,${(1 - phase) * 0.06})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      for (let i = 0; i < 2; i++) {
        const phase = (time * 0.4 + i / 2) % 1;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height * 0.35, phase * 500, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59,130,246,${(1 - phase) * 0.025})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && mouse.x > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 0.3;
          p.vy += Math.sin(angle) * force * 0.3;
          p.size = p.baseSize + force * 3;
          p.alpha = p.baseAlpha + force * 0.4;
        } else {
          p.size = p.baseSize;
          p.alpha = p.baseAlpha;
        }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -0.5; }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -0.5; }
        if (p.y < 0) { p.y = 0; p.vy *= -0.5; }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -0.5; }
        p.vx *= 0.98; p.vy *= 0.98;
      }

      const maxLineDist = 200;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxLineDist) {
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const midDist = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
            const boost = mouse.x > 0 && midDist < mouse.radius ? (1 - midDist / mouse.radius) * 0.3 : 0;
            const alpha = (1 - dist / maxLineDist) * 0.12 + boost;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth = boost > 0 ? 0.8 : 0.4;
            ctx.stroke();
          }
        }
      }

      if (mouse.x > 0) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius * 1.2) {
            const alpha = (1 - dist / (mouse.radius * 1.2)) * 0.15;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(245,158,11,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorR},${p.colorG},${p.colorB},${p.alpha * 0.15})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorR},${p.colorG},${p.colorB},${p.alpha})`;
        ctx.fill();
        if (p.size > p.baseSize * 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${(p.alpha - p.baseAlpha) * 0.5})`;
          ctx.fill();
        }
      }

      const streamCount = 6;
      for (let s = 0; s < streamCount; s++) {
        const streamX = (canvas.width / (streamCount + 1)) * (s + 1);
        const offset = (time * 30 + s * 40) % canvas.height;
        for (let d = 0; d < 15; d++) {
          const dotY = (offset + d * 20) % canvas.height;
          ctx.beginPath();
          ctx.arc(streamX, dotY, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59,130,246,${0.04 + (d < 5 ? d * 0.01 : 0)})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0"
    />
  );
}

export default function Hero() {
  // --- Animated dashboard state ---
  const [bars, setBars] = useState([40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95]);
  const [statIdx, setStatIdx] = useState(0);
  const [logLines, setLogLines] = useState([
    { text: "[INFO] Model pipeline initialized", color: "#60A5FA" },
    { text: "[OK] Data stream connected", color: "#34D399" },
    { text: "[INFO] 3 inference tasks queued", color: "#60A5FA" },
  ]);
  const [activeDomain, setActiveDomain] = useState(0);
  const [pingMs, setPingMs] = useState(12);

  const statSets = [
    [
      { label: "AI Models", value: "50+", change: "Active", color: "#60A5FA" },
      { label: "Data Points", value: "10B+", change: "Processed", color: "#34D399" },
      { label: "Uptime", value: "99.99%", change: "SLA Met", color: "#F59E0B" },
      { label: "Systems", value: "200+", change: "Deployed", color: "#34D399" },
    ],
    [
      { label: "API Calls", value: "4.2M", change: "Today", color: "#60A5FA" },
      { label: "Latency", value: "8ms", change: "Avg Response", color: "#34D399" },
      { label: "Errors", value: "0.01%", change: "Error Rate", color: "#F59E0B" },
      { label: "Nodes", value: "128", change: "Online", color: "#34D399" },
    ],
    [
      { label: "AI Pipelines", value: "40+", change: "Running", color: "#60A5FA" },
      { label: "Endpoints", value: "200+", change: "Active", color: "#34D399" },
      { label: "Throughput", value: "3.8TB", change: "Per Day", color: "#F59E0B" },
      { label: "Regions", value: "12", change: "Deployed", color: "#34D399" },
    ],
  ];

  const logPool = [
    { text: "[OK] Inference batch complete — 1,240 records", color: "#34D399" },
    { text: "[INFO] Auto-scaling: +2 nodes provisioned", color: "#60A5FA" },
    { text: "[SYNC] Data pipeline flushed to warehouse", color: "#93C5FD" },
    { text: "[OK] Health check passed — all 128 nodes", color: "#34D399" },
    { text: "[INFO] Model v3.2.1 deployed to production", color: "#60A5FA" },
    { text: "[WARN] Cache hit ratio: 97.4% — monitoring", color: "#F59E0B" },
    { text: "[OK] API gateway latency: 8ms avg", color: "#34D399" },
    { text: "[INFO] Scheduled backup completed — 3.8TB", color: "#60A5FA" },
    { text: "[SYNC] Microservices heartbeat: nominal", color: "#93C5FD" },
    { text: "[OK] Security scan complete — 0 threats", color: "#34D399" },
  ];

  const domains = ["AI Pipelines: 40+", "API Endpoints: 200+", "Microservices: 80+"];

  // Animate bars every 1.8s
  useEffect(() => {
    const t = setInterval(() => {
      setBars(prev => prev.map(b => {
        const delta = (Math.random() - 0.48) * 20;
        return Math.min(98, Math.max(15, b + delta));
      }));
      setPingMs(Math.floor(Math.random() * 8 + 6));
    }, 1800);
    return () => clearInterval(t);
  }, []);

  // Cycle stat sets every 3s
  useEffect(() => {
    const t = setInterval(() => {
      setStatIdx(i => (i + 1) % statSets.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // Add new log lines every 2.2s
  useEffect(() => {
    let poolIdx = 3;
    const t = setInterval(() => {
      const next = logPool[poolIdx % logPool.length];
      poolIdx++;
      setLogLines(prev => [...prev.slice(-4), next]);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  // Cycle active domain every 1.5s
  useEffect(() => {
    const t = setInterval(() => {
      setActiveDomain(i => (i + 1) % domains.length);
    }, 1500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-10">
      <div className="absolute inset-0 bg-dark" />
      <NetworkBackground />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue/[0.06] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-4 text-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/[0.08] border border-blue/15 mb-7 sm:mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-sm text-blue-light font-medium">Institutional-Grade Technology Infrastructure</span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] mb-5 sm:mb-6"
        >
          {/* Line 1: Where Intelligence */}
          <span className="block">
            {["Where", "Intelligence"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.22 }}
                className={`inline-block mr-[0.25em] ${
                  word === "Intelligence" ? "shimmer-blue" : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </span>
          {/* Line 2: Meets Infrastructure */}
          <span className="block">
            {["Meets", "Infrastructure"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.84 + i * 0.22 }}
                className={`inline-block mr-[0.25em] ${
                  word === "Meets" ? "shimmer-blue" : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-lg text-text-light-2 max-w-3xl mx-auto mb-5 leading-relaxed font-light"
        >
          Darkhaven designs AI-enabled software, data systems, and digital infrastructure for organisations building their next stage of growth.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg md:text-lg text-text-light-2 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-2 sm:px-0"
        >
          We help turn complex operational needs into clear, structured technology foundations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Gold shining button */}
          <a
            href="/capabilities"
            className="px-8 py-3.5 text-sm font-semibold bg-gradient-to-r from-gold-dark via-gold-light to-gold text-dark rounded-full hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Our Capabilities</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-shine via-white/30 to-gold-shine -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
          {/* Blue shining button */}
          <a
            href="/#contact"
            className="px-8 py-3.5 text-sm font-semibold bg-gradient-to-r from-blue-deep via-blue-light to-blue text-white rounded-full hover:shadow-xl hover:shadow-blue/30 transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
          >
            <span className="relative z-10">Start a Conversation</span>
            <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-shine via-white/20 to-blue-shine -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </motion.div>


      </div>
    </section>
  );
}
