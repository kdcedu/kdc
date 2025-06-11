import { FolderFilled, MoreOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface DriveFolderProps {
    name: string;
    id: string;
}

export default function DriveFolder({ name, id }: DriveFolderProps) {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/k5/hds02/' + id)} className="py-3 px-6 bg-gray-100 rounded-lg flex-1 flex justify-between cursor-pointer active:bg-gray-200">
            <div className="flex items-center gap-4">
                <FolderFilled />
                <span className="font-semibold">{name}</span>
            </div>
            <MoreOutlined />
        </div>
    )
}