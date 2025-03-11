import React from 'react';

export function Authenticated({ userName, onLogout }) {
  return (
    <div>
      <h2>Logged in as: {userName}</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
