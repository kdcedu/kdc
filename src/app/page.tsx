"use client";

import CustomPIN from "@/components/pin";
import { ROUTES } from "@/constant/route";
import { Image } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('avatar');
    console.log('Clear')
  }, [])

  const [pin, setPin] = useState('');
  const [link, setLink] = useState('');

  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <div className="w-full h-fit bg-[#f5712e]">
        <Image
          preview={false}
          src="/headers/header.png"
          alt="Login Header"
          className="w-full h-auto"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-1 items-center w-full gap-5">
        <div className="w-1/2 hidden md:block">
          <Image
            preview={false}
            src="/backgrounds/loginBackground.png"
            alt="Background"
            width="100%"
          />
        </div>

        <div className="m-auto p-10 rounded-3xl">
          {pin === '' ? <>
            <div className="font-semibold text-xl text-orange-500 text-center mb-10">
            Danh sách Bài thực hành
          </div>

          <div>
            {ROUTES.map(route => <div key={route.name} onClick={() => {
              setPin(route.pin);
              setLink(route.name)
            }} className="bg-orange-500 text-white px-3 py-3 rounded-xl mb-5 text-center cursor-pointer active:opacity-70 active:scale-95 text-lg">
              {route.title}
            </div>)}
          </div>
          </> : <>
            <CustomPIN to={link} password={pin} />
          </>}
          
        </div>
      </div>
    </div>
  );
}
