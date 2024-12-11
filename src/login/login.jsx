import React from 'react';
import '../app.css';
import './login.css';

export function Login() {
  return (
    <main className="grid-container">

      {/* Background Vid */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
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

      {/* txt-container for better spacing */}
      {/* typing txt class for potential specific css changes */}
      <div className="form-box">
        <div className="text-container">
          <p className="typing-text">Create Account or Sign in</p>
        </div>

        <form method="get" action="track.html">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
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
          <button type="submit">Create Account</button>

          <div>
            <p>Placeholder for authentication service integration</p>
          </div>
        </form>
      </div>

    </main>
  );
}
