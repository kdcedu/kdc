"use client";
import { Button, Input } from "antd";
import { useState } from "react";
import ShippingSelect from "./shippingSelect";
import PaymentSelect from "./paymentSelect";
import { useGlobalMessage } from "@/context/globalMessageContext";
import { useRouter } from "next/navigation";
import { useShop } from "@/context/shopContext";

export default function CheckoutForm() {
    const { createErrorMessage } = useGlobalMessage();
    const {setAddress, address, setBalance, balance, total, setOrder, cart} = useShop();
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyNumbers = e.target.value.replace(/\D/g, '');
        setPhone(onlyNumbers);
      };

    const onFinish = () => {
        if(!phone) {
            createErrorMessage('Vui lòng nhập số điện thoại');
            return;
        }
        if(phone.length !== 10) {
            createErrorMessage('Số điện thoại không hợp lệ');
            return;
        }
        if(balance < total) {
            createErrorMessage('Số dư không đủ');
            return;
        }
        setBalance(balance - total);
        setOrder(cart);
        setAddress(address + '/' + phone);
        router.push('/k8/hds02/finish');
    }
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

        <Button onClick={onFinish} size="large" className="w-full !rounded-none !h-16 !text-lg" variant="solid" color="default">Hoàn tất đơn hàng</Button>
    </div>
}