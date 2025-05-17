"use client";

import { Image, message } from "antd";
import { defaultProfile, IProfile } from "@/constant/profile";
import { useEffect, useState } from "react";
import { EditFilled } from "@ant-design/icons";
import AvatarPicker from "@/components/avatarPicker";
import ProfileForm from "@/components/profileForm";
import Header from "@/components/header";
import dayjs from "dayjs";

export default function Profile() {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState<IProfile | null>(null);

  useEffect(() => {
      const stored = localStorage.getItem("user");
      if (stored) {
        setInfo({...JSON.parse(stored), birth: dayjs(JSON.parse(stored).birth)});
      } else {
        setInfo(defaultProfile);
        localStorage.setItem('user', JSON.stringify(defaultProfile));
      }
    }, [])

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Bạn đã cập nhật thông tin cá nhân thành công",
    });
  };

  const onFinish = (formValue: IProfile) => {
    setInfo(formValue);
    localStorage.setItem("user", JSON.stringify(formValue));
    setEdit(false);
    success();
  };

  const onCancel = () => {
    setEdit(false);
  }

  return (
    <>
      {contextHolder}
      <div>
        <Header title="Hồ sơ cá nhân của bạn"/>

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

            <div className="relative -top-10 flex items-center gap-10 px-10">
              <AvatarPicker />

              <div className="mt-5 flex justify-between gap-10">
                <div>
                  <div className="text-2xl font-semibold">{info?.fullName}</div>
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
            {info && <ProfileForm onFinish={onFinish} onCancel={onCancel} info={info} edit={edit}/>}
          </div>
        </div>
      </div>
    </>
  );
}