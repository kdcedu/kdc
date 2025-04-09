"use client";

import { Input } from "antd";
import Image from "next/image";
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
          className="w-2/5"
        />

        <div className="border-4 rounded-xl border-orange-400 m-auto p-5">
          <h1 className="text-4xl font-semibold text-[#f5712e] text-center">Đăng nhập</h1>
          <div className="text-xl text-center text-orange-400 my-5">Bạn hãy vui lòng nhập mã PIN để tham gia hoạt động</div>
          <div className="flex justify-center">
            <Input.OTP length={4} mask="•" status={isError ? "error" : ""} onChange={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  );
}
