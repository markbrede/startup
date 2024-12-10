import React from 'react';
import './app.css';
import '../index.css';

export default function App() {
  return (
    <div className="body img-container">
      <header>
        <h1>Auto Expense Tracker</h1>
        <nav>
          <menu>
            <li><a href="index.html" className="active">Home</a></li>
            <li><a href="track.html">Track Expenses</a></li>
            <li><a href="history.html">Expense History</a></li>
            <li><a href="about.html">About</a></li>
          </menu>
        </nav>
        <hr />
      </header>

      <footer>
        <hr />
        <span className="text-reset">Mark Brede</span>
        <br />
        <a href="https://github.com/markbrede/startup/tree/main">GitHub</a>
      </footer>
    </div>
  );
}