import { File } from "@/constant/drive/file";
import { renderFileIcon, renderFileIconColor } from "./driveFile";

interface DriveFileDesktopProps {
    file: File;
    onClick?: () => void;
    selected?: boolean;
}

export default function DriveFileDesktop({ file, onClick, selected }: DriveFileDesktopProps) {
    return (
        <div className={`${selected ? 'bg-gray-200' : ''} w-full flex items-center justify-between px-2 py-1 hover:bg-gray-200 cursor-pointer`} onClick={onClick}>
            <div className="flex items-center gap-2">
                <span className={renderFileIconColor(file?.type)}>{renderFileIcon(file?.type)}</span>
                <span>{file?.name}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{file?.size}</span>
            </div>
        </div>
    )
}