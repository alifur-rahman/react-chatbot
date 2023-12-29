const pairs = [
    {
      pattern: 'hi|hello|hey',
      responses: ['Hello! How can i help you?', 'Hey there! How can i help you?', 'Hi! How can i help you?', "Hello! What's up?"]
    },
    {
      pattern: 'how are you ?',
      responses: ["I'm doing well, thank you.", "I'm fine, thanks for asking!"]
    },
    {
      pattern: 'what is your name ?|who are you ?',
      responses: ["I'm a chatbot!", "I'm a bot designed to chat."]
    },
    {
      pattern: 'bye|goodbye',
      responses: ["Goodbye!", "Bye!", "Take care!"]
    },
    {
      pattern: 'tell me a joke|joke',
      responses: [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
      ]
    },
    {
      pattern: 'how (.*) weather (.*)',
      responses: ["I'm not sure, but you can check the weather online!", "I'm a chatbot, not a weather forecaster!"]
    },
    {
      pattern: '(.*) (hungry|eat|food)',
      responses: ["I wish I could eat! But for now, I'm here to chat with you."]
    },
    {
      pattern: '(.*) (love|like) you',
      responses: ["That's so kind of you! But I'm here to help with your queries."]
    },

    {
      pattern: 'what can you do ?',
      responses: ["I can chat with you, tell jokes, and provide information on various topics."]
    },
    {
      pattern: 'who created you ?',
      responses: ["I was created by a team of developers."]
    },
    {
      pattern: 'what is the meaning of life ?',
      responses: ["The meaning of life is a question that philosophers have pondered for centuries!"]
    },
  ];
  export default pairs;