import { Button, Image, Popover, Radio } from "antd";
import { useState } from "react";
import { PrivacyType } from "./post";
interface PrivacyModalProps {
  onOk: (value: PrivacyType) => void;
  icon: React.ReactNode;
  initialValue: PrivacyType;
}

export default function PrivacyModal({
  onOk,
  icon,
  initialValue,
}: PrivacyModalProps) {
  const [open, setOpen] = useState(false);

  const [currentValue, setCurrentValue] = useState<PrivacyType>(initialValue);

  const privacyList = [
    {
      title: "Công khai",
      description: "Bất kỳ ai ở trên hoặc ngoài Facebook",
      value: "public",
    },
    {
      title: "Bạn bè",
      description: "Bạn bè của bạn trên Facebook",
      value: "friend",
    },
    {
      title: "Bạn bè ngoại trừ...",
      description: "Bạn bè của bạn ngoài trừ người bạn này",
      value: "custom",
    },
    {
      title: "Chỉ mình tôi",
      description: "Chỉ có bạn mới xem được nội dung này",
      value: "only",
    },
  ];

  return (
    <Popover
      placement="bottom"
      title={
        <div className="font-semibold text-lg text-center border-b border-gray-200 pb-3">
          Chọn đối tượng
        </div>
      }
      content={
        <div className="w-96">
          <div className="flex flex-col mb-2">
            <span className="font-semibold">
              Ai có thể xem bài viết của bạn?
            </span>

            <span>
              Bài viết của bạn có thể hiển thị trên Bảng tin, trang cá nhân của
              bạn, trong kết quả tìm kiếm và Messenger.
            </span>
          </div>
          <Radio.Group value={currentValue}>
            <div className="flex flex-col mb-3">
              {privacyList.map((privacy) => (
                <Radio
                  key={privacy.title}
                  value={privacy.value}
                  onChange={(e) => setCurrentValue(e.target.value)}
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
        </div>
      }
      trigger="click"
      open={open}
      onOpenChange={() => setOpen(false)}
    >
      <Button variant="text" color="default" onClick={() => setOpen(true)}>
        {icon}
      </Button>
    </Popover>
  );
}
