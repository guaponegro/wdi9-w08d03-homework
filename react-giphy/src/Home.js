import React, { Component } from 'react';
import Search from './Search/Search';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
       <Search />
      </div>
    );
  }
}

export default Home;
