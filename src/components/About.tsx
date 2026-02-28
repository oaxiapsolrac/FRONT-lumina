import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Sobre a LUMINA
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-6">
              Empoderando Mulheres em{" "}
              <span className="text-gradient-lumina">STEM</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                LUMINA é uma assistente virtual de inteligência artificial
                desenvolvida para interpretar e analisar dados abertos da
                plataforma <strong className="text-foreground">ELLAS</strong> da
                Universidade Federal de Mato Grosso (UFMT).
              </p>
              <p>
                Nossa missão é democratizar o acesso a informações relevantes
                sobre a participação feminina nas áreas de Ciência, Tecnologia,
                Engenharia e Matemática (STEM) na América Latina.
              </p>
              <p>
                Através de análises inteligentes e visualizações interativas,
                LUMINA ajuda pesquisadoras, estudantes e profissionais a
                identificar oportunidades, tendências e desafios no cenário STEM.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
              >
                <a href="https://ellas.ufmt.br/pt/inicio/" target="_blank" rel="noopener noreferrer">
                  Conhecer a Plataforma ELLAS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/20 animate-rotate-slow" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-accent/30 animate-rotate-slow" style={{ animationDirection: "reverse" }} />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/40" />
              </div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card rounded-2xl p-8 text-center max-w-xs">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-3xl">♀</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Plataforma ELLAS
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Evidências sobre Liderança e Inclusão de Mulheres na América Latina
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 glass-card rounded-lg px-3 py-2"
              >
                <span className="text-sm font-semibold text-primary">UFMT</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-10 left-10 glass-card rounded-lg px-3 py-2"
              >
                <span className="text-sm font-semibold text-accent">Open Data</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
