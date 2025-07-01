import CheckoutForm from "@/components/shop/checkoutForm";
import CheckoutList from "@/components/shop/checkoutList";

export default function CheckoutPage() {
    return <div className="flex w-full px-20">
        <div className="w-1/2 px-14 py-12 border-r border-gray-200">
            <CheckoutForm/>
        </div>
        <div className="w-1/2 px-14 py-12">
            <CheckoutList/>
        </div>
    </div>
}