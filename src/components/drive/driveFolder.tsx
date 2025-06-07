import { FolderFilled, MoreOutlined } from "@ant-design/icons";

interface DriveFolderProps {
    name: string;
}

export default function DriveFolder({ name }: DriveFolderProps) {
    return (
        <div className="py-3 px-6 bg-gray-100 rounded-lg flex-1 flex justify-between">
            <div className="flex items-center gap-4">
                <FolderFilled />
                <span className="font-semibold">{name}</span>
            </div>
            <MoreOutlined />
        </div>
    )
}