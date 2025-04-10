"use client";

import { Input, Image } from "antd";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [isError, setIsError] = useState(false);

  const trueOtp = "1234";

  const handleChange = (value: string) => {
    if(value === trueOtp) redirect('/menu');
    else setIsError(true);
  }

  return (
    <div className="w-screen">
      <div className="w-full h-fit bg-[#f5712e]">
        <Image
          preview={false}
          src="/headers/header.png"
          alt="Login Header"
          className="w-full h-auto"
          sizes="100vw"
        />
      </div>

      <div className="flex w-full">
        <Image
          preview={false}
          src="/backgrounds/loginBackground.png"
          alt="Login Header"
          width={580}
        />

        <div className="border-4 rounded-xl border-orange-400 m-auto p-5">
          <h1 className="text-4xl font-semibold text-[#f5712e] text-center">Đăng nhập</h1>
          <div className="text-xl text-center text-orange-400 my-5">Bạn hãy vui lòng nhập mã PIN để tham gia hoạt động</div>
          <div className="flex justify-center">
            <Input.OTP inputMode="numeric" length={4} mask="•" status={isError ? "error" : ""} onChange={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  );
}
