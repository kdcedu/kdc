'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { logout as logoutService } from '@/services/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Thêm state loading
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('kdc_token');
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        console.error("Failed to access localStorage or token", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    checkAuthStatus()

    // lắng nghe sự kiện storage để phản ứng khi token thay đổi ở tab khác
    const handleStorageChange = () => {
      checkAuthStatus();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };

  }, []);

  //  hàm login / logout
  const contextLogin = (token: string) => {
    localStorage.setItem('kdc_token', token); 
    setIsAuthenticated(true); 
    router.push('/');
  };

   const contextLogout = async () => {
    await logoutService(); 
    setIsAuthenticated(false); 
    router.push('/login');
  };

  const value = {
    isAuthenticated,
    loading,
    login: contextLogin,
    logout: contextLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
