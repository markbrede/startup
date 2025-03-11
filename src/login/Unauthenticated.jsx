import React, { useState } from 'react';

export function Unauthenticated({ userName, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic here
    onLogin(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password:</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
