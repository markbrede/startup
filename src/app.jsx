import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './app.css';
import '../src/login/login.css';

function Layout() {
  return (
    <div className="body img-container">
      <header>
        <h1>Auto Expense Tracker</h1>
        <nav>
          <menu>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/track">Track Expenses</Link></li>
            <li><Link to="/history">Expense History</Link></li>
            <li><Link to="/about">About</Link></li>
          </menu>
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
          <Route index element={<>login displayed here</>} />
          <Route path="track" element={<>track expenses displayed here</>} />
          <Route path="history" element={<>history displayed here</>} />
          <Route path="about" element={<>about displayed here</>} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>Error 404: Address unknown.</main>;
  }