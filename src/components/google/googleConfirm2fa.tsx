import { ArrowLeftOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons"
import { Button, Image } from "antd"

const items = [
    {
        id: 1,
        name: 'Thiết bị',
        value: 'Windows'
    },
    {
        id: 2,
        name: 'Gần',
        value: 'Hồ Chí Minh, Việt Nam'
    },
    {
        id: 3,
        name: 'Thời gian',
        value: 'Vừa xong'
    },
]

interface GoogleConfirm2faProps {
    setStep: (step: number) => void;
}

export default function GoogleConfirm2fa({ setStep }: GoogleConfirm2faProps) {
    return (
        <div className="w-full h-screen flex flex-col gap-10">
            <div className="flex items-center gap-2">
                <span className="text-gray-400" onClick={() => {setStep(0)}}><ArrowLeftOutlined /></span>
                <span className="font-semibold text-xl text-gray-600">Google</span>
            </div>

            <div className="flex flex-col items-center gap-2 justify-center">
                <span className="text-lg text-center w-full block font-semibold">Có phải bạn đang cố đăng nhập?</span>
                <div className="flex items-center gap-2 justify-center">
                    <Image preview={false} src="/icons/Bin.svg" alt="Avatar" width={20}/>
                    <span className="text-sm text-gray-700">nguyenbin@gmail.com</span>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col">
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-gray-500">{item.value}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-3 w-full">
                <Button onClick={() => {setStep(2)}} className="w-3/4" icon={<span className="text-green-500"><CheckOutlined /></span>}>
                    <span className="text-blue-500 font-semibold">Vâng, đúng là tôi</span>
                </Button>
                <Button onClick={() => {setStep(0)}} className="w-3/4" icon={<span className="text-red-500"><CloseOutlined /></span>}>
                    <span className="text-blue-500 font-semibold">Không, không cho phép</span>
                </Button>
            </div>

        </div>
    )
}
