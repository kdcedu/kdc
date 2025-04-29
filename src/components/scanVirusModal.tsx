"use client";

import { CloseOutlined, SettingFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import ScanningProgress from "./scanningProgress";

interface ScanVirusModalProps {
  open: boolean;
  onCancel: () => void;
}

export default function ScanVirusModal({ open, onCancel }: ScanVirusModalProps) {

  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (open) {
      setIsScanning(false);
    }
  }, [open]);

  return <Modal closable={false} styles={{
    body: {
      padding: 0,
    },
    content: {
      padding: 0,
      overflow: "hidden",
    },
  }} open={open} onCancel={onCancel} footer={null} title={<div className="flex items-center justify-between py-3 px-4 gap-2 bg-orange-400 text-white" >
    <div className="flex items-center gap-2">
      <SettingFilled />
      <span className="text-lg font-bold">Virus Scanner</span>
    </div>
    <CloseOutlined onClick={onCancel}/>
  </div>}>
    <div className="flex flex-col gap-5 min-h-96">
      <span className="text-lg font-bold text-center">Chào mừng bạn đến với ứng dụng quét và diệt Virus</span>
      <div className="flex items-center justify-center h-full">
        {isScanning ? <ScanningProgress /> : <Button type="primary" onClick={() => setIsScanning(true)}>Bắt đầu quét</Button>}
      </div>
    </div>
  </Modal> 
}
