'use client'

import { Button, Input } from "antd";
import { useState } from "react";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFinish = () => {
    console.log('username', username);
    console.log('password', password);
  };

  return (
    <div>
      <span>Đăng nhập</span>
      <Input placeholder="Nhập tài khoản" onChange={(e) => setUsername(e.target.value)} />
      <Input placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)} />
      <Button variant="solid" color="orange" onClick={handleFinish}>
        Đăng nhập
      </Button>
    </div>
  );
}
