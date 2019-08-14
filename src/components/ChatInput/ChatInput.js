import React, { Component } from 'react';

import './ChatInput.scss';

export default class ChatInput extends Component {

  constructor() {
    super();
    this.state = {
      masagge: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    const masagge = event.target.value;
    this.setState({
      masagge
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.sendMessage(this.state.masagge);
    this.setState({
      masagge: ''
    });
  }

  render() {

    return (
      <form className='send-message'>
        <textarea
          className="message-input"
          type="text"
          value={this.state.masagge}
          ref={(input) => { this.nameInput = input; }}
          onChange={this.changeHandler} />
        <input
          className="message-input-submit"
          type="submit"
          value="Submit"
          onClick={this.submitHandler} />
      </form>
    )
  }
}
