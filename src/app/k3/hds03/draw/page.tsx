'use client'

import CheckItem, { Status } from "@/components/checkItem";
import { hasAtLeastTwoTurns } from "@/utils/checkPatternLock";
import { Button, message } from "antd";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ReactCanvasPatternLock } from "react-canvas-pattern-lock";

export default function Draw() {
  const router = useRouter();

  const pathname = usePathname();

  const [messageApi, contextHolder] = message.useMessage();

  const [next, setNext] = useState(false);
  const [lengthError, setLengthError] = useState<Status>("normal");
  const [breakError, setBreakError] = useState<Status>("normal");

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Mật khẩu hợp lệ",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Mật khẩu không hợp lệ",
    });
  };

  const handleChange = (value: number[]) => {
    if (hasAtLeastTwoTurns(value)) {
      setBreakError("success");
    } else {
      setBreakError("error");
    }

    if (value.length >= 4) {
      setLengthError("success");
    } else {
      setLengthError("error");
    }
  }

  const handleCheckNext = () => {
    if (lengthError === "success" && breakError === "success") {
      success();
      setNext(true);
    } else {
      error();
    }
  }

  return (
    <>
    {contextHolder}
      <div className="text-orange-500 text-xl font-semibold text-center mb-5 w-full md:w-2/3 mx-auto">Bạn hãy thực hành tạo mật khẩu hình vẽ nhé</div>
      <div className="flex justify-center items-center mb-5">
      <ReactCanvasPatternLock
        onComplete={handleChange}
      />
      </div>
      

      <div className="w-full bg-gray-100 p-5 rounded-lg mb-5">
        <div className="mb-5 text-lg font-semibold">
          Những điều kiện mật khẩu cần đảm bảo:
        </div>
        <CheckItem title="Sử dụng ít nhất 4 điểm" status={lengthError} />
        <CheckItem title="Có ít nhất 2 lần rẽ" status={breakError} />
      </div>

      <Button variant="solid" color="orange" className="w-full mt-5" onClick={handleCheckNext}>Kiểm tra mật khẩu</Button>

      {next && <Button variant="solid" color="green" className="w-full mt-5" onClick={() => router.push(pathname.replace("/draw", "/finish"))}>Hoàn thành</Button>}
    </>
  );
}
