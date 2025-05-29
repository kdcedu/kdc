'use client'

import FacebookHeader from "@/components/facebookHeader";
import FacebookSidebar from "@/components/facebookSidebar";
import FacebookStatus from "@/components/facebookStatus";
import FriendList from "@/components/friendList";
import Post from "@/components/post";
import { likeSharePostContent } from "@/constant/post";

export default function K4HDS03() {
  return <div className="min-h-screen flex flex-col justify-between bg-gray-100">
    <div className="fixed top-0 w-full z-10">
      <FacebookHeader />
    </div>

    <div className="w-full flex gap-10 mt-16">
      <div className="w-1/4 fixed left-5 hidden md:block">
        <FacebookSidebar />
      </div>
      <div className="w-full flex items-center justify-center pb-5">
        <div className="w-5/6 md:w-2/5 flex flex-col gap-5">
          <FacebookStatus />
          {likeSharePostContent.map(post => <Post canLike canShare isView avatar="/icons/Bin.svg" key={post.content} post={post}setPrivacy={() => {}}/>)}
        </div>
      </div>
      <div className="w-1/4 fixed right-5 hidden md:block">
        <FriendList />
      </div>
    </div>
  </div>
}