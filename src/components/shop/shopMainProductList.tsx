'use client'

import { Dropdown } from "antd";
import ProductCard from "./productCard";
import { shirts } from "@/constant/shop/shirt";

export default function ShopMainProductList() {
    return <div className="w-4/5">
        <div className="flex items-center justify-between px-10 py-6 border-b border-l border-gray-200">
            <span>50 sản phẩm</span>
            <div className="flex items-center gap-2">
                <span>Sắp xếp theo: </span>
                <Dropdown menu={{ items: [
                    {
                        key: '1',
                        label: 'Giá cao nhất'
                    },
                    {
                        key: '2',
                        label: 'Giá thấp nhất'
                    }
                ] }} trigger={['click']}>
                    <span>Giá cao nhất</span>
                </Dropdown>
            </div>
        </div>
        <div className="grid grid-cols-3">
            {shirts.map((shirt) => (
                <ProductCard id={shirt.id} key={shirt.id} title={shirt.title} price={shirt.price} color={shirt.color} image={shirt.image}/>
            ))}
        </div>
    </div>
}