'use client'

import GoogleGeneralLogin from "@/components/google/googleGeneralLogin"
import GoogleChooseAccount from "@/components/google/googleChooseAccount"

export default function Login() {
    return (
        <GoogleGeneralLogin title="Chọn tài khoản" content={<GoogleChooseAccount />} />
    )
}