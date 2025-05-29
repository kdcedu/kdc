"use client";

import ScanVirusModal from "@/components/modal/scanVirusModal";
import VirusModal from "@/components/modal/virusModal";
import { apps } from "@/constant/app";
import { Image, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export default function HDS03Page() {
  const {push} = useRouter();

  const pathName = usePathname();

  const [isVirus, setIsVirus] = useState(true);

  const [isScanVirus, setIsScanVirus] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const handleScanVirus = () => {
    setIsScanVirus(true);
    setIsVirus(false);
  };

  const handleCancelScanVirus = () => {
    setIsScanVirus(false);
    setIsVirus(true);
  };

  const handleFinish = () => {
    setIsScanVirus(false);
    setIsVirus(false);
    messageApi.open({
      type: "success",
      content: <span className="text-green-500 font-semibold text-xl">Bạn đã hoàn thành bài tập diệt Virus</span>,
    });
    setTimeout(() => {
      push(pathName + '/finish')
    }, 3000)
  }

  return (
    <div className="flex justify-between w-full">
      {contextHolder}
      <div className="grid grid-cols-3 gap-10 w-2/5 py-5">
        {apps.map((app) => (
          <div key={app.id} className="flex flex-col items-center gap-2">
            <Image preview={false} src={app.icon} alt={app.name} width={70} />
            <span>{app.name}</span>
          </div>
        ))}

        <div className="flex flex-col items-center gap-2 cursor-pointer active:opacity-50" onClick={handleScanVirus}>
          <Image preview={false} src="/apps/virus.png" alt="virus" width={70} />
          <span className="font-semibold text-orange-400">Virus Scanner</span>
        </div>
      </div>
      {isVirus && <VirusModal />}
      {isVirus && <VirusModal />}
      {isVirus && <VirusModal />}
      {isVirus && <VirusModal />}
      <ScanVirusModal open={isScanVirus} onCancel={handleCancelScanVirus} onFinish={handleFinish}/>
    </div>
  );
}
