import { CartItem } from "@/constant/shop/shirt";
import { Button, Image, Spin } from "antd";
import { convertPrice } from "@/utils/convertPrice";
import SizeSelect from "./sizeSelect";
import ColorSelect from "./colorSelect";
import QuantitySelect from "./quantitySelect";
import InformationCard from "./informationCard";
import { useShop } from "@/context/shopContext";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useGlobalMessage } from "@/context/globalMessageContext";
import { useEffect, useState } from "react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductDetail({ product }: any) {
  const { setCart, cart } = useShop();
  const router = useRouter();

  const { createSuccessMessage, createErrorMessage } = useGlobalMessage();

  const formInstance = useForm<CartItem>({
    defaultValues: {
      uniqueId: cart.length + 1,
      id: product?.id,
      title: product?.title || '',
      price: product?.price || 0,
      color: product.color[0],
      size: product?.size || '',
      quantity: 1,
      image: product?.image_gallery[0] || '',
      discount: product?.discount || 0,
    },
  });

   const [selectedImage, setSelectedImage] = useState<string>('');

    useEffect(() => {
        // Khi component được tải hoặc sản phẩm thay đổi,
        // đặt ảnh được chọn là ảnh đại diện (featured_image_url) hoặc ảnh đầu tiên trong gallery
        if (product) {
            const initialImage = product.featured_image_url || (product.image_gallery && product.image_gallery[0]) || '';
            setSelectedImage(initialImage);
        }
    }, [product]);

    if (!product) {
        return <div className="w-full flex justify-center items-center h-screen"><Spin /></div>;
    }
    
    // Gộp ảnh đại diện và gallery lại thành một danh sách duy nhất để hiển thị thumbnail
    const allImages = [
        product.featured_image_url,
        ...(product.image_gallery || [])
    ].filter(Boolean) as string[]; // Lọc bỏ các giá trị null/undefined

  const onAddToCart = (data: CartItem) => {
    if(data.color === '' || data.size === '') {
      createErrorMessage('Vui lòng chọn màu sắc và kích thước');
      return;
    }
    const newCart = [...cart];
    const existingItem = newCart.find((item) => (item.id === product?.id && item.color === data?.color && item.size === data?.size));
    if (existingItem) {
      existingItem.quantity += data.quantity;
    } else {
      newCart.push({
        uniqueId: newCart.length + 1,
        id: product.id ,
        title: product?.title || '',
        price: product?.price || 0,
        color: data.color,
        size: data.size,
        quantity: data.quantity,
        image: product?.image_gallery[0] || '',
        discount: product?.discount || 0,
      });
    }
    setCart(newCart);
    createSuccessMessage('Thêm vào giỏ hàng thành công');
  };

  const onBuyNow = (data: CartItem) => {
    if(data.color === '' || data.size === '') {
      createErrorMessage('Vui lòng chọn màu sắc và kích thước');
      return;
    }
    onAddToCart(data);
    router.push('shipping');
  }

  return (
    <FormProvider {...formInstance}>
      <div className="w-full h-screen flex">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
                {/* Ảnh lớn đang được chọn */}
                <div className="w-full h-[500px] border border-gray-200 flex items-center justify-center">
                    <Image 
                        src={selectedImage} 
                        alt={product.title} 
                        preview={true} // Bật preview để người dùng có thể zoom
                        height="100%"
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                {/* Danh sách ảnh thu nhỏ (thumbnails) */}
                <div className="grid grid-cols-5 gap-2">
                    {allImages.map((imageUrl, index) => (
                        <div 
                            key={index} 
                            className={`cursor-pointer border-2 ${selectedImage === imageUrl ? 'border-blue-500' : 'border-transparent'}`}
                            onClick={() => setSelectedImage(imageUrl)}
                        >
                            <Image 
                                src={imageUrl} 
                                alt={`thumbnail ${index + 1}`} 
                                preview={false} 
                                height={200}
                                width="100%"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

        <div className="w-1/2 h-full bg-gray-100 flex flex-col items-start justify-between px-20 py-10">
          <div className="flex flex-col gap-5">
            <span className="text-2xl">
              {product?.title}
            </span>
            <div className="flex items-center gap-2">
              {product?.discount && <span className="text-2xl text-red-500">
                {convertPrice((product?.price || 0) * (product?.discount ? (1 - product?.discount / 100) : 1))}
              </span>}
              <span className={`${product?.discount ? 'line-through' : 'text-lg'} font-semibold text-gray-500`}>{convertPrice(product?.price || 0)}</span>
            </div>

            <ColorSelect colors={product?.color || []} />

            <SizeSelect />

            <QuantitySelect />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <div className="w-full flex flex-col items-center gap-5">
              <Button
                size="large"
                className="w-full !rounded-none !h-16 !text-lg"
                variant="filled"
                color="default"
                onClick={() => formInstance.handleSubmit(onAddToCart)()}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                size="large"
                className="w-full !rounded-none !h-16 !text-lg"
                variant="solid"
                color="default"
                onClick={() => formInstance.handleSubmit(onBuyNow)()}
              >
                Mua ngay
              </Button>
            </div>

            <div className="w-full flex flex-col items-center gap-5">
              <InformationCard
                title="Thông tin sản phẩm"
                description={product?.description || ""}
              />
              <InformationCard
                title="Chính sách vận chuyển"
                description="Form boxy có form dáng như một chiếc hộp vuông, với độ dài áo ngang thắt lưng."
              />
              <InformationCard
                title="Chính sách đổi trả"
                description="Miễn phí đổi trả trong vòng 7 ngày"
              />
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
