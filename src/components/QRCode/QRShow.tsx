"use client";

import React, { useRef, useEffect } from "react";
import { Image } from "antd";

interface ScanPageProps {
  onClose: () => void;
}

export default function QRShow({ onClose }: ScanPageProps) {
//   const [result, setResult] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  // Đóng khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white w-[90vw] max-w-full flex flex-col items-center justify-center rounded-lg shadow-xl p-6 relative"
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        <h2 className="text-4xl font-bold mb-4 text-center">Quét mã QR</h2>
        <div className="w-full">
          <div
            className="flex flex-col items-center justify-center h-full w-full"
          >
            <Image src={"/icons/payment/QRCode.png"} alt={"Chuyển tiền bằng QR"} />
            <span className="mt-3 text-center text-[#0032c8] font-semibold leading-snug h-[4rem]">
              Quét mã trên để chuyển tiền cho bạn nhé
            </span>
          </div>
        </div>

        {/* {result && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded text-center">
            ✅ Đã quét: <strong>{result}</strong>
          </div>
        )} */}
      </div>
    </div>
  );
}
