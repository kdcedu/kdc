'use client'

import { PrivacyType } from "@/components/post";
import ProfileComponent from "@/components/profile";
import { postContent } from "@/constant/post";
import { useState } from "react";

export default function K4HDS01() {
  const [post, setPost] = useState(postContent);

  const [finishRole, setFinishRole] = useState(false);

  const [finishPrivacy, setFinishPrivacy] = useState(false);

  const [privacyList, setPrivacyList] = useState<PrivacyType[]>(['public'])

  return <div className="w-screen flex">
    <div className="w-1/2 h-screen overflow-auto flex flex-col items-center border-r-4 border-r-gray-400 bg-gray-50">
      <ProfileComponent post={post} setPost={setPost} setFinishPrivacy={setFinishPrivacy} privacyList={privacyList} setPrivacyList={setPrivacyList}/>
    </div>

    <div className="w-1/2 h-screen overflow-auto flex flex-col items-center border-r-4 border-r-gray-400 bg-gray-100">
      <ProfileComponent isView post={post} setPost={setPost} finishRole={finishRole} finishPrivacy={finishPrivacy} setFinishRole={setFinishRole} setFinishPrivacy={setFinishPrivacy} privacyList={privacyList}/>
    </div>
  </div>
}