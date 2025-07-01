"use client";
import { convertPrice } from "@/utils/convertPrice";
import { Radio } from "antd";
import { useState } from "react";

const shippingMethods = [
    {
        id: '1',
        name: 'Giao hàng tiêu chuẩn',
        price: 30000,
    },
    {
        id: '2',
        name: 'Giao hàng siêu hỏa tốc 4H-6H (Chỉ nội thành Tp Hồ Chí Minh)',
        price: 50000,
    },
]

export default function ShippingSelect() {
    const [shippingMethod, setShippingMethod] = useState('');

    return <div className="w-full flex flex-col gap-3">
        <span className="font-bold text-lg">Phương thức vận chuyển</span>
        <Radio.Group defaultValue={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)} className="flex flex-col">
            {shippingMethods.map((method) => (
                <Radio className={`w-full relative !text-black ${method.id === '1' ? 'border-y rounded-t-xl' : 'border-y rounded-b-xl'} border-x !p-3 ${method.id === shippingMethod ? 'bg-gray-200 border border-black' : 'hover:bg-gray-200 border-gray-200'}`} value={method.id} key={method.id}>
                    {method.name}
                    <span className="absolute right-5 font-semibold top-1/2 -translate-y-1/2">{convertPrice(method.price)}</span>
                </Radio>
            ))}
        </Radio.Group>
    </div>
}