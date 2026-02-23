"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { SITE } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are a helpful customer service assistant for ${SITE.name}, a trusted mustard oil manufacturer and supplier based in Deeg, Bharatpur, Rajasthan, India.

About the business:
- Owner: ${SITE.owner}
- Products: Cold-pressed pure mustard oil (Kachi Ghani), Oil Cake (Khali) for cattle feed
- FSSAI Certified
- Address: ${SITE.address}
- Phone: ${SITE.phone}
- Email: ${SITE.email}
- Wholesale & retail supply across India
- WhatsApp: Available for orders and inquiries

Key info you can share:
- Mustard oil is available in various pack sizes (1L, 2L, 5L, 15L, 30L, 50L tins, bulk drums)
- Oil cake is available in bulk for cattle feed
- Delivery across India
- For exact prices, direct users to the Price List page or contact via WhatsApp/phone
- For orders, direct users to WhatsApp or the Contact page

Always be polite, concise, and helpful. Answer in the same language the user is using (Hindi or English). If asked something you don't know, suggest contacting directly via phone or WhatsApp.`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Namaste! 🙏 Main Saukat Mill Oil ka assistant hoon. Mustard oil, oil cake, pricing, ya delivery ke baare mein koi bhi sawaal poochh sakte hain!\n\nHello! I'm the Saukat Mill Oil assistant. Ask me anything about our products, pricing, or delivery!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply = data.content?.[0]?.text || "Sorry, kuch error aa gaya. Please WhatsApp par contact karein.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Network error. Please try again or contact us on WhatsApp." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-40 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{ background: "var(--accent)", color: "#000" }}
        aria-label="Open Chatbot"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-56 right-4 z-50 w-[22rem] max-w-[95vw] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-color)",
            height: "420px",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: "var(--accent)" }}
          >
            <Bot className="w-6 h-6 text-black" />
            <div>
              <p className="font-bold text-sm text-black leading-none">Saukat Mill Assistant</p>
              <p className="text-xs text-black/70">Online • Mustard Oil Expert</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: msg.role === "user" ? "var(--accent)" : "var(--bg-elevated)",
                    color: msg.role === "user" ? "#000" : "var(--text-secondary)",
                  }}
                >
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div
                  className="max-w-[80%] rounded-xl px-3 py-2 leading-relaxed whitespace-pre-wrap"
                  style={{
                    background: msg.role === "user" ? "var(--accent)" : "var(--bg-elevated)",
                    color: msg.role === "user" ? "#000" : "var(--text-primary)",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "var(--bg-elevated)" }}>
                  <Bot className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                </div>
                <div className="rounded-xl px-3 py-2" style={{ background: "var(--bg-elevated)" }}>
                  <Loader2 className="w-4 h-4 animate-spin" style={{ color: "var(--accent)" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 p-3"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your question..."
              className="flex-1 rounded-lg px-3 py-2 text-sm outline-none"
              style={{
                background: "var(--bg-elevated)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-opacity disabled:opacity-40"
              style={{ background: "var(--accent)", color: "#000" }}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
