import { convertPrice } from "@/utils/convertPrice";
import { Badge, Image } from "antd";

interface CheckoutCardProps {
    title: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
    image: string;
}

export default function CheckoutCard({ title, price, size, color, quantity, image}: CheckoutCardProps) {
    return <div className="w-full flex gap-5">
        <Badge count={quantity}>
            <Image src={image} alt="product" preview={false} width={60}/>
        </Badge>
        <div className="flex flex-col gap-1 text-sm">
            <span>{title}</span>
            <span className="text-gray-500">Size {size} / {color}</span>
        </div>
        <span className="text-sm">{convertPrice(price * quantity)}</span>
    </div>
}