"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface OTPInputProps {
  OTP: string;
  phone:string
}
export default function OTPInput({ OTP }: OTPInputProps) {
  const [otp, setOtp] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleVerify = () => {
    if (otp === OTP) {
      const hasPin = localStorage.getItem("mockPin");
      router.push(hasPin ? "/enter-pin" : "/create-pin");
    } else {
      alert("Sai mã OTP");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      {showNotification && (
        <div className="bg-green-100 text-green-800 p-4 rounded shadow">
          OTP của bạn là: <strong>123456</strong>
        </div>
      )}
      <input
        type="tel"
        placeholder="Nhập OTP"
        className="border rounded px-4 py-2"
        value={otp}
        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleVerify}
      >
        Xác nhận OTP
      </button>
    </div>
  );
}
