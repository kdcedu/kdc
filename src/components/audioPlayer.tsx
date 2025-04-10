import { SoundFilled } from "@ant-design/icons";
import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  onClick?: () => void;
}

export default function AudioPlayer({ src, onClick }: AudioPlayerProps) {
  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
      } catch (error) {
        console.warn("Không thể tự động phát audio:", error);
      }
    };

    playAudio();
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <div className="float-right mt-2">
      <audio ref={audioRef} src={src} />

      <span
        className="text-orange-500 cursor-pointer w-fit hover:text-orange-300 active:text-orange-300 text-3xl"
        onClick={() => audioRef.current?.play()}
      >
        <SoundFilled onClick={onClick}/>
      </span>
    </div>
  );
}
