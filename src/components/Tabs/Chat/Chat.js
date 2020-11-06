import React from 'react';
import './Chat.css';

export default function Chat() {
  return (
    <div className="chat_container">
      <div className="chat_messages_container">
        <div className="chat_messages">
          <div className="chat-message right">HI</div>
          <div className="chat-message left">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
          <div className="chat-message right">HI</div>
        </div>
      </div>
      <div className="chat_footer">
        <div className="chat_message_input_container">
          <input className="chat_message_input" placeholder={'Type message'} />
          <div className="chat_send_button">
            <i class="material-icons">{'send'}</i>
          </div>
        </div>
      </div>
    </div>
  );
}
