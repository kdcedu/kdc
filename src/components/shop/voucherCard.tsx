interface VoucherCardProps {
    voucher: string;
    description: string;
}

export default function VoucherCard({ voucher, description }: VoucherCardProps) {
    return <div className="w-full flex flex-col">
                <span className="font-bold">{voucher}</span>
                <span className="text-gray-500 font-light text-xs">{description}</span>
        </div>
}