import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lan toả niềm vui trên không gian mạng',
  description: 'Bài tập thực hành Lan tỏa niềm vui',
}

export default function VideoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen px-28 pt-10 bg-[url(/backgrounds/mainBackground.png)]">
      {children}
    </div>
  );
}