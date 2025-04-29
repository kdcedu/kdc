"use client";

import { apps } from "@/constant/app";
import { Progress } from "antd";
import { useEffect, useState } from "react";

export default function ScanningProgress() {
  const [progress, setProgress] = useState(0);

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
        percent={progress*10}
        steps={{ count: 10, gap: 5 }}
        trailColor="rgba(0, 0, 0, 0.06)"
        strokeWidth={20}
      />
      {progress < 10 ? <div>Đang quét <span className="font-semibold text-orange-400">{apps[progress] ? apps[progress].name : 'Ứng dụng khác'} ...</span></div> : <div className="">
          <span className="text-lg font-semibold text-red-500">Đã phát hiện 3 mối nguy hiểm</span>
        </div>}
    </div>
  );
}
