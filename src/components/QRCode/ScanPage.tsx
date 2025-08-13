"use client";

import React, { useState, useRef, useEffect } from "react";
import QRScanner from "@/components/QRCode/QRScanner";

interface ScanPageProps {
  onClose: () => void;
}

const ScanPage = ({ onClose }: ScanPageProps) => {
  const [result, setResult] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  // Đóng khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
        className="bg-white w-[80vw] h-[80vw] max-w-full flex flex-col items-center justify-center rounded-lg shadow-xl p-6 relative"
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
          <QRScanner
            onScanSuccess={(text) => setResult(text)}
          />
        </div>

        {result && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded text-center">
            ✅ Đã quét: <strong>{result}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScanPage;
