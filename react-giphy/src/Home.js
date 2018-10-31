import React, { Component } from 'react';
import Hello from './Hello/Hello';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
       <Hello />
      </div>
    );
  }
}

export default Home;
