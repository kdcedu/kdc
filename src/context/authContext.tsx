'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('kdc_token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated: setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
