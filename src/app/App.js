import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import MessagesList from '../components/MessagesList/MessagesList'
import ChatInput from '../components/ChatInput/ChatInput';

import './app.scss';

export default class App extends Component {
  constructor() {
    super();
    this.socket = '';
    this.state = {
      messages: [],
      login: localStorage.getItem('login') || 'User'
    };
    // this.sendMessage = this.sendMessage.bind(this);
    // this.getLogin = this.getLogin.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://st-chat.shas.tel');

    this.socket.onopen = () => {
      console.log('Connect!');
    };

    this.socket.onmessage = (event) => {
      this.receiveMessages(event.data);
    };

    this.socket.onclose = function (event) {
      console.log(`code: ${event.code}. reason: ${event.reason}`);
    };
  }

  sendMessage = (text) => {
    this.socket.send(JSON.stringify({
      from: this.state.login,
      message: text
    }));
    console.log('messege send');
  }

  receiveMessages = (data) => {
    const newMessages = JSON.parse(data).map(({ from, message, id, time }) => {
      const formTime = `${new Date(time).toLocaleTimeString()}`;
      return {
        from,
        message,
        id,
        formTime
      };
    });

    this.setState(({ messages }) => {
      return {
        messages: [...messages, ...newMessages]
      };
    });    
  } 

  getLogin = (login) => {
    this.setState({ login: login });
  }

  render() {
    return (
      <>
        <Header />
        <section className='wrapper-login'>
          <Login
            getLogin={this.getLogin} />
        </section>
        <section className='wrapper-messageList'>
          <MessagesList
            messages={this.state.messages} />
        </section>
        <section className='wrapper-chatInput'>
          <ChatInput
            sendMessage={this.sendMessage} />
        </section>
      </>
    );
  }
}
