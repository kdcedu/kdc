// components/PhoneInput.tsx
"use client";
import { Dispatch, useEffect, useState } from "react";
import { useZalo } from "@/context/ZaloPayContext";

interface PhoneInputProps {
  setPhone: Dispatch<React.SetStateAction<string>>;
  onSuccess: () => void;
}

export default function PhoneInput({ onSuccess, setPhone }: PhoneInputProps) {
  const [phoneInput, setPhoneInput] = useState("");

  useEffect (()=>{
    setPhone(phoneInput);
  },[phoneInput, setPhone])

  const handleSubmit = () => {
    if (phoneInput.trim()) {
      onSuccess();
    }
  };

  return (
    <div className="p-4 space-y-4">
      <input
        type="tel"
        placeholder="Nhập số điện thoại"
        className="border rounded px-3 py-2 w-full"
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ""))}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Tiếp tục
      </button>
    </div>
  );
}
