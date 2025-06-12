'use client'

import { FolderAddOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useState } from "react";
import DriveAddFolderModal from "./driveAddFolderModal";
import { useDrive } from "@/context/driveContext";
import ChooseFileModal from "./chooseFileModal";
import { useParams } from "next/navigation";


export default function DriveAddButton() {
    const [open, setOpen] = useState(false);
    const [openModalFolder, setOpenModalFolder] = useState(false);

    const [openChooseFile, setOpenChooseFile] = useState(false);

    

    const {id} = useParams();


    const {addFolder} = useDrive();

    const handleCreateFolder = (name: string) => {
        addFolder({ name, id: Date.now(), parent: id ? String(id) : 'root' })
        setOpenModalFolder(false)
        setOpen(false)
    }

    const handleAddFile = () => {
        setOpenChooseFile(true)
        setOpen(false)
        setOpenModalFolder(false)
    }

    return (
        <>
            <ChooseFileModal open={openChooseFile} onClose={() => setOpenChooseFile(false)} />
            <DriveAddFolderModal open={openModalFolder} onClose={() => setOpenModalFolder(false)} onFinish={handleCreateFolder} />
            <Popover
                title={null}
                trigger="click"
                open={open}
                onOpenChange={setOpen}
                placement="right"
                content={
                    <div className="flex flex-col gap-2">
                        <Button className="flex items-center !justify-start gap-2 !bg-white hover:!bg-gray-200" icon={<FolderAddOutlined />} variant="filled" color="default" onClick={() => {setOpenModalFolder(true); setOpen(false)}}>Thư mục mới</Button>
                        <Button className="flex items-center !justify-start gap-2 !bg-white hover:!bg-gray-200" icon={<UploadOutlined />} variant="filled" color="default" onClick={handleAddFile}>Tải tệp lên</Button>
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