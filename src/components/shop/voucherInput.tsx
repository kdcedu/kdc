"use client"
import { Button, Input } from "antd";
import { useState } from "react";
import { useShop } from "@/context/shopContext";
import { CloseOutlined, TagOutlined } from "@ant-design/icons";
import { systemVoucher } from "@/constant/shop/voucher";
import { useGlobalMessage } from "@/context/globalMessageContext";

export default function VoucherInput() {
    const [voucherInput, setVoucherInput] = useState('');

    const { voucher, setVoucher } = useShop();

    const { createSuccessMessage, createErrorMessage } = useGlobalMessage();

    const onApplyVoucher = () => {
        if (voucherInput) {
            const findVoucher = systemVoucher.find((v) => v.code === voucherInput);
            if (findVoucher) {
                if(voucher.find((v) => v.code === findVoucher.code)) {
                    createErrorMessage('Mã giảm giá đã được áp dụng');
                    return;
                }
                setVoucher([...voucher, findVoucher]);
                createSuccessMessage('Áp dụng mã giảm giá thành công');
            } else {
                createErrorMessage('Mã giảm giá không hợp lệ');
            }
        }
    }
    return (<div className="w-full flex flex-col gap-2">
        <div className="w-full flex gap-3">
            <Input placeholder="Mã giảm giá" size="large" value={voucherInput} onChange={(e) => setVoucherInput(e.target.value)} />
            <Button disabled={!voucherInput} size="large" variant="solid" color="default" onClick={onApplyVoucher}>Áp dụng</Button>
        </div>
        {voucher && <div className="flex gap-2 flex-wrap">
            {voucher.map((v) => (
                <span key={v.code} className="flex gap-1 items-center bg-gray-200 text-gray-500 p-1 rounded-lg">
                    <TagOutlined />
                    <span className="text-sm">{v.code}</span>
                    <Button onClick={() => setVoucher(voucher.filter((vou) => vou.code !== v.code))} size="small" icon={<CloseOutlined />} variant="link" color="default"/>
                </span>
            ))}
        </div>}
    </div>)
}