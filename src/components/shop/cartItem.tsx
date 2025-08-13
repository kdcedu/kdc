import { useShop } from "@/context/shopContext";
import { convertPrice } from "@/utils/convertPrice";
import { Button, Image } from "antd";
import { useGlobalMessage } from "@/context/globalMessageContext";

export interface CartItemProps {
    uniqueId?: number;
    id: number;
    title: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
    image: string;
    discount?: number;
}

export default function CartItem({uniqueId, title, price, size, color, quantity, image, discount}: CartItemProps) {
    const { cart, setCart } = useShop();

    const { createSuccessMessage } = useGlobalMessage();
    
    const handleDelete = () => {
        const newCart = cart.filter((item) => item.uniqueId !== uniqueId);
        setCart(newCart);
        createSuccessMessage('Xóa sản phẩm thành công');
    }
    
    return <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-start gap-5">
            <div className="w-1/3">
                <Image src={image} alt="product" preview={false}/>
            </div>
            <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col items-start gap-1">
                    <span className="text-xl">{title}</span>
                    <div className="flex items-center gap-2">
                        {discount && <span className="text-lg text-red-500">{convertPrice(price - (price * discount / 100))}</span>}
                        <span className={`${discount ? 'line-through' : 'text-lg'}`}>{convertPrice(price)}</span>
                    </div>
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

                   <Button onClick={handleDelete} className="w-full" variant="filled" color="default">Xóa</Button>
                </div>
            </div>
        </div>
    </div>
}
