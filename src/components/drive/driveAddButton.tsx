'use client'

import { FileAddOutlined, FolderAddOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useState } from "react";
import { Folder } from "@/constant/drive/folder";
import { File } from "@/constant/drive/file";
import DriveAddFolderModal from "./driveAddFolderModal";

interface DriveAddButtonProps {
    currentFolders: Folder[];
    setCurrentFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
    currentFiles: File[];
    setCurrentFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function DriveAddButton({ currentFolders, setCurrentFolders, currentFiles, setCurrentFiles }: DriveAddButtonProps) {
    const [open, setOpen] = useState(false);
    const [openModalFolder, setOpenModalFolder] = useState(false);

    const handleAddFolder = (name: string) => {
        setCurrentFolders([...currentFolders, {
            id: currentFolders.length + 1,
            name: name
        }])
        setOpen(false)
        setOpenModalFolder(false)
    }

    const handleAddFile = () => {
        setCurrentFiles([...currentFiles, {
            id: currentFiles.length + 1,
            name: 'Tệp mới',
            type: 'image',
            image: '/images/grade.jpg'
        }])
        setOpen(false)
    }

    return (
        <>
            <DriveAddFolderModal open={openModalFolder} onClose={() => setOpenModalFolder(false)} onFinish={handleAddFolder} />
            <Popover
                title={null}
                trigger="click"
                open={open}
                onOpenChange={setOpen}
                placement="right"
                content={
                    <div className="flex flex-col gap-2">
                        <Button className="flex items-center !justify-start gap-2 !bg-white hover:!bg-gray-200" icon={<FolderAddOutlined />} variant="filled" color="default" onClick={() => setOpenModalFolder(true)}>Thư mục mới</Button>
                        <Button className="flex items-center !justify-start gap-2 !bg-white hover:!bg-gray-200" icon={<FileAddOutlined />} variant="filled" color="default" onClick={handleAddFile}>Tệp mới</Button>
                        <Button className="flex items-center !justify-start gap-2 !bg-white hover:!bg-gray-200" icon={<UploadOutlined />} variant="filled" color="default">Tải thư mục lên</Button>
                    </div>
                }
            >
                <Button className="!bg-white !shadow-md hover:!shadow-xl !h-16 w-24 !rounded-xl !font-semibold" size="large" variant="filled" color="default" icon={<PlusOutlined />}>
                    Mới
                </Button>
            </Popover>
        </>
    )
}