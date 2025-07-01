import CheckoutForm from "@/components/shop/checkoutForm";
import CheckoutList from "@/components/shop/checkoutList";
import TotalPrice from "@/components/shop/totalPrice";
import VoucherInput from "@/components/shop/voucherInput";

export default function CheckoutPage() {
    return <div className="flex w-full px-5">
        <div className="w-3/5 px-14 py-12 border-r border-gray-200">
            <CheckoutForm/>
        </div>
        <div className="w-2/5 px-14 py-12 flex flex-col gap-8">
            <CheckoutList/>

            <VoucherInput />

            <TotalPrice/>
        </div>
    </div>
}