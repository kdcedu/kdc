import { Image } from "antd";

export default function Footer() {
    return <div className="w-full flex justify-center items-center gap-5 py-3 bg-white border-t border-t-gray-200">
        <Image preview={false} src="/components/logo.png" alt="Logo" width={70}/>
        <div className="flex flex-col justify-center items-center">
            <span className="text-orange-400 font-bold text-2xl">KDC PLAY & LEARN STATION</span>
            <span className="text-xs text-gray-500">© 2025 KDC PLAY & LEARN STATION. All rights reserved.</span>
        </div>
    </div>
}