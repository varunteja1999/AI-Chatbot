"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{role: string, text: string}>>([
    { role: "ai", text: "Hi! I'm Varun's AI Assistant. Ask me about his projects or skills!" }
  ]);
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState<any>(null); // For Research Data
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      setMetrics(data.metrics); // Capture cost data

    } catch (error) {
      setMessages(prev => [...prev, { role: "system", text: "Sorry, I encountered an error." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* 1. The Chat Window (Hidden unless open) */}
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div>
              <h3 className="font-bold text-sm">Portfolio Assistant</h3>
              <p className="text-[10px] opacity-80">Powered by Gemini 1.5 Flash</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded">
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm rounded-xl ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : m.role === 'system'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-white border text-gray-800 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
               <div className="text-xs text-gray-400 ml-2 animate-pulse">Thinking...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Research Metric Display (The Cost Awareness Part) */}
          {metrics && (
            <div className="bg-gray-900 p-2 text-[10px] font-mono text-green-400 border-t border-gray-700">
               <div className="flex justify-between">
                 <span>Input: {metrics.tokens.input} tok</span>
                 <span>Cost: ${metrics.cost.totalUSD}</span>
               </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white border-t flex gap-2">
            <input 
              className="flex-1 text-sm p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my skills..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button 
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* 2. The Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? "✕" : "💬"}
      </button>

    </div>
  );
}