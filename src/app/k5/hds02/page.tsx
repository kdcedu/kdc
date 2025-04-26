'use client'

import CatConversation from "@/components/catConversation";
import GroupChatBox from "@/components/groupChatBox";
import Header from "@/components/header";
import NotificationModal from "@/components/notificationModal";
import { apps } from "@/constant/app";
import { clickChatContent } from "@/constant/chatContent";
import { Avatar, Button, Image, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Hds02() {
  const {push} = useRouter();

  const pathname = usePathname();

  const listSuggest = ['Thôi mình không xem đâu', 'Mình thấy nội dung này không an toàn lắm'];

  const [open, setOpen] = useState(false);

  const [isBegin, setIsBegin] = useState(true);

  const [isTrue, setIsTrue] = useState(false);

  const [chatContents, setChatContents] = useState(clickChatContent);

  const [chatOrder, setChatOrder] = useState(0);

  const [messageApi, contextHolder] = message.useMessage();

  const handleClick = (answer: boolean) => {
    if(answer) {
      messageApi.open({
        type: 'success',
        content: 'Bạn đã đưa ra lựa chọn đúng',
      });
    } else {
      messageApi.open({
        type: 'error',
        content: 'Bạn đã đưa ra lựa chọn sai',
      });
    }
    
    setIsTrue(answer);

    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }

  const handleCancel = () => {
    setOpen(false);
    setChatContents(clickChatContent);
  }

  const addNewMessage = (message: string) => {
    setChatContents(chatContents.map((item, index) => index === chatOrder ? [...item, {id: 10, name: 'Me', content: message, answer: false}] : item));
  }
  
  return ( isBegin ? <div className="flex flex-col gap-5">
    <Header title="An toàn trước Click độc hại"/>

  <CatConversation>
    <span className="text-orange-400">Yêu cầu: </span>
    Bạn hãy đọc những tin nhắn có chứa đường dẫn sau đây và lựa chọn xem nên bấm vào hay bỏ qua nhé!
  </CatConversation>

  <CatConversation>
      <span className="text-orange-400">Bạn có thể lựa chọn 2 cách:</span>
      <div className="flex items-center gap-40 my-5">
        <div className="w-1/2 flex flex-col gap-5">
          <span className="font-semibold text-xl">C1: Bấm vào đường dẫn hoặc hình ảnh để truy cập vào trang web được chia sẻ</span>
        <Image alt="Guide" preview={false} width={250} src="/images/guide_k5_hds02_1.png" />
        </div>

        <div className="w-1/2 flex flex-col gap-5">
        <span className="font-semibold text-xl">C2: Trả lời lại tin nhắn rằng bạn không muốn truy cập vào trang web được chia sẻ</span>
        <Image alt="Guide" preview={false} src="/images/guide_k5_hds02_2.png" />
        </div>
      </div>

    <Button
      className="float-end"
      variant="solid"
      color="orange"
      onClick={() => setIsBegin(false)}
    >
      Bắt đầu thôi
      </Button>
    
  </CatConversation>
  </div> : <>
  {contextHolder}
  <NotificationModal answer={chatContents[chatOrder][0].answer} isEnd={chatOrder === chatContents.length - 1} open={open} onCancel={handleCancel} isTrue={isTrue} handleNext={() => chatOrder < chatContents.length - 1 ? setChatOrder(chatOrder + 1) : push(pathname + '/finish')}/>
  <div className="flex justify-between w-full">
    <div className="grid grid-cols-2 gap-10 w-1/4 py-5">
      {apps.map(app => <Image key={app.id} preview={false} src={app.icon} alt={app.name} width={70} />)}
    </div>

    <div className="flex w-2/3 h-screen py-10">
      <div className="flex flex-col gap-2 mt-5">
        {chatContents.map(item => <Avatar className={`${item[0].avatar === chatContents[chatOrder][0].avatar ? 'opacity-100' : 'opacity-50'}`} size={70} key={item[0].avatar} src={item[0].avatar ?? ''} />)}
      </div>
      <div className="flex flex-1 rounded-lg p-2">
        <GroupChatBox addNewMessage={addNewMessage} handleClick={handleClick} listSuggest={listSuggest} chatContent={chatContents[chatOrder]} name={chatContents[chatOrder][0].name} imgSrc={chatContents[chatOrder][0].avatar ?? ''} haveCheckBox={false} redirect={() => {}}/>
      </div>
    </div>
  </div>
  </>
  );
}
