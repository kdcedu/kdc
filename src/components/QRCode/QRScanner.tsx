"use client";

import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";

type QRScannerProps = {
  resetQRScan: boolean;
  onScanSuccess: (decodedText: string) => void;
};

const getResponsiveQrBoxSize = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  if (width >= 1024) return { width: 300, height: 300 }; // Laptop
  if (width >= 768) return { width: 250, height: 250 }; // Tablet
  return { width: 200, height: 200 }; // Mobile
};

const QRScanner: React.FC<QRScannerProps> = ({
  onScanSuccess,
  resetQRScan,
}) => {
  const scannerContainerRef = useRef<HTMLDivElement>(null);
  const scannerInstanceRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
  let isMounted = true;

  const setupScanner = async () => {
    // Cleanup trước nếu có
    if (scannerInstanceRef.current) {
      try {
        await scannerInstanceRef.current.clear();
      } catch (e) {
        console.warn("Failed to clear scanner:", e);
      }
      scannerInstanceRef.current = null;
    }

    if (scannerContainerRef.current) {
      scannerContainerRef.current = null;
    }

    if (!isMounted) return;

    const config = {
      fps: 10,
      qrbox: getResponsiveQrBoxSize(),
      rememberLastUsedCamera: true,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    };

    const scanner = new Html5QrcodeScanner("qr-reader", config, false);

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText);
      },
      () => {
        // scan failure
        
      }
    );  
 if (!scannerContainerRef.current) {
     scannerInstanceRef.current = scanner;
    }
    
  };

  setupScanner();

  return () => {
    isMounted = false;
    

      scannerInstanceRef.current?.clear().catch(() => {});
      scannerInstanceRef.current = null;
    
    scannerContainerRef.current = null;
    
  };
}, [onScanSuccess, resetQRScan]);


  return (
    <div className="flex justify-center items-center">
      <div
        id="qr-reader"
        ref={scannerContainerRef}
        className="w-full max-w-md"
      />
    </div>
  );
};

export default QRScanner;
