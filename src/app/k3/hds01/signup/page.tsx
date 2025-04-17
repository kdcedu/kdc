'use client'

import Header from "@/components/header";
import ProfileForm from "@/components/profileForm";
import { IProfile } from "@/constant/profile";
import { message } from "antd";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Bạn đã tạo tài khoản thành công",
    });
  };

  const handleFinish = (user: IProfile) => {
    localStorage.setItem("user", JSON.stringify(user));
    success();
    setTimeout(() => {
      router.push("/k3/hds01");
    }, 2000);
  }

  const handleCancel = () => {
    router.push('/k3/hds01');
  }

  return <>
    {contextHolder}
    <div>
      <Header title="Tạo tài khoản mới"/>

      <div className="border-6 border-sky-300 w-5/6 py-5 px-12 rounded-3xl bg-white mx-auto">
        <div className="text-orange-500 text-xl font-semibold text-center mb-5 w-2/3 mx-auto">Chào mừng bạn đến với Mạng xã hội KDC Network</div>

        <ProfileForm onFinish={handleFinish} onCancel={handleCancel} edit={true} isVertical/>
      </div>
    </div>
  </>
}