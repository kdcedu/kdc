"use client";

import { useRouter } from "next/navigation";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const x = useMotionValue(16);
  const y = useMotionValue(16);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    x.set(16);
    y.set(16);

    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setIsDragging(false); // kết thúc kéo

    const btnWidth = 64;
    const btnHeight = 64;
    const padding = 16;

    const posX = info.point.x;
    const posY = info.point.y;

    const isLeft = posX < viewport.width / 2;
    const isTop = posY < viewport.height / 2;

    const targetX = isLeft ? padding : viewport.width - btnWidth - padding;
    const targetY = isTop ? padding : viewport.height - btnHeight - padding;

    animate(x, targetX, { type: "spring", stiffness: 400, damping: 30 });
    animate(y, targetY, { type: "spring", stiffness: 400, damping: 30 });
  };

  return (
    <motion.div
      className="fixed z-50 cursor-grab active:cursor-grabbing"
      drag
      dragMomentum={false}
      style={{ x, y }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
    >
      <Button
        type="text"
        shape="circle"
        icon={<LeftOutlined />}
        onClick={() => {
          if (!isDragging) {
            router.push("/");
          }
        }}
        className="!bg-orange-500 !text-white !text-xl !backdrop-blur-md !p-5 !rounded-full !shadow-md hover:!bg-orange-700 !transition-all duration-300"
      />
    </motion.div>
  );
}
