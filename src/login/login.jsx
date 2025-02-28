import React, { useEffect } from 'react';
import './login.css';

export function Login() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="login-page">
      <main className="grid-container">
        <div className="welcome-box fade-in">
          <h1 className="welcome-container">
            <span>Welcome</span>
          </h1>
          <p className="welcome-container subtitle">to your digital garage</p>
        </div>

        <div className="form-box fade-in">
          <div className="text-container">
            <p className="typing-text">Create Account or Sign in</p>
          </div>
    
          <form method="get" action="track.html">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="your@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="your password" required />
            </div>
    
            <button type="submit">Login</button>
            <button type="submit">Create Account</button>
    
            <div>
              <p>Placeholder for authentication service integration</p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
