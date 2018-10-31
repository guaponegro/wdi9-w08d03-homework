import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Search from './Search/Search';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
       <Hello />
       <Search />
      </div>
    );
  }
}

export default Home;
