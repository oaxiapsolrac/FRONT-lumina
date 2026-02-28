import luminaLogo from "@/assets/lumina-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-lumina-deep/50 to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-4">
            <img src={luminaLogo} alt="LUMINA" className="w-12 h-12" />
            <span className="font-display text-2xl font-bold text-gradient-lumina">
              LUMINA
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mb-8">
            Assistente virtual de IA para interpretação de dados abertos sobre mulheres em STEM.
          </p>
          
          <div className="pt-8 border-t border-border/50 w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 LUMINA. Desenvolvido com ❤️ para mulheres em STEM.
            </p>
            <p className="text-muted-foreground text-sm">
              Dados fornecidos pela{" "}
              <a href="https://ellas.ufmt.br/pt/inicio/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Plataforma ELLAS - UFMT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
