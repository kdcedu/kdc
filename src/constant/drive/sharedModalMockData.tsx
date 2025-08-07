import { GlobalOutlined, LockOutlined } from "@ant-design/icons";
import { SharePermission } from "./user";
interface PermissionProps {
  value: SharePermission;
  label: string;
  des: string;
}
export const copyLinkExample = "https://www.kdc.edu.vn/"
export const accessOptions = [
  {
    key: "restricted",
    icon: <LockOutlined />,
    label: "Hạn chế",
    description:
      "Chỉ những người có quyền truy cập mới có thể mở bằng đường liên kết này",
    bgColor: "bg-gray-200",
    iconColor: "text-gray-700",
  },
  {
    key: "anyone",
    icon: <GlobalOutlined />,
    label: "Bất kỳ ai có đường liên kết",
    description:
      "Bất kỳ ai có kết nối Internet và có đường liên kết này đều có thể xem",
    bgColor: "bg-green-100",
    iconColor: "text-green-700",
  },
];
export const permissions: PermissionProps[] = [
  {
    value: "viewer",
    label: "Người xem",
    des: "",
  },
  { value: "commenter", label: "Người nhận xét", des: "" },
  {
    value: "editor",
    label: "Người chỉnh sửa",
    des: "Sắp xếp, thêm và chỉnh sửa tệp",
  },
];
