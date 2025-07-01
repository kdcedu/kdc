"use client"
import { Radio } from "antd";
import VoucherCard from "./voucherCard";

const vouchers = [
    {
        id: '1',
        voucher: "KDC2025FREESHIP",
        description: "VOUCHER GIÁM 25K PHÍ SHIP"
    },
    {
        id: '2',
        voucher: "KDC15FREESHIP",
        description: "VOUCHER GIÁM 15K PHÍ SHIP"
    },
    {
        id: '3',
        voucher: "KDC10FREESHIP",
        description: "VOUCHER GIÁM 10K PHÍ SHIP"
    },
]

export default function VoucherSelect() {
    return <div className="w-full flex flex-col gap-5">
        <span className="font-bold text-lg">Voucher</span>
        
        <div className="flex flex-col">
            <Radio.Group defaultValue="" className="flex flex-col">
            {vouchers.map((voucher) => (
                <Radio className="w-full border border-gray-200 !p-2 rounded-lg !mb-2" value={voucher.id} key={voucher.id}>
                    <VoucherCard voucher={voucher.voucher} description={voucher.description} />
                </Radio>
            ))}
            </Radio.Group>
        </div>
    </div>
}