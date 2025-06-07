"use client"

import DriveFile from "@/components/drive/driveFile";
import DriveFolder from "@/components/drive/driveFolder";
import DriveHeader from "@/components/drive/driveHeader";
import DriveSider from "@/components/drive/driveSider";
import { files } from "@/constant/drive/file";
import { folders } from "@/constant/drive/folder";
import { CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Hds02() {
    const [currentFiles, setCurrentFiles] = useState(files);
    const [currentFolders, setCurrentFolders] = useState(folders);

    return (
        <div className="bg-gray-50 w-full min-h-screen flex flex-col gap-3 px-5">
            <DriveHeader />
            <div className="flex gap-5 h-full">
                <DriveSider currentFolders={currentFolders} setCurrentFolders={setCurrentFolders} currentFiles={currentFiles} setCurrentFiles={setCurrentFiles} />
                <div className="flex-1 flex flex-col gap-5 bg-white rounded-3xl p-5">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">
                            Drive của tôi
                        </span>
                        <span className=""><CaretDownOutlined /></span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="font-semibold">Thư mục</span>
                        <div className="grid grid-cols-4 gap-5">
                            {currentFolders.map((folder) => (
                                <DriveFolder key={folder.id} name={folder.name} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="font-semibold">Tệp</span>
                        <div className="grid grid-cols-4 gap-5">
                            {currentFiles.map((file) => (
                                <DriveFile key={file.id} file={file} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}