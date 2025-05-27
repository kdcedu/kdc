import { friendList } from "@/constant/profile";
import { SearchOutlined } from "@ant-design/icons";
import { Image } from "antd";

export default function FriendList() {
  return <div className="flex flex-col w-full">
    <div className="flex justify-between items-center text-gray-500 p-3">
      <span className="font-semibold">Người liên hệ</span>
      <SearchOutlined />
    </div>
    {friendList.map(friend => <div key={friend.name} className="flex items-center gap-5 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
      <div className="w-10">
        <Image src={friend.avatar} alt="avatar" preview={false}/>
      </div>
      <span className="font-semibold">{friend.name}</span>
    </div>)}
  </div>
}