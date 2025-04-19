import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export type Status = "normal" | "error" | "success";

interface CheckItemProps {
  title: string;
  status: Status;
}

export default function CheckItem({ title, status }: CheckItemProps) {
  return (
    <div className="flex items-center mb-2">
      {status === "normal" && <CheckOutlined className="!text-gray-500" />}
      {status === "error" && <CloseOutlined className="!text-red-500" />}
      {status === "success" && <CheckOutlined className="!text-green-500" />}
      <span className={`${status === "error" ? "text-red-500 font-semibold" : status === "success" ? "text-green-500 font-semibold" : "text-gray-500"} ml-5`}>{title}</span>
    </div>
  )
}
