'use client'

import { PrivacyType } from "@/components/post";
import ProfileComponent from "@/components/profile";
import { adultLikeSharePostContent, postContent } from "@/constant/post";
import { Button } from "antd";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function K4HDS01() {
  const isAdult = usePathname().includes("k10");

  const [post, setPost] = useState(isAdult ? adultLikeSharePostContent.filter(post => post.isTrue).map(post => ({ ...post, avatar: "/avatars/Avatar_MinhKhoi.jpg", name: "Minh Khôi" })) : postContent);

  const [finishRole, setFinishRole] = useState(false);

  const [finishPrivacy, setFinishPrivacy] = useState(false);

  const [privacyList, setPrivacyList] = useState<PrivacyType[]>(['public']);

  const [isMe, setIsMe] = useState(true);

  return <div className="w-screen flex">
    <div className="md:hidden fixed top-2 right-5 z-20">
      <Button variant="solid" color="orange" onClick={() => setIsMe(!isMe)}>
        Đổi góc nhìn
      </Button>
    </div>

    <div className="md:hidden w-full h-screen overflow-auto flex-col items-center bg-gray-50">
      {isMe ? <ProfileComponent isAdult post={post} setPost={setPost} setFinishPrivacy={setFinishPrivacy} privacyList={privacyList} setPrivacyList={setPrivacyList}/> : <ProfileComponent isView post={post} setPost={setPost} finishRole={finishRole} finishPrivacy={finishPrivacy} setFinishRole={setFinishRole} setFinishPrivacy={setFinishPrivacy} privacyList={privacyList}/>}
    </div>

    <div className="md:flex hidden w-1/2 h-screen overflow-auto flex-col items-center border-r-4 border-r-gray-400 bg-gray-50">
      <ProfileComponent isAdult post={post} setPost={setPost} setFinishPrivacy={setFinishPrivacy} privacyList={privacyList} setPrivacyList={setPrivacyList}/>
    </div>

    <div className="md:flex hidden w-1/2 h-screen overflow-auto flex-col items-center bg-gray-100">
      <ProfileComponent isAdult isView post={post} setPost={setPost} finishRole={finishRole} finishPrivacy={finishPrivacy} setFinishRole={setFinishRole} setFinishPrivacy={setFinishPrivacy} privacyList={privacyList}/>
    </div>
  </div>
}