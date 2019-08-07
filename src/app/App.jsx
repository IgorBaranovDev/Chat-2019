import React, { Component } from 'react';

import ChatArea from '../components/ChatArea';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <>
        <h1>Chat RS schol 2019</h1>
        <div><ChatArea /></div>
      </>
    );
  }
}
