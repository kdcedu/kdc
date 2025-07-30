'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePin() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleCreate = () => {
    if (/^\d{6}$/.test(pin)) {
      localStorage.setItem('mockPin', pin);
      router.push('/home');
    } else {
      alert('Mã PIN phải gồm 6 chữ số');
    }
  };
  const handlePinCreate = (pin: string) => {
    localStorage.setItem(`user:${phone}`, pin);
    login({ phoneNumber: phone, hasPin: true });
    router.push('/home');
  };
  return (
    <div className="flex flex-col gap-4 p-6">
      <input
        type="password"
        placeholder="Tạo mã PIN (6 số)"
        className="border rounded px-4 py-2"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={handleCreate}>
        Tạo mã PIN
      </button>
    </div>
  );
}
