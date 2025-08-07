"use client";

import { useState, useRef } from "react";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { copyLinkExample } from "@/constant/drive/sharedModalMockData";

interface ShareActionButtonsProps {
  showHandleShared: boolean;
  onCancelShared: () => void;
  onConfirm: () => void;
}

export default function ShareActionButtons({
  showHandleShared,
  onCancelShared,
  onConfirm,
}: ShareActionButtonsProps) {
  const [showCopied, setShowCopied] = useState(false);
  const copyBtnRef = useRef<HTMLDivElement | null>(null);

  const handleCopyLink = async () => {
    navigator.clipboard.writeText(copyLinkExample);
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center">
        <div className="relative" ref={copyBtnRef}>
          <Button
            icon={
              <LinkOutlined
                className={`${
                  showHandleShared ? "!text-[22px]" : "!text-[16px]"
                } rotate-45 pt-1 !font-semibold`}
              />
            }
            onClick={handleCopyLink}
            className={`!rounded-full !h-10 ${
              showHandleShared
                ? "!border-0 !shadow-0 !ring-0"
                : "!border-1 !border-black hover:!bg-blue-100 !text-blue-500"
            } !w-fit !px-5 !font-semibold`}
          >
            {!showHandleShared && "Sao chép đường liên kết"}
          </Button>

          {showCopied && (
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-black bg-opacity-80 text-white text-sm rounded px-3 py-1 whitespace-nowrap z-50">
              Đã sao chép!
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {showHandleShared && (
            <Button
              onClick={onCancelShared}
              type="primary"
              className="!border-0 !shadow-0 !ring-0 !rounded-full !px-5 !h-10 !font-semibold !bg-white !text-blue-600 hover:!bg-blue-100"
            >
              Hủy
            </Button>
          )}
          <Button
            type="primary"
            className="!rounded-full !px-5 !h-10 !font-semibold !bg-blue-600 hover:!bg-blue-500"
            onClick={onConfirm}
          >
            Xong
          </Button>
        </div>
      </div>
    </div>
  );
}
