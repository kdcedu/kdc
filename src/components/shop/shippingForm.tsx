"use client";
import { RightOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { useGetDistricts } from "@/hooks/useGetDistricts";
import { useGetProvinces } from "@/hooks/useGetProvinces";
import { useGetWards } from "@/hooks/useGetWards";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";

export default function ShippingForm() {
    const router = useRouter();
    const [province, setProvince] = useState<string | null>(null);
    const [district, setDistrict] = useState<string | null>(null);
    const [ward, setWard] = useState<string | null>(null);

    const provinces = useGetProvinces();
    const districts = useGetDistricts(province);
    const wards = useGetWards(district);

    return <div className="w-full flex flex-col gap-10">
        <div className="flex items-center gap-2 text-xs">
            <span>Giỏ hàng</span>
            <span className="text-xs"><RightOutlined /></span>
            <span>Thông tin</span>
            <span className="text-xs"><RightOutlined /></span>
            <span className="text-gray-500">Vận chuyển</span>
            <span className="text-xs"><RightOutlined /></span>
            <span className="text-gray-500">Thanh toán</span>
        </div>

        <div className="flex flex-col gap-3">
            <span className="font-bold text-lg">Địa chỉ giao hàng</span>

            <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                    <Input size="large" placeholder="Họ"/>
                    <Input size="large" placeholder="Tên"/>
                </div>
                <div className="flex gap-5">
                    <Select className="flex-1" value={province} onChange={(value) => setProvince(value)} size="large" placeholder="Tỉnh/Thành phố" options={provinces?.map((province) => ({value: province.id, label: province.name}))}/>
                    <Select disabled={!province} className="flex-1" value={district} onChange={(value) => setDistrict(value)} size="large" placeholder="Quận/Huyện" options={districts?.map((district) => ({value: district.id, label: district.name}))}/>
                    <Select disabled={!district} className="flex-1" value={ward} onChange={(value) => setWard(value)} size="large" placeholder="Phường/Xã" options={wards?.map((ward) => ({value: ward.id, label: ward.full_name}))}/>
                </div>
                <Input size="large" placeholder="Địa chỉ nhà, Đường cụ thể"/>
                <TextArea size="large" placeholder="Nội dung của bạn" rows={4}/>
            </div>
        </div>

        <div className="flex items-center justify-between">
            <Button onClick={() => router.push('/k8/hds02/')} size="large" variant="link" color="default">Thoát</Button>
            <Button onClick={() => router.push('/k8/hds02/checkout')} size="large" className="w-1/2 !rounded-none !h-16 !text-lg" variant="solid" color="default">Tiếp tục tới trang thanh toán</Button>
        </div>
    </div>
}