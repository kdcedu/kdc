
"use client";
// import ScanVirusModal from "@/components/modal/scanVirusModal";
// import VirusModal from "@/components/modal/virusModal";
import { apps } from "@/constant/app";
import { Image } from "antd";
// import { useRouter, message } from "next/router";
import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";
export default function PaymentApp() {
    const {push} = useRouter();
      const pathName = usePathname();
    const handleClickApp = (name:string) => {
        if (name !== "") push(pathName + "/" + name);
    }
  return (
    <div className="flex justify-between w-full">

      <div className="grid grid-cols-3 gap-10 w-2/5 py-5">
        {apps.map((app) => (
          <div key={app.id} className="flex flex-col items-center gap-2">
            <Image preview={false} src={app.icon} alt={app.name} width={70} />
            <span>{app.name}</span>
          </div>
        ))}

       <div 
       onClick={()=> handleClickApp("ZaloPay")}
       className="flex flex-col items-center gap-2 cursor-pointer active:opacity-50 hover:bg-white/10 hover:backdrop-blur-sm transition rounded-xl">
          <Image preview={false} src="/apps/ZaloPay.png" alt="virus" width={70} />
          <span className="font-bold text-[#0032c8]">ZaloPay</span>
        </div>
      </div>
     
      {/* <ScanVirusModal /> */}
    </div>
  );
}
