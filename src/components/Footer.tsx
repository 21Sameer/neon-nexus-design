import { Bot } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-primary" />
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            BYTEBOOM NETWORK © 2025
          </span>
        </div>
        <div className="flex gap-6">
          {["Protocol", "Docs", "Status", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
