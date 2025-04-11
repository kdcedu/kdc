export default function HDS01Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen min-h-screen px-28 pt-10 pb-10 bg-[url(/backgrounds/mainBackground.png)]">
      {children}
    </div>
  );
}