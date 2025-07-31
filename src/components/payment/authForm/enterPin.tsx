// components/EnterPin.tsx
"use client";
import { useState } from "react";
import { useZalo } from "@/context/ZaloPayContext";

export default function EnterPin({ onSuccess }: { onSuccess: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const { verifyPin } = useZalo();

  const handleSubmit = () => {
    if (verifyPin(pin)) {
      onSuccess();
    } else {
      setError("Mã PIN không đúng!");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-semibold">Nhập mã PIN</h2>
      <input
        type="password"
        placeholder="Hãy nhập mã PIN"
        maxLength={6}
        value={pin}
        onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
        className="border px-3 py-2 w-full"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Đăng nhập
      </button>
    </div>
  );
}
