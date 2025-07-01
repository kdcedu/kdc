"use client"
import { Radio } from "antd";
import VoucherCard from "./voucherCard";
import { Voucher, systemVoucher } from "@/constant/shop/voucher";
import { useShop } from "@/context/shopContext";

export default function VoucherSelect() {
    const {voucher: currentVoucher, setVoucher} = useShop();

    const handleSetVoucher = (voucher: Voucher) => {
        const shippingVoucher = currentVoucher.find((voucher) => voucher.type === 'shipping');
        let newVoucher = [...currentVoucher];
        if (shippingVoucher) {
            newVoucher = newVoucher.filter((voucher) => voucher.type !== 'shipping');
        }
        newVoucher.push(voucher);
        setVoucher(newVoucher);
    }

    return <div className="w-full flex flex-col gap-5">
        <span className="font-bold text-lg">Voucher</span>
        
        <div className="flex flex-col">
            <Radio.Group defaultValue="" className="flex flex-col">
            {systemVoucher.filter((voucher) => voucher.type === 'shipping').map((voucher) => (
                <Radio onChange={(e) => handleSetVoucher(e.target.value)} className="w-full border border-gray-200 !p-2 rounded-lg !mb-2" value={voucher} key={voucher.code}>
                    <VoucherCard voucher={voucher.code} description={voucher.name} />
                </Radio>
            ))}
            </Radio.Group>
        </div>
    </div>
}