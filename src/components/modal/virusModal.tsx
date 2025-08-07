"use client";

import {
  CloseCircleFilled,
  CloseOutlined,
  WarningFilled,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useEffect, useMemo, useState } from "react";

const WARNING_MESSAGES = [
  "Máy tính của bạn đã bị nhiễm Virus!",
  "Phát hiện phần mềm độc hại đang chạy nền!",
  "Cảnh báo tấn công mạng đang diễn ra!",
  "Dữ liệu của bạn đang bị đánh cắp!",
  "Hãy cập nhật phần mềm bảo mật ngay!",
];

export default function VirusModal() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timeout = setInterval(() => {
      setOpen(true);
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  const randomPosition = useMemo(() => {
    const top = Math.floor(Math.random() * 300);
    const left = Math.floor(Math.random() * 500);
    const messageIndex = Math.floor(Math.random() * WARNING_MESSAGES.length);
    return { top, left, messageIndex };
  }, []);

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      closable={false}
      styles={{
        body: {
          padding: 20,
        },
        content: {
          padding: 0,
          overflow: "hidden",
        },
      }}
      title={
        <div className="flex justify-between bg-red-500 py-2 px-5 items-center text-white">
          <div className="text-xl flex gap-3 items-center ">
            <WarningFilled />
            <span>Cảnh báo !!!</span>
          </div>
          <span
            className="text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <CloseOutlined />
          </span>
        </div>
      }
      footer={null}
      style={{
        position: "absolute",
        top: randomPosition.top,
        left: randomPosition.left,
      }}
    >
      <div className="flex flex-col gap-5 items-center">
        <div className="flex items-center justify-between gap-5">
          <span className="text-red-500 text-5xl">
            <CloseCircleFilled />
          </span>
          <span>{WARNING_MESSAGES[randomPosition.messageIndex]}</span>
        </div>
        <Button onClick={() => setOpen(false)}>Ok</Button>
      </div>
    </Modal>
  );
}
