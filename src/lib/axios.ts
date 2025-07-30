/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import axios from 'axios';
import { getToken, storeToken } from '@/services/auth';

// Proxy Path và Endpoints
const API_PROXY_PATH = '/api';
const AUTH_REFRESH_ENDPOINT = `${API_PROXY_PATH}/wp-json/kdc-api/v1/auth/refresh`;

// --- Quản lý trạng thái Refresh Token ---
let isRefreshing = false;
let failedQueue: Array<{ resolve: (value: string | PromiseLike<string>) => void; reject: (reason?: any) => void }> = [];
let onAuthErrorCallback: (() => void) | null = null;

export const setAuthErrorCallback = (callback: () => void) => {
  onAuthErrorCallback = callback;
};

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token as string);
    }
  });
  failedQueue = [];
};

// --- Khởi tạo API Client ---
export const apiClient = axios.create({
  baseURL: API_PROXY_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- Interceptor Request ---
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// --- Interceptor Response ---
apiClient.interceptors.response.use(
  (response) => {
    const isSoftError = 
        response.data && 
        response.data.success === false && 
        (response.data.data?.errorCode === 403 || response.data.data?.errorCode === 401);

    if (isSoftError) {
      console.warn('API trả về lỗi trong một response 2xx:', response.data);
      return Promise.reject({ response });
    }
    
    return response;
  },
  async (error) => {
    const originalRequest = error.config || error.response?.config;
    
    if (!originalRequest) {
      return Promise.reject(error);
    }

    const statusCode = error.response?.status || error.response?.data?.data?.errorCode;

    const shouldRefreshToken = 
      (statusCode === 401 || statusCode === 403) && 
      !originalRequest._retry && 
      originalRequest.url !== AUTH_REFRESH_ENDPOINT;

    if (shouldRefreshToken) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
        .then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return apiClient(originalRequest);
        })
        .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        const currentToken = getToken();
        if (!currentToken) throw new Error('Không tìm thấy token JWT để làm mới.');
        
        const refreshResponse = await axios.post(AUTH_REFRESH_ENDPOINT, { jwt: currentToken });
        
        const newJwt = refreshResponse.data.data.jwt;
        storeToken(newJwt);
        processQueue(null, newJwt);
        
        originalRequest.headers.Authorization = `Bearer ${newJwt}`;
        return apiClient(originalRequest);

      } catch (refreshError: any) {
        console.error('Không thể làm mới JWT:', refreshError.response?.data || refreshError.message);
        processQueue(refreshError);
        onAuthErrorCallback?.();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    if (statusCode === 401 || statusCode === 403) {
      onAuthErrorCallback?.();
    }

    return Promise.reject(error);
  }
);
