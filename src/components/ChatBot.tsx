import React, { useState, useRef, useEffect } from 'react';
import { Music, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const predefinedQuestions = [
  "Enstrüman kursları hakkında bilgi al",
  "Stüdyo ve kayıt hizmetlerini öğren",
  "Müzik okullarına hazırlık programı nedir?",
  "Çocuklara özel dersler var mı?"
];

const responses = {
  "enstrüman": "Geniş enstrüman kurs seçeneklerimiz arasında kanun, ud, ney, bağlama, keman, gitar, piyano ve daha fazlası bulunmaktadır. Detaylı bilgi ve fiyatlandırma için: https://wa.me/905345671010",
  "stüdyo": "Profesyonel stüdyomuzda kayıt, mix, mastering ve altyapı hazırlama hizmetleri sunuyoruz. Stüdyo hizmetleri hakkında detaylı bilgi için: https://wa.me/905345671010",
  "hazırlık": "Konservatuvar ve güzel sanatlar liseleri için özel hazırlık programımız, sınav teknikleri ve repertuar çalışmalarını içerir. Program detayları için: https://wa.me/905345671010",
  "çocuk": "4-12 yaş arası çocuklar için özel müzik eğitim programlarımız mevcuttur. Yaş gruplarına göre özel müfredat ve eğlenceli aktiviteler. Detaylar için: https://wa.me/905345671010",
  "default": "Size daha iyi yardımcı olabilmek için lütfen WhatsApp üzerinden iletişime geçin: https://wa.me/905345671010"
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: Date.now(),
        text: "Merhaba! Size nasıl yardımcı olabilirim?",
        isBot: true
      }]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (message: string) => {
    const lowercaseMsg = message.toLowerCase();
    
    if (lowercaseMsg.includes('enstrüman') || lowercaseMsg.includes('kurs')) {
      return responses.enstrüman;
    }
    if (lowercaseMsg.includes('stüdyo') || lowercaseMsg.includes('kayıt')) {
      return responses.stüdyo;
    }
    if (lowercaseMsg.includes('hazırlık') || lowercaseMsg.includes('konservatuvar') || lowercaseMsg.includes('sınav')) {
      return responses.hazırlık;
    }
    if (lowercaseMsg.includes('çocuk') || lowercaseMsg.includes('yaş')) {
      return responses.çocuk;
    }
    
    return responses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);

    // Get appropriate response
    const botResponse = {
      id: Date.now() + 1,
      text: getResponse(inputValue),
      isBot: true
    };

    // Add bot response with delay
    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 right-4 z-50">
        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-burgundy" />
          ) : (
            <Music className="w-6 h-6 text-burgundy animate-spin-slow" />
          )}
        </button>

        {/* Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-96 bg-burgundy rounded-lg shadow-xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-burgundy-dark p-4 border-b border-primary-100/20">
              <h3 className="text-white font-medium flex items-center gap-2">
                <Music className="w-5 h-5 text-primary-100" />
                Müzikhane Asistan
              </h3>
            </div>

            {/* Messages Container */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-burgundy-light text-white'
                        : 'bg-primary-100 text-burgundy'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-primary-100/20">
              <div className="flex flex-wrap gap-2">
                {predefinedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(question);
                      handleSendMessage();
                    }}
                    className="bg-burgundy-light px-3 py-1 rounded-full text-sm text-primary-100 hover:bg-burgundy-dark transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-primary-100/20">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 bg-burgundy-light text-white placeholder-primary-100/70 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-100/50"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-primary-100 text-burgundy rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default ChatBot;