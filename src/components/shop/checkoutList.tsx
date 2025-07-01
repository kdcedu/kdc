"use client"
import CheckoutCard from "./checkoutCard";
import { useShop } from "@/context/shopContext";

export default function CheckoutList() {
    const { cart } = useShop();
    return <div className="w-full flex flex-col gap-3">
        <span className="font-bold text-lg">Danh sách sản phẩm</span>
        <div className="w-full flex flex-col gap-3">
            {cart.map((item) => (
                <CheckoutCard
                    key={item.id}
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