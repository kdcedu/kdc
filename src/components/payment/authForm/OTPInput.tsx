// components/OTPModal.tsx
"use client";
import { useEffect, useState } from "react";
// import { useZalo } from "@/context/ZaloPayContext";

interface OTPInputProps {
  OTP: string;
  onVerify: (otp: string) => void;
}

export default function OTPInput({ OTP, onVerify }: OTPInputProps) {
  const [input, setInput] = useState<string>("");
  useEffect(() => {
    if (input === OTP) onVerify(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded space-y-4 shadow-lg">
        <p>Nhập mã OTP (mặc định: 123456)</p>
        <input
          type="text"
          maxLength={6}
          value={input}
          placeholder="Hãy nhập đúng mã OTP đã được gửi nhé "
          className="border px-3 py-2 w-full"
          onChange={(e) => setInput(e.target.value.replace(/\D/g, ""))}
        />
      </div>
    </div>
  );
}
