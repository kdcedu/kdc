"use client"

import { Image } from "antd";
import { useParams, useRouter } from "next/navigation";

interface ShareButtonProps {
  setNoShare?: (value: boolean) => void;
  handleShare?: () => void;
}

export default function ShareButton( {setNoShare}: ShareButtonProps) {
  const router = useRouter();

  const {id} = useParams()

  return <>
    <div className="flex items-center gap-5 px-10 py-3 rounded-full bg-sky-200 h-fit cursor-pointer hover:scale-105 shadow-xl" onClick={() => setNoShare ? setNoShare(true) : router.push(`${id}/share`)}>
     <Image preview={false} width={40} src={`/icons/${setNoShare ? 'noshare' : 'share'}.png`}/>

     <div className="text-2xl font-semibold text-orange-400 text-center">{setNoShare ? 'Không chia sẻ': 'Chia sẻ với bạn bè'}</div>
    </div>
  </>
}