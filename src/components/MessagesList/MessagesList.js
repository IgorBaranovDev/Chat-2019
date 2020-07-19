import React, { Component } from 'react';
import { animateScroll } from "react-scroll";

import './MessagesList.scss';

class MessagesList extends Component {
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: 'chat-list'
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages } = this.props;
    console.log('messages - ', messages.length);
    const messagesText = messages.map((message) => {
      return (
        <li key={message.id} className='message'>
          <div className='text-message'>
            <span className='author-message'>{message.from}:  </span>
            <p className='content-message'>{message.message}</p>
            <span className='time-message'>{message.formTime}</span>
          </div>
        </li>
      );
    });
    return (
      <ul className='listMesseges' id='chat-list'>
        {messagesText}
      </ul>
    )
  }
}

export default MessagesList;
