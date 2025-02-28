import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

import { Login } from './login/Login';
import { Track } from './track/Track';
import { History } from './history/History';
import { About } from './about/About';

function NotFound() {
  return <h1>404: Page not found</h1>;
}

function App() {
  return (
    <div className="app-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/CarVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content Overlay */}
      <div className="content-overlay">
        <header>
          <h1>Auto Expense Tracker</h1>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/track">Track Expenses</NavLink>
            <NavLink to="/history">Expense History</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>

        <main>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/track" element={<Track />} />
              <Route path="/history" element={<History />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

        <footer>
          <p>Mark Brede</p>
          <a href="https://github.com/markbrede/startup/tree/main">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
