import { UserOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useRouter } from "next/navigation";

export default function GoogleChooseAccount() {
    const router = useRouter();

    return (
    <div className="w-1/2 flex flex-col">
        <div onClick={() => {router.push("/k7/hds01/password")}} className="flex items-center relative py-3 border-b border-gray-200 active:bg-gray-200 cursor-pointer">
            <div className="w-20 flex justify-center items-center">
                <Image preview={false} src="/icons/Bin.svg" alt="Avatar" width={35}/>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold">Nguyễn Bin</span>
                <span className="text-sm text-gray-500">nguyenbin@gmail.com</span>
            </div>
            <span className="absolute top-3 right-5 text-xs text-gray-500">Đã đăng xuất</span>
        </div>
        <div onClick={() => {}} className="flex items-center py-3 border-b border-gray-200 active:bg-gray-200 cursor-pointer">
            <span className="w-20 flex justify-center items-center"><UserOutlined /></span>
            <span>Sử dụng một tài khoản khác</span>
        </div>
        <div className="flex items-center py-3 border-b border-gray-200">
            <span className="w-20 flex justify-center items-center"><UserDeleteOutlined /></span>
            <span>Xóa tài khoản</span>
        </div>
    </div>
    )
}