import BackButton from "@/components/backButton";
import { KDCPayProvider } from "@/context/KDCPayContext";

export default function PaymentAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <KDCPayProvider>
      <BackButton />
      {children}
    </KDCPayProvider>
  );
}
