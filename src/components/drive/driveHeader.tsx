import { MenuOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Image, Input } from "antd";

interface DriveHeaderProps {
    isAdult?: boolean;
}

export default function DriveHeader({isAdult}: DriveHeaderProps) {
    return (
        <div className="w-full flex items-center justify-between gap-10 py-2">
            <div className="flex items-center gap-2 w-[15%]">
                <Image
                    preview={false}
                    src="/apps/drive.png"
                    alt="Drive icon"
                    width={40}
                />
                <span className="text-lg font-semibold">KDC Drive</span>
            </div>

            <div className="flex-1">
                <Input
                    className="!rounded-full"
                    variant="filled"
                    color="default"
                    placeholder="Tìm trong Drive"
                    size="large"
                    prefix={<SearchOutlined />}
                    suffix={<MenuOutlined />}
                />
            </div>

            <div className="flex items-center gap-5 w-[10%] justify-end">
                <SettingOutlined />
                <Image preview={false} src={isAdult ? "/avatars/Avatar_MinhKhoi.jpg" : "/icons/Bin.svg"} alt="Avatar" width={35}/>
            </div>

        </div>
    )
}