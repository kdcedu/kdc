import { KeyOutlined, MobileOutlined, QrcodeOutlined } from "@ant-design/icons";
import GoogleGeneralSection, { SectionRow } from "./googleGeneralSection";

export default function GoogleStepTwoSection() {
    const stepTwo: SectionRow[] = [
        {
            icon: <KeyOutlined />,
            title: "Khóa truy cập và khóa bảo mật",
            content: "Thêm khóa bảo mật",
        },
        {
            icon: <MobileOutlined />,
            title: "Lời nhắc của Google",
            content: "1 thiết bị"
        },
        {
            icon: <QrcodeOutlined />,
            title: "Authenticator",
            content: "Thêm ứng dụng xác thực"
        },
    ]

    return (
        <GoogleGeneralSection title="Bước thứ hai" description="Hãy đảm bảo bạn có thể truy cập vào Tài khoản Google của mình bằng cách luôn cập nhật thông tin này và thêm các lựa chọn đăng nhập khác" rows={stepTwo} bottomContent={<span className="text-xs text-gray-500 pt-3">Bạn có thể thêm các tuỳ chọn xác thực khác</span>}/>
    )
}