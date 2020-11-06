import React, { useState } from 'react';
import './Chat.css';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  return (
    <div className="chat_container">
      <div className="chat_messages_container">
        <div className="chat_messages">
          {messages.map(({ text, type }) => {
            return <div className={`chat_message ${type}`}>{text}</div>;
          })}
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
              const newMessage = [...messages];
              newMessage.push({ type: 'right', text: userInput });
              setMessages(newMessage);
              setUserInput('');
            }}
          >
            <i class="material-icons">{'send'}</i>
          </div>
        </div>
      </div>
    </div>
  );
}
