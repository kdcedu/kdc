"use client";

import React, { useState } from "react";
import QRScanner from "@/components/QRCode/QRScanner";

interface ScanPageProps {
  onClose: () => void;
  resetQRScan: boolean;
}

const ScanPage = ({ onClose, resetQRScan }: ScanPageProps) => {
  const [result, setResult] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-center">
      <div className="bg-white w-[90vw] max-w-full flex flex-col items-center justify-center rounded-lg shadow-xl p-6 relative">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Quét mã QR</h2>
        <div className="w-full">
          <QRScanner
            onScanSuccess={(text) => setResult(text)}
            resetQRScan={resetQRScan}
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
