import { motion } from "framer-motion";
import { UserPlus, Link2, Code2, Zap } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "STEP_01",
    title: "Secure Registration",
    desc: "Create your trading identity with enterprise-grade security and instant verification.",
  },
  {
    icon: Link2,
    step: "STEP_02",
    title: "Connect Exchange",
    desc: "Link your preferred exchange accounts with encrypted API credentials.",
  },
  {
    icon: Code2,
    step: "STEP_03",
    title: "Activate Trading",
    desc: "Deploy automated trading strategies with one-click activation.",
  },
  {
    icon: Zap,
    step: "STEP_04",
    title: "Maximize Returns",
    desc: "Sit back and watch your portfolio grow with intelligent automation.",
  },
];

const StepsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-primary mb-4 block">
            EXECUTION LIFECYCLE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Four steps to{" "}
            <span className="text-gradient-primary">professional performance</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-glow-secondary mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group card-futuristic p-6 relative"
            >
              {/* Step number glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="step-badge">{step.step}</span>
              </div>

              {/* XP-style progress bar */}
              <div className="w-full h-1 rounded-full bg-muted mb-5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-glow-secondary"
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
