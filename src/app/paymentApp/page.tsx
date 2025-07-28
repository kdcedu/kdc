
"use client";
// import ScanVirusModal from "@/components/modal/scanVirusModal";
// import VirusModal from "@/components/modal/virusModal";
import { apps } from "@/constant/app";
import { Image, Input } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { CalendarFilled, CloudFilled, EnvironmentFilled, SunFilled } from "@ant-design/icons";
// import { useState } from "react";
export default function PaymentApp() {
    const {push} = useRouter();
      const pathName = usePathname();
    const handleClickApp = (name:string) => {
        if (name !== "") push(pathName + "/" + name);
    }
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 bg-[url(/backgrounds/backgroundDesktop.jpg)] pt-10">


      <div className="w-full flex justify-center items-center gap-5">
      <div className="flex flex-col items-center justify-center text-gray-500">
        <span className="text-8xl text-center">10:00</span>
        <span className="flex items-center gap-3">
          <CalendarFilled />
          <span>Thứ ba, ngày 03 tháng 06</span>
        </span>
      </div>

      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <span className="text-orange-400 text-2xl">
            <SunFilled />
          </span>
          <span className="text-xl text-gray-500 font-semibold">36°</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-xl text-white">
            <CloudFilled />
          </span>
          <span className="text-lg">Trời nhiều mây</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span>
            <EnvironmentFilled />
          </span>
          <span className="text-lg">Thành phố Hồ Chí Minh</span>
        </div>
      </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <Input size="large" className="!rounded-full" prefix={<Image preview={false} src="/icons/google_logo.png" alt="google" width={20}/>} suffix={<div className="flex gap-2">
          <Image preview={false} src="/icons/google_voice.png" alt="google" width={25}/>
          <Image preview={false} src="/icons/google_scan.png" alt="google" width={30}/>
        </div>} variant="underlined"/>
      </div>
      

      <div className="grid grid-cols-4 gap-20 w-full px-40">
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex flex-col items-center gap-2"
          >
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
    </div>
  );
}
