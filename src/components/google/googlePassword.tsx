'use client'

import { Button, Checkbox, Input } from "antd";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface GooglePasswordProps {
    setStep?: (step: number) => void;
}

export default function GooglePassword({ setStep }: GooglePasswordProps) {
    const router = useRouter();
    const pathName = usePathname();
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const handlePassword = () => {
        if(password !== "123456") {
            setIsError(true);
        }
        else {
            if(pathName === "/k7/hds01/login-2fa") {
                setStep?.(1);
            }
            else {
                router.push("/k7/hds01/auth")
            }
        }
    }
    
    return <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <Input value={password} name="password" type={visible ? "text" : "password"} status={isError ? "error" : ""} size="large" placeholder="Nhập mật khẩu của bạn" onChange={(e) => setPassword(e.target.value)} />
                {isError && <span className="text-xs text-red-500">Sai mật khẩu</span>}
            </div>
          <Checkbox onChange={() => setVisible(!visible)}>
            <span>Hiện mật khẩu</span>
          </Checkbox>
        </div>
        <div className="flex gap-2 justify-end">
          <Button size="large" variant="link" color="blue">
            Bạn quên mật khẩu?
          </Button>
          <Button
            onClick={handlePassword}
            size="large"
            className="!rounded-full"
            variant="solid"
            color="blue"
          >
            Tiếp theo
          </Button>
        </div>
      </div>
}