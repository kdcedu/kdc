'use client'

import { useState } from "react";
import { login as authServiceLogin } from "@/services/auth";
import { Button, Image, Input, message } from "antd";
import { useAuth } from "@/context/authContext";

export default function Login() {
  // --- State ---
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login: contextLogin } = useAuth();

  // --- Khi nhấn nút Đăng nhập ---
  const handleFinish = async () => {
    // Kiểm tra đầu vào
    if (!username || !password) {
      message.error("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      //  Gọi service login.
      const result = await authServiceLogin({ username, password });
      if (result.success && result.token) {
        contextLogin(result.token);
      } else {
        setError(result.message || 'Tên đăng nhập hoặc mật khẩu không đúng.');
      }
    } catch (err) {
      // Xử lý lỗi khi sai mật khẩu
      console.error("Lỗi đăng nhập:", err);
      setError('Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full md:w-[500px] flex flex-col items-center gap-5 h-full bg-white relative">
        <div className="w-full flex flex-col items-center gap-5 bg-orange-50 pb-5 pt-2">
          <Image width={150} src="/components/logo.png" alt="Logo" preview={false} />

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
          {error && <div className="text-red-400 !font-semibold">{error}</div>}
          <Button
            size="large"
            className="w-full !font-semibold"
            variant="solid"
            color="orange"
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
