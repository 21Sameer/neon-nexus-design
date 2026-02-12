import { motion } from "framer-motion";
import { ArrowRight, Lock, ShieldCheck, Server } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Professional execution.</span>
            <br />
            <span className="text-gradient-primary">Built for absolute performance.</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
            Secure your place in the definitive network for automated finance.
          </p>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Deploy your institutional identity and weaponize your capital with ByteBoom Core.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-neon px-10 py-4 rounded-xl flex items-center gap-3 mx-auto text-sm"
          >
            DEPLOY CORE INFRASTRUCTURE
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Security badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            { icon: Server, top: "NODE_X_VAL", bottom: "SECURE_CLUSTER" },
            { icon: Lock, top: "AES-256_ENC", bottom: "MILITARY_GRADE" },
            { icon: ShieldCheck, top: "TLS_1.3_AUTH", bottom: "SECURE_PROTOCOL" },
          ].map((badge, i) => (
            <motion.div
              key={badge.top}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="card-futuristic px-6 py-4 flex items-center gap-3"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <div>
                <div className="font-mono text-xs font-bold text-foreground tracking-wider">{badge.top}</div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-wider">{badge.bottom}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
