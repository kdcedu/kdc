"use client";

// import { useZalo } from "@/context/KDCPayContext";

interface OTPModalProps {
  OTP: string;
}

export default function OTPModal({ OTP }: OTPModalProps) {
//   const { currentAccount } = useZalo();

  if (!OTP) return null;

  return (
    <div className="fixed top-0 w-full bg-yellow-100 text-yellow-800 p-3 text-center shadow-md z-50">
      {/* 📲 Mã OTP gửi đến {currentAccount?.phone}: <strong>{OTP}</strong> */}
    </div>
  );
}
