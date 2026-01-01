import { useState } from 'react';
import { X, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi! I\'m your fitness assistant. How can I help you today?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const quickResponses: { [key: string]: string } = {
    'timing': 'We are open from 5:00 AM to 11:00 PM, 7 days a week including holidays.',
    'price': 'Our memberships start from ₹1,999/month for Basic, ₹3,499/month for Pro, and ₹5,999/month for Elite. We also have a special annual offer!',
    'trial': 'Yes! We offer a FREE 1-day trial pass. You can book it using the form on this page.',
    'location': 'We are located at Sector 14, Hiran Magri, Udaipur, Rajasthan 313001.',
    'trainer': 'We have 15+ certified trainers with expertise in weight loss, strength training, bodybuilding, and functional fitness.',
    'diet': 'Yes, personalized diet plans are included in Pro and Elite memberships, or available separately for ₹2,000/month.',
    'equipment': 'We have state-of-the-art equipment including free weights, machines, cardio equipment, functional training area, and more.',
    'parking': 'Yes, we provide free parking for all members with 24/7 CCTV surveillance.',
    'class': 'We offer group classes including yoga, Zumba, CrossFit, and HIIT. Schedule varies by day.',
    'contact': 'You can call us at +91 98765 43210 or email info@rnoldfitness.com'
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('timing') || input.includes('time') || input.includes('hours') || input.includes('open')) {
      return quickResponses.timing;
    }
    if (input.includes('price') || input.includes('cost') || input.includes('membership') || input.includes('fees')) {
      return quickResponses.price;
    }
    if (input.includes('trial') || input.includes('free')) {
      return quickResponses.trial;
    }
    if (input.includes('location') || input.includes('address') || input.includes('where')) {
      return quickResponses.location;
    }
    if (input.includes('trainer') || input.includes('coach')) {
      return quickResponses.trainer;
    }
    if (input.includes('diet') || input.includes('nutrition') || input.includes('meal')) {
      return quickResponses.diet;
    }
    if (input.includes('equipment') || input.includes('facility') || input.includes('machine')) {
      return quickResponses.equipment;
    }
    if (input.includes('parking') || input.includes('park')) {
      return quickResponses.parking;
    }
    if (input.includes('class') || input.includes('yoga') || input.includes('zumba')) {
      return quickResponses.class;
    }
    if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return quickResponses.contact;
    }
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'Hello! How can I assist you with your fitness journey today?';
    }
    if (input.includes('thank')) {
      return 'You\'re welcome! Feel free to ask anything else.';
    }

    return 'I can help you with information about our timings, prices, trainers, facilities, diet plans, and more. What would you like to know?';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = { text: getBotResponse(input), isBot: true };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse bg-white"
        >
          <img src="/image.png" alt="Fitness Assistant" className="w-14 h-14 rounded-full object-cover" />
        </button>
      ) : (
        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 w-96 max-w-[calc(100vw-3rem)] overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <img src="/image.png" alt="Fitness Assistant" className="w-10 h-10 rounded-full object-cover mr-3" />
              <div>
                <div className="font-bold text-white">Fitness Assistant</div>
                <div className="text-xs text-white/80">Online now</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-800">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? 'bg-gray-700 text-white'
                      : 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-900 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-lg px-4 py-3 transition-all duration-300"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
