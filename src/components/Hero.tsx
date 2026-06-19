"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    const mouse = { x: -1000, y: -1000, radius: 200 }; // Off-screen initially

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseSize: number;
      size: number;
      colorR: number;
      colorG: number;
      colorB: number;
      baseAlpha: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const colors = [
        { r: 59, g: 130, b: 246 },   // Blue
        { r: 96, g: 165, b: 250 },   // Blue-light
        { r: 245, g: 158, b: 11 },   // Gold
        { r: 251, g: 191, b: 36 },   // Gold-light
        { r: 16, g: 185, b: 129 },   // Green
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
          colorR: c.r,
          colorG: c.g,
          colorB: c.b,
          baseAlpha: Math.random() * 0.3 + 0.1,
          alpha: 0,
        });
      }
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003;

      // --- Mouse glow ---
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        gradient.addColorStop(0, "rgba(59,130,246,0.08)");
        gradient.addColorStop(0.3, "rgba(59,130,246,0.04)");
        gradient.addColorStop(0.6, "rgba(245,158,11,0.02)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // --- Pulsing rings from mouse ---
      if (mouse.x > 0) {
        for (let i = 0; i < 3; i++) {
          const phase = (time * 0.6 + i / 3) % 1;
          const radius = phase * 250;
          const alpha = (1 - phase) * 0.06;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // --- Ambient pulsing rings from center ---
      for (let i = 0; i < 2; i++) {
        const phase = (time * 0.4 + i / 2) % 1;
        const radius = phase * 500;
        const alpha = (1 - phase) * 0.025;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height * 0.35, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // --- Update particles ---
      for (const p of particles) {
        // Mouse interaction — repel gently + brighten
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluence = mouse.radius;

        if (distToMouse < mouseInfluence && mouse.x > 0) {
          // Gentle push away from cursor
          const force = (mouseInfluence - distToMouse) / mouseInfluence;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 0.3;
          p.vy += Math.sin(angle) * force * 0.3;
          // Brighten near mouse
          p.size = p.baseSize + force * 3;
          p.alpha = p.baseAlpha + force * 0.4;
        } else {
          p.size = p.baseSize;
          p.alpha = p.baseAlpha;
        }

        // Normal movement
        p.x += p.vx;
        p.y += p.vy;

        // Soft bounce
        if (p.x < 0) { p.x = 0; p.vx *= -0.5; }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -0.5; }
        if (p.y < 0) { p.y = 0; p.vy *= -0.5; }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -0.5; }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;
      }

      // --- Draw connecting lines (near mouse only = brighter, far = subtle) ---
      const maxLineDist = 160;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxLineDist) {
            const baseAlpha = (1 - dist / maxLineDist) * 0.08;
            // Boost alpha near mouse
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const midDistToMouse = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
            const mouseBoost = mouse.x > 0 && midDistToMouse < mouse.radius ? (1 - midDistToMouse / mouse.radius) * 0.3 : 0;
            const finalAlpha = baseAlpha + mouseBoost;

            // Color blend based on mouse proximity
            const nearMouse = mouse.x > 0 && midDistToMouse < mouse.radius;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            if (nearMouse) {
              // Blue → gold gradient near mouse
              ctx.strokeStyle = `rgba(59,130,246,${finalAlpha})`;
              ctx.lineWidth = 0.8;
            } else {
              ctx.strokeStyle = `rgba(59,130,246,${finalAlpha})`;
              ctx.lineWidth = 0.4;
            }
            ctx.stroke();
          }
        }
      }

      // --- Draw mouse-to-particle connections ---
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

      // --- Draw particles ---
      for (const p of particles) {
        // Outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorR},${p.colorG},${p.colorB},${p.alpha * 0.15})`;
        ctx.fill();

        // Inner bright dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorR},${p.colorG},${p.colorB},${p.alpha})`;
        ctx.fill();

        // Extra bright core for mouse-near particles
        if (p.size > p.baseSize * 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${(p.alpha - p.baseAlpha) * 0.5})`;
          ctx.fill();
        }
      }

      // --- Floating data streams (vertical dotted lines) ---
      const streamCount = 6;
      for (let s = 0; s < streamCount; s++) {
        const streamX = (canvas.width / (streamCount + 1)) * (s + 1);
        const offset = (time * 30 + s * 40) % canvas.height;
        for (let d = 0; d < 15; d++) {
          const dotY = (offset + d * 20) % canvas.height;
          const dotAlpha = 0.04 + (d < 5 ? d * 0.01 : 0);
          ctx.beginPath();
          ctx.arc(streamX, dotY, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59,130,246,${dotAlpha})`;
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
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
      <div className="absolute inset-0 bg-dark" />
      <NetworkBackground />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue/[0.06] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-4 text-center py-24 sm:py-32">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 sm:mb-6"
        >
          <span className="shimmer-blue">Where Intelligence </span>
          <br />
          <span className="shimmer-blue">Meets Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-lg text-text-light-2 max-w-3xl mx-auto mb-5 leading-relaxed font-light"
        >
          Darkhaven builds AI-driven systems, data infrastructure, and enterprise software
          solutions that power modern digital operations and scalable business environments.
          
        </motion.p>
    <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-lg text-text-light-2 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-2 sm:px-0"
        >
         
          We help organizations transform complexity into structured, intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Gold shining button */}
          <a
            href="/capabilities"
            className="px-8 py-3.5 text-sm font-semibold bg-gradient-to-r from-gold-dark via-gold-light to-gold text-dark rounded-full hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Capabilities</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-shine via-white/30 to-gold-shine -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
          {/* Blue shining button */}
          <a
            href="/#contact"
            className="px-8 py-3.5 text-sm font-semibold bg-gradient-to-r from-blue-deep via-blue-light to-blue text-white rounded-full hover:shadow-xl hover:shadow-blue/30 transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Us</span>
            <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-shine via-white/20 to-blue-shine -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 sm:mt-20 relative"
        >
          <div className="bg-dark-2 rounded-xl sm:rounded-2xl border border-white/[0.06] p-1 shadow-2xl shadow-blue/10 max-w-4xl mx-auto overflow-hidden">
            <div className="bg-dark-3 rounded-t-xl px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-dark/60 rounded-md px-4 py-1 text-[11px] text-text-light-3 font-mono">
                  platform.darkhaven.ai
                </div>
              </div>
            </div>
            <div className="bg-dark-2/50 p-3 sm:p-6 rounded-b-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {[
                  { label: "AI Models", value: "50+", change: "Active", color: "text-blue-light" },
                  { label: "Data Points", value: "10B+", change: "Processed", color: "text-green" },
                  { label: "Uptime", value: "99.99%", change: "SLA Met", color: "text-gold" },
                  { label: "Systems", value: "200+", change: "Deployed", color: "text-green" },
                ].map((item, i) => (
                  <div key={i} className="bg-dark/40 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/[0.04]">
                    <div className="text-[10px] text-text-light-3 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className={`text-base sm:text-lg font-semibold ${item.color}`}>{item.value}</div>
                    <div className="text-[10px] text-green/60">{item.change}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <div className="sm:col-span-2 bg-dark/40 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/[0.04] h-28 sm:h-32">
                  <div className="text-[10px] text-text-light-3 uppercase tracking-wider mb-3">System Load</div>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(to top, rgba(59,130,246,0.3), rgba(59,130,246,0.6))` }} />
                    ))}
                  </div>
                </div>
                <div className="bg-dark/40 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/[0.04] h-auto sm:h-32">
                  <div className="text-[10px] text-text-light-3 uppercase tracking-wider mb-3">Domains</div>
                  <div className="space-y-2">
                    {["AI Pipelines: 40+", "API Endpoints: 200+", "Microservices: 80+"].map((m, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue/50" />
                        <span className="text-[11px] text-text-light-2">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-blue/10 blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
