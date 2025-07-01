import { CartItem } from "@/constant/shop/shirt";
import { Button, Image } from "antd";
import { convertPrice } from "@/utils/convertPrice";
import SizeSelect from "./sizeSelect";
import ColorSelect from "./colorSelect";
import QuantitySelect from "./quantitySelect";
import InformationCard from "./informationCard";

interface ProductDetailProps {
    product?: CartItem;
}
export default function ProductDetail({product}: ProductDetailProps) {
    
    return <div className="w-full h-screen flex">
        <div className="w-1/2 h-full bg-white flex items-center justify-center px-20">
            <Image src={product?.image} alt="product" preview={false} width={400}/>
        </div>

        <div className="w-1/2 h-full bg-gray-100 flex flex-col items-start justify-between px-20 py-10">
            <div className="flex flex-col gap-5">
                <span className="text-2xl">{product?.title}</span>
                <span className="text-2xl text-red-500">{convertPrice(product?.price || 0)}</span>

                <ColorSelect colors={product?.color || []}/>

                <SizeSelect/>

                <QuantitySelect/>
            </div>

            <div className="w-full flex flex-col items-center gap-5">
                <div className="w-full flex flex-col items-center gap-5">
                    <Button size="large" className="w-full !rounded-none !h-16 !text-lg" variant="filled" color="default">Thêm vào giỏ hàng</Button>
                    <Button size="large" className="w-full !rounded-none !h-16 !text-lg" variant="solid" color="default">Mua ngay</Button>
                </div>

                <div className="w-full flex flex-col items-center gap-5">
                    <InformationCard title="Thông tin sản phẩm" description={product?.description || ''}/>
                    <InformationCard title="Chính sách vận chuyển" description="Form boxy có form dáng như một chiếc hộp vuông, với độ dài áo ngang thắt lưng."/>
                    <InformationCard title="Chính sách đổi trả" description="Miễn phí đổi trả trong vòng 7 ngày"/>
                </div>
            </div>
        </div>
    </div>
}