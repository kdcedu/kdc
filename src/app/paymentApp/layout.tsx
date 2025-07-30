export default function PaymentApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="w-screen min-h-screen bg-[url(/backgrounds/backgroundDesktop.jpg)] bg-cover bg-center">
        {children}
      </div>
  );
}
