import { Button } from "antd";
import GoogleGeneralSection, { SectionRow } from "./googleGeneralSection";

const latestActivities: SectionRow[] = [
    {
        title: "Tính năng đăng nhập bằng quy trình Xác minh 2 bước đã được bật",
        content: "17 thg 6 · Việt Nam",
    },
    {
        title: "Tính năng đăng nhập bằng quy trình Xác minh 2 bước đã được tắt",
        content: "13 thg 6 · Việt Nam",
    },
    {
        title: "Tính năng đăng nhập bằng quy trình Xác minh 2 bước đã được bật",
        content: "10 thg 6 · Việt Nam",
    },
]

export default function GoogleLatestActivity() {
    return <GoogleGeneralSection title="Hoạt động bảo mật gần đây" rows={latestActivities} bottomContent={<Button variant="link" color="blue" className="!px-0">Xem lại hoạt động bảo mật (5)</Button>}/>
}