import { Button, Image } from "antd";

export interface CartItemProps {
    title: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
    image: string;
}

export default function CartItem({title, price, size, color, quantity, image}: CartItemProps) {
    return <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-start gap-5">
            <div className="w-1/3">
                <Image src={image} alt="product" preview={false}/>
            </div>
            <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col items-start gap-1">
                    <span className="text-xl">{title}</span>
                    <span className="text-lg">{price}</span>
                </div>
                <div className="flex flex-col items-center gap-5">
                   <div className="flex items-center justify-between w-full">
                    <span>Size:</span>
                    <span>{size}</span>
                   </div>
                   <div className="flex items-center justify-between w-full">
                    <span>Màu sắc:</span>
                    <span>{color}</span>
                   </div>
                   <div className="flex items-center justify-between w-full">
                    <span>Số lượng:</span>
                    <span>{quantity}</span>
                   </div>

                   <Button className="w-full" variant="filled" color="default">Xóa</Button>
                </div>
            </div>
        </div>
    </div>
}