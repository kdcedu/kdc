import { ZaloProvider } from "@/context/ZaloPayContext";

export default function PaymentAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ZaloProvider>{children}</ZaloProvider>;
}
