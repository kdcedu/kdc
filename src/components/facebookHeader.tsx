import { BellFilled, HomeFilled, MessageFilled, PlaySquareOutlined, SearchOutlined, TrophyOutlined, UserOutlined } from "@ant-design/icons";
import { Image, Input } from "antd";
import { useRouter } from "next/navigation";

interface FacebookHeaderProps {
  isAdult?: boolean;
}

export default function FacebookHeader({isAdult}: FacebookHeaderProps) {
  const router = useRouter();
  return <div className="w-full flex items-center justify-evenly bg-white border-b border-gray-300 px-10 shadow-sm">
    <div className="w-1/4 flex items-center gap-2 fixed top-1 left-5">
      <div className="w-16 md:w-20" onClick={() => router.push('/') }>
        <Image preview={false} src="/components/logo.png" alt="Logo" />
      </div>
      <div className="w-full hidden md:flex">
        <Input prefix={<SearchOutlined />} placeholder="Tìm kiếm trên KDC Network" />
      </div>
    </div>

    <div className="w-2/3 md:w-2/5 flex justify-between">
      {[HomeFilled, PlaySquareOutlined, UserOutlined, TrophyOutlined].map((Icon, index) => <div key={index} className={`text-2xl text-orange-400 flex flex-1 items-center justify-center py-3 ${index === 0 && 'border-b-4'}`}>
        <Icon />
      </div>) }
    </div>

    <div className="flex gap-5 fixed top-1 right-5">
      {[MessageFilled, BellFilled].map((Icon, index) => <div key={index} className="hidden md:flex w-10 h-10 text-lg items-center justify-center rounded-full bg-orange-50 text-orange-400">
        <Icon />
      </div>)}

      <div className="w-10">
        {isAdult ? <Image alt="avatar" preview={false} src="/avatars/Avatar_MinhKhoi.jpg"/> : <Image alt="avatar" preview={false} src="/icons/Bin.svg"/>}
      </div>
    </div>
  </div>
}