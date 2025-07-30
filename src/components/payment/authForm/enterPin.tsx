'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EnterPin() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleEnter = () => {
    const stored = localStorage.getItem('mockPin');
    if (pin === stored) {
      router.push('/home');
    } else {
      alert('Sai mã PIN');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <input
        type="password"
        placeholder="Nhập mã PIN"
        className="border rounded px-4 py-2"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button className="bg-blue-700 text-white px-4 py-2 rounded" onClick={handleEnter}>
        Đăng nhập
      </button>
    </div>
  );
}
