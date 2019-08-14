import React, { Component } from 'react';

import MessagesList from '../components/MessagesList/MessagesList'
import Header from '../components/Header/Header';

import './app.scss';

export default class App extends Component {
  constructor() {
    super();
    this.socket = '';
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://st-chat.shas.tel');

    this.socket.onopen = () => {
      console.log('Connect!');
    };

    this.socket.onmessage = (event) => {
      console.log(event.data);
      this.receiveMessages(event.data);
    };

    this.socket.onclose = function (event) {
      console.log(`code: ${event.code}. reason: ${event.reason}`);
    };
  }

  sendMessage(text) {
    this.socket.send(JSON.stringify({
      from: 'user',
      messsage: text
    }));
  }

  receiveMessages(data) {
    const newMessages = JSON.parse(data).map(({ from, message, id, time }) => {
      return {
        from,
        message,
        id,
        time
      };
    });
    console.log(newMessages);
    this.setState(({ messages }) => {
      return {
        messages: [...messages, ...newMessages]
      };
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className='wrapper'>
          <MessagesList
            messages={this.state.messages} />
        </div>
      </>
    );
  }
}
