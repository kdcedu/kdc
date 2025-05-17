'use client'

import ProfileComponent from "@/components/profile";
import { postContent } from "@/constant/post";
import { useState } from "react";

export default function K4HDS01() {
  const [post, setPost] = useState(postContent);

  const [finishRole, setFinishRole] = useState(false);

  const [finishPrivacy, setFinishPrivacy] = useState(false);

  const [blockList, setBlockList] = useState<string[]>([]);

  return <div className="w-screen flex">
    <div className="w-1/2 h-screen overflow-auto flex flex-col items-center border-r-4 border-r-gray-400 bg-gray-50">
      <ProfileComponent post={post} setPost={setPost} blockList={blockList} setBlockList={setBlockList} setFinishPrivacy={setFinishPrivacy}/>
    </div>

    <div className="w-1/2 h-screen overflow-auto flex flex-col items-center border-r-4 border-r-gray-400 bg-gray-100">
      <ProfileComponent isView post={post} setPost={setPost} blockList={blockList} setBlockList={setBlockList} finishRole={finishRole} finishPrivacy={finishPrivacy} setFinishRole={setFinishRole}/>
    </div>
  </div>
}