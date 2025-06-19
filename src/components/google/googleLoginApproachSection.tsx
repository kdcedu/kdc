"use client"

import { useRouter } from "next/navigation";
import GoogleGeneralSection, { SectionRow } from "./googleGeneralSection";
import { CheckCircleFilled, EllipsisOutlined, SafetyOutlined, UnlockOutlined } from "@ant-design/icons";
import { useGoogle } from "@/context/googleContext";

export default function GoogleLoginApproachSection() {
    const router = useRouter();

    const {isAuth} = useGoogle();

    const loginApproach: SectionRow[] = [
        {
            icon: <SafetyOutlined />,
            title: "Xác minh 2 bước",
            content: isAuth ? <span className="flex gap-2">
                <span className="text-green-500"><CheckCircleFilled /></span>
                <span>Tính năng xác minh 2 bước đã bật</span>
            </span> : <span className="text-red-500">Tính năng xác minh 2 bước đã tắt</span>,
            onClick: () => {router.push("/k7/hds01/2fa")}
        },
        {
            icon: <UnlockOutlined />,
            title: "Khóa truy cập và khóa bảo mật",
            content: "Bắt đầu dùng khóa truy cập"
        },
        {
            icon: <EllipsisOutlined />,
            title: "Mật khẩu",
            content: "Thay đổi gần đây nhất: 06 thg 09, 2024"
        },
    ]

    return <GoogleGeneralSection title="Cách bạn đăng nhập vào Google" description="Bạn nên cập nhật thông tin này để đảm bảo lúc nào cũng truy cập được vào Tài khoản Google của mình" rows={loginApproach} bottomContent={<span className="text-xs text-gray-500">Bạn có thể thêm các tuỳ chọn đăng nhập khác</span>}/>
}