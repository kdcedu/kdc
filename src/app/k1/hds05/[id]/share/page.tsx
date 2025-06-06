"use client"

import AudioPlayer from "@/components/audioPlayer";
import CatConversation from "@/components/catConversation";
import ChatBox from "@/components/chatBox";
import HeartGiven from "@/components/heartGiven";
import PrimaryButton from "@/components/primaryButton";
import { videos } from "@/constant/videos";
import { BackwardOutlined, HomeFilled } from "@ant-design/icons";
import { Image } from "antd";
import { useParams, useRouter } from "next/navigation";

export default function SharePage() {
  const router = useRouter();

  const {id} = useParams();

  const video = videos.find(item => item.id === id)

  return <>
    <div className="flex gap-10">

      <ChatBox imgSrc={video?.imageUrl} isGood={video?.isGood}/>
      

      <div className="flex flex-col">
      <div className="mx-auto mt-20">
        <CatConversation icon={ video?.isGood ? <AudioPlayer src="/audios/shareGood.mp3"/> : <AudioPlayer src="/audios/shareNotGood.mp3"/>}>
          {video?.isGood ? <>
            Vậy là Bin đã thích video bạn chia sẻ. Chia sẻ niềm vui thật là tuyệt!
          </> : <>
            Vậy là Bin không thích video bạn chia sẻ. Lần sau, chúng ta hãy suy nghĩ kỹ trước khi chia sẻ nhé!
          </>}
        </CatConversation>
      </div>
        <div className={`flex ${video?.isGood ? 'justify-between' : 'justify-end'} items-end pl-14 mb-20`}>
          {video?.isGood && <HeartGiven />}
          <div className="w-32">
            <Image alt="Cat" preview={false} src="/icons/robot.gif"/>
          </div>
        </div>
        

        <div className="flex m-auto gap-5">
                  <PrimaryButton icon={<BackwardOutlined />} onClick={() => router.back()}>
                    Trở lại
                  </PrimaryButton>

                  <PrimaryButton icon={<HomeFilled />} onClick={() => router.replace('/k1/hds05')}>
                    Trang chủ
           </PrimaryButton>
          </div>
      </div>
    </div>
  </>
}