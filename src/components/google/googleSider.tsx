import { DashboardOutlined, DatabaseOutlined, InfoCircleOutlined, LockOutlined, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons"

const menuItems = [
    {
        title: "Trang chủ",
        icon: UserOutlined
    },
    {
        title: "Thông tin cá nhân",
        icon: DashboardOutlined
    },
    {
        title: "Dữ liệu và quyền riêng tư",
        icon: DatabaseOutlined
    },
    {
        title: "Bảo mật",
        icon: LockOutlined
    },
    {
        title: "Mọi người và chia sẻ",
        icon: UsergroupAddOutlined
    }
]

export default function GoogleSider() {
    return (
        <div className="flex flex-col gap-40 w-1/4">
            <div>
            {menuItems.map(menu => (
                <div className={`flex items-center gap-2 px-5 rounded-r-full py-3 text-sm cursor-pointer ${menu.title === "Bảo mật" ? "bg-sky-200" : "text-gray-500"}`} key={menu.title}>
                    <span className="text-xl"><menu.icon /></span>
                    <span className="font-semibold">{menu.title}</span>
                </div>
                
            ))}
            <div className="flex items-center gap-2 px-5 py-3 text-sm cursor-pointer text-gray-500 border-t border-gray-200">
                <span className="text-xl"><InfoCircleOutlined /></span>
                <span className="font-semibold">Giới thiệu</span>
            </div>
            </div>
            <div className="grid grid-cols-2 pl-5 text-xs text-gray-500 gap-y-5 gap-2">
                <span>Quyền riêng tư</span>
                <span>Điều khoản</span>
                <span>Trợ giúp</span>
                <span>Giới thiệu</span>
            </div>
        </div>
    )
}