import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 glow-border flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="font-bold text-foreground tracking-wide text-sm">BYTEBOOM</span>
            <span className="block text-[10px] font-mono text-muted-foreground tracking-[0.2em]">NETWORK</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono tracking-wider">
            LOGIN
          </a>
          <a
            href="#"
            className="btn-ghost-neon px-5 py-2 rounded-lg text-xs"
          >
            DEPLOY_NODE
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
