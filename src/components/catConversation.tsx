export default function CatConversation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="h-fit p-6 text-2xl border-6 border-emerald-300 rounded-2xl font-semibold bg-white">
      {children}
    </div>
  );
}
