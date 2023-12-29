import React, { useEffect, useState } from 'react';
import './chatbot.css';
import pairs from './pairsData';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleUserInput = () => {
    if (input.trim() !== '') {
      const newMessages = [
        ...messages,
        { text: input.trim(), sender: 'user' }
      ];
      setMessages(newMessages);
      setInput('');
      respondToUser(input.trim());
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleUserInput();
    }
  };

  const respondToUser = userInput => {
    // Simulate bot processing time before responding
    setTimeout(() => {
      const matchedResponse = pairs.find(pair =>
        new RegExp(pair.pattern, 'i').test(userInput)
      );

      if (matchedResponse) {
        const botResponse = matchedResponse.responses[
          Math.floor(Math.random() * matchedResponse.responses.length)
        ];

        let typedMessage = ''; // Initialize the typed message

        const typingEffect = setInterval(() => {
          if (typedMessage.length < botResponse.length) {
            typedMessage += botResponse[typedMessage.length];
            setMessages(prevMessages => [
              ...prevMessages.filter(message => message.sender === 'user'), // Keep the user's message
              { text: typedMessage, sender: 'bot' }, // Add character by character
            ]);
          } else {
            clearInterval(typingEffect); // Stop the typing effect
          }
        }, 100); // Adjust the typing speed here
      } else {
        const defaultResponse = "I'm not sure what you mean.";
        setMessages(prevMessages => [
          ...prevMessages,
          { text: defaultResponse, sender: 'bot' }
        ]);
      }
    }, 500); // Simulated bot processing time
  };

  // Scroll to the bottom of the chat window when messages update
  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div id="chat-window" className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
            style={{
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleUserInput}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
