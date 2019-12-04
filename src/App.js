import React from 'react';
import logo from './pomodoro.png';
import './App.css';
import Time from './components/Time';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pomodoro
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Time/>
        
        <div className="ButtonsHolders">
        <button id="buttStart"> Start </button> 
        <button id="buttPause"> Pause </button>
        <button id="buttReset"> Reset </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Customize Application
        </a>
      </header>
    </div>
  );
}

export default App;
