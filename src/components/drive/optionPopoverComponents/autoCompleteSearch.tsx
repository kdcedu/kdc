"use client";

import { dummySharedUsers, SharedUser } from "@/constant/drive/user";
import { CloseOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Tag } from "antd";
import { useState, useRef, useEffect } from "react";

interface ShareAutoCompleteProps {
  setShowHandleShared: (show: boolean) => void;

  selectedUsers: SharedUser[]; // từ cha: user đã chia sẻ
  tempUsers: SharedUser[]; // user tạm chọn (chưa commit)
  onChangeTempUsers: (users: SharedUser, action: "add" | "remove") => void; // báo về cha
}

export default function ShareAutoComplete({
  setShowHandleShared,
  selectedUsers,
  tempUsers,
  onChangeTempUsers,
}: ShareAutoCompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // 🧠 Danh sách tất cả người đã chọn (thật + tạm)
  const allSelectedEmails = [...selectedUsers, ...tempUsers].map(
    (u) => u.user.email
  );

  const filteredSuggestions = dummySharedUsers.filter(
    (user) =>
      !allSelectedEmails.includes(user.user.email) &&
      user.user.email.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    setShowHandleShared(tempUsers.length > 0);
  }, [selectedUsers.length, tempUsers.length, setShowHandleShared]);

  const handleSelect = (user: SharedUser) => {
    onChangeTempUsers(user, "add");
    setInputValue("");
    setDropdownVisible(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleRemove = (user: SharedUser) => {
    onChangeTempUsers(user, "remove");
  };

  const dropdownItems = filteredSuggestions.map((user) => ({
    key: user.user.email,
    label: (
      <div
        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => handleSelect(user)}
      >
        <Avatar src={user.user.avatar} size="small" />
        <div className="flex flex-col">
          <span className="text-sm">{user.user.name}</span>
          <span className="text-xs text-gray-500">{user.user.email}</span>
        </div>
      </div>
    ),
  }));

  return (
    <Dropdown
      menu={{ items: dropdownItems }}
      trigger={["click"]}
      open={dropdownVisible && filteredSuggestions.length > 0}
    >
      <div
        className="min-h-[48px] w-full ring-1 ring-black rounded-md px-3 py-2 flex flex-wrap items-center gap-2 cursor-text"
        onClick={() => {
          setDropdownVisible(true);
          inputRef.current?.focus();
        }}
      >
        {/* Hiển thị user được chọn tạm thời */}
        {tempUsers.map((user) => {
          return (
            <Tag
              key={user.user.email}
              className="flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-300 rounded-full"
            >
              <Avatar src={user.user.avatar} size="small" />
              <span className="text-sm">{user.user.email}</span>

              <CloseOutlined
                className="ml-1 text-xs text-gray-500 hover:text-red-500 cursor-pointer"
                onClick={() => handleRemove(user)}
              />
            </Tag>
          );
        })}

        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setDropdownVisible(true);
          }}
          onBlur={() => setTimeout(() => setDropdownVisible(false), 100)}
          placeholder={
            tempUsers.length === 0
              ? "Thêm người, nhóm và sự kiện trên lịch"
              : ""
          }
          className="flex-1 min-w-[120px] outline-none border-none bg-transparent text-sm"
        />
      </div>
    </Dropdown>
  );
}
