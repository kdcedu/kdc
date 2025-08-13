

export default function HDS03Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="w-screen min-h-screen bg-[url(/backgrounds/backgroundDesktop.jpg)] bg-cover bg-center px-5">
        {children}
      </div>
  );
}
