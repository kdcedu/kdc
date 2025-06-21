'use client'

import AudioPlayer from "@/components/audioPlayer";
import CatConversation from "@/components/catConversation";
import { Video } from "@/constant/videos";
import { Image } from "antd";

interface VideoSelectProps {
  videos: Video[],
  handleClickVideo: (id: string) => void
}

export default function VideoSelect({videos, handleClickVideo}: VideoSelectProps) {

  return (
    <div className="w-full px-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap justify-center items-center m-auto gap-5 px-5 py-3 bg-white border-4 border-rose-300 rounded-2xl">
          {videos.map((video) => (
            <div className="w-[32%] flex flex-col items-center justify-center" key={video.id}>
              <div className="w-full h-60 flex items-center justify-center">
                <Image
                  width="100%"
                  height="100%"
                  preview={false}
                  alt="Video"
                  src={video.imageUrl}
                  className="rounded-lg cursor-pointer active:scale-95"
                  onClick={() => handleClickVideo(video.id)}
                />
              </div>

              <div className="mt-2 text-2xl text-center cursor-pointer hover:text-orange-400 hover:underline active:text-orange-400" onClick={() => handleClickVideo(video.id)}>
                {video.title}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="w-48">
            <Image preview={false} src="/icons/robot.gif" alt="Cat"/>
          </div>

          <CatConversation icon={<AudioPlayer src="/audios/welcome.mp3"/>}>
            Chào các bạn, mình là <span className="font-semibold text-emerald-400">DigiRobot</span>, hôm nay chúng mình cùng xem video nhé! Có 3 video ở phía trên , bạn muốn xem video nào trước? Hãy nhấn vào video bạn muốn xem.
          </CatConversation>
        </div>
      </div>
    </div>
  );
}