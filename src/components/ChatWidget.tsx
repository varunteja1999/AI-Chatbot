"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const defaultMessage = { role: "ai", text: "System online. I am Varun's AI architect. How can I assist you today?" };
  const [messages, setMessages] = useState([defaultMessage]);
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState<any>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const clearChat = () => {
    setMessages([defaultMessage]);
    setMetrics(null);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error("Network error");

      setMessages(prev => [...prev, { role: "ai", text: data.reply }]);
      setMetrics(data.metrics); 
    } catch (error) {
      setMessages(prev => [...prev, { role: "system", text: "Connection error." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans perspective-1000">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 40, scale: 0.9, rotateX: 20, filter: "blur(10px)" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="mb-6 w-[360px] h-[550px] bg-zinc-950/70 backdrop-blur-3xl rounded-3xl shadow-[0_0_80px_rgba(6,182,212,0.15)] border border-white/10 flex flex-col overflow-hidden origin-bottom-right"
          >
            {/* VisionOS Header */}
            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <div>
                  <h3 className="font-semibold text-white text-sm tracking-wide">Nexus AI</h3>
                  <p className="text-[10px] text-zinc-400 font-mono">Cost-Aware Engine</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={clearChat} className="text-zinc-400 hover:text-white transition-colors p-2 text-xs font-mono bg-white/5 hover:bg-white/10 rounded-full" title="Clear Chat">
                  ⟳ Reset
                </button>
                <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full">✕</button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
              <AnimatePresence>
                {messages.map((m, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-3.5 text-sm rounded-2xl shadow-lg leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-br-sm' 
                        : m.role === 'system'
                        ? 'bg-red-950/50 text-red-400 border border-red-500/20'
                        : 'bg-white/5 border border-white/10 text-zinc-200 rounded-bl-sm backdrop-blur-md'
                    }`}>
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-cyan-500 ml-2 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-75" />
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-150" />
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Metrics */}
            <AnimatePresence>
              {metrics && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-black/50 p-3 text-[10px] font-mono text-cyan-400 border-t border-white/5 backdrop-blur-md"
                >
                   <div className="flex justify-between items-center px-2">
                     <span>Tokens: {metrics.tokens.input}in / {metrics.tokens.output}out</span>
                     <span className="bg-cyan-950 px-2 py-1 rounded text-cyan-300 border border-cyan-800/50">
                       Cost: ${metrics.cost.totalUSD}
                     </span>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10 backdrop-blur-xl flex gap-3">
              <input 
                className="flex-1 text-sm p-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder-zinc-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Nexus AI..."
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button 
                onClick={sendMessage} disabled={loading}
                className="bg-cyan-500 text-black p-3 rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:opacity-50 disabled:hover:shadow-none transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Magnetic Hover */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 w-16 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center justify-center text-2xl z-50 transition-colors duration-500 ${isOpen ? 'bg-zinc-800 text-white border border-white/10' : 'bg-gradient-to-br from-cyan-400 to-blue-600 text-black'}`}
      >
        {isOpen ? "✕" : "✧"}
      </motion.button>
    </div>
  );
}