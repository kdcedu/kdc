// components/EnterPin.tsx
"use client";
import { useState } from "react";
import { useKDCPay } from "@/context/KDCPayContext";

export default function EnterPin({ onSuccess }: { onSuccess: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const { verifyPin } = useKDCPay();

  const handleSubmit = () => {
    if (verifyPin(pin)) {
      onSuccess();
    } else {
      setError("Mã PIN không đúng!");
    }
  };

  return (
    <div className="p-4 space-y-10 w-[700px] text-4xl">
      <h2 className="font-semibold">Nhập mã PIN</h2>
      <input
        type="password"
        placeholder="Hãy nhập mã PIN"
        maxLength={6}
        value={pin}
        onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
        className="border px-3 py-2 w-full h-[100px]"
      />
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Lỗi!</strong>
          <span className="block sm:inline ml-2">{error}</span>
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 h-[80px] text-white px-4 py-2 rounded w-full"
      >
        Đăng nhập
      </button>
    </div>
  );
}
