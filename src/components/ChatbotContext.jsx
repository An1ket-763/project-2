import { createContext, useContext, useState } from 'react';

const ChatbotContext = createContext();

export function ChatbotProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: '👋 Hello! How can I help you today?' }
    ]);

    const sendMessage = (input) => {
        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                { sender: 'bot', text: `You said: "${input}". I'm still learning! 🤖` }
            ]);
        }, 500);
    };

    return (
        <ChatbotContext.Provider value={{
            isOpen, setIsOpen,
            messages, sendMessage
        }}>
            {children}
        </ChatbotContext.Provider>
    );
}

export function useChatbot() {
    return useContext(ChatbotContext);
}
