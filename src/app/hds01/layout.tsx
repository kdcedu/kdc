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
    <div className="w-fit md:w-screen min-h-screen md:px-28 py-5 bg-[url(/backgrounds/mainBackground.png)]">
      {children}
    </div>
  );
}