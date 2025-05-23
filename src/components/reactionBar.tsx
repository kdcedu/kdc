import { Image } from "antd"

interface ReactionBarProps {
  setIsReaction: (value: boolean) => void;
}

export default function ReactionBar( {setIsReaction} : ReactionBarProps) {
  const icons = [
    'wow',
    'happy',
    'neutral',
    'sad',
    'screaming'
  ]

  return <>
    <div className="flex gap-5 h-fit">
      {icons.map(icon => <Image alt="Video" width={70} className="cursor-pointer hover:scale-110 active:scale-95" key={icon} preview={false} src={`/icons/${icon}.png`} onClick={() => setIsReaction(true)}/>)}
    </div>
  </>
}