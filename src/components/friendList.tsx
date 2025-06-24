import { adultFriendList, friendList } from "@/constant/profile";
import { SearchOutlined } from "@ant-design/icons";
import { Image } from "antd";

interface FriendListProps {
  isAdult?: boolean;
}

export default function FriendList({isAdult}: FriendListProps) {
  const currentFriendList = isAdult ? adultFriendList : friendList;
  return <div className="flex flex-col w-full">
    <div className="flex justify-between items-center text-gray-500 p-3">
      <span className="font-semibold">Người liên hệ</span>
      <SearchOutlined />
    </div>
    {currentFriendList.map(friend => <div key={friend.name} className="flex items-center gap-5 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
      <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
        <Image src={friend.avatar} alt="avatar" preview={false}/>
      </div>
      <span className="font-semibold">{friend.name}</span>
    </div>)}
  </div>
}