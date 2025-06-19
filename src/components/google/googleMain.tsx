'use client'
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { Image } from "antd";

export default function GoogleMain() {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center justify-center gap-10 p-5">
            <div className="flex flex-col items-center gap-2">
                <Image preview={false} src="/images/2fa.png" alt="Drive icon" width={300}/>
                <span className="text-3xl font-semibold">Bảo mật</span>
            </div>
            <span className="block text-center px-20 text-gray-500">Để xem lại và tùy chỉnh các tùy chọn cài đặt bảo mật của bạn cũng như nhận các mục đề xuất để giúp giữ an toàn cho tài khoản của bạn, hãy đăng nhập vào tài khoản của bạn</span>
            <Button onClick={() => {router.push('/k7/hds01/login')}} variant="solid" color="blue">Đăng nhập</Button>
        </div>
    )
}