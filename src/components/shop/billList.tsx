"use client"
import { useShop } from "@/context/shopContext";
import CheckoutCard from "./checkoutCard";

export default function BillList() {
    const { order } = useShop();     
    return <div>
        <span className="font-bold">Danh sách sản phẩm</span>
        <div className="w-full flex flex-col gap-3">
            {order.map((item) => (
                <CheckoutCard
                    isFinish
                    discount={item.discount || 0}
                    key={item.uniqueId}
                    title={item.title}
                    price={item.price}
                    size={item.size}
                    color={Array.isArray(item.color) ? item.color[0] : item.color}
                    quantity={item.quantity}
                    image={item.image}
                />
            ))}
            
        </div>
    </div>
}