// components/OptionPopover/ShareOption.tsx
"use client";

import { Popover } from "antd";
import { useState } from "react";
import ShareSubMenu from "./shareSubMenu";
import ShareDriveModal from "@/components/modal/driveShareModal";

interface ShareOptionProps {
  targetId: string; // ID của file hoặc folder
  type: "file" | "folder";
  onClose: () => void;
}

export default function ShareOption({
  targetId,
  type,
  onClose,
}: ShareOptionProps) {
  const [showSharedMenu, setShowSharedMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClickShared = (e: React.MouseEvent) => {
    e.stopPropagation();
  
    setShowSharedMenu(!showSharedMenu);
  };

  const handleOpenShareModal = ()=>{
    setOpenModal(true)
    onClose()
  }
  return (
    <>
      <Popover
        title={null}
        trigger="hover"
        placement="right"
        open={showSharedMenu}
        onOpenChange={setShowSharedMenu}
        className="hover:bg-gray-300"
        styles={{ body: { padding: 0 } }}
        content={<ShareSubMenu onOpenModal={handleOpenShareModal} />}
      >
        <div
          onClick={handleClickShared}
          className="flex gap-2 p-3 items-center active:opacity-80 hover:bg-gray-200 cursor-pointer"
        >
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path>
            </svg>
          </span>
          <span className="text-[16px]">Chia sẻ</span>
        </div>
      </Popover>

      <ShareDriveModal
        targetId={targetId}
        type={type}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
