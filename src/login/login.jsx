import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login({ userName, authState, onAuthChange }) {
  const [localUserName, setLocalUserName] = useState(userName || '');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const navigate = useNavigate(); //nav hook for pages

  useEffect(() => {
//adds a small delay effect to fadein elements so they don't all pop in at once
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

//authToken with login
  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage('');
    
    const endpoint = isCreateAccount ? '/api/auth/create' : '/api/auth/login';
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: localUserName, password })
      });
      
      if (!response.ok) {
        const body = await response.json();
        throw new Error(body.msg || 'Authentication failed');
      }
      
      const body = await response.json();
      onAuthChange(body.userName, 'Authenticated');
      setPassword('');
    } catch (error) {
      setMessage(error.message);
    }
  };

//logout 
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'DELETE' });
      const data = await response.json(); //always parse JSON
      
      if (!response.ok) {
        throw new Error(data.msg || 'Logout failed');
      }
      
      onAuthChange('', 'Unauthenticated');
      setPassword('');
    } catch (error) {
      setMessage(error.message || 'Failed to logout');
    }
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
              <p>Howdy, {localUserName}! Tracking your expense is just a click away!</p>
              <button onClick={() => navigate('/track')}>Track</button>
              <button onClick={handleLogout}>Logout</button>
              {message && <p className="error-message">{message}</p>}
            </div>
          ) : (
            <form onSubmit={handleAuth}>
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

              <button type="submit">{isCreateAccount ? 'Create Account' : 'Login'}</button>
              <button type="button" onClick={() => setIsCreateAccount(!isCreateAccount)}>
                {isCreateAccount ? 'Already have an account?' : 'Create a new account'}
              </button>
              {message && <p className="error-message">{message}</p>}
            </form>
          )}
        </div>
      </main>
    </div>
  );
}