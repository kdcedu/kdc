"use client";

import Image from "next/image";
import { useState } from "react";
import OTPInput from "react-otp-input";

export default function Home() {
  const [otp, setOtp] = useState("");
  const [isError, setIsError] = useState(false);

  const trueOtp = "1234";

  const handleChange = (value: string) => {
    if(value.length === 4) {
      setIsError(value !== trueOtp)
    }
    else setIsError(false);

    setOtp(value);
  }

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-fit bg-[#f5712e]">
        <Image
          src="/headers/header.png"
          alt="Login Header"
          width={200}
          height={100}
          className="w-full h-auto"
          sizes="100vw"
        />
      </div>

      <div className="flex w-full">
        <Image
          src="/backgrounds/loginBackground.png"
          alt="Login Header"
          width={500}
          height={500}
          quality={100}
          className="w-[45%]"
        />

        <div className="border-4 rounded-xl border-orange-400 m-auto p-5">
          <h1 className="text-4xl font-semibold text-[#f5712e] text-center">Đăng nhập</h1>
          <div className="text-xl text-center text-orange-400 my-5">Bạn hãy vui lòng nhập mã PIN để tham gia hoạt động</div>
          <div className="flex justify-center">
              <OTPInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "2.5rem",
                  height: "2.5rem",
                  margin: "0 0.5rem",
                  fontSize: "1.5rem",
                  borderRadius: "8px",
                  border: `3px solid ${isError ? "red" : "#f5712e"}`,
                  textAlign: "center",
                  color: "#333",
                  transition: "border-color 0.3s",
                }}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
