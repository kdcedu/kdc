'use client'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-5 min-h-screen bg-[url(/backgrounds/mainBackground.png)]">{children}</div>;
}