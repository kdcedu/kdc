"use client";

import { apps } from "@/constant/app";
import { Button, Progress } from "antd";
import { useEffect, useState } from "react";

interface ScanningProgressProps {
  onFinish: () => void;
}

export default function ScanningProgress({ onFinish }: ScanningProgressProps) {
  const [progress, setProgress] = useState(0);

  const [isClear, setIsClear] = useState(false);

  const VirusComponent = () => (
    <>
      <div
        className={`${
          progress >= 3 && isClear ? "bg-green-500" : "bg-red-500"
        } text-white text-center py-2 rounded-full w-60`}
      >
        {progress >= 3 && isClear && 'Đã tiêu diệt '}Virus Code Red
      </div>
      <div
        className={`${
          progress >= 6 && isClear ? "bg-green-500" : "bg-red-500"
        } text-white text-center py-2 rounded-full w-60`}
      >
        {progress >= 6 && isClear && 'Đã tiêu diệt '}Virus Sasser
      </div>
      <div
        className={`${
          progress >= 9 && isClear ? "bg-green-500" : "bg-red-500"
        } text-white text-center py-2 rounded-full w-60`}
      >
        {progress >= 9 && isClear && 'Đã tiêu diệt '}Virus Conficker
      </div>
    </>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 10) {
        setProgress(progress + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Progress
        type="circle"
        percent={progress * 10}
        steps={{ count: 10, gap: 5 }}
        trailColor="rgba(0, 0, 0, 0.06)"
        strokeWidth={20}
        strokeColor={progress === 10 ? (isClear ? "green" : "red") : "orange"}
      />
      {progress < 10 ? 
        <div className="flex flex-col items-center gap-5">
          {isClear ? <>Đang tiêu diệt Virus ...</> : <div>Đang quét ứng dụng <span className="font-semibold text-orange-400">
            {apps[progress]?.name || "Ứng dụng khác"} ...
          </span></div>}

          {isClear && <VirusComponent />}
        </div>
       : (
        <div className="flex flex-col items-center gap-5">
          {isClear ? (
            <span className="text-green-500 text-lg font-semibold">
              Máy tính của bạn đã an toàn
            </span>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <span className="text-lg font-semibold text-red-500">
                Đã phát hiện 3 mối nguy hiểm
              </span>
            </div>
          )}

          <VirusComponent />
          

          {isClear ? (
            <Button onClick={onFinish} variant="solid" color="green">
              Hoàn thành
            </Button>
          ) : (
            <Button
              variant="solid"
              color="orange"
              onClick={() => {
                setProgress(0);
                setIsClear(true);
              }}
            >
              Giải quyết ngay
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
