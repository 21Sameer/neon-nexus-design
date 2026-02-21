import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, TrendingUp, Globe, Crosshair } from "lucide-react";
import heroRobot from "@/assets/hero-robot.png";

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
      {/* === FUTURISTIC BACKGROUND === */}

      {/* Perspective grid floor — vanishing point */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[60%]" style={{
          background: `
            linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.03) 100%),
            repeating-linear-gradient(90deg, hsl(var(--primary) / 0.06) 0px, transparent 1px, transparent 80px),
            repeating-linear-gradient(0deg, hsl(var(--primary) / 0.04) 0px, transparent 1px, transparent 60px)
          `,
          transform: 'perspective(500px) rotateX(55deg)',
          transformOrigin: 'bottom center',
        }} />
      </div>

      {/* Layer 1: Far grid — large, slow */}
      <div className="absolute inset-0 animated-grid opacity-15" style={{ backgroundSize: '120px 120px', transform: 'scale(1.3)' }} />

      {/* Layer 2: Mid grid — tighter */}
      <div className="absolute inset-0 animated-grid opacity-[0.06]" style={{ backgroundSize: '40px 40px', animationDuration: '25s' }} />

      {/* Hexagonal energy field overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c2651a' fill-opacity='0.4'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Central energy core glow */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 50% 40% at 35% 50%, hsl(var(--primary) / 0.1) 0%, transparent 60%),
          radial-gradient(ellipse 30% 50% at 70% 40%, hsl(210 65% 52% / 0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, transparent 30%, hsl(var(--background)) 100%)
        `
      }} />

      {/* Horizontal energy lines */}
      {[25, 45, 65, 80].map((top, i) => (
        <motion.div
          key={`hline-${i}`}
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ top: `${top}%` }}
          animate={{ opacity: [0.02, 0.08, 0.02], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 4 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
        >
          <div className="w-full h-full" style={{
            background: `linear-gradient(90deg, transparent 5%, hsl(var(--primary) / 0.15) 20%, hsl(var(--primary) / 0.3) 50%, hsl(var(--primary) / 0.15) 80%, transparent 95%)`
          }} />
        </motion.div>
      ))}

      {/* Vertical data streams */}
      {[15, 35, 60, 82].map((left, i) => (
        <motion.div
          key={`vline-${i}`}
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{ left: `${left}%` }}
          animate={{ opacity: [0, 0.06, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
        >
          <div className="w-full h-full" style={{
            background: `linear-gradient(180deg, transparent 10%, hsl(var(--primary) / 0.2) 50%, transparent 90%)`
          }} />
        </motion.div>
      ))}

      {/* Bottom fog / ground haze — thicker */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%]" style={{
        background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 15%, hsl(var(--background) / 0.5) 45%, transparent 100%)'
      }} />

      {/* Top atmospheric darkening */}
      <div className="absolute top-0 left-0 right-0 h-[30%]" style={{
        background: 'linear-gradient(to bottom, hsl(var(--background) / 0.8) 0%, transparent 100%)'
      }} />

      {/* HUD scanning line */}
      <div className="hud-scan-line" />

      {/* Radar pulses — layered */}
      <div className="absolute top-[18%] left-[12%] opacity-25">
        <div className="radar-sweep" />
      </div>
      <div className="absolute bottom-[22%] right-[18%] opacity-15">
        <div className="radar-sweep" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="absolute top-[55%] left-[55%] opacity-[0.07]">
        <div className="radar-sweep" style={{ animationDelay: "3s", transform: 'scale(0.5)' }} />
      </div>
      <div className="absolute top-[35%] right-[8%] opacity-10">
        <div className="radar-sweep" style={{ animationDelay: "2.2s", transform: 'scale(0.7)' }} />
      </div>

      {/* Floating ambient particles — glowing orbs */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${2 + (i % 4) * 2}px`,
            height: `${2 + (i % 4) * 2}px`,
            background: i % 3 === 0 ? 'hsl(var(--primary) / 0.4)' : i % 3 === 1 ? 'hsl(210 65% 52% / 0.2)' : 'hsl(var(--foreground) / 0.12)',
            boxShadow: i % 3 === 0 ? '0 0 8px hsl(var(--primary) / 0.3)' : 'none',
            left: `${5 + i * 6.5}%`,
            top: `${12 + (i % 5) * 18}%`,
          }}
          animate={{
            y: [0, -40 - i * 4, 0],
            x: [0, (i % 2 === 0 ? 20 : -20), 0],
            opacity: [0.03, 0.4, 0.03],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + i * 1.2,
            delay: i * 0.5,
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
            className={`absolute ${item.size} font-mono text-primary/[0.04] select-none`}
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.02, 0.08, 0.02],
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

      {/* === MAIN CONTENT — Split Layout === */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* LEFT — Robot with 3D depth */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="relative w-full lg:w-1/2 flex justify-center"
          >
            {/* Glow behind robot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[70%] h-[70%] rounded-full opacity-30" style={{
                background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }} />
            </div>
            
            {/* Robot shadow on ground */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-8 rounded-full opacity-20" style={{
              background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.4) 0%, transparent 70%)',
              filter: 'blur(12px)',
            }} />

            <motion.img
              src={heroRobot}
              alt="ByteBoom Trading AI"
              className="relative z-10 w-[80%] max-w-[500px] drop-shadow-2xl"
              animate={{
                y: [0, -12, 0],
                rotateY: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                filter: 'drop-shadow(0 20px 40px hsl(var(--primary) / 0.15))',
              }}
            />

            {/* Orbiting rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full border border-primary/10 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] aspect-square rounded-full border border-primary/[0.04] pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* RIGHT — Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 flex items-center justify-center lg:justify-start gap-2"
            >
              <Crosshair className="w-3 h-3 text-primary animate-pulse-soft" />
              <span className="badge-enterprise">Command Center // Active</span>
              <Crosshair className="w-3 h-3 text-primary animate-pulse-soft" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6"
            >
              <span className="text-foreground">The Market Never Sleeps.</span>
              <br />
              <span className="text-primary">Neither Does ByteBoom.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              A high-performance network powering global capital markets.
              Automated liquidity bridging engineered for professional market participants.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-14"
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: BarChart3, value: "$2.4B+", label: "Volume" },
                { icon: TrendingUp, value: "10K+/s", label: "Throughput" },
                { icon: Shield, value: "99.99%", label: "Uptime" },
                { icon: Globe, value: "140+", label: "Countries" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  whileHover={{ y: -3, borderColor: "hsl(24 75% 50% / 0.3)" }}
                  className="card-enterprise p-4 text-center relative hud-corners"
                  style={{ borderColor: "hsl(24 75% 50% / 0.15)" }}
                >
                  <stat.icon className="w-4 h-4 text-primary mx-auto mb-2" />
                  <div className="stat-value text-lg mb-0.5">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
