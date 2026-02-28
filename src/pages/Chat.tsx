import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Plus, Menu, X } from "lucide-react";
import luminaLogo from "@/assets/lumina-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Olá! Sou a LUMINA. Como posso ajudar hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const responses = [
        "Excelente pergunta! Segundo dados da plataforma ELLAS, a participação de mulheres em STEM na América Latina cresceu 15% nos últimos 5 anos.",
        "De acordo com nossa análise, o Brasil tem o maior número de mulheres formadas em tecnologia na América Latina, representando cerca de 35% do total regional.",
        "Os dados mostram que áreas como Ciência de Dados e UX Design têm atraído mais mulheres nos últimos anos, com crescimento de 25% desde 2020.",
        "Interessante! A plataforma ELLAS registra que programas de mentoria aumentam em 40% a retenção de mulheres em carreiras STEM.",
      ];
      
      const aiMessage: Message = {
        id: Date.now(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: 1,
        role: "assistant",
        content: "Olá! Sou a LUMINA. Como posso ajudar hoje?",
      },
    ]);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground">Histórico</p>
          </div>

          {/* New Chat Button */}
          <Button
            onClick={handleNewChat}
            variant="outline"
            className="w-full justify-center gap-2 mb-4 border-border hover:bg-secondary"
          >
            Novo chat
          </Button>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-1">
              <div className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
                Mulheres em liderança STEM
              </div>
              <div className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
                Estatísticas Brasil 2024
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-border">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary transition-colors"
            >
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-center gap-2 px-4 py-3 border-b border-border bg-card/50 backdrop-blur-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg absolute left-2"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
          <span className="font-display text-lg font-semibold tracking-wide">
            LUMINA
          </span>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-3"
                >
                  {message.role === "assistant" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                  )}
                  <div
                    className={`flex-1 ${
                      message.role === "user" ? "flex justify-end" : ""
                    }`}
                  >
                    <div
                      className={`inline-block max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                          : "bg-secondary/50 border border-border/50 text-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Start prompt - only show if single initial message */}
            {messages.length === 1 && !isLoading && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-muted-foreground mt-4"
              >
                Inicie o seu diálogo!
              </motion.p>
            )}

            {/* Loading indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div className="flex items-center gap-1 px-4 py-3 bg-secondary/50 border border-border/50 rounded-2xl">
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte qualquer coisa..."
                className="w-full bg-input border border-border/50 rounded-full px-6 py-4 pr-24 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                size="sm"
                className="absolute right-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 px-6"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Chat;