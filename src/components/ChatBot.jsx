import { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi there! I\'m PawBuddy, your friendly assistant. How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    // In a real application, this would call an AI API like ChatGPT
    setTimeout(() => {
      const botResponses = {
        'volunteer': 'You can volunteer by filling out our form in the Volunteer section. We have various roles available!',
        'adopt': 'Check out our Pet Adoption Carousel to find your perfect companion!',
        'events': 'We host pet-friendly events every month. The next one is a park cleanup day on the 15th.',
        'donate': 'Thank you for your interest in donating! You can contribute through our website or at any of our events.',
        'help': 'I can provide information about volunteering, adoption, events, or donations. What would you like to know?'
      };

      let botReply = 'I\'m not sure how to respond to that. Can you ask about volunteering, adoption, events, or donations?';
      
      // Simple keyword matching
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (input.toLowerCase().includes(keyword)) {
          botReply = response;
          break;
        }
      }

      const botMessage = { text: botReply, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <button className="chatbot-toggle" onClick={toggleChat} aria-label="Toggle chat assistant">
        {isOpen ? '✕' : '🐾'}
      </button>
      
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>PawBuddy</h3>
          <span className="chatbot-subtitle">Your Pet-Friendly Assistant</span>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}-message ${index === messages.length - 1 ? 'fade-in' : ''}`}>
              {message.sender === 'bot' && <span className="bot-avatar">🐶</span>}
              <div className="message-bubble">{message.text}</div>
              {message.sender === 'user' && <span className="user-avatar">👤</span>}
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message typing">
              <span className="bot-avatar">🐶</span>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about pets, adoption, or volunteering..."
            aria-label="Chat message"
          />
          <button type="submit" className="send-button" aria-label="Send message">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;