"use client";

import CatConversation from "@/components/catConversation";
import GroupChatBox from "@/components/groupChatBox";
import Header from "@/components/header";
import BlockModal from "@/components/modal/blockModal";
import { animals } from "@/constant/avatar";
import { chatContent, filterUsers } from "@/constant/chatContent";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Avatar, Button, Image, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export default function Hds02() {
  const { push } = useRouter();

  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState<string[]>([]);
  const [isBegin, setIsBegin] = useState(true);
  const [conversation, setConversation] = useState<string>(
    "Bạn hãy đọc và chọn những tin nhắn nào bạn cho là bắt nạt trực tuyến nhé!"
  );
  const [step, setStep] = useState(0);
  const [canBlock, setCanBlock] = useState(false);
  const [canReport, setCanReport] = useState(true);

  const guides = [
    (<div key='guide-1' className="flex flex-col items-end mb-10">
      <CatConversation>
          <span className="text-orange-400">Hướng dẫn cho bạn:</span>
          <div className="flex flex-col items-center gap-5 my-5">
            <span className="font-semibold text-xl">B1: Tick vào ô bên cạnh những tin nhắn bạn cho là bắt nạt trực tuyến</span>
            <Image alt="Guide" preview={false} src="/images/guide_1.png" />
          </div>

          <div className="flex flex-col items-center gap-5 my-5">
            <span className="font-semibold text-xl">B2: Bấm vào nút Nộp bài để kiểm tra kết quả</span>
            <Button variant="solid" color="orange">Nộp bài</Button>
          </div>

        <Button
          className="float-end"
          variant="solid"
          color="green"
          onClick={() => setIsBegin(false)}
        >
          Bắt đầu thôi
          </Button>
        
      </CatConversation>
      </div>), 
      (<div key='guide-2' className="flex flex-col items-end mb-10">
        <CatConversation>
            <span className="text-orange-400">Hướng dẫn cho bạn:</span>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-1/2 flex flex-col justify-between items-center gap-5">
                <span className="font-semibold text-xl">B1: Chọn biểu tượng ba chấm bên cạnh tin nhắn</span> 
                <Image alt="Guide" width={150} preview={false} src="/images/guide_2_1.png" />
              </div>

              <div className="w-1/2 flex flex-col justify-between items-center gap-5">
                <span className="font-semibold text-xl">B2: Chọn Báo cáo và chọn lý do bạn cho là bắt nạt trực tuyến</span>
                <Image alt="Guide" width={250} preview={false} src="/images/guide_2_2.png" />
              </div>
            </div>
  
          <Button
            className="float-end"
            variant="solid"
            color="green"
            onClick={() => setIsBegin(false)}
          >
            Bắt đầu thôi
            </Button>
          
        </CatConversation>
        </div>),

(<div key='guide-3' className="flex flex-col items-end mb-10">
  <CatConversation>
      <span className="text-orange-400">Hướng dẫn cho bạn:</span>
      <div className="flex items-center gap-40 my-5">
        <div className="w-1/2 flex flex-col gap-5">
          <span className="font-semibold text-xl">B1: Chọn nút Chặn bên cạnh người bạn cho là có hành vi bắt nạt trực tuyến</span>
        <Image alt="Guide" preview={false} src="/images/guide_3_1.png" />
        </div>

        <div className="w-1/2 flex flex-col gap-5">
        <span className="font-semibold text-xl">B2: Xác nhận chặn người đó</span>
        <Image alt="Guide" preview={false} src="/images/guide_3_2.png" />
        </div>
      </div>

    <Button
      className="float-end"
      variant="solid"
      color="green"
      onClick={() => setIsBegin(false)}
    >
      Bắt đầu thôi
      </Button>
    
  </CatConversation>
  </div>)
  ]

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (isCorrect) {
      setBlockedUsers([...blockedUsers, selectedUser]);
      success();
      if (
        blockedUsers.length + 1 ===
        filterUsers.filter((item) => item.answer).length
      ) {
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
      content: (
        <span className="text-green-500 text-xl">
          Bạn đã chặn tất cả những người bắt nạt trực tuyến
        </span>
      ),
    });

    setTimeout(() => {
      push(pathname + "/finish");
    }, 2000);
  };

  return (
    <>
      {contextHolder}
      <BlockModal
        selectedUser={selectedUser}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />

      <Header title="Bảo vệ bản thân trước bắt nạt trực tuyến" />

      {isBegin ? (
        <>
          <div className="px-5 flex items-center mt-5">
            <div className="flex flex-col w-full items-center">
              <div className="flex flex-col items-start mb-10">
              <CatConversation>
                {conversation}
              </CatConversation>
              </div>

              {guides[step]}
              
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-1 px-5 gap-5 overflow-auto">
          {!canBlock && <div className="flex-col gap-5 bg-white rounded-lg p-2 shadow-xl overflow-auto md:flex hidden">
            <div className="bg-gray-300 rounded-lg p-2">
              <Image
                alt="People"
                width={50}
                preview={false}
                src={`/images/people.png`}
              />
            </div>
            {animals.map((animal) => (
              <div key={animal} className="rounded-lg p-2">
                <Avatar size={50} src={`/avatars/${animal}.svg`} />
              </div>
            ))}
          </div>}

          <div className={`${canBlock ? "hidden md:flex" : "flex"} flex-col flex-1 h-full bg-white rounded-lg p-2 shadow-xl`}>
            <GroupChatBox
              setCanReport={setCanReport}
              canReport={canReport}
              selfId={2}
              isFull={!canBlock}
              chatContent={chatContent}
              name="Nhóm chat lớp 3A"
              imgSrc="/images/people.png"
              haveCheckBox={step === 0}
              redirect={(guide) => {
                setIsBegin(true);
                setConversation(guide);
                if(step === 1) setCanBlock(true);
                setStep(step + 1);
              }}
            />
          </div>

          {canBlock && (
            <div className="w-full md:w-1/3 flex flex-col overflow-auto bg-white rounded-lg py-2 px-5 shadow-xl relative">
              <div className="flex justify-center rounded-lg p-2 mb-2">
                <Image
                  alt="People"
                  width={70}
                  preview={false}
                  src="/images/people.png"
                />
              </div>

              <div className="text-xl font-semibold text-center mb-3">
                Nhóm chat lớp 3A
              </div>

              <div className="flex items-center justify-between bg-gray-200 shadow-md rounded-lg px-3 py-1 mb-3">
                <span className="font-semibold">Thông tin đoạn chat</span>
                <span className="text-xs">
                  <DownOutlined />
                </span>
              </div>

              <div className="flex items-center justify-between bg-gray-200 shadow-md rounded-lg px-3 py-1 mb-4">
                <span className="font-semibold">Tùy chỉnh đoạn chat</span>
                <span className="text-xs">
                  <DownOutlined />
                </span>
              </div>

              <div className="flex items-center justify-between bg-gray-200 shadow-md rounded-lg px-3 py-1 mb-4">
                <span className="font-semibold">
                  Thành viên trong đoạn chat
                </span>
                <span className="text-xs">
                  {!canReport ? <UpOutlined /> : <DownOutlined />}
                </span>
              </div>

              {filterUsers
                .filter((item) => item.id != 2)
                .map(
                  (item) =>
                    !canReport && (
                      <div
                        key={item.id}
                        className="flex items-center justify-between px-2 mb-4"
                      >
                        <div className="flex items-center gap-2">
                          <Avatar src={item.avatar} />
                          <div className="text-sm">{item.name}</div>
                        </div>
                        <div>
                          <Button
                            disabled={blockedUsers.includes(item.name)}
                            variant="solid"
                            color="red"
                            onClick={() => {
                              setSelectedUser(item.name);
                              setIsCorrect(item.answer);
                              showModal();
                            }}
                          >
                            Chặn
                          </Button>
                        </div>
                      </div>
                    )
                )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
