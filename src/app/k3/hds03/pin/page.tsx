'use client'

import CheckItem, { Status } from "@/components/checkItem";
import { Button, Input, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Pin() {
  const [continuousError, setContinuousError] = useState<Status>("normal");
  const [repeatError, setRepeatError] = useState<Status>("normal");

  const [next, setNext] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  const [messageApi, contextHolder] = message.useMessage();

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

  const handleChange = (value: string) => {
    if (value.split('').every(ch => ch === value[0])) {
      setContinuousError("error");
    } else {
      setContinuousError("success");
    }
    
    if ('0123456789'.includes(value) || '9876543210'.includes(value)) {
      setRepeatError("error");
    } else {
      setRepeatError("success");
    }
  }

  const handleCheckNext = () => {
    if (continuousError === "success" && repeatError === "success") {
      success();
      setNext(true);
    } else {
      error();
    }
  }

  return (
    <>
    {contextHolder}
      <div className="text-orange-500 text-xl font-semibold text-center mb-5 w-2/3 mx-auto">Bạn hãy thực hành tạo mã PIN nhé</div>

      <div className="flex justify-center items-center mb-5">
        <div className="w-1/4 font-semibold text-lg">Mã PIN:</div>
        <Input.OTP length={4} onChange={handleChange} inputMode="numeric"/>
      </div>

      <div className="bg-gray-100 p-5 rounded-lg mb-5">
        <div className="mb-5 text-lg font-semibold">
          Những điều kiện mật khẩu cần đảm bảo:
        </div>
        <CheckItem title="Không chứa chữ số liên tiếp" status={continuousError} />
        <CheckItem title="Không chứa dãy 4 chữ số lặp lại" status={repeatError} />
      </div>

      <div className="bg-sky-100 p-5 rounded-lg">
        <div className="mb-5 text-lg font-semibold">
          Gợi ý cho bạn:
        </div>

        <div className="mb-3">
          <span className="font-semibold">Mã PIN yếu:</span> 0000, 1234, 5678
        </div>

        <div className="mb-3">
          <span className="font-semibold">Mã PIN mạnh:</span> 2025, 1910, 8386
        </div>
      </div>

      <Button variant="solid" color="orange" className="w-full mt-5" onClick={handleCheckNext}>Kiểm tra mật khẩu</Button>

      {next && <Button variant="solid" color="green" className="w-full mt-5" onClick={() => router.push(pathname.replace("/pin", "/draw"))}>Bài tiếp theo</Button>}
    </>
  );
}
