export type loginStepType = "enterPhone" | "otp" | "createPin" | "enterPin" | "enterNewName";




export const zaloFeaturesForKid = [
  { name:"Send", label: "Chuyển tiền cho bạn", icon: "/icons/payment/Pay.png" },
  { name:"Receive", label: "Nhận tiền từ bạn", icon: "/icons/payment/Receive.png" },
  { name:"QR", label: "Chuyển tiền bằng QR", icon: "/icons/payment/QRCode.png" },
  { name:"History", label: "Lịch sử", icon: "/icons/payment/History.png" },
];

export interface ZaloAccount {
  phone: string;
  name: string;
  pin: string;
  balance: number;
  avatar?:string
}

export const fakeZaloAccounts: ZaloAccount[] = [
  {
    phone: "0123456789",
    name: "Nguyễn Van A",
    pin: "123456",
    balance: 500000,
    avatar: "/avatars/boy_1.svg"
  },
  {
    phone: "0999888777",
    name: "Minh Anh",
    pin: "000000",
    balance: 250000,
    avatar:"/avatars/girl_1.svg"
  },
];
