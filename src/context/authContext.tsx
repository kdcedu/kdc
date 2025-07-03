'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { logout as logoutService } from '@/services/auth'; // Import hàm logout từ service

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: () => void; 
  logout: () => void;
}

// Mặc định cho context
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Thêm state loading
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem('kdc_token');
      if (token) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Failed to access localStorage or token", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  //  hàm login / logout
  const login = () => {
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    logoutService(); 
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
