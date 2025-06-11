import { File } from "@/constant/drive/file";
import {
  CloseOutlined,
  CloudOutlined,
  DesktopOutlined,
  DownloadOutlined,
  FileOutlined,
  FolderOpenFilled,
  HomeOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import DriveFileDesktop from "./driveFileDesktop";
import { useState } from "react";
import { useDrive } from "@/app/context/driveContext";

interface ChooseFileModal {
  open: boolean;
  onClose: () => void;
}

const siderMenu = [
  {
    id: 1,
    icon: <HomeOutlined />,
    title: "Home",
  },
  {
    id: 2,
    icon: <CloudOutlined />,
    title: "OneDrive",
  },
  {
    id: 3,
    icon: <DesktopOutlined />,
    title: "Desktop",
  },
  {
    id: 5,
    icon: <DownloadOutlined />,
    title: "Downloads",
  },
  {
    id: 6,
    icon: <FileOutlined />,
    title: "Documents",
  },
  {
    id: 7,
    icon: <PictureOutlined />,
    title: "Pictures",
  },
  {
    id: 8,
    icon: <FolderOpenFilled />,
    title: "KDC",
  },
];

const files: File[] = [
  {
    id: "1",
    name: "File 1",
    size: "1MB",
    type: "image",
    image: "/images/grade.jpg",
  },
  {
    id: "2",
    name: "File 2",
    size: "1MB",
    type: "image",
    image: "/images/grade.jpg",
  },
  {
    id: "3",
    name: "File 3",
    size: "1MB",
    type: "image",
    image: "/images/grade.jpg",
  },
  {
    id: "4",
    name: "File 4",
    size: "1MB",
    type: "image",
    image: "/images/grade.jpg",
  },
  {
    id: "5",
    name: "File 5",
    size: "1MB",
    type: "image",
    image: "/images/grade.jpg",
  },
  {
    id: "6",
    name: "File 6",
    size: "1MB",
    type: "image",
    image: "/images/grade.jpg",
  },
  {
    id: "7",
    name: "File 7",
    size: "1MB",
    type: "image",
    image: "/images/grade.jpg",
  },
];

export default function ChooseFileModal({ open, onClose }: ChooseFileModal) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {addFile} = useDrive();

  return (
    <Modal
      title={
        <div className="flex items-center justify-center border-b border-gray-200 py-1">
          <div className="flex items-center justify-center">
            <span className="text-sm font-normal">Chọn tệp</span>
            <CloseOutlined
              className="absolute right-2 top-2"
              onClick={onClose}
            />
          </div>
        </div>
      }
      styles={{
        content: {
          padding: 0,
        },
      }}
      open={open}
      onClose={onClose}
      footer={<div className="flex gap-5 justify-end border-t border-gray-200 py-2 px-5">
        <Button variant="outlined" color="default" onClick={onClose}>Hủy</Button>
        <Button variant="solid" color="blue" disabled={!selectedFile} onClick={() => {
          if (selectedFile) {
            addFile(selectedFile)
            onClose()
          }
        }}>Chọn</Button>
      </div>}
      closable={false}
    >
      <div className="flex flex-col">
        <div className="flex">
          <div className="border-r border-gray-200 w-1/4 px-2">
            {siderMenu.map((item) => (
              <div
                key={item.id}
                className={`${
                  item.id === 8 && "bg-blue-100 text-blue-600 font-semibold"
                } flex items-center gap-2 py-1 px-3 hover:bg-gray-200 cursor-pointer`}
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <div className="w-3/4 px-5">
            <div className="flex flex-col">
              {files.map((file) => (
                <DriveFileDesktop
                  key={file.id}
                  file={file}
                  selected={selectedFile?.id === file.id}
                  onClick={() => setSelectedFile(file)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
