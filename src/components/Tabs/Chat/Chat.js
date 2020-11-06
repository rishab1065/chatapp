import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
const onMessage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          botMessage: 'Pardon my ignorance. I am just a dummy.fsdfdsfsd',
        },
      });
    }, 1000);
  });
};
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const messageContainerRef = useRef(null);

  const scrollToBottom = () => {
    messageContainerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  useEffect(() => {
    scrollToBottom();
    if (
      messages[messages.length - 1] &&
      messages[messages.length - 1].type === 'right'
    ) {
      onMessage().then(({ data }) => {
        const newMessage = [...messages];
        newMessage.push({ type: 'left', text: data.botMessage });
        setMessages(newMessage);
      });
    }
  }, [messages]);
  return (
    <div className="chat_container">
      <div className="chat_messages_container">
        <div className="chat_messages">
          {messages.map(({ text, type }, index) => {
            return (
              <div className={`chat_message ${type}`} key={index}>
                {text}
              </div>
            );
          })}
          <div className="dummy_chat_message" ref={messageContainerRef} />
        </div>
      </div>
      <div className="chat_footer">
        <div className="chat_message_input_container">
          <input
            value={userInput}
            className="chat_message_input"
            placeholder={'Type message'}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <div
            className="chat_send_button"
            onClick={() => {
              if (!userInput) return;
              const newMessage = [...messages];
              newMessage.push({ type: 'right', text: userInput });
              setMessages(newMessage);
              setUserInput('');
            }}
          >
            <i className="material-icons">{'send'}</i>
          </div>
        </div>
      </div>
    </div>
  );
}
