import axios from 'axios';
import { redirect } from 'next/navigation';

export interface LoginPayload {
  username: string;
  password: string;
}

export async function login(payload: LoginPayload): Promise<void> {
  const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/wp-json/kdc-api/v1/auth', {
    username: payload.username,
    password: payload.password,
    AUTH_KEY: process.env.NEXT_PUBLIC_AUTH_KEY,
  });

  const token = res.data.data.jwt;

  if (token) {
    localStorage.setItem('kdc_token', token);
    redirect('/');
  } else {
    console.error('Hãy thử lại');
  }
}

export async function logout(): Promise<void> {
  localStorage.removeItem('kdc_token');
  redirect('/login');
}