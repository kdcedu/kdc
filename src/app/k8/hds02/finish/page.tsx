"use client"
import { Button, Image } from "antd";
import BillList from "@/components/shop/billList";
import TotalPrice from "@/components/shop/totalPrice";
import { useRouter } from "next/navigation";
import { useShop } from "@/context/shopContext";
import dayjs from "dayjs";

export default function Finish() {
    const router = useRouter();
    const { address, setCart } = useShop();

    const [name, add, ...phoneList] = address.split('/');
    const phone = phoneList.pop();

    const randomStr = Math.random().toString(36).substring(2, 12).toUpperCase();
    const formattedDate = dayjs(Date.now()).format('DD/MM/YYYY')

  return (
    <div className="flex bg-gray-100 min-h-screen py-5 items-center justify-center gap-32">
      <div className="flex flex-col items-center justify-center gap-5">
        <Image
          preview={false}
          src="/images/k8/credit-card.png"
          alt="Card"
          width={250}
        />
        <h1 className="text-2xl font-bold">Thanh toán thành công</h1>
        <Button onClick={() => {router.push('/k8/hds02'); setCart([])}} variant="solid" color="default" size="large">
          Tiếp tục mua sắm
        </Button>
      </div>

      <div className="flex flex-col h-fit gap-5 px-5 pt-3 pb-8 border bg-white rounded-xl w-[450px]">
        <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold">KDC SHOP</span>
            <span className="text-sm text-gray-500">Mã đơn hàng: {randomStr}</span>
            <span className="text-sm text-gray-500">Thời gian đặt hàng: {formattedDate}</span>
        </div>

        <div className="flex flex-col">
            <span className="font-bold">Thông tin khách hàng</span>
            <div className="text-gray-500 flex flex-col text-sm">
                <span>Khách hàng: {name}</span>
                <span>Địa chỉ: {add}</span>
                <span>Số điện thoại: {phone}</span>
            </div>
        </div>

        <BillList />

        <div className="flex flex-col">
          <span className="font-bold">Tổng tiền thanh toán</span>
          <TotalPrice isFinish/>
        </div>
      </div>
    </div>
  );
}
