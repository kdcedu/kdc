// components/OTPModal.tsx
"use client";
import OTPModal from "@/components/modal/OTPModal";
import { defaultProfile } from "@/constant/profile";
import { useEffect, useState } from "react";
// import { useZalo } from "@/context/ZaloPayContext";

interface OTPInputProps {
  phone: string;
  onVerify: (otp: string) => void;
}

export default function OTPInput({ phone, onVerify }: OTPInputProps) {
  const [OTP, setOTP] = useState<string>("");
  const [generateOTP, setGenerateOTP] = useState<string>("");
  useEffect(() => {
    const generateRandom6nums = (): string => {
      return Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10)
      ).join("");
    };
    setGenerateOTP(generateRandom6nums);
  }, [phone]);

  useEffect(() => {
    if (generateOTP && OTP === generateOTP) onVerify(phone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [OTP]);
  return (
    <>
      {phone === defaultProfile.phone && generateOTP && <OTPModal OTP={generateOTP} />}
      <div className="inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded space-y-4 shadow-lg">
          <p>Nhập mã OTP</p>
          <input
            type="text"
            maxLength={6}
            value={OTP}
            placeholder="Hãy nhập đúng mã OTP đã được gửi nhé "
            className="border px-3 py-2 w-full"
            onChange={(e) => setOTP(e.target.value.replace(/\D/g, ""))}
          />
        </div>
      </div>
    </>
  );
}
