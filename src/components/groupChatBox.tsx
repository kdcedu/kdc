"use client";

import { ChatContent } from "@/constant/chatContent";
import { Avatar, Button, Image, Input, message } from "antd";
import CustomCheckBox from "./customCheckBox";
import { useEffect, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import ReportPopover from "./reportPopover";

interface GroupChatBoxProps {
  redirect: (guide: string) => void;
  haveCheckBox: boolean;
  imgSrc: string;
  name: string;
  chatContent: ChatContent[];
  isFull?: boolean;
  selfId?: number;
  canReport?: boolean;
  setCanReport?: (canReport: boolean) => void;
  handleClick?: (answer: boolean) => void;
}

export default function GroupChatBox({
  redirect,
  haveCheckBox,
  imgSrc,
  name,
  chatContent,
  isFull,
  selfId,
  canReport,
  setCanReport,
  handleClick,
}: GroupChatBoxProps) {
  const [isSubmit, setIsSubmit] = useState(false);

  const [reportIds, setReportIds] = useState<number[]>([]);

  const [messageApi, contextHolder] = message.useMessage();

  const [self, setSelf] = useState<number | undefined>(selfId);

  useEffect(() => {
    if (chatContent.length === 1) {
      setSelf(undefined);
    }
  }, [chatContent]);

  useEffect(() => {
    if (
      reportIds.length > 0 &&
      reportIds.length === chatContent.filter((item) => item.answer).length
    ) {
      messageApi.open({
        type: "success",
        content: (
          <span className="text-green-500 text-xl">
            Bạn đã báo cáo tất cả những tin nhắn bắt nạt trực tuyến
          </span>
        ),
      });
      const timeout = setTimeout(() => {
        setCanReport?.(false);
        redirect(
          "Để bảo vệ mình, bạn hãy chặn những người có dấu hiệu bắt nạt trực tuyến nhé!"
        );
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [reportIds, chatContent, messageApi, setCanReport, redirect]);

  return (
    <div className="flex flex-col h-full bg-white rounded-lg p-2 shadow-xl">
      {contextHolder}
      <div className="shrink-0 flex items-center justify-between bg-sky-300 p-2 rounded-lg gap-3">
        <div className="flex items-center gap-5">
          <div>
            <Image alt="People" width={50} preview={false} src={imgSrc} />
          </div>

          <div className="text-xl font-semibold text-white">{name}</div>
        </div>

        <div className="flex items-center gap-3">
          <Image
            preview={false}
            width={25}
            alt="Call Icon"
            src="/icons/phone.png"
          />

          <Image
            className="ml-2"
            preview={false}
            width={30}
            alt="Video Call Icon"
            src="/icons/videocall.png"
          />

          <ReportPopover handleConfirm={() => handleClick?.(!chatContent[0].answer)} answer={!chatContent[0].answer} isUserReport icon={<Image
            preview={false}
            width={40}
            alt="Dot Icon"
            src="/icons/3cham.png"
          />}/>
          
        </div>
      </div>

      <div className="flex-1 overflow-auto mt-2 pr-1 space-y-3">
        {chatContent.map((item) => (
          <div
            key={item.id}
            className={`flex items-center ${
              self !== item.id ? "justify-between" : "justify-end"
            } mb-2 relative`}
          >
            <div
              className={`flex ${
                self !== item.id ? "items-start" : "justify-end"
              } gap-3 ${isFull ? "w-2/5" : "w-2/3"}`}
            >
              {self !== item.id && (
                <div>
                  <Avatar src={item.avatar} />
                </div>
              )}
              <div className="flex flex-col gap-2">
                {self !== item.id && (
                  <div className="font-semibold">{item.name}</div>
                )}
                {item.img && <div
                  className={`${
                    self !== item.id ? "bg-sky-100" : "bg-sky-600 text-white"
                  } rounded-lg p-2 w-fit`}
                >
                  <div className="w-full">
                      <Image preview={false} src={item.img} alt="Image" />
                  </div>
                </div>}
                

                {item.content.map((chat, index) => (
                      <div key={index} className={`${
                        self !== item.id ? "bg-sky-100" : "bg-sky-600 text-white"
                      } rounded-lg p-2 w-fit`}>
                        {chat}
                      </div>
                    ))}
              </div>
            </div>
            {self !== item.id && (
              <>
                {haveCheckBox ? (
                  <CustomCheckBox
                    answer={item.answer ?? false}
                    isSubmit={isSubmit}
                  />
                ) : (
                  canReport && (
                    <ReportPopover
                      answer={item.answer}
                      handleConfirm={() => setReportIds([...reportIds, item.id])}
                    />
                  )
                )}
              </>
            )}

            {reportIds.includes(item.id) && (
              <div className="absolute inset-0 bg-white opacity-50 z-10 pointer-events-auto" />
            )}
          </div>
        ))}
      </div>

      <div className="shrink-0 flex flex-col gap-3 mt-2">
        <div className="flex gap-2">
          <Input
            placeholder="Nhập tin nhắn"
            readOnly
            suffix={<SendOutlined />}
          />
          {haveCheckBox && (
            <>
              <Button
                variant="solid"
                color={isSubmit ? `green` : `orange`}
                onClick={() => {
                  if (isSubmit)
                    redirect(
                      "Để bảo vệ mình, bạn hãy báo cáo những tin nhắn có dấu hiệu bắt nạt trực tuyến nhé!"
                    );
                  else setIsSubmit(true);
                }}
              >
                {isSubmit ? "Tiếp tục" : "Nộp bài"}
              </Button>
              {isSubmit && (
                <Button
                  variant="outlined"
                  color="orange"
                  onClick={() => setIsSubmit(false)}
                >
                  Làm lại
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
