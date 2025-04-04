import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login({ userName, authState, onAuthChange }) {
  const [localUserName, setLocalUserName] = useState(userName || '');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); //nav hook for pages

  useEffect(() => {
    //adds a small delay effect to fadein elements so they don't all pop in at once
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', localUserName); //store username
    onAuthChange(localUserName, 'Authenticated'); //user knows they've been logged in
  };

  const handleLogout = () => {
    localStorage.removeItem('userName'); //clear when logging out
    onAuthChange('', 'Unauthenticated'); //update logout
  };

  return (
    <div className="login-page">
      <main className="grid-container">
        <div className="welcome-box fade-in">
          <h1 className="welcome-container"><span>Welcome</span></h1>
          <p className="welcome-container subtitle">to your digital garage</p>
        </div>

        <div className="form-box fade-in">
          {authState === 'Authenticated' ? (
            <div>
              {/*friendly dialog */}
              <p>🤠 Howdy, {localUserName}! Click below to start tracking your expenses or sign out if needed.</p>
              <button onClick={() => navigate('/track')}>Track</button> {/* goes to expensetracking page */}
              <button onClick={handleLogout}>Logout</button> {/*logout and reset status*/}
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  value={localUserName} 
                  onChange={(e) => setLocalUserName(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>

              <button type="submit">Login</button> {/*logs in and updates state*/}
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
