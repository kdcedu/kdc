import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem } from "@/constant/shop/shirt";
import { Voucher } from "@/constant/shop/voucher";

interface ShopContextType {
    cart: CartItem[],
    setCart: (cart: CartItem[]) => void,
    voucher: Voucher[],
    setVoucher: (voucher: Voucher[]) => void,
    shipping: number,
    setShipping: (shipping: number) => void,
    total: number,
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentCart, setCurrentCart] = useState<CartItem[]>([]);
    const [voucher, setVoucher] = useState<Voucher[]>([]);
    const [shipping, setShipping] = useState(0);

    const total = useMemo(() => {
        let total = currentCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        voucher.forEach((item) => {
            if (item.unit === 'percent') {
                total -= total * item.discount / 100;
            } else {
                total -= item.discount;
            }
        });
        return total + shipping;
    }, [currentCart, voucher, shipping]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCurrentCart(JSON.parse(storedCart));
        }
    }, [])

    const setCart = (cart: CartItem[]) => {
        setCurrentCart(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return (
        <ShopContext.Provider value={{ cart: currentCart, setCart, voucher, setVoucher, shipping, setShipping, total }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
};
