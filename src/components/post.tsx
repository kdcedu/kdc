import {
  EllipsisOutlined,
  LikeFilled,
  LikeOutlined,
  MessageOutlined,
  SendOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Image, Input } from "antd";
import PrivacyModal from "./modal/privacyModal";
import { PostType } from "@/constant/post";
import { useState } from "react";
import ShareModal from "./modal/shareModal";
import NotificationModal from "./modal/notificationModal";

export type PrivacyType = "public" | "friend" | "custom" | "only";

export interface PostProps {
  post: PostType;
  isView?: boolean;
  setPrivacy: (value: PrivacyType, blockList?: string[]) => void;
  avatar: string;
  canLike?: boolean;
  canShare?: boolean;
}

export default function Post({
  post,
  isView,
  avatar,
  setPrivacy,
  canLike,
  canShare
}: PostProps) {
  const [isLike, setIsLike] = useState<boolean>(false);

  const [openShare, setOpenShare] = useState<boolean>(false);

  const [openNotification, setOpenNotification] = useState<boolean>(false);

  const currentIcon = (
    <Image alt="global" preview={false} src={`/icons/${post.privacy}.png`} />
  );

  return (
    <>
    <NotificationModal open={openNotification} onCancel={() => {setOpenNotification(false); setIsLike(false)}} isTrue={post.isTrue ?? true} handleNext={() => setOpenNotification(false)} isEnd={true} trueResult={post.trueResult} falseResult={post.falseResult} trueContent={post.trueContent} falseContent={post.falseContent}/>
    <ShareModal isAdult={avatar !== "/icons/Bin.svg"} open={openShare} onCancel={() => setOpenShare(false)} onFinish={() => {setOpenShare(false); setOpenNotification(true)}}/>
      <div className="w-full bg-white shadow-lg rounded-xl py-3">
        <div className="px-3 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12">
                <Image
                  alt="avatar"
                  preview={false}
                  src={post.avatar}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{post.name}</span>
                <span className="text-xs text-gray-300">{post.time}</span>
              </div>

              {isView ? (
                currentIcon
              ) : (
                <PrivacyModal
                  blockList={post.blockList}
                  initialValue={post.privacy}
                  onOk={setPrivacy}
                  icon={currentIcon}
                />
              )}
            </div>

            <EllipsisOutlined />
          </div>

          <span>{post.content}</span>
        </div>

        {post.image && <div className="w-full">
          <Image alt="content" width="100%" preview={false} src={post.image} />
        </div>}

        <div className="flex justify-between items-center py-1 px-3">
          <div className="flex gap-2 items-center">
            <span className="text-orange-400">
              <LikeFilled />
            </span>
            <span className="text-sm text-gray-400">
              {isLike && 'Bạn, '}Toàn, Long và 50 người khác
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-400">20 bình luận</span>
            <span className="text-sm text-gray-400">10 chia sẻ</span>
          </div>
        </div>

        <div className="flex justify-evenly items-center py-2 border-y border-gray-300">
          <div className={`flex items-center gap-2 cursor-pointer ${isLike ? 'text-orange-400' : 'text-gray-400'}`} onClick={() => {setIsLike(!isLike); if(canLike && !isLike) setOpenNotification(true)}}>
            {isLike ? <LikeFilled /> : <LikeOutlined />}
            Thích
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <MessageOutlined />
            Bình luận
          </div>

          <div className="flex items-center gap-2 text-gray-400 cursor-pointer" onClick={() => {if(canShare) setOpenShare(true)}}>
            <ShareAltOutlined />
            Chia sẻ
          </div>
        </div>

        <div className="flex gap-3 px-3 mt-3">
          <div className="w-10">
            <Image alt="avatar" preview={false} src={isView ? avatar : post.avatar} />
          </div>
          <Input
            readOnly
            placeholder="Viết bình luận..."
            size="small"
            suffix={<SendOutlined />}
          />
        </div>
      </div>
    </>
  );
}
