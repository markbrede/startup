import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Login } from './login/login';
import { Track } from './track/track';
import { History } from './history/History';
import { About } from './about/About';

function NotFound() {
  return <h1>404: Page not found</h1>;
}

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const [authState, setAuthState] = useState('Unknown');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      setUserName(storedUser);
      setAuthState('Authenticated');
    } else {
      setAuthState('Unauthenticated');
    }
  }, []);

  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src="/CarVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <header>
          <h1>Auto Expense Tracker</h1>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            {authState === 'Authenticated' && <NavLink to="/track">Track Expenses</NavLink>}
            {authState === 'Authenticated' && <NavLink to="/history">Expense History</NavLink>}
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>

        <main>
          <div className={`main-content ${isLoginPage ? 'transparent' : ''}`}>
            <Routes>
              <Route path="/" element={<Login userName={userName} authState={authState} onAuthChange={(user, state) => { setUserName(user); setAuthState(state); }} />} />
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
