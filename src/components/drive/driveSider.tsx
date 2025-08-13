import {
  ClockCircleOutlined,
  CloudOutlined,
  DeleteOutlined,
  FolderFilled,
  HomeOutlined,
  ShareAltOutlined,
  StarOutlined,
} from "@ant-design/icons";
import DriveAddButton from "./driveAddButton";
import { Progress } from "antd";
import { useRouter } from "next/navigation";

const siderMenu = [
  {
    id: 1,
    icon: <HomeOutlined />,
    title: "Trang chủ",
  },
  {
    id: 2,
    icon: <FolderFilled />,
    title: "Drive của tôi",
  },
  {
    id: 3,
    icon: <ShareAltOutlined />,
    title: "Chia sẻ",
  },
  {
    id: 4,
    icon: <ClockCircleOutlined />,
    title: "Gần đây",
  },
  {
    id: 5,
    icon: <StarOutlined />,
    title: "Gắn dấu sao",
  },
  {
    id: 6,
    icon: <DeleteOutlined />,
    title: "Thùng rác",
  },
  {
    id: 7,
    icon: <CloudOutlined />,
    title: "Bộ nhớ (đã dùng 60%)",
  },
];

export default function DriveSider() {
  const router = useRouter();
  return (
    <div className="w-[15%] flex-col items-center md:items-start md:flex">
      <div className="mb-5 w-full">
        <DriveAddButton />
      </div>
      {siderMenu.map((item) => (
        <div
          onClick={() => {
            if (item.id === 2) {
              router.push("/k11/hds01");
            }
          }}
          key={item.id}
          className={`${
            item.id === 2 && "bg-blue-100 text-blue-600"
          } w-full py-2 px-4 rounded-lg flex items-center justify-center md:justify-start gap-4 hover:bg-gray-200 cursor-pointer`}
        >
          {item.icon}
          <span className="text-sm hidden sm:inline">{item.title}</span>
        </div>
      ))}
      <div className="w-full px-4">
        <Progress percent={60} showInfo={false} size="small" />
        <span className="text-xs">Đã sử dụng 9GB trong tổng số 15GB</span>
      </div>
    </div>
  );
}
