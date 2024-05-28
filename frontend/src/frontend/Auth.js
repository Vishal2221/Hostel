
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Auth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in (e.g., from local storage)
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const handleLogin = (userType) => {
    setCurrentUser(userType);
    localStorage.setItem('currentUser', userType);
    navigate('/home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/NewLogin');
  };

  return { currentUser, handleLogin, handleLogout };
};

export default Auth;