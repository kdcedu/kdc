// components/PhoneInput.tsx
"use client";
import { Dispatch, useEffect, useState } from "react";
// import { useZalo } from "@/context/ZaloPayContext";

interface PhoneInputProps {
  setPhone: Dispatch<React.SetStateAction<string>>;
  onSuccess: () => void;
}

export default function PhoneInput({ onSuccess, setPhone }: PhoneInputProps) {
  const [phoneInput, setPhoneInput] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setPhone(phoneInput);
  }, [phoneInput, setPhone]);

  const handleSubmit = () => {
    if (phoneInput.trim().length === 10) {
      onSuccess();
    } else setErrorMessage("Bạn hãy nhập số điện thoại bao gồm 10 số nhé");
  };

  return (
    <div className="p-4 space-y-10 w-[700px] text-4xl ">
      {errMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Lỗi!</strong>
          <span className="block sm:inline ml-2">{errMessage}</span>
        </div>
      )}
      <input
        type="tel"
        placeholder="Nhập số điện thoại (10 số)"
        className="border rounded-lg px-3 py-2 w-full h-[100px]"
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ""))}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2  rounded-lg h-[80px] w-full"
      >
        Tiếp tục
      </button>
    </div>
  );
}
