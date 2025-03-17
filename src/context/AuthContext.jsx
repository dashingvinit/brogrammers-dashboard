import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const logout = async () => {
    try {
      localStorage.removeItem('token');
      setToken(null);
    } catch (e) {
      console.log(e);
    }
  };

  const checkToken = useCallback(() => {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('token');
      setToken(null);
    }
  }, [token]);

  useEffect(() => {
    if (!token) return;
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        setToken(null);
      }
    } catch (e) {
      console.log('Error logout: ', e);
      localStorage.removeItem('token');
      setToken(null);
    }
  }, [token, navigate]);

  return (
    <AuthContext.Provider value={{ token, isLogedIn: token ? true : false, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
