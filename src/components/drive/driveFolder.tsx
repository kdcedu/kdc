import { FolderFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import OptionPopover from "./optionPopover";
import DeletePopup from "./deletePopup";
import { useState } from "react";
import { useDrive } from "@/context/driveContext";
import { usePathname } from "next/navigation";

interface DriveFolderProps {
  name: string;
  id: string;
}

export default function DriveFolder({ name, id }: DriveFolderProps) {
  const router = useRouter();

  const pathName = usePathname();

  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  const { deleteFolder } = useDrive();

  const handleClick = () => {
    router.push(pathName + "/" + id);
  };

  const handleDelete = (id: string) => {
    deleteFolder(id);
  };

  return (
    <>
      <DeletePopup
        open={openDeletePopup}
        onClose={() => setOpenDeletePopup(false)}
        onFinish={() => handleDelete(id)}
        name={name}
      />
      <div
        onClick={handleClick}
        className="py-3 px-6 bg-gray-100 rounded-lg flex-1 flex justify-between cursor-pointer active:bg-gray-200"
      >
        <div className="flex items-center gap-4">
          <span>
            <FolderFilled />
          </span>
          <span className="font-semibold">{name}</span>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <OptionPopover onFinish={() => setOpenDeletePopup(true)} />
        </div>
      </div>
    </>
  );
}
