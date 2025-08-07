// components/drive/optionPopoverComponents/ShareUserList.tsx
import { Avatar, Button, Dropdown } from "antd";
import { CheckOutlined, CaretDownOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { SharedUser, SharePermission } from "@/constant/drive/user";
import { permissions } from "@/constant/drive/sharedModalMockData";

interface ShareUserListProps {
  sharedWith: SharedUser[];
  markedForRemoval: string[];
  setMarkedForRemoval: (fn: (prev: string[]) => string[]) => void;
  updateUserPermission: (
    targetId: string,
    type: "file" | "folder",
    email: string,
    permission: SharePermission
  ) => void;
  targetId: string;
  type: "file" | "folder";
}

export default function ShareUserList({
  sharedWith,
  markedForRemoval,
  setMarkedForRemoval,
  updateUserPermission,
  targetId,
  type,
}: ShareUserListProps) {
  return (
    <div className="mb-3">
      {/* <div className="font-medium mb-2 text-base">Những người có quyền truy cập</div> */}
      <div className="overflow-y-auto max-h-[250px] -mx-6 px-6 py-2">
        {sharedWith.map((item, index) => {
          const isMarked = markedForRemoval.includes(item.user.email);
          const currentPerm = permissions.find(p => p.value === item.permission);

          const menu = (
            <div className="w-[260px] py-1 bg-white text-gray-800 shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
              {permissions.map(perm => (
                <div
                  key={perm.value}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                  onClick={() =>
                    updateUserPermission(targetId, type, item.user.email, perm.value)
                  }
                >
                  {!isMarked && item.permission === perm.value ? (
                    <CheckOutlined className="!text-blue-600 mt-1" />
                  ) : (
                    <span className="w-[14px]" />
                  )}
                  <div>
                    <div className="font-medium">{perm.label}</div>
                  </div>
                </div>
              ))}
              <div className="h-[1px] bg-gray-400 my-2 w-full" />
              <div
                className={clsx(
                  "px-4 py-2 font-medium text-base",
                  isMarked ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"
                )}
              >
                Chuyển quyền sở hữu
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium text-base"
                onClick={() => {
                  setMarkedForRemoval((prev) => [...prev, item.user.email]);
                }}
              >
                Xoá quyền truy cập
              </div>
            </div>
          );

          return (
            <div key={index} className="-mx-6 px-6 py-2 hover:bg-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar src={item.user.avatar} size={40} />
                <div>
                  <div className={clsx("font-medium", isMarked && "line-through text-gray-500")}>
                    {item.user.name}
                  </div>
                  <div className="text-gray-600 text-sm">{item.user.email}</div>
                </div>
              </div>
              <Dropdown dropdownRender={() => menu} trigger={["click"]}>
                <Button type="text" className="p-0 h-auto font-medium text-base">
                  {isMarked ? (
                    <span className="text-red-500 italic">Đã chọn xóa</span>
                  ) : (
                    <>
                      {currentPerm?.label ?? "Vai trò"} <CaretDownOutlined className="text-xs ml-1" />
                    </>
                  )}
                </Button>
              </Dropdown>
            </div>
          );
        })}
      </div>
    </div>
  );
}
