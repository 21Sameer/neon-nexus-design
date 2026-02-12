import { Hexagon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Hexagon className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              ByteBoom Capital &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-8">
            {["Platform", "Documentation", "Status", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
