'use client'

import Google2faNumber from "@/components/google/google2faNumber";
import GoogleGeneralLogin from "@/components/google/googleGeneralLogin";
import GooglePassword from "@/components/google/googlePassword";
import GooglePhone from "@/components/google/googlePhone";
import GoogleWaiting2faConfirm from "@/components/google/googleWaiting2faConfirm";
import { CaretDownFilled } from "@ant-design/icons";
import { Image } from "antd";
import { useMemo, useState } from "react";

export default function Login2fa() {
    const [step, setStep] = useState(0);

    const correctNum = useMemo(() => {
        return Math.floor(Math.random() * 100);
    }, []);

    const screens = [
        {
            title: "Minh Khôi",
            subTitle: <div className="flex items-center gap-2 text-sm text-gray-500 rounded-full border border-gray-400 p-1 active:bg-gray-200 cursor-pointer">
            <Image preview={false} src="/avatars/Avatar_MinhKhoi.jpg" alt="Avatar" width={25}/>
            <span>minhkhoi@gmail.com</span>
            <span className="text-xs"><CaretDownFilled /></span>
        </div>,
            content: <GooglePassword setStep={setStep} />
        },
        {
            title: "Xác minh 2 bước",
            subTitle: <div className="flex flex-col gap-3">
            <span className="text-sm text-gray-500">Để giữ an toàn cho tài khoản của bạn, Google muốn đảm bảo rằng bạn chính là người đang cố đăng nhập</span>
            <div className="flex w-fit items-center gap-2 text-sm text-gray-500 rounded-full border border-gray-400 p-1 active:bg-gray-200 cursor-pointer">
                <Image preview={false} src="/avatars/Avatar_MinhKhoi.jpg" alt="Avatar" width={25}/>
                <span>minhkhoi@gmail.com</span>
                <span className="text-xs"><CaretDownFilled /></span>
            </div>
        </div>,
            content: <GoogleWaiting2faConfirm />
        },
        {
            title: "Xác minh 2 bước",
            subTitle: <span className="text-sm text-gray-500">Bạn hãy chọn con số này trên Thiết bị di động của bạn để xác nhận rằng bạn chính là người đang cố đăng nhập.</span>,
            content: <Google2faNumber num={correctNum} />
        }
    ]

    return (
        <div className="flex">
            <div className="w-3/4">
                <GoogleGeneralLogin title={screens[step].title} subTitle={screens[step].subTitle} content={screens[step].content} />
            </div>
            <div className="flex-1">
                <GooglePhone step={step} setStep={setStep} correctNumber={correctNum} />
            </div>
        </div>
    )
}