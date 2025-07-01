"use client"

import ProductDetail from "@/components/shop/productDetail";
import ShopBreadcrumb from "@/components/shop/ShopBreadcrumb";
import { shirts } from "@/constant/shop/shirt";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
    const {id} = useParams();
    const product = shirts.find((shirt) => shirt.id === id);
    return <div>
        <ShopBreadcrumb title={product?.title}/>
        <div className="flex flex-col">
            <ProductDetail product={product}/>
        </div>
    </div>
}