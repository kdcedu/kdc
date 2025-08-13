// components/OptionPopover/DeleteOption.tsx
"use client";

import { DeleteOutlined } from "@ant-design/icons";

interface DeleteOptionProps {
  onFinish: () => void;
}

export default function DeleteOption({ onFinish }: DeleteOptionProps) {
  return (
    <div
      className="flex gap-2 p-3 items-center active:opacity-80 hover:bg-gray-200 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onFinish();
      }}
    >
      <span className="w-[24px] h-[24px] pt-[1.5px]">
        <DeleteOutlined className="text-[18px]" />
      </span>
      <span className="text-[16px]">Chuyển vào thùng rác</span>
    </div>
  );
}
