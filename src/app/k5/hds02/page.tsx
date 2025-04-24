'use client'

import GroupChatBox from "@/components/groupChatBox";
import { apps } from "@/constant/app";
import { clickChatContent } from "@/constant/chatContent";
import { Image } from "antd";

export default function Hds02() {
  return ( <>
  <div className="flex justify-between">
    <div className="grid grid-cols-2 gap-10 w-1/4">
      {apps.map(app => <Image key={app.id} preview={false} src={app.icon} alt={app.name} width={70} />)}
    </div>

    <div className="w-1/2 bg-white rounded-lg p-2 shadow-xl">
      <GroupChatBox chatContent={clickChatContent} name={clickChatContent[0].name} imgSrc={clickChatContent[0].avatar ?? ''} haveCheckBox={false} redirect={() => {}}/>
    </div>
  </div>
  </>
  );
}
