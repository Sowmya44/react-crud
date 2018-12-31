import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IdeasList from './components/IdeasList/IdeasList.component';
import CreateIdea from './components/CreateIdea/CreateIdea.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateIdea />
      </div>
    );
  }
}

export default App;
