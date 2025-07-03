"use client"
import ShippingForm from "@/components/shop/shippingForm";
import SpecialEvent from "@/components/shop/specialEvent";
import VoucherSelect from "@/components/shop/voucherSelect";
import { useRouter } from "next/navigation";
import { useShop } from "@/context/shopContext";
import { useEffect } from "react";

export default function ShippingPage() {
    const router = useRouter();
    const {cart} = useShop();

    useEffect(() => {
        if(cart.length === 0) {
            router.push('/k8/hds02');
        }
    }, [cart, router])
    return <div className="flex w-full px-20">
        <div className="w-3/5 px-14 py-12 border-r border-gray-200">
            <ShippingForm/>
        </div>
        <div className="w-2/5 flex flex-col gap-6 px-14 py-12">
            <VoucherSelect />
            <SpecialEvent />
        </div>
    </div>
}