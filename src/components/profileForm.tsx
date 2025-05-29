import { IProfile } from "@/constant/profile";
import { Button, DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface ProfileFormProps {
  onFinish: (value: IProfile) => void;
  onCancel: () => void;
  info?: IProfile;
  edit?: boolean;
  isVertical?: boolean;
  isLogin?: boolean;
}

export default function ProfileForm( {onFinish, info, onCancel, edit, isVertical, isLogin} : ProfileFormProps ) {
  const [form] = Form.useForm();

  const inputClassName = "!border-0 focus:!shadow-none";

  const [user, setUser] = useState<IProfile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, [])

  const handleFinish = () => {
    if (isLogin) {
      if (user && form.getFieldValue('email') === user?.email && form.getFieldValue('password') === user?.password) {
        onFinish(form.getFieldsValue())
      } else {
        form.setFields([
          {
            name: "email",
            errors: ["Email hoặc mật khẩu không đúng"],
          },
          {
            name: "password",
            errors: [""],
          },
        ]);
      }
    } else {
      onFinish(form.getFieldsValue())
    }
  }

  return <Form
  name="profile"
  form={form}
  initialValues={info}
  onFinish={handleFinish}
  labelCol={{ span: 8, style: { textAlign: "left" } }}
  wrapperCol={{ span: 24 }}
  layout={`${isVertical ? 'vertical' : 'horizontal'}`}
  autoComplete="off"
  className="w-5/6"
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
      placeholder="Nhập tài khoản email của bạn"
    />
  </Form.Item>

  <Form.Item
    label={<span className="font-semibold text-base">Mật khẩu</span>}
    name="password"
    rules={[{ required: true, message: "Bạn chưa nhập mật khẩu" }]}
    required={false}
  >
    {edit ? (
      <Input.Password placeholder="Nhập mật khẩu của bạn"/>
    ) : (
      <div
        className={`${inputClassName} bg-transparent w-full py-1 px-3 rounded`}
      >
        {"•".repeat(info ? info.password.length : 0)}
      </div>
    )}
  </Form.Item>

  {!isLogin && <>
    <Form.Item
    label={<span className="font-semibold text-base">Họ và tên</span>}
    name="fullName"
    rules={[{ required: true, message: "Bạn chưa nhập họ và tên" }]}
    required={false}
  >
    <Input
      placeholder="Nhập tên của bạn"
      readOnly={!edit}
      className={`${!edit && inputClassName}`}
    />
  </Form.Item>

  <Form.Item
    label={<span className="font-semibold text-base">Giới tính</span>}
    name="gender"
    rules={[{ required: true, message: "Bạn chưa chọn giới tính" }]}
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
    rules={[{ required: true, message: "Bạn chưa chọn ngày sinh" }]}
    required={false}
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
      placeholder="Chọn ngày sinh"
    />
  </Form.Item>
  </>}
  

  {edit && (
    <Form.Item label={isVertical ? <></> : null}>
      <div className={`flex gap-5 ${isVertical ? 'flex-col' : 'justify-end'}`}>
        <Button variant="solid" color="orange" htmlType="submit">
          <span className="font-semibold">{isLogin ? 'Đăng nhập' : 'Hoàn thành'}</span>
        </Button>

        {isVertical ? <div className="text-center">
          {isLogin ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
          
          <Button className="!px-1" variant="link" color="orange"><span className="underline" onClick={onCancel}>{isLogin ? 'Đăng ký tại đây' : 'Đăng nhập tại đây'}</span></Button>
        </div> : <Button
          onClick={() => {
            form.setFieldsValue(info);
            onCancel();
          }}
        >
          Hủy
        </Button>}
        
      </div>
    </Form.Item>
  )}
</Form>
}