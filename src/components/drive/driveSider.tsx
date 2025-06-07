import { ClockCircleOutlined, CloudOutlined, DeleteOutlined, FolderOutlined, HomeFilled, ShareAltOutlined, StarOutlined } from "@ant-design/icons";
import DriveAddButton from "./driveAddButton";
import { Progress } from "antd";
import { Folder } from "@/constant/drive/folder";
import { File } from "@/constant/drive/file";

const siderMenu = [
    {
        icon: <HomeFilled />,
        title: 'Trang chủ'
    },
    {
        icon: <FolderOutlined />,
        title: 'Drive của tôi'
    },
    {
        icon: <ShareAltOutlined />,
        title: 'Chia sẻ'
    },
    {
        icon: <ClockCircleOutlined />,
        title: 'Gần đây'
    },
    {
        icon: <StarOutlined />,
        title: 'Gắn dấu sao'
    },
    {
        icon: <DeleteOutlined />,
        title: 'Thùng rác'
    },
    {
        icon: <CloudOutlined />,
        title: 'Bộ nhớ (đã dùng 60%)'
    }
]

interface DriveSiderProps {
    currentFolders: Folder[];
    setCurrentFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
    currentFiles: File[];
    setCurrentFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function DriveSider({ currentFolders, setCurrentFolders, currentFiles, setCurrentFiles }: DriveSiderProps) {
    return (
        <div className="w-[15%] flex flex-col items-start">
            <div className="mb-5">
                <DriveAddButton currentFolders={currentFolders} setCurrentFolders={setCurrentFolders} currentFiles={currentFiles} setCurrentFiles={setCurrentFiles} />
            </div>
            {siderMenu.map((item, index) => (
                <div key={index} className="w-full py-2 px-4 rounded-lg flex items-center justify-start gap-4 hover:bg-gray-200 cursor-pointer">
                    {item.icon}
                    <span className="text-sm">{item.title}</span>
                </div>
            ))}
            <div className="w-full px-4">
                <Progress percent={60} showInfo={false} size="small" />
                <span className="text-xs">Đã sử dụng 9GB trong tổng số 15GB</span>
            </div>
        </div>
    )
}