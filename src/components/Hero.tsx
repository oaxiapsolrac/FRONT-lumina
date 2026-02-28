import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import luminaLogo from "@/assets/lumina-logo.png";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-lumina-deep via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(280_100%_65%_/_0.15)_0%,_transparent_70%)]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(270_30%_25%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(270_30%_25%_/_0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full animate-pulse-glow" />
          <motion.img
            src={luminaLogo}
            alt="LUMINA - Assistente Virtual IA"
            className="w-48 h-48 md:w-64 md:h-64 relative z-10 drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4"
        >
          <span className="text-gradient-lumina">LUMINA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4"
        >
          Sua Assistente Virtual Inteligente
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base md:text-lg text-foreground/80 max-w-3xl mb-8"
        >
          Interpretando dados abertos da plataforma{" "}
          <span className="text-primary font-semibold">ELLAS (UFMT)</span> para
          empoderar mulheres na área de{" "}
          <span className="text-accent font-semibold">STEM</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-lumina"
            asChild
          >
            <a href="https://lumina-ia-nu.vercel.app" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Conversar com LUMINA
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Dados Analisados", value: "50K+" },
            { label: "Mulheres Apoiadas", value: "10K+" },
            { label: "Países", value: "12" },
            { label: "Áreas STEM", value: "25+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-lumina">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
