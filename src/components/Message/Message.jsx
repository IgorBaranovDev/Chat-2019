import React from 'react';

const ChatMessage = ({ from, message, time }) => (
  <p className='message'>
    <span className='author_messege'>{from}</span> 
    <span className='text_messege'>{message}</span> 
    <span className='time_messege'>{time}</span>
  </p>
)

export default ChatMessage;
