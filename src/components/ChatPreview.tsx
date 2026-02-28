import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const chatMessages = [
  {
    role: "user",
    content: "Quantas mulheres estão em posições de liderança em STEM no Brasil?",
  },
  {
    role: "assistant",
    content:
      "Segundo os dados da plataforma ELLAS, aproximadamente 32% das posições de liderança em áreas STEM no Brasil são ocupadas por mulheres. Este número vem crescendo 2% ao ano desde 2019. Gostaria de ver a distribuição por área específica?",
  },
  {
    role: "user",
    content: "Sim, mostre por área de atuação.",
  },
];

const ChatPreview = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(290_100%_70%_/_0.1)_0%,_transparent_60%)]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Converse com <span className="text-gradient-lumina">LUMINA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Faça perguntas em linguagem natural e receba insights baseados em dados reais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden border border-border/50">
            {/* Chat header */}
            <div className="px-6 py-4 border-b border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">LUMINA</h3>
                <p className="text-xs text-muted-foreground">Assistente Virtual • Online</p>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-6 space-y-4 min-h-[300px]">
              {chatMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chat input */}
            <div className="px-6 py-4 border-t border-border/50">
              <div className="flex gap-3">
                <Input
                  placeholder="Digite sua pergunta sobre mulheres em STEM..."
                  className="flex-1 bg-input border-border/50 focus:border-primary"
                />
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-6">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatPreview;
