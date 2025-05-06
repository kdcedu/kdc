'use client'

import { Image } from "antd";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string
}

export default function Header({title}: HeaderProps) {
  const router = useRouter();
  
  return <div className="w-full flex mb-5 pt-2 items-center justify-center gap-5">
  <div className="flex w-16 cursor-pointer" onClick={() => router.push('/')}>
    <Image alt="Logo" preview={false} src="/components/logo.png" />
  </div>
  <div className="flex text-2xl font-semibold text-orange-500">
    {title}
  </div>
</div>
}