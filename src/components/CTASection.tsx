import { motion } from "framer-motion";
import { ArrowRight, Lock, ShieldCheck, Server, Target } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-radial-warm opacity-60" />
      <div className="absolute inset-0 animated-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Target className="w-3 h-3 text-primary animate-pulse-soft" />
            <span className="badge-enterprise">Mission Ready</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            <span className="text-foreground">Professional execution.</span>
            <br />
            <span className="text-primary">Built for performance.</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
            Secure your place in the definitive network for automated finance.
          </p>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Deploy your institutional identity and optimize capital with ByteBoom.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary-enterprise px-10 py-4 rounded-lg flex items-center gap-3 mx-auto"
          >
            Initiate Deployment
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            { icon: Server, label: "SOC 2 Compliant" },
            { icon: Lock, label: "AES-256 Encryption" },
            { icon: ShieldCheck, label: "Enterprise SLA" },
          ].map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="card-glass px-6 py-4 flex items-center gap-3 hud-corners"
              style={{ borderColor: "hsl(24 75% 50% / 0.1)" }}
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-mono tracking-wider">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
