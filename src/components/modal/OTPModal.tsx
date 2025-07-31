"use client";

import { useZalo } from "@/context/ZaloPayContext";

export default function OTPModal() {
  const { currentAccount, otp } = useZalo();

  if (!otp) return null;

  return (
    <div className="fixed top-0 w-full bg-yellow-100 text-yellow-800 p-3 text-center shadow-md z-50">
      📲 Mã OTP gửi đến {currentAccount?.phone}: <strong>{otp}</strong>
    </div>
  );
}
