'use client'

import { chatContent } from "@/constant/chatContent";
import { Avatar, Button, Image, Input } from "antd";
import CustomCheckBox from "./customCheckBox";
import { useState } from "react";
import { SendOutlined } from "@ant-design/icons";

interface GroupChatBoxProps {
  redirect: () => void;
  haveCheckBox: boolean;
}

export default function GroupChatBox({ redirect, haveCheckBox }: GroupChatBoxProps) {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-sky-300 p-2 rounded-lg gap-3">
        <div className="flex items-center gap-5">
          <div>
            <Image alt="People" width={70} preview={false} src={`/images/people.png`} />
          </div>

          <div className="text-xl font-semibold text-white">Nhóm chat lớp 3A</div>
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

      <div className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col gap-3 h-96 overflow-auto">
          {chatContent.map(item => (
            <div key={item.id} className="flex items-center gap-5 mt-2">
              <div className="flex items-start gap-3 w-2/3">
              <div>
                <Avatar src={item.avatar} />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">{item.name}</div>
                <div className="bg-sky-100 rounded-lg p-2">
                  <span className="block">{item.content}</span>
                {item.img && <Image preview={false} src={item.img} alt="Image" />}
                </div>
                </div>
              </div>
              {haveCheckBox && <CustomCheckBox answer={item.answer} isSubmit={isSubmit} />}
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <Input placeholder="Nhập tin nhắn" readOnly suffix={<SendOutlined />}/>
          {haveCheckBox && <>
            <Button variant="solid" color={isSubmit ? `green` : `orange`} onClick={() => {if(isSubmit) redirect(); else setIsSubmit(true)}}>{isSubmit ? 'Tiếp tục' : 'Nộp bài'}</Button>
            {isSubmit && <Button variant="outlined" color="orange" onClick={() => setIsSubmit(false)}>Làm lại</Button>}
          </>}
          
        </div>
      </div>
    </>
  );
}
