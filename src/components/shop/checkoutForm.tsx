"use client";
import { Button, Input } from "antd";
import { useState } from "react";
import ShippingSelect from "./shippingSelect";
import PaymentSelect from "./paymentSelect";

export default function CheckoutForm() {
    const [phone, setPhone] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyNumbers = e.target.value.replace(/\D/g, '');
        setPhone(onlyNumbers);
      };
    return <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-3">
            <span className="font-bold text-lg">Liên hệ</span>
            <Input
            size="large"
            placeholder="Số điện thoại di động"
            value={phone}
            onChange={handleChange}
            maxLength={10}
            />
        </div>
        <ShippingSelect/>
        <PaymentSelect/>

        <Button size="large" className="w-full !rounded-none !h-16 !text-lg" variant="solid" color="default">Hoàn tất đơn hàng</Button>
    </div>
}