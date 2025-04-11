"use client";

import { Button, DatePicker, Form, Image, Input, message } from "antd";
import { defaultProfile } from "@/constant/profile";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useState } from "react";
import { CameraFilled, EditFilled } from "@ant-design/icons";

export default function HDS01() {
  const [form] = Form.useForm();

  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState(defaultProfile);

  const inputClassName = '!border-0 focus:!shadow-none'

  const onFinish = () => {
    setInfo(form.getFieldsValue());
    setEdit(false);
    success();
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Bạn đã cập nhật thông tin cá nhân thành công',
    });
  };

  return (
    <>
        {contextHolder}

        <div className="text-3xl font-semibold text-orange-500 text-center mb-5">
          Hồ sơ cá nhân của bạn
        </div>

        <div className="border-6 border-sky-300 rounded-3xl bg-white py-5 px-20 w-4/5 mx-auto">
          <div className="w-full">
            <div className="w-full h-56">
              <Image
                alt="Background"
                preview={false}
                width="100%"
                height="100%"
                src="https://t4.ftcdn.net/jpg/05/42/73/17/360_F_542731787_npIDENXs9NMkl1mtyHKj8De2WBL2vnFW.jpg"
              />
            </div>

            <div className="relative -top-10 left-10 flex items-center">
              <div className=" bg-white w-32 h-32 flex justify-center p-2 rounded-full">
                <Image alt="Avatar" preview={false} width={100} src="/icons/Bin.svg" />
              </div>
              <div className="relative right-8 top-10 font-semibold text-xl bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full active:opacity-60 cursor-pointer">
                <CameraFilled />
              </div>
              <div className="mt-5 flex gap-40">
                <div>
                  <div className="text-2xl font-semibold">{info.fullName}</div>
                  <div className="text-xs font-light text-gray-500">
                    50 người bạn
                  </div>
                </div>

                <div className="flex justify-center items-center rounded-full w-8 h-8 bg-gray-200 cursor-pointer active:opacity-60"
                onClick={() => setEdit(true)}>
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
                label={
                  <span className="font-semibold text-base">Tên tài khoản</span>
                }
                name="username"
                rules={[
                  { required: true, message: "Bạn chưa nhập tên tài khoản" },
                ]}
                required={false}
              >
                <Input readOnly={!edit} className={`${!edit && inputClassName}`} />
              </Form.Item>
              
              <Form.Item
                label={
                  <span className="font-semibold text-base">Mật khẩu</span>
                }
                name="password"
                rules={[{ required: true, message: "Bạn chưa nhập mật khẩu" }]}
                required={false}
              >
                {edit ? (
    <Input.Password
    />
  ) : (
    <div
      className={`${inputClassName} bg-transparent w-full py-1 px-3 rounded`}
    >
      {"•".repeat(info.password.length)}
    </div>
  )}
              </Form.Item>

              <Form.Item
                label={
                  <span className="font-semibold text-base">Họ và tên</span>
                }
                name="fullName"
                rules={[{ required: true, message: "Bạn chưa nhập họ và tên" }]}
                required={false}
              >
                <Input readOnly={!edit} className={`${!edit && inputClassName}`} />
              </Form.Item>

              <Form.Item
                label={
                  <span className="font-semibold text-base">Ngày sinh</span>
                }
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

              <Form.Item
                label={
                  <span className="font-semibold text-base">
                    Mô tả về bản thân
                  </span>
                }
                name="biography"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập mô tả về bản thân",
                  },
                ]}
                required={false}
              >
                <TextArea autoSize={{ minRows: 1, maxRows: 10 }} readOnly={!edit} className={`${!edit && inputClassName}`} />
              </Form.Item>

              {edit && <Form.Item className="flex justify-end" label={null}>
                <Button variant="solid" color="green" htmlType="submit">
                  Hoàn thành
                </Button>
              </Form.Item>}
            </Form>
          </div>
        </div>
    </>
  );
}
