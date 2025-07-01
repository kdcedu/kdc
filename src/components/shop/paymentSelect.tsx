"use client";
import { Radio } from "antd";
import { useState } from "react";

const paymentMethods = [
    {
        id: '1',
        name: 'Thanh toán khi nhận hàng (COD)',
    },
    {
        id: '2',
        name: 'Phương thức chuyển khoản',
    },
]

export default function PaymentSelect() {
    const [paymentMethod, setPaymentMethod] = useState('2');

    return <div className="w-full flex flex-col gap-3">
        <span className="font-bold text-lg">Phương thức thanh toán</span>
        <Radio.Group defaultValue={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="flex flex-col">
            {paymentMethods.map((method) => (
                <Radio className={`w-full !text-black ${method.id === '1' ? 'border-y rounded-t-xl' : 'border-y rounded-b-xl'} border-x !p-3 ${method.id === paymentMethod ? 'bg-gray-200 border border-black' : 'hover:bg-gray-200 border-gray-200'}`} value={method.id} key={method.id}>
                    {method.name}
                </Radio>
            ))}
        </Radio.Group>
    </div>
}