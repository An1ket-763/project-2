import { useState } from 'react';
import { useChatbot } from './ChatbotContext';

export default function Chatbot() {
    const { isOpen, setIsOpen, messages, sendMessage } = useChatbot();
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        sendMessage(input);
        setInput('');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen ? (
                <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col p-3">
                    <div className="flex justify-between items-center border-b pb-2">
                        <h2 className="font-bold">Chatbot</h2>
                        <button onClick={() => setIsOpen(false)}>✕</button>
                    </div>
                    <div className="flex-1 overflow-y-auto my-2 space-y-2 text-sm">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`p-2 rounded ${msg.sender === 'user'
                                    ? 'bg-blue-100 text-right'
                                    : 'bg-gray-100 text-left'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                            className="flex-1 border rounded px-2 py-1 text-sm"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-blue-600 text-white px-3 py-1 rounded"
                        >
                            Send
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
                >
                    💬 Chat
                </button>
            )}
        </div>
    );
}

