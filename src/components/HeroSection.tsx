import { motion } from "framer-motion";
import { ArrowRight, Activity, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-mono text-primary tracking-widest">LIVE NETWORK</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              <span className="text-foreground">Capital</span>{" "}
              <span className="text-foreground">efficiency.</span>
              <br />
              <span className="text-gradient-primary">Institutional</span>{" "}
              <span className="text-gradient-primary">scale.</span>
            </h1>

            <div className="mb-4">
              <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
                BYTEBOOM CORE INFRASTRUCTURE
              </span>
            </div>

            <p className="font-mono text-xs tracking-wider text-primary/70 mb-6">
              PRECISION EXECUTION {">"} HUMAN SENTIMENT
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10">
              High-performance network powering global capital markets. Automated liquidity bridging for professional market participants.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-neon px-8 py-3.5 rounded-lg flex items-center gap-2 text-sm">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-ghost-neon px-8 py-3.5 rounded-lg text-sm">
                Node Login
              </button>
            </div>
          </motion.div>

          {/* Right - Status Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Logo */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-card glow-border flex items-center justify-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-3xl font-bold">
                <span className="text-foreground">BYTE</span>
                <div className="flex flex-col gap-0.5">
                  <div className="w-5 h-0.5 bg-primary" />
                  <div className="w-5 h-0.5 bg-primary/60" />
                  <div className="w-5 h-0.5 bg-primary/30" />
                </div>
                <span className="text-foreground">BOOM</span>
              </div>
            </motion.div>

            {/* Status Panel */}
            <div className="w-full max-w-sm card-futuristic p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-muted-foreground">PLATFORM UPTIME</span>
                <span className="font-mono text-xs text-primary font-bold glow-text">99.9% LIVE</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "99.9%" }}
                  transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-glow-secondary"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow" />
                <span className="font-mono text-xs tracking-widest text-muted-foreground">ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {[
                { icon: Activity, label: "THROUGHPUT", value: "10K+/s" },
                { icon: Shield, label: "ENCRYPTED", value: "AES-256" },
                { icon: Zap, label: "LATENCY", value: "<1ms" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="card-futuristic p-3 text-center"
                >
                  <stat.icon className="w-4 h-4 text-primary mx-auto mb-1.5" />
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider">{stat.label}</div>
                  <div className="font-mono text-sm font-bold text-foreground">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
