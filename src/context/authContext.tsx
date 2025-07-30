'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  login as authLoginService,
  logout as authLogoutService,
  getToken,
  clearToken,
  LoginPayload
} from '@/services/auth';
import { useRouter, usePathname } from 'next/navigation';
import { setAuthErrorCallback, apiClient } from '@/lib/axios';


interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const checkAuthStatus = useCallback(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  const forceLogoutAndRedirect = useCallback(() => {
    clearToken();
    setIsAuthenticated(false);
    delete apiClient.defaults.headers.common['Authorization'];
    router.push('/login');
  }, [router]);

  useEffect(() => {
    setAuthErrorCallback(forceLogoutAndRedirect);

    try {
      const token = getToken();
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error("Lỗi khi kiểm tra token:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }

    const handleStorageChange = () => {
      checkAuthStatus();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);

  }, [forceLogoutAndRedirect, checkAuthStatus]);

  //  hàm login / logout
  const contextLogin = useCallback(async (payload: LoginPayload) => {
    const response = await authLoginService(payload);
    if (response.success && response.token) {
      setIsAuthenticated(true);
      router.push('/');
    } else {
      throw new Error(response.message || 'Đăng nhập thất bại.');
    }
  }, [router]);

  const contextLogout = useCallback(async () => {
    await authLogoutService();
    setIsAuthenticated(false);
    router.push('/login');
  }, [router]);

  useEffect(() => {
    if (!loading && !isAuthenticated && pathname !== '/login') {
      router.push('/login');
    }
    if (!loading && isAuthenticated && pathname === '/login') {
      router.push('/');
    }
  }, [isAuthenticated, loading, router, pathname]);

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
