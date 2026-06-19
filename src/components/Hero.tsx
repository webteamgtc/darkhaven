"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function TorusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // --- 3D projection helpers ---
    const project = (x: number, y: number, z: number, cx: number, cy: number, fov: number) => {
      const scale = fov / (fov + z);
      return { sx: cx + x * scale, sy: cy + y * scale, scale };
    };

    // Rotate a point around X axis
    const rotX = (y: number, z: number, a: number) => ({
      y: y * Math.cos(a) - z * Math.sin(a),
      z: y * Math.sin(a) + z * Math.cos(a),
    });
    // Rotate a point around Y axis
    const rotY = (x: number, z: number, a: number) => ({
      x: x * Math.cos(a) + z * Math.sin(a),
      z: -x * Math.sin(a) + z * Math.cos(a),
    });

    // Build torus points
    const R = 160; // major radius
    const r = 52;  // minor radius
    const torusSegs = 28;
    const tubeSegs = 18;
    const cubeSize = 7;

    interface TorusPoint {
      ox: number; oy: number; oz: number;
      colorIdx: number;
    }
    const points: TorusPoint[] = [];
    for (let i = 0; i < torusSegs; i++) {
      const u = (i / torusSegs) * Math.PI * 2;
      for (let j = 0; j < tubeSegs; j++) {
        const v = (j / tubeSegs) * Math.PI * 2;
        const ox = (R + r * Math.cos(v)) * Math.cos(u);
        const oy = (R + r * Math.cos(v)) * Math.sin(u);
        const oz = r * Math.sin(v);
        // Color: alternate blue/gold based on position
        const colorIdx = (i + j) % 3;
        points.push({ ox, oy, oz, colorIdx });
      }
    }

    const COLORS = [
      { r: 59,  g: 130, b: 246 },  // blue
      { r: 96,  g: 165, b: 250 },  // blue-light
      { r: 245, g: 158, b: 11  },  // gold
    ];

    const drawCube = (sx: number, sy: number, scale: number, colorIdx: number, depth: number) => {
      const s = cubeSize * scale;
      const c = COLORS[colorIdx];
      // depth-based opacity: closer = slightly more visible, but keep overall low
      const baseAlpha = 0.13 + (depth + 1) * 0.04;

      // Face fill
      ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${baseAlpha})`;
      ctx.fillRect(sx - s / 2, sy - s / 2, s, s);

      // Edge stroke — slightly brighter
      ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${baseAlpha + 0.12})`;
      ctx.lineWidth = 0.5;
      ctx.strokeRect(sx - s / 2, sy - s / 2, s, s);

      // Inner highlight
      const hs = s * 0.35;
      ctx.fillStyle = `rgba(255,255,255,${baseAlpha * 0.3})`;
      ctx.fillRect(sx - s / 2 + 1, sy - s / 2 + 1, hs, hs);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.004;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const fov = 500;

      // Collect projected points with z for depth sorting
      const projected = points.map(p => {
        // Rotate around Y (slow)
        let { x: rx, z: rz } = rotY(p.ox, p.oz, t * 0.7);
        // Rotate around X (tilt)
        let { y: ry, z: rz2 } = rotX(p.oy, rz, t * 0.4 + 0.5);
        // Slight Z spin
        const { x: fx, z: fz } = rotY(rx, rz2, t * 0.15);

        const proj = project(fx, ry, fz, cx, cy, fov);
        return { ...proj, z: fz, colorIdx: p.colorIdx };
      });

      // Sort back-to-front (painter's algorithm)
      projected.sort((a, b) => a.z - b.z);

      // Draw
      for (const p of projected) {
        const depthNorm = (p.z + R + r) / (2 * (R + r)); // 0–1
        drawCube(p.sx, p.sy, p.scale * 0.9, p.colorIdx, depthNorm);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.55 }}
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
      <div className="absolute inset-0 bg-dark" />
      <TorusBackground />
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
            {/* Browser chrome */}
            <div className="bg-dark-3 rounded-t-xl px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-dark/60 rounded-md px-4 py-1 text-[11px] text-text-light-3 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                  platform.darkhaven.ai
                  <span className="text-text-light-3/40 ml-1">{pingMs}ms</span>
                </div>
              </div>
            </div>

            <div className="bg-dark-2/50 p-3 sm:p-5 rounded-b-xl">
              {/* Stat cards — cycle between 3 sets */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3">
                {statSets[statIdx].map((item, i) => (
                  <motion.div
                    key={`${statIdx}-${i}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="bg-dark/40 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/[0.04]"
                  >
                    <div className="text-[10px] text-text-light-3 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-base sm:text-lg font-semibold" style={{ color: item.color }}>{item.value}</div>
                    <div className="text-[10px]" style={{ color: item.color, opacity: 0.6 }}>{item.change}</div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {/* Animated bar chart */}
                <div className="sm:col-span-2 bg-dark/40 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/[0.04] h-40 sm:h-52">
                  <div className="text-[10px] text-text-light-3 uppercase tracking-wider mb-3">System Load</div>
                  <div className="flex items-end gap-1 h-28 sm:h-36">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t transition-all duration-[1600ms] ease-in-out"
                        style={{
                          height: `${h}%`,
                          background: h > 80
                            ? `linear-gradient(to top, rgba(245,158,11,0.4), rgba(245,158,11,0.7))`
                            : `linear-gradient(to top, rgba(59,130,246,0.3), rgba(59,130,246,0.65))`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right panel — log feed + domains */}
                <div className="bg-dark/40 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/[0.04] h-40 sm:h-52 overflow-hidden">
                  <div className="text-[10px] text-text-light-3 uppercase tracking-wider mb-2">Live Activity</div>
                  <div className="space-y-1.5">
                    {logLines.slice(-3).map((line, i) => (
                      <motion.div
                        key={line.text + i}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35 }}
                        className="flex items-start gap-1.5"
                      >
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: line.color }} />
                        <span className="text-[9px] sm:text-[10px] font-mono leading-tight" style={{ color: line.color, opacity: 0.85 }}>{line.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/[0.04]">
                    <motion.div
                      key={activeDomain}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-1.5"
                    >
                      <div className="w-1 h-1 rounded-full bg-blue/50" />
                      <span className="text-[10px] text-text-light-2">{domains[activeDomain]}</span>
                    </motion.div>
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
