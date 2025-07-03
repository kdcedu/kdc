import { Badge, Button, Drawer, Image } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import CartItem from "./cartItem";
import { redirect } from "next/navigation";
import { useCallback } from "react";
import { useShop } from "@/context/shopContext";
import { convertPrice } from "@/utils/convertPrice";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { cart, total } = useShop();
  const handleCheckout = useCallback(() => {
    setOpen(false);
    redirect("/k8/hds02/shipping");
  }, [setOpen]);

  return (
    <>
      <Badge count={cart.length}>
        <Button
          onClick={() => setOpen(true)}
          type="text"
          icon={
            <span className="text-xl">
              <ShoppingCartOutlined />
            </span>
          }
        />
      </Badge>
      <Drawer
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        height={120}
        size="large"
        placement="right"
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <div className="flex flex-col relative h-screen">
          <div className="flex flex-col py-6 w-full items-center justify-center border-b border-black">
            <span className="text-xl">
              <ShoppingCartOutlined />
            </span>
            <span className="text-lg">Giỏ hàng của bạn</span>
          </div>
          {cart.length > 0 ? (
            <div className="w-full flex flex-col gap-5 py-3 px-5 h-[calc(100%-150px)] overflow-auto">
              {cart.map((item) => (
                <CartItem
                  uniqueId={item.uniqueId}
                  key={item.uniqueId}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  size={item.size}
                  color={Array.isArray(item.color) ? item.color[0] : item.color}
                  quantity={item.quantity}
                  image={item.image}
                  discount={item.discount}
                />
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center gap-5 py-3 px-5 h-[calc(100%-150px)] overflow-auto">
              <Image
                src="/images/k8/empty-cart.png"
                alt="empty cart"
                preview={false}
                width={200}
              />
              <span className="text-lg">Giỏ hàng của bạn đang trống</span>
              <Button onClick={() => setOpen(false)} className="w-2/3 !rounded-none !h-14 !text-lg" size="large" variant="solid" color="default">Tiếp tục mua sắm</Button>
            </div>
          )}
          {cart.length > 0 && (
            <div className="w-full px-5 py-3 bg-white border-t border-t-gray-200 absolute bottom-0">
              <Button
                onClick={handleCheckout}
                className="w-full !rounded-none !h-14 !text-lg"
                size="large"
                variant="solid"
                color="default"
              >
                Thanh toán {convertPrice(total)}
              </Button>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
}
