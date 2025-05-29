"use client";

import CatConversation from "@/components/catConversation";
import NotificationModal from "@/components/modal/notificationModal";
import { lessonApps } from "@/constant/app";
import { Image } from "antd";
import { useState } from "react";

export default function K1HDS03() {
  const [openNotification, setOpenNotification] = useState<boolean>(false);

  const [isTrue, setIsTrue] = useState<boolean>(false);

  return (
    <div className="w-screen min-h-screen bg-[url(/backgrounds/backgroundDesktop.jpg)] pt-10">
      <NotificationModal
        open={openNotification}
        onCancel={() => setOpenNotification(false)}
        isTrue={isTrue}
        handleNext={() => setOpenNotification(false)}
        isEnd={true}
        trueResult="/images/TH135-B.jpg"
        falseResult="/images/TH1-A.jpg"
        trueContent="Ứng dụng này an toàn"
        falseContent="Ứng dụng này không an toàn"
      />
      <div className="grid grid-cols-4 gap-5">
        {lessonApps.map((app) => (
          <div
            key={app.id}
            className="flex flex-col items-center gap-2 cursor-pointer active:bg-gray-100 hover:bg-gray-100 rounded-xl p-2"
            onClick={() => {
              setIsTrue(app.isTrue);
              setOpenNotification(true);
            }}
          >
            <Image preview={false} src={app.icon} alt={app.name} width={50} />
            <span>{app.name}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-5 mt-20">
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
