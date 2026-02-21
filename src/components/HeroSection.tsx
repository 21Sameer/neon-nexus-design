import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, TrendingUp, Globe, Crosshair } from "lucide-react";

const floatingChars = [
  { char: "₿", x: "8%", y: "15%", size: "text-6xl", delay: 0, duration: 10 },
  { char: "Ξ", x: "85%", y: "20%", size: "text-5xl", delay: 2, duration: 14 },
  { char: "◈", x: "12%", y: "65%", size: "text-4xl", delay: 1, duration: 11 },
  { char: "⟐", x: "90%", y: "55%", size: "text-7xl", delay: 3, duration: 13 },
  { char: "⬡", x: "25%", y: "25%", size: "text-3xl", delay: 0.5, duration: 9 },
  { char: "◇", x: "78%", y: "70%", size: "text-5xl", delay: 1.5, duration: 12 },
  { char: "△", x: "50%", y: "80%", size: "text-4xl", delay: 2.5, duration: 10 },
  { char: "⊕", x: "65%", y: "12%", size: "text-3xl", delay: 3.5, duration: 15 },
  { char: "$", x: "35%", y: "75%", size: "text-6xl", delay: 0.8, duration: 11 },
  { char: "¥", x: "72%", y: "40%", size: "text-4xl", delay: 1.8, duration: 13 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Deep layered background for 3D depth */}
      {/* Layer 1: Farthest — large soft grid */}
      <div className="absolute inset-0 animated-grid opacity-30" style={{ backgroundSize: '80px 80px', transform: 'scale(1.1)' }} />
      
      {/* Layer 2: Mid — tighter grid with parallax offset */}
      <div className="absolute inset-0 animated-grid opacity-15" style={{ backgroundSize: '40px 40px', animationDuration: '30s' }} />

      {/* Layer 3: Radial depth vignette — dark edges, subtle center glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, hsl(var(--primary) / 0.04) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, transparent 40%, hsl(var(--background)) 100%)'
      }} />

      {/* Layer 4: Bottom fog / ground haze */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%]" style={{
        background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.8) 30%, transparent 100%)'
      }} />

      {/* Layer 5: Top darkening */}
      <div className="absolute top-0 left-0 right-0 h-[30%]" style={{
        background: 'linear-gradient(to bottom, hsl(var(--background) / 0.6) 0%, transparent 100%)'
      }} />

      {/* HUD scanning line */}
      <div className="hud-scan-line" />

      {/* Radar pulses — repositioned for depth */}
      <div className="absolute top-[20%] left-[15%] opacity-40">
        <div className="radar-sweep" />
      </div>
      <div className="absolute bottom-[25%] right-[20%] opacity-30">
        <div className="radar-sweep" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="absolute top-[60%] left-[60%] opacity-20">
        <div className="radar-sweep" style={{ animationDelay: "3s", transform: 'scale(0.6)' }} />
      </div>

      {/* Floating ambient particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating characters */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingChars.map((item, i) => (
          <motion.span
            key={i}
            className={`absolute ${item.size} font-mono text-primary/[0.05] select-none`}
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.03, 0.1, 0.03],
              scale: [0.8, 1.1, 0.8],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.char}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* HUD badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex items-center justify-center gap-2"
          >
            <Crosshair className="w-3 h-3 text-primary animate-pulse-soft" />
            <span className="badge-enterprise">Command Center // Active</span>
            <Crosshair className="w-3 h-3 text-primary animate-pulse-soft" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] mb-8"
          >
            <span className="text-foreground">Precision capital</span>
            <br />
            <span className="text-primary">at institutional scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            A high-performance network powering global capital markets. 
            Automated liquidity bridging engineered for professional market participants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary-enterprise px-8 py-3.5 rounded-lg flex items-center gap-2"
            >
              Deploy Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline-enterprise px-8 py-3.5 rounded-lg"
            >
              Intel Brief
            </motion.button>
          </motion.div>

          {/* Stats — HUD panels */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: BarChart3, value: "$2.4B+", label: "Volume Processed" },
              { icon: TrendingUp, value: "10K+/s", label: "Throughput" },
              { icon: Shield, value: "99.99%", label: "Uptime SLA" },
              { icon: Globe, value: "140+", label: "Countries" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: "hsl(24 75% 50% / 0.3)" }}
                className="card-enterprise p-6 text-center relative hud-corners"
                style={{ borderColor: "hsl(24 75% 50% / 0.15)" }}
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="stat-value mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono tracking-wider uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
