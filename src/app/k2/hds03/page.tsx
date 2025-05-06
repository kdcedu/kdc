"use client";

import ScanVirusModal from "@/components/scanVirusModal";
import VirusModal from "@/components/virusModal";
import { apps } from "@/constant/app";
import { Image } from "antd";
import { useState } from "react";
export default function HDS03Page() {
  const [isVirus, setIsVirus] = useState(true);

  const [isScanVirus, setIsScanVirus] = useState(false);

  const handleScanVirus = () => {
    setIsScanVirus(true);
    setIsVirus(false);
  };

  const handleCancelScanVirus = () => {
    setIsScanVirus(false);
    setIsVirus(true);
  };

  return (
    <div className="flex justify-between w-full">
      <div className="grid grid-cols-2 gap-10 w-1/4 py-5">
        {apps.map((app) => (
          <div key={app.id} className="flex flex-col items-center gap-2">
            <Image preview={false} src={app.icon} alt={app.name} width={70} />
            <span>{app.name}</span>
          </div>
        ))}

        <div className="flex flex-col items-center gap-2 cursor-pointer active:opacity-50" onClick={handleScanVirus}>
          <Image preview={false} src="/apps/virus.svg" alt="virus" width={70} />
          <span className="font-semibold">Virus Scanner</span>
        </div>
      </div>
      {isVirus && <VirusModal />}
      {isVirus && <VirusModal />}
      {isVirus && <VirusModal />}
      {isVirus && <VirusModal />}
      <ScanVirusModal open={isScanVirus} onCancel={handleCancelScanVirus} />
    </div>
  );
}
