import { convertPrice } from "@/utils/convertPrice";
import { Badge, Image } from "antd";

interface CheckoutCardProps {
    isFinish?: boolean;
    title: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
    image: string;
    discount: number;
}

export default function CheckoutCard({ title, price, size, color, quantity, image, discount, isFinish }: CheckoutCardProps) {
    return <div className="w-full flex justify-between">
        <div className="flex gap-4"> 
            <Badge count={isFinish ? 0 : quantity}>
                <Image src={image} alt="product" preview={false} width={60}/>
            </Badge>
            <div className={`flex flex-col w-3/4 gap-1 ${isFinish ? 'text-xs' : 'text-sm'}`}>
                <span>{title}</span>
                <span className="text-gray-500">Size {size} / {color} {isFinish && `x ${quantity}`}</span>
            </div>
        </div>
        <div className="flex flex-col items-center text-sm">
            {discount && discount !== 0 && <span className="text-red-500">{convertPrice(price * quantity * (discount ? (1 - discount / 100) : 1))}</span>}
            <span className={`${discount && discount !== 0 ? 'line-through text-gray-500' : 'text-gray-500'}`}>{convertPrice(price * quantity)}</span>
        </div>
    </div>
}