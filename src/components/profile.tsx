import { Button, Image, Select } from "antd";
import AvatarPicker from "./avatarPicker";
import { DownOutlined, EditFilled, PlusOutlined } from "@ant-design/icons";
import Post, { PrivacyType } from "./post";
import { friendList } from "@/constant/profile";
import { useEffect, useState } from "react";
import { PostType } from "@/constant/post";
import { usePathname, useRouter } from "next/navigation";

interface ProfileComponentProps {
  isView?: boolean;
  post: PostType[];
  setPost: (value: PostType[]) => void;
  blockList: string[];
  setBlockList: (value: string[]) => void;
  finishRole?: boolean;
  setFinishRole?: (value: boolean) => void;
  finishPrivacy?: boolean;
  setFinishPrivacy?: (value: boolean) => void;
}

export default function ProfileComponent({
  isView,
  post,
  setPost,
  blockList,
  setBlockList,
  finishRole,
  setFinishRole,
  finishPrivacy,
  setFinishPrivacy
  
}: ProfileComponentProps) {
  const {push} = useRouter();

  const pathName = usePathname();

  const selectOptions = [
    {
      label: "Người lạ",
      value: "Người lạ",
    },
    {
      label: "Bạn bè",
      value: "Bạn bè",
    },
    ...friendList.map((friend) => ({ label: friend.name, value: friend.name })),
  ];

  const [role, setRole] = useState("Người lạ");

  const [roleList, setRoleList] = useState<string[]>(['Người lạ']);

  const [privacyList, setPrivacyList] = useState<PrivacyType[]>(['public'])

  useEffect(() => {
    if(roleList.length === selectOptions.length) setFinishRole?.(true)
  }, [roleList, setFinishRole, selectOptions.length])

  useEffect(() => {
    if(privacyList.length === 4) setFinishPrivacy?.(true)
  }, [privacyList, setFinishPrivacy])

  const PostComponent = ({p} : {p: PostType}) => <Post
  blockList={blockList}
  setBlockList={setBlockList}
  setPrivacy={(value: PrivacyType) => {
    if (!isView)
      setPost(
        post.map((cur) => {
          if (cur === p) return { ...p, privacy: value };
          else return cur;
        })
      );
      if(!privacyList.includes(value)) setPrivacyList([...privacyList, value])
  }}
  isView={isView}
  post={p}
/>

  return (
    <div className="w-full flex flex-col justify-center">
      {isView && (
        <div className="flex items-center bg-orange-100 w-1/2 gap-5 absolute top-0 z-10 px-5 py-3">
          <span className="text-orange-400 font-semibold">
            Bạn đang xem hồ sơ dưới góc nhìn:{" "}
          </span>
          <Select
            className="flex flex-1"
            options={selectOptions}
            defaultValue={role}
            onChange={(value) => {
              setRole(value)
              if(!roleList.includes(value)) setRoleList([...roleList, value])
            }}
          />
        </div>
      )}
      <div className="w-full h-56">
        <Image
          alt="Background"
          preview={false}
          width="100%"
          height="100%"
          src="https://t4.ftcdn.net/jpg/05/42/73/17/360_F_542731787_npIDENXs9NMkl1mtyHKj8De2WBL2vnFW.jpg"
        />
      </div>

      <div className="relative -top-28 flex flex-col items-center border-b border-gray-300 w-full pb-5">
        <AvatarPicker isView />

        <div className="mt-2 flex justify-center">
          <div className="flex flex-col gap-2 items-center">
            <div className="text-3xl font-semibold">Bin Béo</div>
            <div className="text-sm text-gray-500">50 người bạn</div>
          </div>
        </div>

        {!isView && (
          <div className="flex gap-5 mt-5">
            <Button variant="solid" color="blue" icon={<PlusOutlined />}>
              Thêm vào tin
            </Button>
            <Button icon={<EditFilled />} variant="filled" color="default">
              Chỉnh sửa trang cá nhân
            </Button>
            <Button icon={<DownOutlined />} variant="filled" color="default" />
          </div>
        )}
      </div>

      <div className="relative -top-24 px-5 flex flex-col gap-10">
        {post.map((p) => {
          if (isView) {
            if(p.privacy === 'public') {
              return <PostComponent key={p.content} p={p}/>
            } else if (p.privacy === 'friend') {
              if(role !== 'Người lạ') {
                return <PostComponent key={p.content} p={p}/>
              }
            } else if (p.privacy === 'custom') {
              if(!blockList.includes(role) && role !== 'Người lạ') return <PostComponent key={p.content} p={p}/>
            }
          } else {
            return <PostComponent key={p.content} p={p}/>
          }
        })}
      </div>

      {isView && finishRole && finishPrivacy && (
        <div className="flex w-1/2 justify-end absolute bottom-0 z-10 px-5 py-2 bg-orange-100">
          <Button variant="solid" color="orange" onClick={() => push(pathName + '/finish')}>Hoàn thành</Button>
        </div>
      )}
    </div>
  );
}
