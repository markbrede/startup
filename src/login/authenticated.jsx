import React from 'react';
import './login.css';

export function Authenticated({ onLogout }) {
  const username = localStorage.getItem('username');

  return (
    <div className="authenticated">
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
