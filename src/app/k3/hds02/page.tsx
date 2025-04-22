'use client'

import CatConversation from "@/components/catConversation";
import GroupChatBox from "@/components/groupChatBox";
import Header from "@/components/header";
import { boys } from "@/constant/avatar";
import { filterUsers } from "@/constant/chatContent";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Avatar, Button, Image, message, Modal } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export default function Hds02() {
  const { push } = useRouter();

  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState<string[]>([]);
  const [isBegin, setIsBegin] = useState(true);
  const [conversation, setConversation] = useState<string>('Bạn hãy đọc và chọn những tin nhắn nào bạn cho là bắt nạt trực tuyến nhé!');
  const [canBlock, setCanBlock] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (isCorrect) {
      setBlockedUsers([...blockedUsers, selectedUser]);
      success();
      if(blockedUsers.length + 1 === filterUsers.filter(item => item.answer).length) {
        successAll();
      }
    } else {
      error();
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: <span className="text-green-500 text-xl">Bạn đã chặn đúng</span>,
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: <span className="text-red-500 text-xl">Bạn đã chặn sai</span>,
    });
  };

  const successAll = () => {
    messageApi.open({
      type: "success",
      content: <span className="text-green-500 text-xl">Bạn đã chặn tất cả những người bắt nạt trực tuyến</span>,
    });

    setTimeout(() => {
      push(pathname + '/finish');
    }, 2000);
  };

  return <>
  {contextHolder}
      <Modal title={<div className="text-center text-xl">{`Chặn ${selectedUser}`}</div>} open={isModalOpen} onCancel={handleCancel} footer={<div className="flex flex-col gap-2">
        <Button className="w-full" variant="solid" color="red" onClick={handleOk}>Chặn</Button>
        <Button className="w-full" variant="outlined" color="red" onClick={handleCancel}>Hủy</Button>
      </div>}>
        <div>Bạn sẽ không thể nhận được tin nhắn từ {selectedUser} nữa.</div>
        <div>Bạn có muốn tiếp tục không?</div>
      </Modal>
      

    <Header title="Bảo vệ bản thân trước bắt nạt trực tuyến"/>

    {isBegin ? <>
      <div className="px-5 flex flex-col flex-1 items-start mt-20">
      <CatConversation>
        <span className="block mb-5">{conversation}</span>

        <Button className="float-end" variant="solid" color="orange" onClick={() => setIsBegin(false)}>Bắt đầu thôi</Button>
      </CatConversation>
      <Image alt="Cat" preview={false} src="/icons/cat.png" />
    </div>
    </> : <div className="flex px-2 gap-3">
      <div className="flex flex-col gap-5 bg-white rounded-lg p-2 shadow-xl">
        <div className="bg-gray-300 rounded-lg p-2">
          <Image alt="People" width={70} preview={false} src={`/images/people.png`} />
        </div>
        {boys.slice(0, 4).map(boy => <div key={boy} className="rounded-lg p-2"><Avatar size={70} src={`/avatars/${boy}.svg`} /></div>)}
      </div>

      <div className="flex-1 h-fit bg-white rounded-lg p-2 shadow-xl">
        <GroupChatBox haveCheckBox={!canBlock} redirect={() => {setIsBegin(true); setConversation('Để bảo vệ mình, bạn hãy chặn những người có dấu hiệu bắt nạt trực tuyến nhé!'); setCanBlock(true)}}/>
      </div>

      <div className="w-1/3 bg-white rounded-lg py-2 px-5 shadow-xl relative">
        <div className="flex justify-center rounded-lg p-2 mb-2">
          <Image alt="People" width={70} preview={false} src='/images/people.png' />
        </div>

        <div className="text-xl font-semibold text-center mb-3">Nhóm chat lớp 3A</div>

          <div className="flex items-center justify-between bg-gray-200 shadow-md rounded-lg px-3 py-1 mb-3">
            <span className="font-semibold">Thông tin đoạn chat</span>
            <span className="text-xs"><DownOutlined /></span>
          </div>

          <div className="flex items-center justify-between bg-gray-200 shadow-md rounded-lg px-3 py-1 mb-4">
            <span className="font-semibold">Tùy chỉnh đoạn chat</span>
            <span className="text-xs"><DownOutlined /></span>
          </div>

          <div className="flex items-center justify-between bg-gray-200 shadow-md rounded-lg px-3 py-1 mb-4">
            <span className="font-semibold">Thành viên trong đoạn chat</span>
            <span className="text-xs"><UpOutlined /></span>
          </div>


        {filterUsers.map(item => <div key={item.id} className="flex items-center justify-between px-2 mb-4">
          <div className="flex items-center gap-2">
            <Avatar src={item.avatar} />
            <div className="text-sm">{item.name}</div>
          </div>
          <div>
            <Button disabled={blockedUsers.includes(item.name)} variant="solid" color="red" onClick={() => {setSelectedUser(item.name); setIsCorrect(item.answer); showModal()}}>Chặn</Button>
          </div>
        </div>)}

        {!canBlock && <div className="absolute inset-0 z-10 pointer-events-auto bg-gray-200 opacity-50" />}
      </div>
    </div>}
    
  </>
}