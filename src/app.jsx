import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './app.css';

import { Login } from './login/login';
import { Track } from './track/track';
import { History } from './history/history';
import { About } from './about/about';

function NotFound() {
  return <h1>404: Page not found</h1>;
}

function App() {
  return (
    <div className="app-container">
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
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/track' element={<Track />} />
          <Route path='/history' element={<History />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>Mark Brede</p>
        <a href="https://github.com/markbrede/startup/tree/main">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
