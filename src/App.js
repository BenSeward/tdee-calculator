import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="form-container">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
