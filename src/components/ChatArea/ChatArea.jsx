import React, { Component } from 'react';

import ChatMessage from '../ChatMessage';


const URL = 'ws://st-chat.shas.tel'

class ChatArea extends Component {


  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      console.log(message);
      for (let i = 0; i < message.length; i++) {
        console.log(message[i].message);
      }

      this.addMessage(message);
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      });
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }));

  submitMessage = messageString => {
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  }

  render() {
    return (

      <div>
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>

        {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )}
      </div>
    )

  }
}

export default ChatArea;
