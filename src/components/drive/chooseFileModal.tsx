import { chooseFiles, File } from "@/constant/drive/file";
import {
  CloseOutlined,
  CloudOutlined,
  DesktopOutlined,
  DownloadOutlined,
  DownOutlined,
  FileOutlined,
  FolderFilled,
  FolderOpenFilled,
  HomeOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Modal } from "antd";
import DriveFileDesktop from "./driveFileDesktop";
import { useEffect, useState } from "react";
import { useDrive } from "@/context/driveContext";
import { useParams } from "next/navigation";
import DriveProgressBar from "./driveProgressBar";
import { renderFileIcon, renderFileIconColor } from "./driveFile";

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
    icon: <FolderFilled />,
    title: "KDC",
  },
];

export default function ChooseFileModal({ open, onClose }: ChooseFileModal) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [percent, setPercent] = useState(0);

  const { addFile } = useDrive();

  const { id } = useParams();

  useEffect(() => {
    const timer = setInterval(() => {
      if (percent === 100) {
        if(selectedFile) {
          addFile({
            ...selectedFile,
            id: String(Date.now()),
            parent: id ? String(id) : "root",
          });
          clearInterval(timer);
        }
        setOpenDrawer(false);
      }
      setPercent((prevPercent) => prevPercent + 10);
    }, 1000);

    return () => clearInterval(timer);
  }, [percent, selectedFile, addFile, id]);

  

  const handleAddFile = () => {
    if (selectedFile) {
      setPercent(0);
      setOpenDrawer(true);
      onClose();
    }
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        mask={false}
        placement="bottom"
        height="auto"
        title={<div className="flex items-center justify-between">
          <span>Đang tải 1 mục lên</span>
          <div className="flex items-center gap-4">
            <DownOutlined onClick={() => setOpenDrawer(false)}/>
            <CloseOutlined
              onClick={() => {
                setOpenDrawer(false);
              }}
            />
          </div>
        </div>}
        closable={false}
        closeIcon={null}
        style={{
          width: "30%",
          margin: "0 70%",
          borderRadius: "10px 10px 0 0",
          boxShadow: 'none', borderTop: 'none'
        }}
        styles={{
          header: {
            backgroundColor: "#f5f5f5",
          },
          body: {
            padding: 0,
          },
        }}
      >
        <div className="p-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={renderFileIconColor(selectedFile?.type || "")}>{renderFileIcon(selectedFile?.type || "")}</span>
            <span>{selectedFile?.name}</span>
          </div>
          <DriveProgressBar endFunction={() => setOpenDrawer(false)} percent={percent} />
        </div>
      </Drawer>
      <Modal
        title={
          <div className="flex items-center justify-between px-5 border-b border-gray-600 pt-2">
              <div className="flex items-center gap-2 bg-gray-200 w-1/4 rounded-t-sm px-3">
                <span className="text-yellow-500"><FolderOpenFilled /></span>
                <span className="text-sm font-semibold">KDC</span>
              </div>
              <CloseOutlined
                onClick={onClose}
              />
          </div>
        }
        styles={{
          content: {
            padding: 0,
          },
        }}
        open={open}
        // onClose={onClose}
        footer={
          <div className="flex gap-5 justify-end border-t border-gray-200 py-2 px-5">
            <Button variant="outlined" color="default" onClick={onClose}>
              Hủy
            </Button>
            <Button
              variant="solid"
              color="blue"
              disabled={!selectedFile}
              onClick={handleAddFile}
            >
              Chọn
            </Button>
          </div>
        }
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
                  <span className={`${item.id === 8 && "text-yellow-500"} text-black`}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>

            <div className="w-3/4 px-5">
              <div className="flex flex-col">
                {chooseFiles.map((file) => (
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
    </>
  );
}
