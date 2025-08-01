"use client";

import { DeleteOutlined, LinkOutlined, MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import clsx from "clsx";
import { useState } from "react";

interface OptionPopoverProps {
  onFinish: () => void;
}

export default function OptionPopover({ onFinish }: OptionPopoverProps) {
  const [open, setOpen] = useState(false);
  const [showSharedMenu, setShowSharedMenu] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };
  const handleClickShared = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSharedMenu(!showSharedMenu);
  };
  // const [showSubMenu, setShowSubMenu] = useState(false); // Render
  // const [visible, setVisible] = useState(false); // Opacity
  // const timerRef = useRef<NodeJS.Timeout | null>(null);

  // const handleMouseEnter = () => {
  //   timerRef.current = setTimeout(() => {
  //     setShowSubMenu(true);
  //     // Nhỏ delay để chạy opacity sau render
  //     setTimeout(() => setVisible(true), 10);
  //   }, 300); // Delay trước khi hiển thị
  // };

  // const handleMouseLeave = () => {
  //   if (timerRef.current) clearTimeout(timerRef.current);
  //   setVisible(false);
  //   // Đợi animation tắt xong mới unmount
  //   setTimeout(() => setShowSubMenu(false), 200);
  // };

  return (
    <Popover
      title={null}
      trigger="click"
      placement="bottom"
      styles={{
        body: {
          padding: 0,
        },
      }}
      open={open}
      onOpenChange={setOpen}
      className="w-8 h-8 hover:bg-gray-300 rounded-full flex items-center justify-center"
      content={
        <div className={`shadow-[0_2px_3px_rgba(0,0,0,0.25)]`}>
          <div
            className="flex gap-2 p-3 items-center  active:opacity-80 hover:bg-gray-200 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onFinish();
              setOpen(false);
            }}
          >
            <span className="w-[24px] h-[24px]  pt-[1.5px]">
              <DeleteOutlined className="text-[18px]" />
            </span>
            <span className="text-[16px] ">Chuyển vào thùng rác</span>
          </div>

          {/* Menu con xuất hiện khi hover */}
          <Popover
            title={null}
            trigger="hover"
            placement="right"
            styles={{
              body: {
                padding: 0,
              },
            }}
            open={showSharedMenu}
            onOpenChange={setShowSharedMenu}
            className="hover:bg-gray-300"
            content={
              <div
                className={clsx(
                  "w-60 bg-white rounded-md shadow-[0_2px_3px_rgba(0,0,0,0.25)] z-50 transition-opacity duration-200"
                )}
              >
                <div className="relative group flex gap-2 p-3 items-center active:opacity-80 hover:bg-gray-200 cursor-pointer">
                  <span>
                    {/* Icon chia sẻ */}
                    <svg
                      className=" "
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      focusable="false"
                      fill="currentColor"
                    >
                      <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path>
                    </svg>
                  </span>
                  <span className="text-[16px]">Chia sẻ</span>
                </div>
                <div className="relative group gap-2 p-3 flex items-center active:opacity-80 hover:bg-gray-200 cursor-pointer">
                  <span className=" flex items-center  w-[24px] h-[24px]">
                    <LinkOutlined className="text-[18px] rotate-45 " />
                  </span>
                  <span className="text-[16px] pb-[1px]">Sao chép đường liên kết</span>
                </div>
                {/* <span className="inline-flex items-center gap-2 p-3 hover:bg-gray-200 cursor-pointer">
                  <span className=" flex items-center  w-[24px] h-[24px]">
                    <LinkOutlined className="text-[18px] rotate-45  " />
                  </span>
                  <span className="text-[16px]">
                    Sao chép đường liên kết
                  </span>
                </span> */}
              </div>
            }
          >
            <div
              onClick={handleClickShared}
              className="relative group flex gap-2 p-3 items-center active:opacity-80 hover:bg-gray-200 cursor-pointer"
            >
              <span>
                {/* Icon chia sẻ */}
                <svg
                  className=" "
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  focusable="false"
                  fill="currentColor"
                >
                  <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path>
                </svg>
              </span>
              <span className="text-[16px]">Chia sẻ</span>
            </div>
          </Popover>
        </div>
      }
    >
      <MoreOutlined onClick={handleClick} />
    </Popover>
  );
}
