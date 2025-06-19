'use client'
import { Button, Image, Input } from "antd";
import { MenuOutlined, QuestionCircleOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface GoogleHeaderProps {
 isAuth?: boolean   
}

export default function GoogleHeader({isAuth}: GoogleHeaderProps) {
    const router = useRouter();
    
    return (
        <div className="w-full flex items-center gap-10 py-3 px-5">
            <div className="flex items-center gap-2 w-[15%]">
                <Image
                    preview={false}
                    src="/apps/google.png"
                    alt="Drive icon"
                    width={70}
                />
                <span className="text-xl">Tài khoản</span>
            </div>

            <div className="flex-1">
                <Input
                    className="!rounded-full"
                    variant="filled"
                    color="default"
                    placeholder="Tìm trong Tài khoản Google"
                    size="large"
                    prefix={<SearchOutlined />}
                    suffix={<MenuOutlined />}
                />
            </div>

            <div className="flex items-center gap-5 w-[15%] justify-end">
                <QuestionCircleOutlined />
                <SettingOutlined />
                {isAuth ? <Image preview={false} src="/icons/Bin.svg" alt="Avatar" width={35}/> : <Button onClick={() => {router.push('/k7/hds01/login')}} variant="solid" color="blue">Đăng nhập</Button>}
            </div>

        </div>
    )
}