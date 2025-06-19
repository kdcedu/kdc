import { ArrowLeftOutlined } from "@ant-design/icons";
import { Image, message } from "antd";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

interface GooglePhone2faNumberPickerProps {
    setStep: (step: number) => void;
    correctNumber: number;
}

export default function GooglePhone2faNumberPicker({ setStep, correctNumber }: GooglePhone2faNumberPickerProps) {
    const options = useMemo(() => {
        return [correctNumber, ...Array(2).fill(0).map(() => Math.floor(Math.random() * 100))]
          .sort(() => Math.random() - 0.5);
      }, [correctNumber]);

    const router = useRouter();

    const [messageApi, contextHolder] = message.useMessage();


    const handleCorrectNumber = () => {
        messageApi.success('Bạn đã chọn đúng');
        setTimeout(() => {
            router.push('/k7/hds01/auth');
        }, 1000);
    }

    const handleWrongNumber = () => {
        messageApi.error('Bạn đã chọn sai');
        setTimeout(() => {
            setStep(0);
            window.location.reload();
        }, 1000);
    }
      
    
    return <div className="w-full h-screen flex flex-col gap-10">
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

    <div className="text-sm text-center font-semibold">
        Chọn số bạn thấy trên trang đăng nhập
    </div>

    <div className="flex justify-between items-center px-5">
        {options.map((option, index) => (
            <div key={index} onClick={() => {
                if(option === correctNumber) {
                    handleCorrectNumber();
                }
                else {
                    handleWrongNumber();
                }
            }} className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-400">
                {option}
            </div>
        ))}
    </div>

    {contextHolder}
</div>
}