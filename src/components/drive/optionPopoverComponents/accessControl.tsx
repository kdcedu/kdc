import { Dropdown, Button } from "antd";
import {
  CaretDownOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import type { MenuProps } from "antd";
import { accessOptions, permissions } from "@/constant/drive/sharedModalMockData";
// import clsx from "clsx";


export default function AccessControl() {
  const [access, setAccess] = useState("restricted");
  const [permission, setPermission] = useState("viewer");
  const selected = accessOptions.find((opt) => opt.key === access)!;
  const selectedPermisson = permissions.find((p) => p.value === permission);
  const menuItems: MenuProps["items"] = accessOptions.map((item) => ({
    key: item.key,
    label: (
      <div className="min-w-[250px]">
        <div className="flex items-center gap-2">
          {access === item.key ? (
            <CheckOutlined className="!text-blue-600" />
          ) : (
            <span className="w-[14px] inline-block" /> // width giống icon
          )}
          {item.label}
        </div>
      </div>
    ),
  }));
  const menuPermission: MenuProps["items"] = [
    {
      key: "title",
      label: (
        <div className="text-base text-black px-2 py-1">
          Vai trò
        </div>
      ),
      disabled: true, // Không cho click
    },
    ...permissions.map((item) => ({
      key: item.value,
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

  return (
    <div className="flex items-center gap-3 py-2">
      {/* Icon trong nền tròn */}

      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center mt-1 ${selected.bgColor}`}
      >
        <span
          className={`w-9 h-9 flex items-center justify-center rounded-full text-lg ${selected.iconColor}`}
        >
          {selected.icon}
        </span>
      </div>

      {/* Dropdown + mô tả */}

      <div>
        <Dropdown
          menu={{ items: menuItems, onClick: ({ key }) => setAccess(key) }}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <Button
            type="text"
            className="!pl-[1px] h-auto !font-semibold text-base"
          >
            <span className="ml-1">{selected.label}</span> <CaretDownOutlined className="text-xs ml-1" />
          </Button>
        </Dropdown>

        <div className="text-sm text-gray-600 ">{selected.description}</div>
      </div>

      {selected.key === "anyone" && (
        <div>
          {" "}
          <Dropdown
            menu={{
              items: menuPermission,
              onClick: ({ key }) => setPermission(key),
            }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Button type="text" className="p-0 h-auto font-medium text-base">
              {selectedPermisson?.label}{" "}
              <CaretDownOutlined className="text-xs ml-1" />
            </Button>
          </Dropdown>
        </div>
      )}
    </div>
  );
}
