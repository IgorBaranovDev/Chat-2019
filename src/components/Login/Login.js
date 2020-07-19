import React, { Component } from 'react';

import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      value: localStorage.getItem('login') || 'User'
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = () => {
    this.props.getLogin(this.state.value);
    localStorage.setItem('login', `${this.state.value}`);
  }

  render() {
    return (
      <>
        <input
          className='input-user-name'
          type='text'
          value={this.state.value}
          onChange={this.handleChange} />
        <input
          className='submit-user-name'
          type='submit'
          value='Change name'
          onClick={this.handleSubmit} />
      </>
    )
  }
}

export default Login;
