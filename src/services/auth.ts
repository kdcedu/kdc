/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { apiClient } from '@/lib/axios';
import axios from 'axios';
export interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

const AUTH_LOGIN_ENDPOINT = `/wp-json/kdc-api/v1/auth`;

const JWT_TOKEN_KEY = 'kdc_token';

export const storeToken = (token: string) => localStorage.setItem(JWT_TOKEN_KEY, token);
export const getToken = (): string | null => localStorage.getItem(JWT_TOKEN_KEY);
export const clearToken = () => localStorage.removeItem(JWT_TOKEN_KEY);

export async function login(payload: LoginPayload): Promise<LoginResponse> {
 try {
    const response = await apiClient.post(AUTH_LOGIN_ENDPOINT, payload);

    if (response.data && response.data.success) {
      const token = response.data.data.jwt;
      storeToken(token);
      return { success: true, token: token };
    } else {
      return { success: false, message: response.data.message || 'Đăng nhập thất bại.' };
    }
  } catch (error: any) {
    let errorMessage = 'Đã xảy ra lỗi trong quá trình đăng nhập.';
    if (axios.isAxiosError(error) || error.response) {
        errorMessage = error.response?.data?.message || error.response?.data?.data?.message || error.message;
    }
    console.error('Lỗi khi gọi API đăng nhập:', error);
    clearToken();
    return { success: false, message: errorMessage };
  }
}

export async function logout(): Promise<void> {
  clearToken();
}
