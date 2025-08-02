// components/OptionPopover/ShareSubMenu.tsx
"use client";

import { LinkOutlined } from "@ant-design/icons";

interface ShareSubMenuProps {
  onOpenModal: () => void;
}

export default function ShareSubMenu({ onOpenModal }: ShareSubMenuProps) {
  return (
    <div className="w-60 bg-white rounded-md shadow-[0_2px_3px_rgba(0,0,0,0.25)] z-50 transition-opacity duration-200">
      <div
        className="flex gap-2 p-3 items-center active:opacity-80 hover:bg-gray-200 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal();
        }}
      >
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path>
          </svg>
        </span>
        <span className="text-[16px]">Chia sẻ</span>
      </div>
      <div className="flex gap-2 p-3 items-center active:opacity-80 hover:bg-gray-200 cursor-pointer">
        <span className="w-[24px] h-[24px] flex items-center">
          <LinkOutlined className="text-[18px] rotate-45" />
        </span>
        <span className="text-[16px] pb-[1px]">Sao chép đường liên kết</span>
      </div>
    </div>
  );
}
