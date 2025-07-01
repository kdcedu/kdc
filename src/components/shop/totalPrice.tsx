"use client"
import { useShop } from "@/context/shopContext";
import { convertPrice } from "@/utils/convertPrice";
import { TagOutlined } from "@ant-design/icons";

export default function TotalPrice() {
    const { cart, voucher, shipping, total } = useShop();

    const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return <div className="w-full flex flex-col gap-3 text-sm">
        <div className="flex justify-between">
            <span>Tổng phụ • {cart.length} sản phẩm</span>
            <span>{convertPrice(subTotal)}</span>
        </div>
        <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span>{convertPrice(shipping)}</span>
        </div>

        {voucher.length > 0 && <div className="flex flex-col gap-1 justify-between">
            <span>Giảm giá đơn hàng</span>
                {voucher.map((item) => (
                    <div key={item.id} className="flex justify-between">
                        <span className="flex items-center gap-2 text-gray-500"><TagOutlined /> {item.code}</span>
                        <span>- {item.unit === 'percent' ? convertPrice(subTotal * item.discount / 100) : convertPrice(item.discount)}</span>
                    </div>
                ))}
        </div>}
        <div className="flex justify-between font-bold text-xl">
            <span>Tổng</span>
            <span>{convertPrice(total)}</span>
        </div>
    </div>
}