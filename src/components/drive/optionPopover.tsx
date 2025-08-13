// components/OptionPopover/OptionPopover.tsx
"use client";

import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { useState } from "react";
import DeleteOption from "./optionPopoverComponents/deleteOption";
import ShareOption from "./optionPopoverComponents/shareOption";

interface OptionPopoverProps {
  onFinish: () => void;
  targetId: string; // ID của file hoặc folder
  type: "file" | "folder";
}

export default function OptionPopover({
  onFinish,
  type,
  targetId,
}: OptionPopoverProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <Popover
      title={null}
      trigger="click"
      placement="bottom"
      open={open}
      onOpenChange={setOpen}
      className="w-8 h-8 hover:bg-gray-300 rounded-full flex items-center justify-center"
      styles={{ body: { padding: 0 } }}
      content={
        <div className="shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
          <DeleteOption
            onFinish={() => {
              onFinish();
              setOpen(false);
            }}
          />
          <ShareOption
            targetId={targetId}
            type={type}
            onClose={() => setOpen(!open)}
          />
        </div>
      }
    >
      <MoreOutlined onClick={handleClick} />
    </Popover>
  );
}
