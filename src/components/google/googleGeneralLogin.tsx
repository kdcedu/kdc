import { Image } from "antd";

interface GoogleGeneralLoginProps {
    title: string;
    subTitle?: React.ReactNode;
    content: React.ReactNode;
}

export default function GoogleGeneralLogin({title, subTitle, content}: GoogleGeneralLoginProps) {
    return (
        <div className="w-full h-screen px-40 bg-gray-100 flex flex-col gap-3 items-center justify-center">
            <div className="w-full bg-white rounded-xl p-8 flex flex-col gap-5">
      <Image
        preview={false}
        src="/icons/google_logo.png"
        alt="Google Logo"
        width={50}
      />
      <div className="flex w-full justify-between items-start gap-5">
        <div className="flex flex-col gap-4 w-1/2">
          <span className="text-2xl">
            {title}
          </span>
          {subTitle}
        </div>
        {content}
      </div>
    </div>
    <div className="w-full flex gap-5 justify-end text-xs text-gray-500">
                <span>Trợ giúp</span>
                <span>Quyền riêng tư</span>
                <span>Điều khoản</span>
            </div>
    </div>
    )
}