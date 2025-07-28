"use client";
import { useState } from "react";

export default function WalletApp({ onClose }: { onClose: () => void }) {
  const [balance, setBalance] = useState(1000);

  const handleTransaction = () => {
    if (balance >= 100) setBalance(balance - 100);
  };

  return (
    <div className="flex flex-col h-full p-4 bg-white rounded-lg shadow-inner">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Ví tiền</h2>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="text-center text-2xl font-semibold mb-6">Số dư: {balance}₫</div>
      <button
        onClick={handleTransaction}
        className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
      >
        Giao dịch -100₫
      </button>
    </div>
  );
}
