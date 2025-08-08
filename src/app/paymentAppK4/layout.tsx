import { KDCPayProvider } from "@/context/KDCPayContext";

export default function PaymentAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <KDCPayProvider>{children}</KDCPayProvider>;
}
