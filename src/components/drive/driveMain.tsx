import { CaretDownFilled, CaretDownOutlined, RightOutlined } from "@ant-design/icons";
import DriveFolder from "./driveFolder";
import DriveFile from "./driveFile";
import { useDrive } from "@/app/context/driveContext";
import { useParams } from "next/navigation";
import { Image } from "antd";

export default function DriveMain() {
  const { folders, files } = useDrive();
  const {id} = useParams();

  const currentFolder = folders?.find((folder) => folder.id === Number(id));

  const hereFolders = folders?.filter((folder) => id ? folder.parent === id : folder.parent === 'root');
  const hereFiles = files?.filter((file) => id ? file.parent === id : file.parent === 'root');

  return (
    <div className="flex-1 flex flex-col gap-5 bg-white rounded-3xl p-5">
      <div className="flex items-center gap-2">
        <span className="text-2xl">Drive của tôi</span>
        {currentFolder ? <RightOutlined /> : <CaretDownOutlined />}
        {currentFolder && <>
        <span className="text-xl">{currentFolder.name}</span>
        <CaretDownFilled />
        </>}

      </div>

      {hereFolders?.length !== 0 && <div className="flex flex-col gap-2">
        <span className="font-semibold">Thư mục</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {hereFolders?.map((folder) => (
            <DriveFolder key={folder.id} name={folder.name} id={String(folder.id)}/>
          ))}
        </div>
      </div>}
      

      {hereFiles?.length !== 0 && <div className="flex flex-col gap-2">
        <span className="font-semibold">Tệp</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {hereFiles?.map((file) => (
            <DriveFile key={file.id} file={file} />
          ))}
        </div>
      </div>}

      {hereFolders?.length === 0 && hereFiles?.length === 0 && <div className="flex flex-col gap-2 items-center">
        <Image src="/images/empty_folder.png" alt="empty" preview={false} width={250}/>
        <span className="text-lg">Sử dụng nút &quot;Mới&quot; để thêm thư mục hoặc tệp mới</span>
      </div>}
    </div>
  );
}
