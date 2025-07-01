import { Image } from "antd";

export default function SpecialEvent() {
    return <div className="w-full flex flex-col gap-5">
        <span className="font-bold text-lg">Chương trình nổi bật</span>
        <div className="w-full h-64 overflow-hidden">
            <Image src="/images/grade.jpg" alt="Grade" preview={false}/>
        </div>
    </div>
}