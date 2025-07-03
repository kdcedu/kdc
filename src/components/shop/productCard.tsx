import { convertPrice } from "@/utils/convertPrice";
import { Card, Image } from "antd";
import {redirect} from "next/navigation";
import DiscountTag from "./discountTag";

interface ProductCardProps {
  title: string;
  price: number;
  color: string | string[];
  image: string;
  id: string;
  discount?: number;
}

export default function ProductCard({
  title,
  price,
  color,
  image,
  id,
  discount
}: ProductCardProps) {
  return (
    <Card className="!rounded-none" onClick={() => redirect(`/k8/hds02/${id}`)}>
      <div className="relative">
      <DiscountTag discount={discount} />
        <Image src={image} alt="product" preview={false} />
      </div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center justify-start gap-3">
            {Array.isArray(color) ? color.map((color) => (
            <span key={color} className="w-5 h-5 border border-gray-300" style={{ backgroundColor: color }}></span>
            )) : <span className="w-5 h-5 border border-gray-300" style={{ backgroundColor: color }}></span>}
        </div>
        <div className="flex flex-col items-start gap-2">
            <span className="text-lg line-clamp-2">{title}</span>
            <div className="flex items-center gap-2">
              {discount && <span className="text-lg text-red-500">{convertPrice(price - (price * discount / 100))}</span>}
              <span className={`${discount ? 'line-through' : 'text-lg'} font-semibold text-gray-500`}>{convertPrice(price)}</span>
            </div>
        </div>
      </div>
    </Card>
  );
}
