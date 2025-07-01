"use client";
import ShopHeader from "@/components/shop/shopHeader";
import { ShopProvider } from "@/context/shopContext";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col">
        <ShopProvider>
            <ShopHeader/>
            {children}
        </ShopProvider>
    </div>
}