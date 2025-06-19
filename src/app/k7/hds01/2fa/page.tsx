"use client";

import GoogleHeader from "@/components/google/googleHeader";
import GoogleStepTwoSection from "@/components/google/googleStepTwoSection";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import Google2faModal from "@/components/google/google2faModal";
import { useState } from "react";
import { useGoogle } from "@/context/googleContext";
import { useRouter } from "next/navigation";

export default function TwoFactorAuth() {
  const [openModal, setOpenModal] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { setAuth, isAuth } = useGoogle();

  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-5">
      <Google2faModal
        title="Giờ đây, bạn được bảo vệ bằng tính năng Xác minh 2 bước"
        open={openModal}
        onClose={() => {
          setOpenModal(false)
          router.push("/k7/hds01/login-2fa")
        }}
      />

      <Google2faModal
        title="Bạn có chắc chắn muốn tắt tính năng Xác minh 2 bước?"
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={() => {
          setOpenDeleteModal(false);
          setAuth(false);
        }}
      />
      <GoogleHeader isAuth />

      <div className="w-full border-b border-gray-200 flex items-center justify-center">
        <div className="w-2/3 flex items-center justify-start gap-5 pb-3">
          <span className="text-xl" onClick={() => window.history.back()}>
            <ArrowLeftOutlined />
          </span>
          <span className="text-3xl">Xác minh 2 bước</span>
        </div>
      </div>

      <div className="w-2/3 flex gap-10 items-start">
        <div className="w-1/2 flex flex-col gap-2">
          <span className="text-xl">Bật tính năng Xác minh 2 bước</span>
          <span className="text-sm font-light">
            Hãy ngăn chặn tin tặc truy cập vào tài khoản của bạn bằng một lớp
            bảo mật nữa.
          </span>
          <span className="text-sm font-light">
            Nếu không đăng nhập bằng khoá truy cập, bạn sẽ được yêu cầu hoàn tất
            bước thứ hai an toàn nhất có sẵn trên tài khoản của mình. Bạn có thể
            cập nhật các bước thứ hai và lựa chọn đăng nhập bất cứ lúc nào trong
            phần cài đặt.
          </span>
        </div>

        <Image src="/images/2fa.png" alt="2fa" preview={false} width={250} />
      </div>

      <div className="w-2/3 flex justify-start">
        <Button
          size="large"
          variant={isAuth ? "outlined" : "solid"}
          color="blue"
          className="!rounded-full"
          onClick={() => {
            if (isAuth) {
              setOpenDeleteModal(true);
            } else {
              setOpenModal(true);
              setAuth(true);
            }
          }}
        >
          {isAuth ? "Tắt Xác minh 2 bước" : "Bật tính năng Xác minh 2 bước"}
        </Button>
      </div>

      <div className="w-2/3">
        <GoogleStepTwoSection />
      </div>
    </div>
  );
}
