'use client'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-5 bg-[url(/backgrounds/mainBackground.png)]">{children}</div>;
}