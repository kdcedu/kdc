import React from 'react';

interface SendMoneyPopupProps {
  isOpen: boolean;
  onClose: () => void;
//   onSend: (data: { recipient: string; amount: number; note: string }) => void;
}

export const SendMoneyPopup: React.FC<SendMoneyPopupProps> = ({ isOpen, onClose }) => {
  const [recipient, setRecipient] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [note, setNote] = React.useState('');

//   const handleSend = () => {
//     if (recipient && amount) {
//       onSend({ recipient, amount: Number(amount), note });
//       onClose();
//     }
//   };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/20 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 h-[calc(50vh)] w-[calc(80vh)] shadow-lg relative border-3">
        <h2 className="text-xl font-bold text-blue-600 mb-4 text-center"> Gửi tiền cho bạn</h2>
        <input
          type="text"
          placeholder="👤 Tên người nhận"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="💸 Số tiền (VNĐ)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="✏️ Ghi chú (tùy chọn)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
          >
            Hủy
          </button>
          <button
            // onClick={handleSend}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Gửi tiền
          </button>
        </div>
      </div>
    </div>
  );
};
