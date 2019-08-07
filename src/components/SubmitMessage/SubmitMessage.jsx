import React, { Component } from 'react';

function SubmitMessage() {

  // state = {
  //   name: '',
  //   messages: [],
  // }

  // addMessage = message =>
  //   this.setState(state => ({ messages: [message, ...state.messages] }));

  // submitMessage = messageString => {
  //   const message = { name: this.state.name, message: messageString }
  //   this.ws.send(JSON.stringify(message));
  //   this.addMessage(message);


  return (
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
  )

}


export default SubmitMessage;
