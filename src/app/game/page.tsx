import { Image } from "antd";

export default function GamePage() {
  return <div className="w-screen h-screen bg-[url(/backgrounds/gameBackground.jpg)] bg-cover">
    <div className="absolute mt-[250px] ml-[200px]">
      <Image alt="Test" preview={false} width={200} src="/images/grade.jpg"/>
    </div>
  </div>
}