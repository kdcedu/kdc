"use client";

import { Button, DatePicker, Form, Image, Input, message, Select } from "antd";
import { defaultProfile } from "@/constant/profile";
import dayjs from "dayjs";
import { useState } from "react";
import { EditFilled } from "@ant-design/icons";
import AvatarPicker from "@/components/avatarPicker";
import { useRouter } from "next/navigation";

export default function HDS01() {
  const router = useRouter();

  const [form] = Form.useForm();

  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState(defaultProfile);

  const inputClassName = "!border-0 focus:!shadow-none";

  const onFinish = () => {
    setInfo(form.getFieldsValue());
    setEdit(false);
    success();
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Bạn đã cập nhật thông tin cá nhân thành công",
    });
  };

  return (
    <>
      {contextHolder}

      <div className="w-screen flex bg-white mb-5 items-end justify-center gap-5 py-1 border-b border-b-gray-300">
        <div className="flex w-24 cursor-pointer" onClick={() => router.push('/')}>
          <Image alt="Logo" preview={false} src="/components/logo.png" />
        </div>
        <div className="flex text-3xl font-semibold text-orange-500">
          Hồ sơ cá nhân của bạn
        </div>
      </div>

      <div className="border-6 border-sky-300 w-5/6 rounded-3xl bg-white mx-auto">
        <div className="w-full">
          <div className="w-full h-56 rounded-t-2xl overflow-hidden">
            <Image
              alt="Background"
              preview={false}
              width="100%"
              height="100%"
              src="https://t4.ftcdn.net/jpg/05/42/73/17/360_F_542731787_npIDENXs9NMkl1mtyHKj8De2WBL2vnFW.jpg"
            />
          </div>

          <div className="relative -top-10 flex items-center px-10">
            <AvatarPicker />

            <div className="mt-5 flex justify-between gap-10">
              <div>
                <div className="text-2xl font-semibold">{info.fullName}</div>
                <div className="text-xs font-light text-gray-500">
                  50 người bạn
                </div>
              </div>

              <div
                className={`flex justify-center items-center rounded-full w-8 h-8 bg-gray-200 cursor-pointer active:opacity-60 ${
                  edit && "invisible"
                }`}
                onClick={() => setEdit(true)}
              >
                <EditFilled />
              </div>
            </div>
          </div>
        </div>

        <div className="px-12">
          <Form
            name="profile"
            form={form}
            initialValues={info}
            onFinish={onFinish}
            labelCol={{ span: 8, style: { textAlign: "left" } }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            autoComplete="off"
          >
            <Form.Item
              label={<span className="font-semibold text-base">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Bạn chưa nhập email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
              required={false}
            >
              <Input
                readOnly={!edit}
                className={`${!edit && inputClassName}`}
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold text-base">Mật khẩu</span>}
              name="password"
              rules={[{ required: true, message: "Bạn chưa nhập mật khẩu" }]}
              required={false}
            >
              {edit ? (
                <Input.Password />
              ) : (
                <div
                  className={`${inputClassName} bg-transparent w-full py-1 px-3 rounded`}
                >
                  {"•".repeat(info.password.length)}
                </div>
              )}
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold text-base">Họ và tên</span>}
              name="fullName"
              rules={[{ required: true, message: "Bạn chưa nhập họ và tên" }]}
              required={false}
            >
              <Input
                readOnly={!edit}
                className={`${!edit && inputClassName}`}
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold text-base">Giới tính</span>}
              name="gender"
              rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
              required={false}
            >
              {edit ? <Select placeholder="Chọn giới tính">
                <Select.Option value="Nam">Nam</Select.Option>
                <Select.Option value="Nữ">Nữ</Select.Option>
                <Select.Option value="Khác">Khác</Select.Option>
              </Select> : <Input
                readOnly={!edit}
                className={`${!edit && inputClassName}`}
              />}
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold text-base">Ngày sinh</span>}
              name="birth"
            >
              <DatePicker
                format="DD/MM/YYYY"
                disabledDate={(current) => {
                  return current && current > dayjs().endOf("day");
                }}
                open={edit ? undefined : false}
                inputReadOnly
                className={`${!edit && inputClassName}`}
                allowClear={edit}
              />
            </Form.Item>

            {edit && (
              <Form.Item label={null}>
                <div className="flex gap-5 justify-end">
                  <Button variant="solid" color="cyan" htmlType="submit">
                    Hoàn thành
                  </Button>

                  <Button
                    onClick={() => {
                      form.setFieldsValue(info);
                      setEdit(false);
                    }}
                  >
                    Hủy
                  </Button>
                </div>
              </Form.Item>
            )}
          </Form>
        </div>
      </div>
    </>
  );
}
