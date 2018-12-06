import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IdeasList from './components/IdeasList/IdeasList.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IdeasList />
      </div>
    );
  }
}

export default App;
