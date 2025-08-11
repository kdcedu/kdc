"use client";

import React, { useEffect, useRef, useState } from "react";
import type { Html5Qrcode, CameraDevice } from "html5-qrcode";
import { getResponsiveQrBoxSize } from "@/utils/checkMobile";
import { Select, Button, Upload, message } from "antd";
import { UploadOutlined, CameraOutlined } from "@ant-design/icons";

type QRScannerProps = {
  onScanSuccess: (decodedText: string) => void;
};

type CameraOption = {
  id: string;
  label: string;
};

const QRScanner: React.FC<QRScannerProps> = ({ onScanSuccess }) => {
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);
  const [cameras, setCameras] = useState<CameraOption[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string>("");
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    import("html5-qrcode").then(({ Html5Qrcode }) => {
      if (!isMounted) return;

      Html5Qrcode.getCameras()
        .then((devices: CameraDevice[]) => {
          if (devices && devices.length) {
            const cams = devices.map((d) => ({
              id: d.id,
              label: d.label || `Camera ${d.id}`,
            }));

            setCameras(cams);

            // Ưu tiên camera sau trên mobile
            let defaultCam = cams[0].id;
            const backCam = cams.find((c) =>
              c.label.toLowerCase().includes("back")
            );
            if (backCam) defaultCam = backCam.id;

            setSelectedCamera(defaultCam);

            // Tự động start luôn (đảm bảo user vừa mở popup -> quét ngay)
            startScanner(defaultCam);
          }
        })
        .catch((err: unknown) => {
          console.error("Camera error:", err);
        });
    });

    return () => {
      isMounted = false;
      stopScanner();
    };
  }, []);

  const startScanner = async (cameraId: string) => {
    const { Html5Qrcode } = await import("html5-qrcode");

    stopScanner();

    const qrRegionId = "qr-reader";
    const qrConfig = {
      fps: 10,
      qrbox: getResponsiveQrBoxSize(),
    };

    const qrInstance = new Html5Qrcode(qrRegionId);
    html5QrCodeRef.current = qrInstance;
    setIsStarting(true);

    qrInstance
      .start(
        { deviceId: { exact: cameraId } },
        qrConfig,
        (decodedText: string) => {
          onScanSuccess(decodedText);
          stopScanner();
        },
        () => {}
      )
      .catch((err: unknown) => {
        console.error("QR start failed:", err);
        message.error("Không thể mở camera.");
      })
      .finally(() => setIsStarting(false));
  };

  const stopScanner = () => {
    if (html5QrCodeRef.current) {
      html5QrCodeRef.current
        .stop()
        .then(() => {
          try {
            html5QrCodeRef.current?.clear();
          } catch {
            // bỏ qua lỗi clear
          }
        })
        .catch(() => {});
    }
  };

  const handleFileUpload = async (file: File) => {
    const { Html5Qrcode } = await import("html5-qrcode");

    const qrInstance = new Html5Qrcode("qr-reader-file");
    qrInstance
      .scanFile(file, true)
      .then((decodedText: string) => {
        onScanSuccess(decodedText);
      })
      .catch(() => {
        message.error("Không thể đọc QR từ ảnh này.");
      })
      .finally(() => {
        try {
          qrInstance.clear();
        } catch {
          // bỏ qua lỗi clear
        }
      });

    return false; // ngăn upload mặc định của antd
  };

  return (
    <div className="flex items-center justify-center w-full">
      {/* Chọn camera */}
      <div className="w-2/3 flex flex-col items-center gap-3">
        {cameras.length > 0 && (
          <div className="flex gap-2 items-center w-full">
            <Select
              value={selectedCamera}
              onChange={(value) => setSelectedCamera(value)}
              style={{ flex: 1 }}
              className="!border-none  !border-white !h-[50px] !text-xl "
              getPopupContainer={(triggerNode) =>
                triggerNode.parentElement as HTMLElement
              } // ⬅️ fix ở đây
            >
              {cameras.map((cam) => (
                <Select.Option key={cam.id} value={cam.id}>
                  {cam.label}
                </Select.Option>
              ))}
            </Select>

            <Button
              type="primary"
              icon={<CameraOutlined />}
              loading={isStarting}
              className="!h-[50px] !text-xl"
              onClick={() => {
                if (selectedCamera) {
                  startScanner(selectedCamera); // ✅ restart khi bấm nút
                }
              }}
            >
              Bắt đầu quét
            </Button>
          </div>
        )}

        {/* Khu vực quét */}
        <div
          id="qr-reader"
          className="w-full rounded overflow-hidden"
        ></div>

        {/* Upload ảnh */}
        <Upload
          beforeUpload={(file) => handleFileUpload(file)}
          showUploadList={false}
          accept="image/*"
        >
          <Button className="!h-[50px] !text-xl" icon={<UploadOutlined />}>Chọn ảnh để quét</Button>
        </Upload>

        {/* Khu vực tạm cho file upload */}
        <div id="qr-reader-file" className="hidden" />
      </div>
    </div>
  );
};

export default QRScanner;
