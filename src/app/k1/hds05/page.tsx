'use client'

import VideoSelect from "@/components/videoSelect";
import { videos } from "@/constant/videos";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter()

 return <VideoSelect videos={videos} handleClickVideo={(id) => router.push(`/k1/hds05/${id}`)}/>
}
