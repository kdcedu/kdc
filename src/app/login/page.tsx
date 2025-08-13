/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";
import { Button, Form, Image, Input, message } from "antd";
import { useAuth } from "@/context/authContext";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login() {
  const { login: contextLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = async (values: any) => {
    setLoading(true);
    try {
      await contextLogin({ username: values.username, password: values.password });
    } catch (err: any) {
      form.setFields([
        {
          name: 'password',
          errors: [err.message || 'Tên đăng nhập hoặc mật khẩu không đúng!'],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full md:w-[500px] flex flex-col items-center h-full bg-white relative">
        {/* Header */}
        <div className="w-full flex flex-col items-center gap-5 bg-orange-50 pb-5 pt-2">
          <Image width={150} src="/components/logo.png" alt="Logo" preview={false} />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-orange-400">KDC PLAY & LEARN STATION</span>
            <span className="text-sm text-gray-500">Nền tảng Giáo dục Công dân số</span>
          </div>
        </div>
        
        {/* Form đăng nhập */}
        <Form
          form={form}
          onFinish={handleFinish}
          onFinishFailed={() => message.error("Vui lòng nhập đầy đủ thông tin!")}
          className="w-full flex flex-col px-10 pt-12" 
          size="large"
          autoComplete="off"
        >
          <span className="text-2xl font-bold text-gray-600 text-center px-10 mt-15 mb-10">Đăng nhập tài khoản</span>
          <div    className="mx-12">
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
         
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
          </Form.Item>
          </div>

          <div    className="mx-12">
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Mật khẩu" />
          </Form.Item>
          </div>

          
          <div className="flex justify-end -mt-4 mb-4 mx-12">
              <Button type="link" className="!p-0 !h-auto !text-orange-500">Quên mật khẩu?</Button>
          </div>

          <div    className="mx-12">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full !font-semibold !bg-orange-500 hover:!bg-orange-600"
              loading={loading}
            >
              Đăng nhập
            </Button>
          </Form.Item>
          </div>
        </Form>

        {/* Spacer để đẩy footer xuống dưới cùng */}
        <div className="flex-grow"></div>

        {/* Footer */}
        <div className="bg-gray-50 w-full flex flex-col gap-3 items-center justify-center px-10 py-5">
          <span className="text-sm text-gray-500">Muốn trải nghiệm nền tảng này?</span>
          <Button variant="outlined" color="orange"  size="large" className="w-full">Đăng ký ngay</Button>
          <span className="text-xs text-gray-500">© 2024 KDC PLAY & LEARN STATION. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
