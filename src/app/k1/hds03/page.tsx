"use client";

import BackButton from "@/components/backButton";
import CatConversation from "@/components/catConversation";
import NotificationModal from "@/components/modal/notificationModal";
import { lessonApps } from "@/constant/app";
import { shuffleArray } from "@/utils/randomApps";
import { CalendarFilled, CloudFilled, EnvironmentFilled, SunFilled } from "@ant-design/icons";
import { Image, Input } from "antd";
import { useMemo, useState } from "react";

export default function K1HDS03() {
  const [openNotification, setOpenNotification] = useState<boolean>(false);

  const [isTrue, setIsTrue] = useState<boolean>(false);

  const [trueContent, setTrueContent] = useState<string>('');

  const [trueImage, setTrueImage] = useState<string>('');

  const [falseContent, setFalseContent] = useState<string>('');

  const [falseImage, setFalseImage] = useState<string>('');

  const apps = useMemo(() => shuffleArray(lessonApps), []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 bg-[url(/backgrounds/backgroundDesktop.jpg)] pt-10">
      <BackButton />
      
      <NotificationModal
        open={openNotification}
        onCancel={() => setOpenNotification(false)}
        isTrue={isTrue}
        handleNext={() => setOpenNotification(false)}
        isEnd={true}
        trueResult={trueImage}
        falseResult={falseImage}
        trueContent={trueContent}
        falseContent={falseContent}
      />

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
            onClick={() => {
              setIsTrue(app.isTrue);
              setTrueContent(app?.trueContent || '');
              setTrueImage(app?.trueImage || '');
              setFalseImage(app?.falseImage || '');
              setFalseContent(app?.falseContent || '');
              setOpenNotification(true);
            }}
          >
            <Image preview={false} src={app.icon} alt={app.name} width={70} />
            <span>{app.name}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-5">
        <CatConversation>
          Bạn hãy truy cập vào các ứng dụng bạn cho là an toàn nhé!
        </CatConversation>
        <div className="w-24">
          <Image preview={false} src="/icons/robot.gif" alt="robot" />
        </div>
      </div>
    </div>
  );
}
