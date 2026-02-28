import { Link } from "react-router-dom";
import luminaLogo from "@/assets/lumina-logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={luminaLogo} alt="LUMINA" className="w-10 h-10" />
            <span className="font-display text-xl font-bold text-gradient-lumina">
              LUMINA
            </span>
          </a>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold" asChild>
            <a href="https://lumina-ia-nu.vercel.app" target="_blank" rel="noopener noreferrer">
              Começar Agora
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;