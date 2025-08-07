// components/drive/optionPopoverComponents/SharePermissionDropdown.tsx
import { Button, Dropdown, MenuProps } from "antd";
import { CaretDownOutlined, CheckOutlined } from "@ant-design/icons";
import { SharePermission } from "@/constant/drive/user";
import { permissions } from "@/constant/drive/sharedModalMockData";

interface SharePermissionDropdownProps {
  permission: SharePermission;
  onChange: (perm: SharePermission) => void;
}

export default function SharePermissionDropdown({
  permission,
  onChange,
}: SharePermissionDropdownProps) {
  const menuPermission: MenuProps["items"] = permissions.map((item) => ({
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
  }));

  const selectedPermission = permissions.find((p) => p.value === permission);

  return (
    <Dropdown
      menu={{
        items: menuPermission,
        onClick: ({ key }) => onChange(key as SharePermission),
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button
        type="text"
        className="mx-2 !h-[50px] w-[150px] font-medium text-base !border-1 !border-black"
      >
        {selectedPermission?.label}
        <CaretDownOutlined className="text-xs ml-1" />
      </Button>
    </Dropdown>
  );
}
