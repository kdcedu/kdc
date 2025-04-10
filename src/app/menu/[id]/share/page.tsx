"use client"

import CatConversation from "@/components/catConversation";
import HeartGiven from "@/components/heartGiven";
import PrimaryButton from "@/components/primaryButton";
import { videos } from "@/constant/videos";
import { BackwardOutlined, HeartFilled, HomeFilled } from "@ant-design/icons";
import { Image } from "antd";
import { useParams, useRouter } from "next/navigation";

export default function SharePage() {
  const router = useRouter();

  const {id} = useParams();

  const video = videos.find(item => item.id === id)

  return <>
    <div className="flex gap-10">
      <div>
        <Image preview={false} src="/components/chatbox.png" width={600}/>

        <div className="absolute top-40 left-72">
          <Image width={300} preview={false} src={video?.imageUrl} className="rounded-xl"/>

          <div className="text-xl w-72 mt-2">
            Bin ơi, video này hay lắm! Bạn xem thử đi. 
          </div>
        </div>

        <div className="absolute bottom-64 left-60 text-xl w-80">
          {video?.isGood ? 'Cảm ơn bạn! Video này hay quá. Mình xem rất là vui!' : 'Trời ơi, video gì thấy gheeeee! Mình không thích đâu!'}
        </div>
      </div>
      

      <div className="w-1/2 flex flex-col">
      <div className="w-4/5 mx-auto mt-20">
        <CatConversation>
          {video?.isGood ? 'Vậy là Bin đã thích video bạn chia sẻ. Chia sẻ niềm vui thật là tuyệt!' : 'Vậy là Bin không thích video bạn chia sẻ. Lần sau, chúng ta hãy suy nghĩ kỹ trước khi chia sẻ nhé!'}
        </CatConversation>
      </div>
        <div className={`flex ${video?.isGood ? 'justify-between' : 'justify-end'} items-end pl-14 mb-20`}>
          {video?.isGood && <HeartGiven />}
          <Image preview={false} width={200} src="/icons/cat2.png"/>
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