import { Image } from "antd";
import React, { useEffect, useRef, useState } from "react";

interface SendMoneyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface User {
  accountNumber: string;
  name: string;
}

const mockUsers: User[] = [
  { accountNumber: "123456789", name: "Nguyễn Văn A" },
  { accountNumber: "987654321", name: "Trần Thị B" },
  { accountNumber: "555666777", name: "Lê Văn C" },
];

export const SendMoneyPopup: React.FC<SendMoneyPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [foundUser, setFoundUser] = useState<User | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{
    accountNumber?: string;
    amount?: string;
  }>({});

  useEffect(() => {
    if (accountNumber.trim().length >= 6) {
      const user = mockUsers.find((u) => u.accountNumber === accountNumber.trim());
      setFoundUser(user ?? null);
    } else {
      setFoundUser(null);
    }
  }, [accountNumber]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  const handleTransfer = () => {
    const newErrors: typeof errors = {};

    if (!accountNumber || accountNumber.length < 6) {
      newErrors.accountNumber = "Số tài khoản không hợp lệ";
      setFoundUser(null)
    }

    if (!amount || isNaN(+amount) || +amount <= 0) {
      newErrors.amount = "Số tiền không hợp lệ";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Chuyển tiền:", { accountNumber, amount, note });
      onClose(); // đóng pop-up nếu hợp lệ
    }
  };

  return (
    <div
      className="fixed inset-0 bg-white/20 backdrop-blur-sm flex justify-center  items-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        ref={popupRef}
        className="bg-white rounded-3xl p-6 pb-10 h-fit w-[calc(120vh)] shadow-lg border-4 border-blue-500 relative"
      >
        <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
          Gửi tiền cho bạn
        </h2>

        <input
          type="number"
          placeholder="👤 Số tài khoản của bạn"
          value={accountNumber}
          onChange={(e) => {
            const err: typeof errors = {}
            err.accountNumber=""
            setErrors(err)
            setAccountNumber(e.target.value)}}
          className={`w-full px-2 py-5 text-2xl mb-1 border-b-2 ${
              errors.accountNumber ? "border-b-red-500" : ""
            } focus:outline-none focus:border-blue-400 `}
        />

        {/* Hiển thị tên người dùng nếu tìm thấy */}
        {(accountNumber.trim().length > 0 || errors.accountNumber) && (
          <div className="my-3 px-2 text-blue-500 font-medium text-xl">
            {foundUser ? (
              <div className="flex flex-row items-center gap-5">
                <div className=" bg-white w-10 md:w-20 flex justify-center items-center p-2 rounded-full cursor-pointer overflow-hidden">
                  <Image alt="Avatar" preview={false} src={"/icons/Bin.svg"} />
                </div>
                <strong>{foundUser.name}</strong>
              </div>
            ) : (
              <span className="text-red-500">❌ {errors.accountNumber ? errors.accountNumber : "Không tìm thấy người dùng"}</span>
            )}
          </div>
        )}

        <input
          type="text"
          placeholder="✏️ Ghi chú (tùy chọn)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full px-2 py-5 mb-4 text-2xl border-b-2 focus:outline-none focus:border-blue-400"
        />

        <input
          type="number"
          placeholder="💸 Số tiền (VNĐ)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full text-4xl px-2 py-10 mb-3 border-b-2 focus:outline-none focus:border-blue-400"
        />

        <div className="flex justify-between font-semibold">
          <button
            onClick={onClose}
            className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer"
          >
            Hủy
          </button>
          <button
           onClick={handleTransfer}
            className={`py-2 px-4 rounded font-semibold cursor-pointer transition 
              bg-blue-500 text-white hover:bg-blue-600"
          `}
          >
            Gửi tiền
          </button>
        </div>
      </div>
    </div>
  );
};
