import { avatars } from "@/constant/avatar";
import { CameraFilled } from "@ant-design/icons";
import { Image, message, Modal } from "antd";
import { useState } from "react";

export default function AvatarPicker() {
  const [isOpen, setIsOpen] = useState(false);

  const [avatar, setAvatar] = useState('/icons/Bin.svg');

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Bạn đã cập nhật ảnh đại diện thành công',
    });
  };

  const handleChangeAvatar = (ava: string) => {
    setAvatar(`/avatars/${ava}.svg`)
    setIsOpen(false);
    success();
  }

  return (
    <>
    {contextHolder}
      <div className=" bg-white w-32 h-32 flex justify-center p-2 rounded-full cursor-pointer" onClick={() => {setIsOpen(true)}}>
        <Image alt="Avatar" preview={false} src={avatar} />
      </div>
      <div className="relative right-8 top-10 font-semibold text-xl bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full active:opacity-60 cursor-pointer" onClick={() => {setIsOpen(true)}}>
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
    </>
  );
}
