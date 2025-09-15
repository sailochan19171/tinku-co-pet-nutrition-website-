import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

// Groq API configuration (as requested)
const _groqApiKey: string = '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'; // Get free key from console.groq.com
const _groqBaseUrl: string = 'https://api.groq.com/openai/v1/chat/completions';

// Simple chat message type
type ChatMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        "Hello! I'm your Pet Nutrition Assistant. Ask me anything about pet nutrition or our Tinku & Co. products to get tailored guidance.",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const systemPrompt = useMemo<ChatMessage>(() => ({
    role: 'system',
    content:
      'You are a helpful assistant specializing in pet nutrition for dogs and cats and Tinku & Co. products. Provide accurate, concise, actionable answers. Focus on ingredients, feeding guidelines, benefits, suitability for pet age/size, and common dietary concerns (allergies, sensitivities, weight management). Avoid generic fallbacks; if needed, guide the user with clarifying questions specific to pet nutrition and Tinku & Co. products.',
  }), []);

  useEffect(() => {
    // Auto-scroll to the bottom when messages update
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendToGroq = async (allMessages: ChatMessage[]) => {
    const body = {
      model: 'llama3-70b-8192', // widely supported Groq model id
      messages: allMessages,
      temperature: 0.2,
      max_tokens: 800,
      stream: false,
    };

    const res = await fetch(_groqBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_groqApiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`Groq API error ${res.status}: ${errText}`);
    }

    const data = await res.json();
    const reply: string = data?.choices?.[0]?.message?.content ?? '';
    return reply.trim();
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: trimmed };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      // Compose final message list with system instruction at the front
      const requestMessages: ChatMessage[] = [systemPrompt, ...nextMessages];
      const reply = await sendToGroq(requestMessages);

      const assistantMsg: ChatMessage = { role: 'assistant', content: reply || 'Here is some guidance on pet nutrition.' };
      setMessages((m) => [...m, assistantMsg]);
    } catch (err) {
      // Keep UX simple; show a short actionable message instead of a fallback/refusal
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            'I had trouble fetching a response. Please try again, or ask about ingredients, feeding guidelines, sensitivities, or which Tinku & Co. recipe suits your pet.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 mb-4 border border-gray-200 flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Pet Nutrition Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="p-4 flex-1 overflow-y-auto">
            {messages.map((m, idx) => (
              <div key={idx} className={`mb-3 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <div className="inline-block rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-500">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg disabled:opacity-50"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Chat launcher with hover tooltip */}
      <div className="relative group inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        {/* Tooltip shown when pointing at the icon */}
        <div className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
          ask me about pet nutrition
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
