import BackButton from "@/components/backButton";
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
    <div className="w-full min-h-screen px-5 pt-10 bg-[url(/backgrounds/mainBackground.png)]">
      <BackButton />
      {children}
    </div>
  );
}