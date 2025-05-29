import { Button, Image, Popover, Radio } from "antd";
import { useState } from "react";
import { PrivacyType } from "../post";
import { friendList } from "@/constant/profile";
import { MinusCircleFilled, MinusCircleOutlined } from "@ant-design/icons";
import { defaultPrivacyList } from "@/constant/post";
interface PrivacyModalProps {
  onOk: (value: PrivacyType, blockList?: string[]) => void;
  icon: React.ReactNode;
  initialValue: PrivacyType;
  blockList: string[];
}

export default function PrivacyModal({
  onOk,
  icon,
  initialValue,
  blockList,
}: PrivacyModalProps) {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState(initialValue === 'custom' ? 1 : 0);

  const [currentBlockList, setCurrentBlockList] = useState(blockList)

  const [currentValue, setCurrentValue] = useState<PrivacyType>(initialValue);

  const contentList = [
    <div key={1} className="w-96">
      <div className="flex flex-col mb-2">
        <span className="font-semibold">Ai có thể xem bài viết của bạn?</span>

        <span>
          Bài viết của bạn có thể hiển thị trên Bảng tin, trang cá nhân của bạn,
          trong kết quả tìm kiếm và Messenger.
        </span>
      </div>
      <Radio.Group value={currentValue}>
        <div className="flex flex-col mb-3">
          {defaultPrivacyList.map((privacy) => (
            <Radio
              key={privacy.title}
              value={privacy.value}
              onChange={(e) => {
                setCurrentValue(e.target.value);
                if (e.target.value === "custom") setStep(1);
              }}
              className="hover:bg-gray-100 cursor-pointer p-3 !flex !gap-2 !w-full !px-2 !py-3 rounded-xl"
            >
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <div className="w-fit px-3 py-2 bg-gray-300 rounded-full">
                    <Image
                      alt="Privacy"
                      preview={false}
                      src={`/icons/${privacy.value}.png`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">{privacy.title}</span>
                    <span>{privacy.description}</span>
                  </div>
                </div>
              </div>
            </Radio>
          ))}
        </div>
      </Radio.Group>

      <div className="flex gap-5 justify-end border-t border-gray-200 pt-3">
        <Button
          variant="text"
          color="blue"
          onClick={() => {
            setOpen(false);
            setCurrentValue(initialValue);
          }}
        >
          Hủy
        </Button>
        <Button
          type="primary"
          onClick={() => {
            onOk(currentValue);
            setOpen(false);
          }}
        >
          Xong
        </Button>
      </div>
    </div>,
    <div key={2} className="w-96">
      <span className="block mb-2">
        Những người bạn sẽ không nhìn thấy bài viết này:
      </span>
      {friendList.map((friend) => (
        <div
          key={friend.name}
          className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            if (currentBlockList.includes(friend.name))
              setCurrentBlockList(currentBlockList.filter((f) => friend.name !== f));
            else {
              setCurrentBlockList([...currentBlockList, friend.name]);
            }
          }}
        >
          <div className="flex items-center gap-5">
            <div className="w-10">
              <Image alt="avatar" src={friend.avatar} />
            </div>
            <span className="font-semibold">{friend.name}</span>
          </div>
          <span
            className={`text-xl ${
              currentBlockList.includes(friend.name) && "text-red-500"
            }`}
          >
            {currentBlockList.includes(friend.name) ? (
              <MinusCircleFilled />
            ) : (
              <MinusCircleOutlined />
            )}
          </span>
        </div>
      ))}

<div className="flex gap-5 justify-end border-t border-gray-200 pt-3">
        <Button
          variant="text"
          color="blue"
          onClick={() => {
            setStep(0);
            setCurrentBlockList(blockList)
          }}
        >
          Hủy
        </Button>
        <Button
          type="primary"
          onClick={() => {
            onOk(currentValue, currentBlockList);
            setCurrentBlockList([])
            setOpen(false);
          }}
        >
          Xong
        </Button>
      </div>
    </div>,
  ];

  return (
    <Popover
      placement="bottom"
      title={
        <div className="font-semibold text-lg text-center border-b border-gray-200 pb-3">
          Chọn đối tượng
        </div>
      }
      content={contentList[step]}
      trigger="click"
      open={open}
      onOpenChange={() => {
        setOpen(open);
        setStep(0);
        setCurrentValue(initialValue);
      }}
    >
      <Button variant="text" color="default" onClick={() => setOpen(true)}>
        {icon}
      </Button>
    </Popover>
  );
}
