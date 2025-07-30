"use client";

// import { useState } from "react";
import { loginStepType } from "@/constant/payment/types";

interface PhoneInputProps {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<loginStepType>>;
}

export default function PhoneInput({
  setStep,
  phone,
  setPhone,
}: PhoneInputProps) {
  const handleSubmit = () => {
    if (/^\d{10}$/.test(phone)) {
      localStorage.setItem("currentPhone", phone);
      setStep("otp");
    } else {
      alert("Vui lòng nhập đúng định dạng số điện thoại (10 số)");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <input
        type="tel"
        placeholder="Nhập số điện thoại"
        className="border rounded px-4 py-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Gửi OTP
      </button>
    </div>
  );
}
