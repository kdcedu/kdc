// components/OptionPopover/ShareModal.tsx
"use client";

import {
  Modal,
  Button,
  Avatar,
  Dropdown,
  Checkbox,
  Input,
  MenuProps,
} from "antd";
import {
  ArrowLeftOutlined,
  CheckOutlined,
  DownOutlined,
  LinkOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ShareAutoComplete from "../drive/optionPopoverComponents/autoCompleteSearch";
import { defaultProfile } from "@/constant/profile";
import AccessControl from "../drive/optionPopoverComponents/accessControl";
import { useMemo, useState } from "react";
import { useDrive } from "@/context/driveContext";
import { permissions } from "@/constant/drive/sharedModalMockData";
import { SharedUser, SharePermission } from "@/constant/drive/user";
import clsx from "clsx";

interface ShareModalProps {
  open: boolean;
  onClose: () => void;
  targetId: string; // ID của file hoặc folder
  type: "file" | "folder";
}

export default function ShareDriveModal({
  open,
  onClose,
  targetId,
  type,
}: ShareModalProps) {
  const [showHandleShared, setShowHandleShared] = useState(false);
  const {
    files,
    folders,
    updateUserPermission,
    updateFileShare,
    updateFolderShare,
  } = useDrive();
  const [markedForRemoval, setMarkedForRemoval] = useState<string[]>([]);
  const handleCloseModal = () => {
    handleCancelShared();
    handleCancel();
  };
  const handleCancel = () => {
    onClose();
    setMarkedForRemoval([]); // reset soft xoá
  };
  const [message, setMessage] = useState("");
  const [notify, setNotify] = useState(true);
  const [permission, setPermission] = useState<SharePermission>("viewer");
  const selectedPermisson = permissions.find((p) => p.value === permission);
  const [tempUsers, setTempUsers] = useState<SharedUser[]>([]);
  const handleConfirm = () => {
    // Lọc ra các user hiện tại KHÔNG bị đánh dấu xóa
    const filteredUsers = sharedWith.filter(
      (u) => !markedForRemoval.includes(u.user.email)
    );
    // Gộp thêm các user mới
    const finalUsers = [...filteredUsers, ...tempUsers];

    tempUsers.forEach((item) => {
      item.permission = selectedPermisson?.value || "viewer";
    });
    updateShared(finalUsers);

    // Reset các state
    setShowHandleShared(false);
    setMarkedForRemoval([]);
    setTempUsers([]);

    // cập nhật lại local state nếu có
    onClose(); // đóng modal hoặc popover
  };

  const handleCancelShared = () => {
    setTempUsers([]);
    setShowHandleShared(false);
  };
  const currentItem = useMemo(() => {
    if (!targetId || !type) return null;

    if (type === "file") {
      return files.find((f) => f.id === targetId);
    } else {
      return folders.find((f) => f.id === Number(targetId));
    }
  }, [targetId, type, files, folders]);

  const sharedWith = currentItem?.sharedWith || [];

  const [focused, setFocused] = useState(false);
  const updateShared = (users: SharedUser[]) => {
    if (type === "file") updateFileShare(targetId, users);
    else updateFolderShare(targetId, users);
  };
  const menuPermission: MenuProps["items"] = [
    ...permissions.map((item) => ({
      key: item.value as SharePermission,
      label: (
        <div className="min-w-[250px]">
          <div className="flex items-center gap-2 text-lg px-2">
            {permission === item.value ? (
              <CheckOutlined className="!text-blue-600 w-[35px]" />
            ) : (
              <span className="w-[35px] inline-block" />
            )}
            {item.label}
          </div>
        </div>
      ),
    })),
  ];

  const onChangeTempUsers = (newUser: SharedUser, action: "add" | "remove") => {
    setTempUsers((prev) => {
      if (action === "add" && newUser) {
        // Kiểm tra trùng lặp theo email hoặc id
        const alreadyExists = prev.some(
          (user) => user.user.email === newUser.user.email
        );
        if (!alreadyExists) {
          return [...prev, newUser];
        }
      } else if (action === "remove" && newUser) {
        return prev.filter((user) => user.user.email !== newUser.user.email);
      }
      return prev;
    });
  };

  return (
    <Modal
      title={
        <div className="flex justify-between items-center">
          <div>
            {showHandleShared && (
              <ArrowLeftOutlined
                className={`mr-5`}
                onClick={handleCancelShared}
              />
            )}
            <span className="text-lg">Chia sẻ file</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Icon dấu hỏi */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
              onClick={() => console.log("Dấu hỏi được bấm")}
            >
              <QuestionCircleOutlined className="text-gray-500 text-base" />
            </div>

            {/* Icon cài đặt */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
              onClick={() => console.log("Cài đặt được bấm")}
            >
              <SettingOutlined className="text-gray-500 text-base" />
            </div>
          </div>
        </div>
      }
      open={open}
      centered
      onCancel={handleCloseModal}
      footer={null}
      closable={false}
      maskClosable={true}
    >
      <div className={`my-3 ${showHandleShared && "flex gap-3"}`}>
        <ShareAutoComplete
          onChangeTempUsers={onChangeTempUsers}
          selectedUsers={sharedWith}
          tempUsers={tempUsers}
          setShowHandleShared={setShowHandleShared}
        />
        {showHandleShared && (
          <div>
            {" "}
            <Dropdown
              menu={{
                items: menuPermission,
                onClick: ({ key }) => setPermission(key as SharePermission),
              }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button
                type="text"
                className="mx-2  !h-[50px] w-[150px] font-medium text-base !border-1 !border-black"
              >
                {selectedPermisson?.label}{" "}
                <DownOutlined className="text-xs ml-1" />
              </Button>
            </Dropdown>
          </div>
        )}
      </div>
      {showHandleShared === false ? (
        <>
          <div className="mb-5">
            <div className="font-medium mb-2 text-base">
              Những người có quyền truy cập
            </div>
            <div className="-mx-6 px-6 py-2 hover:bg-gray-200 flex items-center justify-between">
              {/* Bên trái: avatar + thông tin */}
              <div className="flex items-center gap-3">
                <Avatar
                  src="/avatars/boy_1.svg"
                  alt="avatar"
                  size={40}
                  shape="circle"
                />
                <div>
                  <div className="font-medium">
                    {defaultProfile.fullName} (you)
                  </div>
                  <div className="text-gray-600 text-sm">
                    {defaultProfile.email}
                  </div>
                </div>
              </div>

              {/* Bên phải: vai trò */}
              <div className="text-sm text-gray-400 whitespace-nowrap">
                Chủ sở hữu
              </div>
            </div>
            {sharedWith &&
              sharedWith.map((item, index) => {
                const currentPermission = permissions.find(
                  (p) => p.value === item.permission
                );
                const isMarkedForRemoval = markedForRemoval.includes(
                  item.user.email
                );

                const menu = (
                  <div className="w-[260px] py-1 bg-white  text-gray-800 rounded-xs shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
                    {permissions.map((perm) => (
                      <div
                        key={perm.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3 "
                        onClick={() =>
                          updateUserPermission(
                            targetId,
                            type,
                            item.user.email,
                            perm.value as "viewer" | "editor" | "commenter"
                          )
                        }
                      >
                        {!isMarkedForRemoval &&
                        item.permission === perm.value ? (
                          <CheckOutlined className="!text-blue-600 mt-1" />
                        ) : (
                          <span className="w-[14px]" />
                        )}

                        <div>
                          <div className="font-medium">{perm.label}</div>
                          {/* {perm.des && (
                            <div className="text-xs text-gray-500">
                              {perm.des}
                            </div>
                          )} */}
                        </div>
                      </div>
                    ))}

                    {/* Divider */}
                    <div className="h-[1px] bg-gray-400 my-2 w-full" />

                    {/* Extra actions */}
                    <div
                      className={clsx(
                        "px-4 py-2 font-medium text-base",
                        isMarkedForRemoval
                          ? "text-gray-400 cursor-not-allowed"
                          : "hover:bg-gray-100 cursor-pointer"
                      )}
                      onClick={() => {
                        if (!isMarkedForRemoval) {
                          // chuyển quyền logic ở đây
                        }
                      }}
                    >
                      Chuyển quyền sở hữu
                    </div>

                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium text-base "
                      onClick={() => {
                        setMarkedForRemoval((prev) => [
                          ...prev,
                          item.user.email,
                        ]);
                      }}
                    >
                      Xoá quyền truy cập
                    </div>
                  </div>
                );

                return (
                  <div
                    key={index}
                    className="-mx-6 px-6 py-2 hover:bg-gray-200 flex items-center justify-between"
                  >
                    {/* Bên trái: avatar + thông tin */}
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={item?.user?.avatar}
                        alt="avatar"
                        size={40}
                        shape="circle"
                      />
                      <div>
                        <div
                          className={clsx(
                            "font-medium",
                            isMarkedForRemoval && "line-through text-gray-500"
                          )}
                        >
                          {item.user.name}
                        </div>

                        <div className="text-gray-600 text-sm">
                          {item.user.email}
                        </div>
                      </div>
                    </div>

                    {/* Bên phải: dropdown chọn quyền */}
                    <div>
                      <Dropdown
                        dropdownRender={() => menu}
                        trigger={["click"]}
                        placement="bottomRight"
                      >
                        <Button
                          type="text"
                          className="p-0 h-auto font-medium text-base"
                        >
                          {isMarkedForRemoval ? (
                            <span className="text-red-500 italic">
                              Đã chọn xóa
                            </span>
                          ) : (
                            <>{currentPermission?.label ?? "Vai trò"} </>
                          )}

                          <DownOutlined className="text-xs ml-1" />
                        </Button>
                      </Dropdown>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="mb-8">
            <div className="font-medium text-base mb-2">
              Quyền truy cập chung
            </div>
            <AccessControl />
          </div>
        </>
      ) : (
        <>
          {" "}
          <Checkbox
            checked={notify}
            onChange={(e) => setNotify(e.target.checked)}
          >
            Thông báo cho những người này
          </Checkbox>
          {notify && (
            <div className="relative my-4">
              <label
                className={clsx(
                  "absolute z-20 left-3 text-gray-500 transition-all pointer-events-none bg-white px-1",
                  {
                    "text-xs -top-2.5 !text-blue-600": focused || message,
                    "text-base top-2.5": !focused && !message,
                  }
                )}
              >
                Lời nhắn
              </label>
              <Input.TextArea
                rows={5}
                className={clsx(
                  "z-10 pt-5 border border-gray-500",
                  "hover:!border-black",
                  "focus:!border-2 focus:!border-blue-600",
                  "transition-all duration-200"
                )}
                value={message}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          )}
        </>
      )}
      <div className="flex justify-between items-center">
        <Button
          icon={
            <LinkOutlined
              className={`${
                showHandleShared ? "!text-[22px]" : "!text-[16px]"
              }  rotate-45 pt-1 !font-semibold`}
            />
          }
          onClick={() => navigator.clipboard.writeText("https://your.link")}
          className={`!rounded-full !h-10 ${
            showHandleShared
              ? "!border-0 !shadow-0 !ring-0"
              : "!border-1 !border-black hover:!bg-blue-100 !text-blue-500 "
          } !w-fit !px-5  !font-semibold`}
        >
          {!showHandleShared && "Sao chép đường liên kết"}
        </Button>
        <div className="flex gap-3">
          <Button
            onClick={handleCancelShared}
            type="primary"
            className="!border-0 !shadow-0 !ring-0 !rounded-full !px-5 !h-10 !font-semibold !bg-white !text-blue-600 hover:!bg-blue-100"
          >
            Hủy
          </Button>
          <Button
            type="primary"
            className="!rounded-full !px-5 !h-10 !font-semibold !bg-blue-600 hover:!bg-blue-500"
            onClick={handleConfirm}
          >
            Xong
          </Button>
        </div>
      </div>
    </Modal>
  );
}
