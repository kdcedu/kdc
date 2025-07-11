import { PictureFilled, SmileFilled, VideoCameraFilled } from "@ant-design/icons";
import { Image, Input } from "antd";

interface FacebookStatusProps {
  isAdult?: boolean;
}

export default function FacebookStatus({isAdult}: FacebookStatusProps) {
  return <div className="w-full bg-white rounded-xl shadow-lg p-5">
    <div className="flex gap-5 border-b border-gray-200 pb-3">
      <div className="w-8">
        {isAdult ? <Image preview={false} alt="Avatar" src='/avatars/Avatar_MinhKhoi.jpg'/> : <Image preview={false} alt="Avatar" src='/icons/Bin.svg'/>}
      </div>
      <Input color="gray" placeholder="Bạn đang nghĩ gì thế?"/>
    </div>

    <div className="flex pt-3">
      <div className="flex flex-1 justify-center items-center gap-2">
        <span className="text-orange-400"><VideoCameraFilled /></span>
        <span className="text-xs">Video trực tiếp</span>
      </div>

      <div className="flex flex-1 justify-center items-center gap-2">
        <span className="text-orange-400"><PictureFilled /></span>
        <span className="text-xs">Ảnh/video</span>
      </div>

      <div className="flex flex-1 justify-center items-center gap-2">
        <span className="text-orange-400"><SmileFilled /></span>
        <span className="text-xs">Cảm xúc</span>
      </div>
    </div>
  </div>
}