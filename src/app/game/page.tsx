import { Image } from "antd";

export default function GamePage() {
  return <div className="bg-black flex items-center justify-center min-w-screen min-h-screen">
    <div className="w-[1000px] h-[625px] bg-[url(/backgrounds/gameBackground.jpg)] bg-cover">
      <div className="absolute mt-[180px] ml-[150px]">
        <Image alt="Test" preview={false} width={100} src="/images/grade.jpg"/>
      </div>
    </div>
  </div> 
}