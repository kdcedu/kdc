'use client'
import { WifiOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useEffect, useState } from "react";
import GoogleConfirm2fa from "./googleConfirm2fa";
import GooglePhoneHome from "./googlePhoneHome";
import GooglePhone2faNumberPicker from "./googlePhone2faNumberPicker";

interface GooglePhoneProps {
    step: number;
    setStep: (step: number) => void;
    correctNumber: number;
}

export default function GooglePhone({ step, setStep, correctNumber }: GooglePhoneProps) {
  const screens = [
    {
      id: 1,
      component: <GooglePhoneHome />
    },
    {
      id: 2,
      component: <GoogleConfirm2fa setStep={setStep} />
    },
    {
      id: 3,
      component: <GooglePhone2faNumberPicker correctNumber={correctNumber} setStep={setStep} />
    }
  ]

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-between w-full h-screen px-5 gap-2 pb-2 border-8 border-black rounded-xl ${step === 0 && 'bg-[url(/backgrounds/backgroundDesktop.jpg)] bg-fixed'}`}>
      <div className="flex items-center justify-between w-full">
        <span className="font-semibold">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        
        <div className="w-1/3 h-full bg-black rounded-b-xl"/>

          <div className="flex items-center gap-2">
            <span>
              <WifiOutlined />
            </span>
            <Image
              preview={false}
              src="/icons/battery.svg"
              alt="battery"
              width={20}
            />
          </div>
      </div>

      {screens[step].component}

      <div className="w-2/5 h-1 bg-black rounded-full opacity-50" />
    </div>
  );
}
