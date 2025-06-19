'use client'

import GoogleGeneralLogin from "@/components/google/googleGeneralLogin"
import GoogleLogin from "@/components/google/googleLogin"

export default function NormalLogin() {
    return (
        <GoogleGeneralLogin title="Đăng nhập" subTitle={<span className="text-sm text-gray-500">Sử dụng tài khoản Google của bạn</span>} content={<GoogleLogin />} />
    )
}