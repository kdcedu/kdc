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
    <div className="flex items-center justify-center gap-5 px-5 py-3 rounded-full bg-sky-200 w-80 h-fit cursor-pointer hover:scale-105 shadow-xl active:scale-95 active:bg-sky-100 transition duration-150 ease-in-out" onClick={() => setNoShare ? setNoShare(true) : router.push(`${id}/share`)}>
      <div className="flex w-1/6">
        <Image alt="Share Icon" preview={false} src={`/icons/${setNoShare ? 'noshare' : 'share'}.png`}/>
      </div>

     <div className="text-xl font-semibold text-orange-400 text-center">{setNoShare ? 'Không chia sẻ': 'Chia sẻ với bạn bè'}</div>
    </div>
  </>
}