"use client";

import Image from "next/image";

export default function ZaloPay() {
  return (
    <div className="w-full mx-auto p-6 flex flex-col gap-6 font-[Comic Sans MS, cursive]">
      {/* Header */}

      <Image
        src="/apps/ZaloPay.png"
        alt="ZaloPay Icon"
        width={60}
        height={60}
      />

      {/* Balance Section */}
      <div className="text-center bg-white rounded-2xl py-6 shadow-md">
        <p className="text-lg font-bold text-[#0032c8]">Số tiền hiện tại:</p>
        <h2 className="text-5xl font-extrabold text-[#30c786] mt-2">1.200$ </h2>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Chuyển tiền cho bạn", icon: "/icons/payment/Pay.png" },
          { label: "Nhận tiền từ bạn", icon: "/icons/candy-out.png" },
          { label: "Chuyển tiền bằng QR", icon: "/icons/toy.png" },
          { label: "Lịch sử", icon: "/icons/history.png" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 hover:scale-105 transition shadow-lg cursor-pointer"
          >
            <Image src={item.icon} alt={item.label} width={60} height={60} />
            <span className="mt-3 text-md text-center text-[#2494ff] font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-2xl p-5 shadow-md flex-1 overflow-y-auto">
        <h3 className="text-2xl font-bold text-pink-600 mb-3">Lịch sử 🍭</h3>
        <ul className="space-y-3 text-base text-gray-700">
          <li className="flex justify-between">
            <span>🎁 Cho bạn An</span>
            <span className="text-red-400">-100🍭</span>
          </li>
          <li className="flex justify-between">
            <span>🍬 Nhận từ ba mẹ</span>
            <span className="text-green-500">+300🍭</span>
          </li>
          <li className="flex justify-between">
            <span>🧸 Mua gấu bông</span>
            <span className="text-red-400">-500🍭</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
