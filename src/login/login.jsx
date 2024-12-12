import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../app.css';
import './login.css';

export function Login() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [authState, setAuthState] = useState(localStorage.getItem('username') ? 'authenticated' : 'unauthenticated');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);



  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      fetch(`/api/auth/check?username=${storedUsername}`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.authenticated) {
            localStorage.removeItem('username');
            setAuthState('unauthenticated');
          }
        })
        .catch(() => {
          localStorage.removeItem('username');
          setAuthState('unauthenticated');
        });
    }
  }, []);
  


const handleLogin = async (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value;
  
  if (username.trim() && password) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: username.trim(),
          password: password 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('username', data.username);
        setAuthState('authenticated');
        setError(null);
      } else {
        setError('Invalid username or password.');
      }
    } catch (e) {
      setError('Failed to log in. Please try again.');
    }
  }
};

  


const handleLogout = async () => {
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: localStorage.getItem('username') }),
    });
  } finally {
    localStorage.removeItem('username');
    setAuthState('unauthenticated');
    setUsername('');
  }
};


  // Function to navigate to Track Expenses
  const handleTrackExpenses = () => {
    navigate('/track'); // Redirect to the Track component
  };

  if (authState === 'authenticated') {
    return (
      <main className="grid-container">
        <div className="welcome-box">
          <h1 className="welcome-container">
            Welcome back, {localStorage.getItem('username')}!
          </h1>
          <div className="button-container"> {/* New container for buttons */}
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleTrackExpenses}>Track Expenses</button>
          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="grid-container">
      {/* Background Vid */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="CarVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Background Video */}

      <div className="welcome-box">
        <h1 className="welcome-container">
          <span>Welcome</span>
        </h1>
        <p className="welcome-container subtitle">to your digital garage</p>
      </div>

      <div className="form-box">
        <div className="text-container">
          <p className="typing-text">Create Account or Sign in</p>
        </div>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="your password"
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}
