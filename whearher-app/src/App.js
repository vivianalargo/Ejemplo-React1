import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wheather App (Aplicación del clima)</h1>
        </header>
        <WeatherLocation/>
      </div>
    );
  }
}

export default App;
