import { DownOutlined } from "@ant-design/icons";

const menuItems = [ 'Màu sắc', 'Kích thước', 'Giá' ]

export default function ShopSideBar() {
    return <div className="w-1/5 flex flex-col">
        {menuItems.map((item) => (
            <div key={item} className="flex items-center gap-5 border-b border-gray-200 p-5">
                <span><DownOutlined /></span>
                <span className="text-xl">{item}</span>
            </div>
        ))}
    </div>
}