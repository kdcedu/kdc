import { Input } from "antd";
import { redirect } from "next/navigation";
import { useState } from "react";

interface PINProps {
  password: string;
  to: string;
}

export default function CustomPIN( {password, to} : PINProps) {
  const [isError, setIsError] = useState(false);

  const handleChange = (value: string) => {
    if(value === password) redirect(`/${to}`);
    else setIsError(true);
  }

  return <>
    <div className="text-xl font-semibold text-center text-orange-500 my-5">Bạn hãy vui lòng nhập mã PIN để tham gia hoạt động</div>
          <div className="flex justify-center">
            <Input.OTP inputMode="numeric" type="password" length={4} status={isError ? "error" : ""} onChange={handleChange}/>
          </div>

          {isError && <div className="text-red-500 text-center mt-5">
              Bạn đã nhập sai mật khẩu, hãy nhập lại
            </div>}
  </>
}