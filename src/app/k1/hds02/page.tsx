'use client'

import VideoSelect from "@/components/videoSelect";
import { lessonVideos } from "@/constant/videos";
import { useRouter } from "next/navigation";

export default function K1HDS02() {
  const router = useRouter()

  return <div className="w-full min-h-screen px-5 pb-5 pt-10 bg-[url(/backgrounds/mainBackground.png)]">
    <VideoSelect videos={lessonVideos} handleClickVideo={(id) => router.push(`/k1/hds02/${id}`)}/>
  </div>
}