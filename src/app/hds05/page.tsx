'use client'

import AudioPlayer from "@/components/audioPlayer";
import CatConversation from "@/components/catConversation";
import { videos } from "@/constant/videos";
import { Image } from "antd";
import { redirect } from "next/navigation";

export default function Menu() {

  const handleRedirect = (id: string) => {
    redirect('hds05/' + id);
  }

  return (
    <div>
      <div className="flex flex-col gap-20">
        <div className="flex m-auto gap-5 px-5 py-3 bg-white border-4 border-rose-300 rounded-2xl">
          {videos.map((video) => (
            <div className="flex-1" key={video.id}>
              <Image
                height={250}
                preview={false}
                alt="Video"
                src={video.imageUrl}
                className="rounded-lg cursor-pointer active:scale-95"
                onClick={() => handleRedirect(video.id)}
              />

              <div className="mt-2 text-2xl text-center cursor-pointer hover:text-orange-400 hover:underline active:text-orange-400" onClick={() => handleRedirect(video.id)}>
                {video.title}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <Image width={600} preview={false} src="/icons/cat.png" alt="Cat"/>

          <CatConversation icon={<AudioPlayer src="/audios/welcome.mp3"/>}>
            Chào các bạn, mình là <span className="font-semibold text-emerald-400">DigiMeo</span>, hôm nay chúng mình cùng xem video nhé! Có 3 video ở phía trên , bạn muốn xem video nào trước? Hãy nhấn vào video bạn muốn xem.
          </CatConversation>
        </div>
      </div>
    </div>
  );
}
