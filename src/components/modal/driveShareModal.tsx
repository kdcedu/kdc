// components/OptionPopover/ShareModal.tsx
"use client";

import { Modal, Button, Avatar, Dropdown, MenuProps } from "antd";
import { CaretDownOutlined, CheckOutlined } from "@ant-design/icons";
import ShareAutoComplete from "../drive/optionPopoverComponents/autoCompleteSearch";
import { defaultProfile } from "@/constant/profile";
import AccessControl from "../drive/optionPopoverComponents/accessControl";
import { useMemo, useState } from "react";
import { useDrive } from "@/context/driveContext";
import { permissions } from "@/constant/drive/sharedModalMockData";
import { SharedUser, SharePermission } from "@/constant/drive/user";
import ShareHeader from "../drive/optionPopoverComponents/shareHeader";
import ShareUserList from "../drive/optionPopoverComponents/shareUserList";
import ShareMessageInput from "../drive/optionPopoverComponents/shareMessageInput";
import ShareActionButtons from "../drive/optionPopoverComponents/shareActionButton";

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

  // const [focused, setFocused] = useState(false);
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
        <ShareHeader
          showHandleShared={showHandleShared}
          onBack={handleCancelShared}
        />
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
                <CaretDownOutlined className="text-xs ml-1" />
              </Button>
            </Dropdown>
          </div>
        )}
      </div>
      {!showHandleShared ? (
        <div className="transition-all duration-500">
          <div className="mb-3">
            <div className="font-medium mb-2 text-base">
              Những người có quyền truy cập
            </div>
            <div className="overflow-y-auto overflow-x-hidden  max-h-[250px] -mx-6 px-6 py-2 ">
              <div className="-mx-6 px-6 py-2 hover:bg-gray-200 flex items-center justify-between -mb-1">
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
              <ShareUserList
                sharedWith={sharedWith}
                markedForRemoval={markedForRemoval}
                setMarkedForRemoval={setMarkedForRemoval}
                updateUserPermission={updateUserPermission}
                targetId={targetId}
                type={type}
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="font-medium text-base mb-2">
              Quyền truy cập chung
            </div>
            <AccessControl />
          </div>
        </div>
      ) : (
        <div className="transition-all duration-500">
          {" "}
          <ShareMessageInput
            notify={notify}
            onToggleNotify={setNotify}
            message={message}
            onChangeMessage={setMessage}
          />
        </div>
      )}
      <ShareActionButtons
        showHandleShared={showHandleShared}
        onCancelShared={handleCancelShared}
        onConfirm={handleConfirm}
      />
    </Modal>
  );
}
