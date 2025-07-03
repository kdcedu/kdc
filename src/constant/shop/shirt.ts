export type CartItem = {
    uniqueId?: number;
    id: string;
    title: string;
    price: number;
    size: string;
    color: string | string[];
    quantity: number;
    image: string;
    description?: string;
    discount?: number;
}

export const shirts: CartItem[] = [
    {
        id: "1",
        title: "Levents® Blink Blink XL Logo Oversized Tee/ Black",
        price: 500000,
        size: "XL",
        color: "Black",
        quantity: 1,
        image: "//levents.asia/cdn/shop/files/Black_LTSOVCOA218UD0100SS25_1.jpg?v=1750497485&width=300",
        description: "Levents® Blink Blink XL Logo Oversized Tee/ Black",
        discount: 10
    },
    {
        id: "2",
        title: "Levents® Classic Triple Star Semi-Oversized Tee",
        price: 420000,
        size: "L",
        color: "Yellow",
        quantity: 1,
        image: "//levents.asia/cdn/shop/files/Black_LTSSOCOA124UD0101SS25_1.jpg?v=1749542987&width=300",
        description: "Levents® Classic Triple Star Semi-Oversized Tee",
        discount: 10
    },
    {
        id: "3",
        title: "Levents® Classic Triple Star Semi-Oversized Tee",
        price: 420000,
        size: "L",
        color: ["Red", "Yellow", "White"],
        quantity: 1,
        image: "https://levents.asia/cdn/shop/files/Black_LTSSOCOA124UD0101SS25_1.jpg?v=1749542987&width=300",
        description: "Levents® Classic Triple Star Semi-Oversized Tee"
    },
    {
        id: "4",
        title: "Levents® Classic Triple Star Semi-Oversized Tee",
        price: 420000,
        size: "L",
        color: ["Black", "Red"],
        quantity: 1,
        image: "https://levents.asia/cdn/shop/files/Black_LTSSOCOA124UD0101SS25_1.jpg?v=1749542987&width=300",
        description: "Levents® Classic Triple Star Semi-Oversized Tee",
        discount: 30
    }
]