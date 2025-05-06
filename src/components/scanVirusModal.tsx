"use client";

import { CloseOutlined, SearchOutlined, SettingFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useEffect } from "react";

interface ScanVirusModalProps {
  open: boolean;
  onCancel: () => void;
}

export default function ScanVirusModal({ open, onCancel }: ScanVirusModalProps) {

  // const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (open) {
      // setIsScanning(false);
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
    <div className="flex flex-col gap-5 min-h-96 items-center">
      <div className="flex flex-col gap-2 items-center justify-center w-[120px] h-[120px] bg-orange-400 text-white text-lg font-semibold rounded-full active:opacity-80 hover:cursor-pointer" >
        <SearchOutlined />
        <div>Quét ngay</div>
      </div>
      {/* <div className="flex items-center justify-center h-full">
        {isScanning ? <ScanningProgress /> : <Button type="primary" onClick={() => setIsScanning(true)}>Bắt đầu quét</Button>}
      </div> */}
      <div>
        <div className="">

        </div>
      </div>
    </div>
  </Modal> 
}
