"use client";

import { useRouter } from "next/navigation";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="fixed top-4 left-4 z-50 bg-white/70 backdrop-blur-md p-1 rounded-full shadow-md hover:bg-white transition">
      <Button
        type="text"
        shape="circle"
        icon={<LeftOutlined />}
        onClick={() => router.push("/")}
      />
    </div>
  );
}
