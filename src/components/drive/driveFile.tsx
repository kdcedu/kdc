import { File } from "@/constant/drive/file";
import {
  FileExcelFilled,
  FileFilled,
  FileImageFilled,
  FilePdfFilled,
} from "@ant-design/icons";
import { Image } from "antd";
import { useState } from "react";
import OptionPopover from "./optionPopover";
import DeletePopup from "./deletePopup";
import { useDrive } from "@/context/driveContext";

interface DriveFileProps {
  file: File;
}

export const renderFileIcon = (type: string) => {
  switch (type) {
    case "image":
      return <FileImageFilled />;
    case "excel":
      return <FileExcelFilled />;
    case "pdf":
      return <FilePdfFilled />;
    default:
      return <FileFilled />;
  }
};

export const renderFileIconColor = (type: string) => {
  switch (type) {
    case "image":
      return "text-orange-600";
    case "excel":
      return "text-green-600";
    case "pdf":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export const renderFileSuffix = (type: string) => {
  switch (type) {
    case "image":
      return "jpg";
    case "excel":
      return "xlsx";
    case "pdf":
      return "pdf";
    default:
      return "file";
  }
};

export default function DriveFile({ file }: DriveFileProps) {
  const [isPreviewVisible, setPreviewVisible] = useState(false);

  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  const { deleteFile } = useDrive();

  const handleClick = () => {
    setPreviewVisible(true);
  };

  const handleDelete = (id: string) => {
    deleteFile(id);
  };

  return (
    <>
      <DeletePopup
        open={openDeletePopup}
        onClose={() => setOpenDeletePopup(false)}
        onFinish={() => handleDelete(file?.id)}
        name={file?.name + "." + renderFileSuffix(file?.type)}
      />
      <div
        className="bg-gray-100 rounded-lg p-3 flex flex-col gap-2 cursor-pointer active:bg-gray-200"
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={renderFileIconColor(file?.type)}>
              {renderFileIcon(file?.type)}
            </span>
            <span className="font-semibold w-40 truncate">
              {file?.name}.{renderFileSuffix(file?.type)}
            </span>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <OptionPopover onFinish={() => setOpenDeletePopup(true)} />
          </div>
        </div>

        <div className="flex items-center justify-center bg-white w-full pointer-events-none h-[200px] rounded-lg overflow-hidden">
          <Image
            src={file?.image}
            alt="anh_diem"
            preview={{
              visible: isPreviewVisible,
              onVisibleChange: (visible) => setPreviewVisible(visible),
            }}
          />
        </div>
      </div>
    </>
  );
}
