import React, { Component } from 'react';

import './ChatInput.scss';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      messege: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandlerWithEnter = this.submitHandlerWithEnter.bind(this);
    this.submitHandlerWithButton = this.submitHandlerWithButton.bind(this);
  }

  changeHandler(event) {
    const messege = event.target.value;
    this.setState({
      messege
    });    
  }

  submitHandlerWithEnter(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.props.sendMessage(this.state.messege);
      this.setState({
        messege: ''
      });
    }
  }

  submitHandlerWithButton(event) {
    event.preventDefault();
    this.props.sendMessage(this.state.messege);
    this.setState({
      messege: ''
    });
  }


  render() {
    return (
      <form className='send-message'>
        <textarea
          className='message-input'
          type='text'
          value={this.state.messege}
          placeholder='Type you messeage ...'
          ref={(input) => { this.nameInput = input; }}
          onChange={this.changeHandler}
          onKeyUp={this.submitHandlerWithEnter} />
        <input
          className='message-input-submit'
          type='submit'
          value='Submit'
          onClick={this.submitHandlerWithButton} />
      </form>
    )
  }
}

export default ChatInput;
