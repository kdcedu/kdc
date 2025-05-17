import {
  EllipsisOutlined,
  LikeFilled,
  LikeOutlined,
  MessageOutlined,
  SendOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Image, Input } from "antd";
import PrivacyModal from "./privacyModal";
import { PostType } from "@/constant/post";

export type PrivacyType = "public" | "friend" | "custom" | "only";

export interface PostProps {
  post: PostType
  isView?: boolean;
  setPrivacy: (value: PrivacyType) => void
}

export default function Post({ post, isView, setPrivacy }: PostProps) {

  const currentIcon = <Image
  alt="global"
  preview={false}
  src={`/icons/${post.privacy}.png`}
/>

  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-xl py-3">
        <div className="px-3 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12">
                <Image
                  alt="avatar"
                  preview={false}
                  src="/avatars/animal_1.svg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Nguyễn Bin</span>
                <span className="text-xs text-gray-300">{post.time}</span>
              </div>

              {isView ? currentIcon : <PrivacyModal
                initialValue={post.privacy}
                onOk={setPrivacy}
                icon={currentIcon}
              />}
            </div>

            <EllipsisOutlined />
          </div>

          <span>{post.content}</span>
        </div>

        <div className="w-full">
          <Image alt="content" width="100%" preview={false} src={post.image} />
        </div>

        <div className="flex justify-between items-center py-1 px-3">
          <div className="flex gap-2 items-center">
            <span className="text-blue-500">
              <LikeFilled />
            </span>
            <span className="text-sm text-gray-400">
              Long, Vũ và 50 người khác
            </span>
          </div>

          <span className="text-sm text-gray-400">20 bình luận</span>
        </div>

        <div className="flex justify-evenly items-center py-2 border-y border-gray-300">
          <div className="flex items-center gap-2 text-gray-400">
            <LikeOutlined />
            Thích
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <MessageOutlined />
            Bình luận
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <ShareAltOutlined />
            Chia sẻ
          </div>
        </div>

        <div className="flex gap-3 px-3 mt-3">
          <div className="w-10">
            <Image alt="avatar" preview={false} src="/avatars/animal_1.svg" />
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
