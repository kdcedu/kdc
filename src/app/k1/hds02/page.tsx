'use client'

import BackButton from "@/components/backButton";
import CatConversation from "@/components/catConversation";
import ContentSelect from "@/components/k1/contentSelect";
import { Image } from "antd";

export default function K1HDS02() {

  return <div className="w-full min-h-screen flex flex-col justify-between px-5 pb-5 pt-10 bg-[url(/backgrounds/mainBackground.png)]">
    <BackButton />
    
    <ContentSelect/>

    <CatConversation>
      <div className="flex items-center gap-5">
        <Image src="/icons/robot.gif" alt="Robot" width={100} preview={false}/>
        <span>Hãy chọn video, âm thanh hoặc ảnh để xem nhé!</span>
      </div>
    </CatConversation>
  </div>
}