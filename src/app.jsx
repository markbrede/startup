import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Login } from '../src/login/login';
import { Track } from '../src/track/track';
import { History } from '../src/history/history';
import { About } from '../src/about/about';
import './app.css';



function Layout() {
  return (
    <div className=" img-container">
      <header>
        <h1>Auto Expense Tracker</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/track">Track Expenses</Link></li>
            <li><Link to="/history">Expense History</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <hr />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <hr />
        <span className="text-reset">Mark Brede</span>
        <br />
        <a href="https://github.com/markbrede/startup/tree/main">GitHub</a>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Replace the placeholder with the Login component */}
          <Route index element={<Login />} />
          <Route path="track" element={<Track />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      Error 404: Address unknown.
    </main>
  );
}
