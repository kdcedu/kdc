"use client";

import { SendMoneyPopup } from "@/components/payment/ZaloPayFeatures/sendMoney";
import { zaloFeaturesForKid } from "@/constant/payment/zaloFeatures";
import { useZalo } from "@/context/ZaloPayContext";
import { getVietnameseFirstName } from "@/utils/getVietnameseFirstName";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Image from "next/image";
import { useState } from "react";

export default function ZaloPay() {
  const { currentAccount } = useZalo();
  const [showSendMoney, setShowSendMoney] = useState(false);
  const handleShowPopup = (name: string) => {
    if (name === "Send") setShowSendMoney(true);
  };
  const handleClosePopup = (name: string) => {
    switch (name) {
      case "Send":
        setShowSendMoney(false);
      default:
        setShowSendMoney(false);
    }
  };
  return (
    <div className="w-full mx-auto p-6 flex flex-col text-4xl gap-6 font-[Comic Sans MS, cursive]">
      {/* Header */}

      <Image
        src="/apps/ZaloPay.png"
        alt="ZaloPay Icon"
        width={60}
        height={60}
      />

      {/* Balance Section */}
      <div className="text-center h-[calc(30vh)] bg-white rounded-2xl flex flex-col items-center justify-center py-2 shadow-md">
        {currentAccount && (
          <div className="flex items-center justify-between gap-x-10 px-6">
            <Avatar
              size={100}
              src={currentAccount?.avatar}
              icon={!currentAccount?.avatar ? <UserOutlined /> : undefined}
            />
            <div className="text-left">
              <p className=" font-semibold text-[#0032c8]">
                Số tiền hiện tại của bạn{" "}
                <span className={`text-pink-600`}>{getVietnameseFirstName(currentAccount?.name)}:</span>
              </p>
              <h2 className="text-6xl font-extrabold text-[#30c786] mt-1">
                {currentAccount?.balance} VNĐ
              </h2>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="h-[calc(40vh)] mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
          {zaloFeaturesForKid.map((item, i) => (
            <div
              key={i}
              onClick={() => handleShowPopup(item.name)}
              className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 hover:scale-105 transition shadow-lg cursor-pointer h-full"
            >
              <Image src={item.icon} alt={item.label} width={60} height={60} />
              <span className="mt-3 text-center text-[#0032c8] font-semibold leading-snug h-[4rem]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {showSendMoney && (
        <SendMoneyPopup
          isOpen={showSendMoney}
          onClose={() => handleClosePopup("Send")}
        />
      )}
      {/* Transaction History */}
      {/* <div className="bg-white rounded-2xl p-5 shadow-md flex-1 overflow-y-auto">
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
      </div> */}
    </div>
  );
}
