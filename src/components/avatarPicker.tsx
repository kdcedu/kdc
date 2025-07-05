import { avatars } from "@/constant/avatar";
import { CameraFilled } from "@ant-design/icons";
import { Image, message, Modal } from "antd";
import { useEffect, useState } from "react";

interface AvatarPickerProps {
  isView?: boolean
  isAdult?: boolean
}

export default function AvatarPicker({isView, isAdult} : AvatarPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [avatar, setAvatar] = useState(isAdult ? '/avatars/Avatar_MinhKhoi.jpg' : '/icons/Bin.svg');

  useEffect(() => {
    const stored = localStorage.getItem("avatar");
    if (stored) {
      setAvatar(stored)
    }
  }, [])

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Bạn đã cập nhật ảnh đại diện thành công',
    });
  };

  const handleChangeAvatar = (ava: string) => {
    setAvatar(`/avatars/${ava}.svg`)
    localStorage.setItem('avatar', `/avatars/${ava}.svg`)
    setIsOpen(false);
    success();
  }

  return (
    <div className="relative w-fit">
    {contextHolder}
      <div className=" bg-white w-32 md:w-48 flex justify-center items-center p-2 rounded-full cursor-pointer overflow-hidden" onClick={() => {if(isView) return; setIsOpen(true)}}>
        <Image alt="Avatar" preview={false} src={avatar} />
      </div>
      <div className="absolute md:top-36 md:left-32 top-20 left-24 bg-gray-200 md:w-10 md:h-10 w-8 h-8 text-base md:text-xl flex justify-center items-center rounded-full active:opacity-60 cursor-pointer" onClick={() => {if(isView) return; setIsOpen(true)}}>
        <CameraFilled />
      </div>
      <Modal
        title={<span className="text-xl text-sky-600">Hãy chọn ảnh đại diện mà bạn thích</span>}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
      >
        <div className="grid grid-cols-3 gap-5 h-96 overflow-auto mt-5">
          {avatars.map(avatar => <Image key={avatar} preview={false} alt="Avatar" className="cursor-pointer active:scale-95" src={`/avatars/${avatar}.svg`} onClick={() => handleChangeAvatar(avatar)}/>)}
        </div>
      </Modal>
    </div>
  );
}
