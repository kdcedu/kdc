"use client";

import {
  AndroidOutlined,
  ClearOutlined,
  CloseOutlined,
  FileSearchOutlined,
  SecurityScanOutlined,
  SettingFilled,
  WifiOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import ScanningProgress from "../scanningProgress";

interface ScanVirusModalProps {
  open: boolean;
  onCancel: () => void;
  onFinish: () => void;
}

export default function ScanVirusModal({
  open,
  onCancel,
  onFinish
}: ScanVirusModalProps) {
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (open) {
      setIsScanning(false);
    }
  }, [open]);

  return (
    <Modal
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
      open={open}
      onCancel={onCancel}
      footer={null}
      title={
        <div className="flex items-center justify-between py-3 px-4 gap-2 bg-orange-400 text-white">
          <div className="flex items-center gap-2">
            <SettingFilled />
            <span className="text-lg font-bold">Virus Scanner</span>
          </div>
          <CloseOutlined onClick={onCancel} />
        </div>
      }
    >
      <div className="flex flex-col gap-5 items-center">
        <div className="flex items-center justify-center h-full">
          {isScanning ? (
            <ScanningProgress onFinish={onFinish} />
          ) : (
            <div className="flex flex-col items-center gap-5">

              <div className="flex flex-col items-center justify-center text-lg text-white font-semibold gap-1 w-32 h-32 bg-orange-400 rounded-full cursor-pointer active:bg-orange-300" onClick={() => setIsScanning(true)}>
                <SecurityScanOutlined />
                <span>Quét ngay</span>
              </div>

              <div className="w-2/3 flex flex-wrap gap-x-4 gap-y-4 rounded-xl overflow-hidden">
                <div className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-2 bg-gray-100 py-3">
                <AndroidOutlined />
                  <span>Quét ứng dụng</span>
                </div>
                <div className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-2 bg-gray-100 py-3">
                  <ClearOutlined />
                  <span>Dọn rác bộ nhớ</span>
                </div>
                <div className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-2 bg-gray-100 py-3">
                  <WifiOutlined />
                  <span>Kiểm tra tốc độ mạng</span>
                </div>
                <div className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-2 bg-gray-100 py-3">
                  <FileSearchOutlined />
                  <span>Quét thư mục</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex justify-end">
          <span className="text-gray-400">Phiên bản: 1.1.0</span>
        </div>
      </div>
    </Modal>
  );
}
