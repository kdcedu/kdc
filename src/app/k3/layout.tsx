import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Khám phá tài khoản người dùng',
  description: 'Bài tập thực hành Khám phá tài khoản người dùng',
}

export default function HDS01Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="w-screen h-screen flex flex-col bg-[url(/backgrounds/mainBackground.png)] pb-3">
        {children}
      </div>
  );
}