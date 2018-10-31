import React, { Component } from 'react';
import SearchContainer from './Search/SearchContainer';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
       <SearchContainer />
      </div>
    );
  }
}

export default Home;
