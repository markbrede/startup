import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Login } from '../src/login/login';
import { Track } from '../src/track/track';
import { History } from '../src/history/history';
import { About } from '../src/about/about';
import './app.css';

function Layout() {
  return (
    <div className="img-container">
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
  const [expenses, setExpenses] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Login username={username} setUsername={setUsername} />}
          />
          <Route path="track" element={<Track onAddExpense={addExpense} />} />
          <Route path="history" element={<History expenses={expenses} />} />
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
