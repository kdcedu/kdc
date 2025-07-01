"use client";
import {
  MenuOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import SearchDrawer from "./searchDrawer";
import CartDrawer from "./cartDrawer";
import { useRouter, usePathname } from "next/navigation";

export default function ShopHeader() {
  const contentArray = ["Chào mừng bạn đến với KDC Shop", "Trải nghiệm mua sắm trực tuyến chân thật", "Học tốt để có cơ hội nhận voucher từ thầy cô nhé!"];
  const [index, setIndex] = useState(0);

  const router = useRouter();

  const pathName = usePathname();
  const isShipping = pathName.includes('shipping') || pathName.includes('checkout');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contentArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [contentArray.length]);

  return (
    <div className="w-full flex flex-col relative">
      <div className="relative overflow-hidden w-full flex items-center justify-center text-sm bg-black text-white py-2">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${contentArray.length * 100}%`,
          }}
        >
          {contentArray.map((item, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex justify-center items-center text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={`w-full relative flex items-center justify-between px-5 ${isShipping ? 'py-10' : 'py-5 border-b border-b-gray-200'}`}>
        {!isShipping && <span className="text-xl">
          <MenuOutlined />
        </span>}
        <h1 onClick={() => router.push('/k8/hds02')} className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold cursor-pointer">KDC SHOP</h1>
        {!isShipping && <div className="flex gap-5">
          <SearchDrawer/>
          <CartDrawer/>
        </div>}
      </div>
    </div>
  );
}
