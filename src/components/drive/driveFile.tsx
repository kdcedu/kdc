import { File } from "@/constant/drive/file";
import { FileImageFilled, MoreOutlined } from "@ant-design/icons";
import { Image } from "antd";

interface DriveFileProps {
    file: File;
}

export default function DriveFile({ file }: DriveFileProps) {
    return (
        <div className="bg-gray-100 rounded-lg p-3 flex flex-col gap-2 cursor-pointer active:bg-gray-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FileImageFilled />
                    <span className="font-semibold">{file?.name}</span>
                </div>
                <MoreOutlined />
            </div>
            
            <div className="w-full">
                <Image src={file?.image} alt="anh_diem" preview={false}/>
            </div>
        </div>
    )
}