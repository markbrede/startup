import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../app.css';
import './login.css';

export function Login() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [authState, setAuthState] = useState(localStorage.getItem('username') ? 'authenticated' : 'unauthenticated');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      try {
        localStorage.setItem('username', username);
        setAuthState('authenticated');
        setError(null);
      } catch (e) {
        setError('Failed to log in. Please try again.');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setAuthState('unauthenticated');
    setUsername('');
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
