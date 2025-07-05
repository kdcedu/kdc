"use client"
import { useShop } from "@/context/shopContext";
import { convertPrice } from "@/utils/convertPrice";
import { StarFilled, TagOutlined } from "@ant-design/icons";

interface TotalPriceProps {
    isFinish?: boolean;
}

export default function TotalPrice({ isFinish }: TotalPriceProps) {
    const { order, voucher, shipping, cart } = useShop();

    const subTotal = isFinish ? order.reduce((acc, item) => acc + item.price * item.quantity, 0) : cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = isFinish ? order.reduce((acc, item) => acc + item.price * item.quantity * (item.discount || 0)/100, 0) : cart.reduce((acc, item) => acc + item.price * item.quantity * (item.discount || 0)/100, 0);
    const orderTotal = isFinish ? order.reduce((acc, item) => acc + item.price * item.quantity * (1 - (item.discount || 0)/100), 0) : cart.reduce((acc, item) => acc + item.price * item.quantity * (1 - (item.discount || 0)/100), 0);
    const voucherDiscount = voucher.reduce((acc, item) => {
        if (item.unit === 'percent') {
            return acc + item.discount * orderTotal / 100;
        } else {
            return acc + item.discount;
        }
    }, 0);

    return <div className="w-full flex flex-col gap-3 text-sm">
        <div className="flex justify-between">
            <span>Tổng phụ • {order.length} sản phẩm</span>
            <span>{convertPrice(subTotal)}</span>
        </div>
        <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span>{convertPrice(shipping)}</span>
        </div>

        {voucher.length > 0 && <div className="flex flex-col gap-1 justify-between">
            <span>Giảm giá đơn hàng</span>
            <div className="flex justify-between">
                <span className="flex items-center gap-2 text-gray-500">Khuyến mãi</span>
                <span>- {convertPrice(discount)}</span>
            </div>
            {voucher.map((item) => (
                <div key={item.id} className="flex justify-between">
                    <span className="flex items-center gap-2 text-gray-500"><TagOutlined /> {item.code}</span>
                    <span>- {item.unit === 'percent' ? convertPrice(subTotal * item.discount / 100) : convertPrice(item.discount)}</span>
                </div>
                ))}
        </div>}
        <div className="flex justify-between font-bold text-xl">
            <span>Tổng</span>
            <span>{convertPrice(orderTotal + shipping - voucherDiscount)}</span>
        </div>

        {!isFinish && <div className="flex justify-between text-lg text-green-500">
            <div className="flex items-center gap-2">
                <StarFilled />
                <span>Bạn đã tiết kiệm</span>
            </div>
            <span>{convertPrice(discount + voucherDiscount)}</span>
        </div>}
    </div>
}