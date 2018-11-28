import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.component'
import FamousPerson from './components/famousPerson.component'

import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson />
      </div>
    );
  }
}

export default App;
