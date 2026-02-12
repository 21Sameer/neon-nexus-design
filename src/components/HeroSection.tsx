import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, TrendingUp, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle" />
      <div className="absolute inset-0 bg-radial-warm" />

      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="badge-enterprise">Enterprise Trading Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] mb-8"
          >
            <span className="text-foreground">Precision capital</span>
            <br />
            <span className="text-gradient-warm">at institutional scale.</span>
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
            <button className="btn-primary-enterprise px-8 py-3.5 rounded-xl flex items-center gap-2">
              Start Trading
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-outline-enterprise px-8 py-3.5 rounded-xl">
              View Platform
            </button>
          </motion.div>

          {/* Stats Cards */}
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
                className="card-enterprise p-6 text-center"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="stat-value mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
