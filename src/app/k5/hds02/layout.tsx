export default function HDS02Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="w-screen min-h-screen bg-[url(/backgrounds/backgroundDesktop.jpg)] bg-cover bg-center p-5">
        {children}
      </div>
  );
}