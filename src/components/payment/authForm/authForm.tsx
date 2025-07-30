// components/AuthForm.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface Props {
  mode: 'login' | 'register';
}

export default function AuthForm({ mode }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLogin = mode === 'login';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Login' : 'Register'} with`, { email, password });
    // handle logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-5xl">
      <h2 className="text-2xl font-bold mb-4">
        {isLogin ? 'Đăng nhập' : 'Đăng ký'}
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Mật khẩu"
        className="border p-2 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">
        {isLogin ? 'Đăng nhập' : 'Đăng ký'}
      </button>

      <p className="text-sm text-center mt-2">
        {isLogin ? (
          <>
            Chưa có tài khoản?{' '}
            <Link href="/auth/register" className="text-blue-500 underline">
              Đăng ký
            </Link>
          </>
        ) : (
          <>
            Đã có tài khoản?{' '}
            <Link href="/auth/login" className="text-blue-500 underline">
              Đăng nhập
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
