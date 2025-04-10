export default function VideoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen px-28 pt-10 bg-[url(/backgrounds/mainBackground.png)]">
      {children}
    </div>
  );
}