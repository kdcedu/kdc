import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem } from "@/constant/shop/shirt";
import { Voucher } from "@/constant/shop/voucher";
import { convertPrice } from "@/utils/convertPrice";

interface ShopContextType {
    cart: CartItem[],
    setCart: (cart: CartItem[]) => void,
    order: CartItem[],
    setOrder: (order: CartItem[]) => void,
    voucher: Voucher[],
    setVoucher: (voucher: Voucher[]) => void,
    shipping: number,
    setShipping: (shipping: number) => void,
    total: number,
    address: string,
    setAddress: (address: string) => void,
    balance: number,
    setBalance: (balance: number) => void,
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentCart, setCurrentCart] = useState<CartItem[]>([]);
    const [order, setOrder] = useState<CartItem[]>([]);
    const [voucher, setVoucher] = useState<Voucher[]>([]);
    const [shipping, setShipping] = useState(0);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState(5000000);

    const total = useMemo(() => {
        let total = currentCart.reduce((acc, item) => acc + item.price * item.quantity * (item.discount ? (1 - item.discount / 100) : 1), 0);
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
        const storedAddress = localStorage.getItem("address");
        const storedBalance = localStorage.getItem("balance");
        const storedOrder = localStorage.getItem("order");
        const storedVoucher = localStorage.getItem("voucher");
        if (storedCart) {
            setCurrentCart(JSON.parse(storedCart));
        }
        if (storedAddress) {
            setAddress(storedAddress);
        }
        if (storedBalance) {
            setBalance(JSON.parse(storedBalance));
        }
        if (storedOrder) {
            setOrder(JSON.parse(storedOrder));
        }
        if (storedVoucher) {
            setVoucher(JSON.parse(storedVoucher));
        }
    }, [])

    const setCart = (cart: CartItem[]) => {
        setCurrentCart(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const setUserAddress = (address: string) => {
        setAddress(address);
        localStorage.setItem("address", address);
    }

    const setUserBalance = (balance: number) => {
        setBalance(balance);
        localStorage.setItem("balance", JSON.stringify(balance));
    }

    const setUserOrder = (order: CartItem[]) => {
        setOrder(order);
        localStorage.setItem("order", JSON.stringify(order));
    }

    const setUserVoucher = (voucher: Voucher[]) => {
        setVoucher(voucher);
        localStorage.setItem("voucher", JSON.stringify(voucher));
    }

    return (
        <ShopContext.Provider value={{ cart: currentCart, setCart, order, setOrder: setUserOrder, voucher, setVoucher: setUserVoucher, shipping, setShipping, total, address, setAddress: setUserAddress, balance, setBalance: setUserBalance }}>
            {children}
            <div className="fixed w-fit p-2 bg-black text-white rounded-tl-xl bottom-0 right-0">
                Số tiền của bạn: {convertPrice(balance)}
            </div>
        </ShopContext.Provider>
    );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
};
