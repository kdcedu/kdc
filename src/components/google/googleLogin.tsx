import { Button, Input } from "antd";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export default function GoogleLogin() {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState(false);
    
    const handleEmail = useCallback(() => {
        if(email !== "hs@kdc.edu.vn") {
            setIsError(true);
        }
        else {
            router.push("/k7/hds01/password")
        }
    }, [email, router]);
    
    return (
    <div className="w-1/2 flex flex-col gap-20">
    <div className="w-full flex flex-col gap-2 items-start">
        <div className="w-full flex flex-col gap-1">
            <Input value={email} name="email" size="large" placeholder="Email hoặc số điện thoại" onChange={(e) => setEmail(e.target.value)} />
            {isError && <span className="text-sm text-red-500">Email không tồn tại</span>}
        </div>
      <Button className="!p-0" variant="link" color="blue">
        Quên email?
      </Button>
    </div>
    <div className="flex gap-2 justify-end">
      <Button size="large" variant="link" color="blue">
        Tạo tài khoản
      </Button>
      <Button
        onClick={handleEmail}
        size="large"
        className="!rounded-full"
        variant="solid"
        color="blue"
      >
        Tiếp theo
      </Button>
    </div>
  </div>)
}
