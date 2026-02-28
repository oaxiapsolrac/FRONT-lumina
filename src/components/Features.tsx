import { motion } from "framer-motion";
import { Brain, BarChart3, Users, Lightbulb, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Avançada",
    description:
      "Processamento de linguagem natural para interpretar e analisar dados complexos da plataforma ELLAS.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description:
      "Visualizações interativas e insights detalhados sobre a participação feminina em STEM.",
  },
  {
    icon: Users,
    title: "Foco em Mulheres",
    description:
      "Dados e recursos especialmente curados para apoiar mulheres em suas carreiras STEM.",
  },
  {
    icon: Lightbulb,
    title: "Insights Personalizados",
    description:
      "Recomendações baseadas em seus interesses e objetivos profissionais.",
  },
  {
    icon: Globe,
    title: "Dados Abertos",
    description:
      "Acesso transparente aos dados da plataforma ELLAS da UFMT para pesquisa e desenvolvimento.",
  },
  {
    icon: Shield,
    title: "Privacidade Garantida",
    description:
      "Seus dados pessoais são protegidos com as mais avançadas tecnologias de segurança.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(280_100%_65%_/_0.08)_0%,_transparent_50%)]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-lumina">Recursos</span> Poderosos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            LUMINA combina inteligência artificial avançada com dados abertos para
            fornecer insights únicos sobre mulheres em STEM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
