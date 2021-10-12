import React from 'react';
import logo from '../../logo.svg';
import './index.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to learning TypeScript
        </p>
      </header>
    </div>
  );
}

export default HomePage;
