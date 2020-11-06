import React from 'react';
import './Chat.css';

export default function Chat() {
  return (
    <div className="chat_container">
      <div className="chat_footer">
        <div className="chat_message">
          <input className="chat_message_input" placeholder={'Type message'} />
          <div className="chat_send_button">
            <i class="material-icons">{'send'}</i>
          </div>
        </div>
      </div>
    </div>
  );
}
