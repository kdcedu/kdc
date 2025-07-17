'use client'

import GoogleGeneralLogin from "@/components/google/googleGeneralLogin"
import GooglePassword from "@/components/google/googlePassword"
import { CaretDownFilled } from "@ant-design/icons"
import { Image } from "antd"

export default function Login() {
    return (
        <GoogleGeneralLogin title="Minh Khôi" subTitle={<div className="flex w-fit items-center gap-2 text-sm text-gray-500 rounded-full border border-gray-400 p-1 active:bg-gray-200 cursor-pointer">
            <Image className="rounded-full" preview={false} src="/avatars/Avatar_MinhKhoi.jpg" alt="Avatar" width={25}/>
            <span>minhkhoi@gmail.com</span>
            <span className="text-xs"><CaretDownFilled /></span>
            </div>} content={<GooglePassword />} />
    )
}