import { motion } from "framer-motion";
import { UserPlus, Link2, Code2, Zap } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Secure Registration",
    desc: "Create your trading identity with enterprise-grade security and instant verification.",
  },
  {
    icon: Link2,
    step: "02",
    title: "Connect Exchange",
    desc: "Link your preferred exchange accounts with encrypted API credentials.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Activate Strategies",
    desc: "Deploy automated trading strategies with one-click activation and live monitoring.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Scale Returns",
    desc: "Watch your portfolio grow with intelligent automation and real-time analytics.",
  },
];

const StepsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-50" />
      {/* Scan line */}
      <div className="hud-scan-line" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-enterprise mb-4 inline-block">Mission Briefing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            From onboarding to{" "}
            <span className="text-primary">full automation</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A streamlined process designed to get you operational in minutes, not days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card-highlight p-7 group relative hud-corners"
              style={{ borderColor: "hsl(24 75% 50% / 0.15)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors"
                >
                  <step.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="font-mono text-3xl font-bold text-muted-foreground/20">{step.step}</span>
              </div>

              {/* Progress indicator */}
              <div className="w-full h-0.5 rounded-full bg-border mb-5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.2 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

              {/* Status indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
