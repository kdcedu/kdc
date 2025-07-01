"use client";
import { RightOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
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

  const [form] = Form.useForm();

  const onFinish = () => {
    router.push("/k8/hds02/checkout")
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex items-center gap-2 text-xs">
        <span>Giỏ hàng</span>
        <span className="text-xs">
          <RightOutlined />
        </span>
        <span>Thông tin</span>
        <span className="text-xs">
          <RightOutlined />
        </span>
        <span className="text-gray-500">Vận chuyển</span>
        <span className="text-xs">
          <RightOutlined />
        </span>
        <span className="text-gray-500">Thanh toán</span>
      </div>
      <Form form={form} onFinish={onFinish}>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-lg">Địa chỉ giao hàng</span>

          <div className="flex flex-col">
            <div className="flex gap-5 w-full">
              <Form.Item
                className="flex-1"
                name="firstName"
                rules={[{ required: true, message: "Chưa nhập họ" }]}
              >
                <Input size="large" placeholder="Họ" />
              </Form.Item>
              <Form.Item
                className="flex-1"
                name="lastName"
                rules={[{ required: true, message: "Chưa nhập tên" }]}
              >
                <Input size="large" placeholder="Tên" />
              </Form.Item>
            </div>
            <div className="flex gap-5 w-full">
              <Form.Item
                className="flex-1"
                name="province"
                rules={[
                  { required: true, message: "Chưa chọn tỉnh/thành phố" },
                ]}
              >
                <Select
                  className="flex-1"
                  value={province}
                  onChange={(value) => setProvince(value)}
                  size="large"
                  placeholder="Tỉnh/Thành phố"
                  options={provinces?.map((province) => ({
                    value: province.id,
                    label: province.name,
                  }))}
                />
              </Form.Item>
              <Form.Item
                className="flex-1"
                name="district"
                rules={[
                  { required: true, message: "Chưa chọn quận/huyện" },
                ]}
              >
                <Select
                  disabled={!province}
                  className="flex-1"
                  value={district}
                  onChange={(value) => setDistrict(value)}
                  size="large"
                  placeholder="Quận/Huyện"
                  options={districts?.map((district) => ({
                    value: district.id,
                    label: district.name,
                  }))}
                />
              </Form.Item>
              <Form.Item
                className="flex-1"
                name="ward"
                rules={[{ required: true, message: "Chưa chọn phường/xã" }]}
              >
                <Select
                  disabled={!district}
                  className="flex-1"
                  value={ward}
                  onChange={(value) => setWard(value)}
                  size="large"
                  placeholder="Phường/Xã"
                  options={wards?.map((ward) => ({
                    value: ward.id,
                    label: ward.full_name,
                  }))}
                />
              </Form.Item>
            </div>
            <Form.Item
              name="address"
              rules={[{ required: true, message: "Chưa nhập địa chỉ" }]}
            >
              <Input size="large" placeholder="Địa chỉ nhà, Đường cụ thể" />
            </Form.Item>
            <TextArea size="large" placeholder="Nội dung của bạn" rows={4} />
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
        <Button
          onClick={() => router.push("/k8/hds02/")}
          size="large"
          variant="link"
          color="default"
        >
          Thoát
        </Button>
        <Button
          htmlType="submit"
          size="large"
          className="w-1/2 !rounded-none !h-16 !text-lg"
          variant="solid"
          color="default"
        >
          Tiếp tục tới trang thanh toán
        </Button>
      </div>
      </Form>

      
    </div>
  );
}
