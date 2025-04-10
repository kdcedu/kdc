"use client"

import AudioPlayer from "@/components/audioPlayer";
import CatConversation from "@/components/catConversation";
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
      <div>
        <Image alt="Chat Box" preview={false} src="/components/chatbox.png" width={600}/>

        <div className="absolute top-36 left-72">
          <Image alt="Video" width={300} preview={false} src={video?.imageUrl} className="rounded-xl"/>

          <div className="text-xl w-72 mt-2">
            Bin ơi, video này hay lắm! Bạn xem thử đi. 
          </div>
        </div>

        <div className="absolute bottom-72 left-60 text-xl w-80">
          {video?.isGood ? 'Cảm ơn bạn! Video này hay quá. Mình xem rất là vui!' : 'Trời ơi, video gì thấy gheeeee! Mình không thích đâu!'}
        </div>
      </div>
      

      <div className="w-1/2 flex flex-col">
      <div className="mx-auto mt-20">
        <CatConversation>
          {video?.isGood ? <>
            Vậy là Bin đã thích video bạn chia sẻ. Chia sẻ niềm vui thật là tuyệt!

            <AudioPlayer src="/audios/shareGood.mp3"/>
          </> : <>
            Vậy là Bin không thích video bạn chia sẻ. Lần sau, chúng ta hãy suy nghĩ kỹ trước khi chia sẻ nhé!

            <AudioPlayer src="/audios/shareNotGood.mp3"/>
          </>}
        </CatConversation>
      </div>
        <div className={`flex ${video?.isGood ? 'justify-between' : 'justify-end'} items-end pl-14 mb-20`}>
          {video?.isGood && <HeartGiven />}
          <Image alt="Cat" preview={false} width={200} src="/icons/cat2.png"/>
        </div>
        

        <div className="flex m-auto gap-5">
                  <PrimaryButton icon={<BackwardOutlined />} onClick={() => router.back()}>
                    Trở lại
                  </PrimaryButton>

                  <PrimaryButton icon={<HomeFilled />} onClick={() => router.replace('/menu')}>
                    Trang chủ
                  </PrimaryButton>
                </div>
      </div>
    </div>
  </>
}