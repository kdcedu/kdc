"use client";
import { Image } from "antd";

interface ChatBoxProps {
  imgSrc?: string;
  isGood?: boolean;
}

export default function ChatBox( {imgSrc, isGood} : ChatBoxProps ) {

  return (
    <>
      <div className="bg-white border-6 border-sky-300 rounded-2xl w-full">
        <div className="bg-sky-300 m-0.5 rounded-lg flex items-center justify-between px-10 py-1">
          <div className="flex items-center gap-5">
            <Image
              preview={false}
              width={50}
              alt="Bin Avatar"
              src="/icons/Bin.svg"
            />

            <span className="text-2xl font-semibold text-white">BIN BÉO</span>
          </div>

          <div className="flex items-center gap-3">
            <Image
              preview={false}
              width={30}
              alt="Call Icon"
              src="/icons/phone.png"
            />

            <Image
              className="ml-2"
              preview={false}
              width={35}
              alt="Video Call Icon"
              src="/icons/videocall.png"
            />

            <Image
              preview={false}
              width={50}
              alt="Dot Icon"
              src="/icons/3cham.png"
            />
          </div>
        </div>
        <div className="flex gap-5 m-5 justify-end">
          <div className="bg-sky-100 w-72 p-5 rounded-xl">
            <Image
              width={250}
              preview={false}
              alt="Video Image"
              src={imgSrc}
            />

            <div className="text-xl">
              Bin ơi, video này hay lắm! Bạn xem thử đi.
            </div>
          </div>

          <Image preview={false} width={50} alt="Avatar" src="/icons/HS.svg" />
        </div>

        <div className="flex gap-5 m-5">
          <Image preview={false} width={50} alt="Avatar" src="/icons/Bin.svg" />
          <div className="bg-sky-100 w-72 p-5 rounded-xl">
            <div className="text-xl">
              {isGood ? 'Cảm ơn bạn! Video này hay quá. Mình xem rất là vui!' : 'Trời ơi, video gì thấy gheeeee! Mình không thích đâu!'}
            </div>

            <Image className="absolute left-52 -top-5" width={80} preview={false} alt="Reaction Icon" src={isGood ? "/icons/smiling.png" : "/icons/disgusted.png"}/>
          </div>
        </div>
      </div>
    </>
  );
}
