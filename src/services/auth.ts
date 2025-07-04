'use client';

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


export async function login(payload: LoginPayload): Promise<LoginResponse> {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/wp-json/kdc-api/v1/auth', {
      username: payload.username,
      password: payload.password,
      AUTH_KEY: process.env.NEXT_PUBLIC_AUTH_KEY,
    });

    if (response.data && response.data.success) {
      return { success: true, token: response.data.data.jwt };
    } else {
      // API trả về lỗi hoặc đăng nhập không thành công
      return { success: false, message: response.data.message || 'Đăng nhập thất bại.' };
    }
  /* eslint-disable @typescript-eslint/no-explicit-any */
  }  catch (error: unknown) { // THAY any BẰNG unknown
    let errorMessage = 'Đã xảy ra lỗi trong quá trình đăng nhập.';
    let apiResponseData: any = null; 

    // Kiểm tra nếu lỗi là AxiosError (từ thư viện Axios)
    if (axios.isAxiosError(error)) {
      if (error.response) {
        apiResponseData = error.response.data; 
        errorMessage = apiResponseData?.message || error.message;
      } else if (error.request) {
        errorMessage = 'Không nhận được phản hồi từ máy chủ. Vui lòng kiểm tra kết nối mạng.';
      } else {
        errorMessage = 'Lỗi thiết lập yêu cầu: ' + error.message;
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('Lỗi khi gọi API đăng nhập:', apiResponseData || error); 
    return { success: false, message: errorMessage };
  }
}

export async function logout(): Promise<void> {
  localStorage.removeItem('kdc_token');
}
