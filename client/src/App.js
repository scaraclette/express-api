import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cats from './components/cats/cats'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chonky Cats API
        </p>        
      </header>
      <Cats />
    </div>
  );
}

export default App;
