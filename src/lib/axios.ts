'use client'
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

if (typeof window !== 'undefined') {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('kdc_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
}

export default axiosInstance;
