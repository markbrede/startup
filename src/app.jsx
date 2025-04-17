import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { Login } from './login/login';
import { Track } from './track/track';
import { History } from './history/History';
import { About } from './about/about';
import { ExpenseNotifier } from './ExpenseNotifier';

function NotFound() {
  return <h1>404: Page not found</h1>;
}

//guard routes that require authentication
function AuthRequired({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //api request to check if user is authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/expenses');
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          // redirect to login if not authenticated
          navigate('/');
        }
      } catch (error) {
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : null;
}

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const [authState, setAuthState] = useState('Unknown');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    //check auth status
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/expenses');
        if (response.ok) {
          //access expenses endpoint? then authenticated
          setAuthState('Authenticated');

          // fetch user info if authenticated
          try {
            const userResponse = await fetch('/api/auth/me');
            if (userResponse.ok) {
              const userData = await userResponse.json();
              setUserName(userData.userName);
            }
          } catch (userError) {
            console.error('Error fetching user info:', userError);
          }

        } else {
          setAuthState('Unauthenticated');
        }
      } catch (error) {
        setAuthState('Unauthenticated');
      }
    };

    checkAuth();
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
              <Route 
                path="/track" 
                element={
                  <AuthRequired>
                    <Track userName={userName} />
                  </AuthRequired>
                } 
              />
              <Route 
                path="/history" 
                element={
                  <AuthRequired>
                    <History userName={userName} />
                  </AuthRequired>
                } 
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

        <footer>
          <p>Mark Brede</p>
          <a href="https://github.com/markbrede/startup/tree/main">GitHub</a>
        </footer>

        {authState === 'Authenticated' && <ExpenseNotifier />}
      </div>
    </div>
  );
}

export default App;
