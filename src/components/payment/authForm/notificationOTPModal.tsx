"use client";
interface NotiOTPModalProps {
    OTP: string
}
export function NotiOTPModal({OTP}: NotiOTPModalProps) {
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
      <p className="text-lg font-semibold">Mã OTP của bạn là:</p>
      <p className="text-3xl font-bold text-blue-600 my-3">{OTP}</p>
      <p className="text-sm text-gray-500">(Mã này chỉ là mô phỏng)</p>
    </div>
  </div>;
}
