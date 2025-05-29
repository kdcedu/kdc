'use client'

import Header from "@/components/header";
import ProfileForm from "@/components/profileForm";
import { message } from "antd";
import { usePathname, useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const pathname = usePathname();

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Bạn đã đăng nhập thành công",
    });
  };

  const handleFinish = () => {
    success();
    setTimeout(() => {
      router.push(pathname + '/profile');
    }, 2000);
  }

  const handleCancel = () => {
    router.push(pathname + '/signup')
  }
  return <>
  {contextHolder}
    <div className="flex flex-col items-center">
      <Header title="Đăng nhập tài khoản"/>

      <div className="border-6 border-sky-300 w-5/6 py-5 px-12 rounded-3xl bg-white flex flex-col items-center">
        <div className="text-orange-500 text-xl font-semibold text-center mb-5 w-2/3 mx-auto">Chào mừng bạn đến với Mạng xã hội KDC Network</div>

        <ProfileForm onFinish={handleFinish} onCancel={handleCancel} edit={true} isVertical isLogin/>
      </div>
    </div>
  </>
}