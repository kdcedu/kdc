"use client";

import { MouseEvent as ReactMouseEvent, useEffect, useRef } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { createPortal } from "react-dom";
import clsx from "clsx";

interface Props {
  onClose: () => void;
  visible: boolean;
  onManageAccess?: (e: ReactMouseEvent<HTMLDivElement>) => void;
}

export default function CopyLinkNotification({
  visible,
  onClose,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (visible) {
      timerRef.current = setTimeout(() => {
        onClose();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visible, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    if (visible) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [visible, onClose]);

  if (!visible) return null;

  return createPortal(
    <div className="fixed bottom-4 left-10 z-50">
      <div
        ref={containerRef}
        className={clsx(
          "bg-black text-white rounded shadow-lg px-4 py-3 flex items-center gap-3 w-fit max-w-sm"
        )}
      >
        <span>Đã sao chép đường liên kết</span>
        {/* <div
          className="text-blue-400 underline hover:text-blue-300 cursor-pointer"
          onClick={onManageAccess}
        >
          Quản lý quyền truy cập
        </div> */}
        <button onClick={onClose}>
          <CloseOutlined className="text-white hover:text-gray-300" />
        </button>
      </div>
    </div>,
    document.body
  );
}
