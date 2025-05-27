import { ClockCircleOutlined, GroupOutlined, PlaySquareOutlined, UserOutlined } from "@ant-design/icons";
import { Image } from "antd";

const menuItems = [
  {
    Icon: UserOutlined,
    title: 'Bạn bè'
  },
  {
    Icon: GroupOutlined,
    title: 'Nhóm'
  },
  {
    Icon: ClockCircleOutlined,
    title: 'Kỷ niệm'
  },
  {
    Icon: PlaySquareOutlined,
    title: 'Video'
  }
]

export default function FacebookSidebar() {
  return <div className="flex flex-col w-full">
    <div className="flex items-center gap-10 p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
      <div className="w-8">
        <Image alt="avatar" src='/icons/Bin.svg' preview={false}/>
      </div>
      <span className="font-semibold">Bin Béo</span>
    

    </div>

    {menuItems.map(menu => <div key={menu.title} className="flex items-center gap-10 p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
      <span className="w-8 text-orange-400 text-3xl">
        <menu.Icon />
      </span>
      <span className="font-semibold">{menu.title}</span>
    </div>)}
  </div>
}