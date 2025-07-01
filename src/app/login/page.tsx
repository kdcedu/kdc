'use client'

import { login } from "@/services/auth";
import { Button, Image, Input } from "antd";
import { useState } from "react";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFinish = () => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    login({ username, password });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full md:w-[500px] flex flex-col items-center gap-5 h-full bg-white relative">
        <div className="w-full flex flex-col items-center gap-5 bg-orange-50 pb-5 pt-2">
          <Image width={150} src="/components/logo.png" alt="Logo" preview={false}/>

          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-orange-400">KDC PLAY & LEARN STATION</span>
            <span className="text-sm text-gray-500">Nền tảng Giáo dục Công dân số</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 px-10 mt-10">
          <span className="text-2xl font-bold text-gray-600 text-center">Đăng nhập tài khoản</span>
          <Input size="large" placeholder="Tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
          <div className="flex flex-col gap-1 w-full">
            <Input size="large" placeholder="Mật khẩu" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="link" color="orange" className="w-fit self-end !p-0">Quên mật khẩu?</Button>
          </div>
          <Button size="large" className="w-full !font-semibold" variant="solid" color="orange" onClick={handleFinish}>
            Đăng nhập
          </Button>
        </div>

        <div className="absolute bottom-0 bg-gray-50 w-full flex flex-col gap-3 items-center justify-center px-10 py-3">
          <span className="text-sm text-gray-500">Muốn trải nghiệm nền tảng này?</span>
          <Button variant="outlined" color="orange" size="large" className="w-full">Đăng ký ngay</Button>
          <span className="text-xs text-gray-500">© 2025 KDC PLAY & LEARN STATION. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
