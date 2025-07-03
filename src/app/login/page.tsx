'use client'

import { useState } from "react";
import { login } from "@/services/auth";
import { Button, Image, Input, message, Spin } from "antd";

export default function Login() {
  // --- State quản lý ---
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Hàm xử lý chính khi nhấn nút Đăng nhập ---
  // Logic đã được đơn giản hóa rất nhiều
  const handleFinish = async () => {
    // 1. Kiểm tra đầu vào
    if (!username || !password) {
      message.error("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }

    setLoading(true);

    try {
      // 2. Gọi service login.
      // Hàm login sẽ tự động chuyển hướng nếu thành công.
      // Chúng ta chỉ cần chờ nó thực hiện xong.
      await login({ username, password });

      // Code sẽ không chạy đến đây nếu login thành công vì đã bị redirect.
      // Dòng này chỉ chạy nếu redirect không hoạt động vì một lý do nào đó.
      // Trong trường hợp đó, ta có thể không cần làm gì.
      
    } catch (err) {
      // 3. Xử lý khi có lỗi từ Axios
      // Lỗi từ Axios thường nằm trong error.response.data
      // const errorMessage = error.response?.data?.data?.message || error.message || "Tên đăng nhập hoặc mật khẩu không chính xác.";
      // message.error(errorMessage);
      console.log(err);
      
    } finally {
      // 4. Luôn tắt loading sau khi hoàn tất
      setLoading(false);
    }
  };

  // --- Giao diện (giữ nguyên 100%) ---
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full md:w-[500px] flex flex-col items-center gap-5 h-full bg-white relative">
        <div className="w-full flex flex-col items-center gap-5 bg-orange-50 pb-5 pt-2">
          <Image width={150} src="/logo.png" alt="Logo" preview={false}/>

          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-orange-400">KDC PLAY & LEARN STATION</span>
            <span className="text-sm text-gray-500">Nền tảng Giáo dục Công dân số</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 px-10 mt-10">
          <span className="text-2xl font-bold text-gray-600 text-center">Đăng nhập tài khoản</span>
          <Input 
            size="large" 
            placeholder="Tên đăng nhập" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            onPressEnter={handleFinish}
          />
          <div className="flex flex-col gap-1 w-full">
            <Input 
              size="large" 
              placeholder="Mật khẩu" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              onPressEnter={handleFinish}
            />
            <Button type="link" className="w-fit self-end !p-0 !text-orange-500">Quên mật khẩu?</Button>
          </div>
          <Button 
            type="primary"
            size="large" 
            className="w-full !font-semibold" 
            onClick={handleFinish}
            loading={loading}
          >
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
