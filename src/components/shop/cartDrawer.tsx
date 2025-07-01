import { Button, Drawer } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import CartItem from "./cartItem";
import { shirts } from "@/constant/shop/shirt";
import { redirect } from "next/navigation";
import { useCallback } from "react";

export default function CartDrawer() {
    const [open, setOpen] = useState(false);

    const handleCheckout = useCallback(() => {
        setOpen(false); 
        redirect('/k8/hds02/shipping');
    }, [setOpen]);

    return <>
    <Button onClick={() => setOpen(true)} type="text" icon={<span className="text-xl"><ShoppingCartOutlined /></span>}/>
    <Drawer
    closable={false}
    onClose={() => setOpen(false)}
    open={open}
    height={120}
    size="large"
    placement="right"
    styles={
        {
            body: {
                padding: 0
            }
        }
    }
    >
        <div className="flex flex-col relative h-screen">
            <div className="flex flex-col py-6 w-full items-center justify-center border-b border-black">
                <span className="text-xl"><ShoppingCartOutlined /></span>
                <span className="text-lg">Giỏ hàng của bạn</span>
            </div>
            <div className="w-full flex flex-col gap-5 py-3 px-5 h-[calc(100%-150px)] overflow-auto">
            {shirts.map((shirt) => (<CartItem key={shirt.id} title="Levents® Blink Blink XL Logo Oversized Tee/ Black" price={500000} size="XL" color="Black" quantity={1} image="//levents.asia/cdn/shop/files/Black_LTSOVCOA218UD0100SS25_1.jpg?v=1750497485&width=300"/>) )}
            </div>
            <div className="w-full px-5 py-3 bg-white border-t border-t-gray-200 absolute bottom-0">
                <Button onClick={handleCheckout} className="w-full !rounded-none !h-14 !text-lg" size="large" variant="solid" color="default">Thanh toán</Button>
            </div>
        </div>        
    </Drawer>
    </>
}