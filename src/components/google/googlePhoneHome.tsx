'use client'

import { bottomApps, lessonApps } from "@/constant/app";
import { EllipsisOutlined } from "@ant-design/icons";
import { Image, Input } from "antd";
import { useEffect, useState } from "react";

export default function GooglePhoneHome() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center mb-32">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs">TP Hồ Chí Minh</span>
            <span className="text-5xl">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span className="text-xs">{time.toLocaleDateString()}</span>
          </div>

          
        </div>
      <Input
        className="!rounded-full"
        prefix={
          <Image
            preview={false}
            src="/icons/google_logo.png"
            alt="google"
            width={20}
          />
        }
        suffix={
          <div className="flex gap-2">
            <Image
              preview={false}
              src="/icons/google_voice.png"
              alt="google"
              width={25}
            />
            <Image
              preview={false}
              src="/icons/google_scan.png"
              alt="google"
              width={30}
            />
          </div>
        }
        variant="underlined"
      />
      <div className="grid grid-cols-4 gap-5">
        {lessonApps.map((app) => (
          <div key={app.id} className="flex flex-col items-center gap-2">
            <Image preview={false} src={app.icon} alt={app.name} width={app.id === 6 ? 45 : 55} />
            <span className="text-[8px] text-center font-semibold">{app.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 w-full items-center">
        <span className="text-5xl text-gray-500">
          <EllipsisOutlined />
        </span>
        <div className="flex justify-between w-full">
          {bottomApps.map((app) => (
            <div key={app.id} className="flex flex-col items-center">
              <Image preview={false} src={app.icon} alt={app.name} width={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
