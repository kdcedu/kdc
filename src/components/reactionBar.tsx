import { Image } from "antd"

interface ReactionBarProps {
  setIsReaction: (value: boolean) => void
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
    <div className="flex gap-5">
      {icons.map(icon => <Image width={100} className="cursor-pointer hover:scale-110" key={icon} preview={false} src={`/icons/${icon}.png`} onClick={() => setIsReaction(true)}/>)}
    </div>
  </>
}