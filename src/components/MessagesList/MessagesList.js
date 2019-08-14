import React, { Component } from 'react';

import './MessagesList.scss';

export default class MessagesList extends Component {
  render() {
    const { messages } = this.props;
    console.log(messages);
    const messagesText = messages.map((message) => {
      return (
        <li key={message.id} className='message'>
          <p>
            <span>{message.from}</span>
            {message.message},
            <span>{message.time}</span>
          </p>
        </li>
      );
    });
    return (
      <ul className='listMesseges'>
        {messagesText}
      </ul>
    )
  }
}
