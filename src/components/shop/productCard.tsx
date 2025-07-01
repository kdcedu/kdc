import { convertPrice } from "@/utils/convertPrice";
import { Card, Image } from "antd";
import {redirect} from "next/navigation";

interface ProductCardProps {
  title: string;
  price: number;
  color: string | string[];
  image: string;
  id: string;
}

export default function ProductCard({
  title,
  price,
  color,
  image,
  id,
}: ProductCardProps) {
  return (
    <Card className="!rounded-none" onClick={() => redirect(`/k8/hds02/${id}`)}>
      <Image src={image} alt="product" preview={false} />
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center justify-start gap-3">
            {Array.isArray(color) ? color.map((color) => (
            <span key={color} className="w-5 h-5 border border-gray-300" style={{ backgroundColor: color }}></span>
            )) : <span className="w-5 h-5 border border-gray-300" style={{ backgroundColor: color }}></span>}
        </div>
        <div className="flex flex-col items-start gap-2">
            <span className="text-lg line-clamp-2">{title}</span>
            <span className="font-semibold text-gray-500">{convertPrice(price)}</span>
        </div>
      </div>
    </Card>
  );
}
