import ShopHeader from "@/components/shop/shopHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col">
        <ShopHeader/>
        {children}
    </div>
}