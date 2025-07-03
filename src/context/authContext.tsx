'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { logout as logoutService } from '@/services/auth'; // Import hàm logout từ service

// 1. Mở rộng interface để bao gồm loading và các hàm tường minh
interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean; // Trạng thái chờ kiểm tra auth ban đầu
  login: () => void; // Hàm để cập nhật trạng thái đã đăng nhập
  logout: () => void; // Hàm để xử lý đăng xuất
}

// 2. Cung cấp giá trị mặc định cho context
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true, // Mặc định là đang loading
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // 3. Thêm state loading
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tự động kiểm tra token khi app tải lần đầu
    try {
      const token = localStorage.getItem('kdc_token');
      if (token) {
        // Có thể thêm bước xác thực token với server ở đây nếu cần
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Failed to access localStorage or token", error);
      setIsAuthenticated(false);
    } finally {
      // Dù kết quả thế nào, cũng phải kết thúc loading
      setLoading(false);
    }
  }, []); // Dependency array rỗng để chỉ chạy 1 lần duy nhất

  // 4. Định nghĩa các hàm login và logout
  const login = () => {
    // Hàm này được gọi sau khi service login thành công
    // để cập nhật giao diện ngay lập tức mà không cần đợi reload
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    // Hàm này gọi service logout (xóa token và redirect)
    logoutService(); 
    // Và cập nhật lại state của context
    setIsAuthenticated(false);
  };

  // 5. Cung cấp đầy đủ các giá trị cho provider
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

// Hook không thay đổi
export const useAuth = () => useContext(AuthContext);
