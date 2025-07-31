// components/CreatePin.tsx
"use client";
import { useState } from "react";
import { useZalo } from "@/context/ZaloPayContext";

export default function CreatePin({ onCreated }: { onCreated: () => void }) {
  const [pin, setPin] = useState("");
  const { createPin } = useZalo();

  const handleSubmit = () => {
    if (pin.length === 6) {
      createPin(pin);
      onCreated();
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-semibold">Tạo mã PIN (6 số)</h2>
      <input
        type="password"
        placeholder="Hãy nhập PIN bạn mong muốn"
        maxLength={6}
        value={pin}
        onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
        className="border px-3 py-2 w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Xác nhận
      </button>
    </div>
  );
}
