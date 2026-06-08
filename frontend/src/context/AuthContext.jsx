import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for token on load
    const token = localStorage.getItem('nexusToken');
    const userData = localStorage.getItem('nexusUser');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // In a real app, this fetches from http://localhost:5000/api/auth/login
      // For this demo, if the backend isn't running or connected, we mock a successful login
      let role = 'student';
      if (email.includes('teacher')) role = 'teacher';
      if (email.includes('admin')) role = 'admin';

      const mockUser = { name: email.split('@')[0], email, role };
      setUser(mockUser);
      localStorage.setItem('nexusToken', 'mock_jwt_token_123');
      localStorage.setItem('nexusUser', JSON.stringify(mockUser));
      
      // Navigate to correct dashboard
      navigate(`/dashboard/${role}`);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nexusToken');
    localStorage.removeItem('nexusUser');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
