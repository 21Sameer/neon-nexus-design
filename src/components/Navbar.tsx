import { motion } from "framer-motion";
import { Hexagon, Menu, Radio } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-2xl bg-background/80"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 30 }}
            transition={{ duration: 0.4 }}
            className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"
          >
            <Hexagon className="w-5 h-5 text-primary" />
          </motion.div>
          <div>
            <span className="font-bold text-foreground tracking-wider text-sm uppercase">BYTEBOOM</span>
            <span className="block text-[10px] font-mono text-muted-foreground tracking-[0.2em]">COMMAND</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Platform", "Solutions", "About", "Docs"].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ y: -1 }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-mono tracking-wide"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-3">
            <Radio className="w-3 h-3 text-success animate-pulse-soft" />
            <span className="font-mono text-[10px] text-success tracking-widest uppercase">Live</span>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
            Sign in
          </a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="btn-primary-enterprise px-5 py-2 rounded-lg text-xs"
          >
            Deploy
          </motion.a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-2xl"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {["Platform", "Solutions", "About", "Docs"].map((item) => (
              <a key={item} href="#" className="text-sm text-muted-foreground py-2 font-mono">
                {item}
              </a>
            ))}
            <a href="#" className="btn-primary-enterprise px-5 py-2.5 rounded-lg text-xs text-center mt-2">
              Deploy
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
