import { Image } from "antd";

export default function GamePage() {
  return <div className="w-screen h-screen bg-black overflow-x-auto mt-12">
  <div className="w-[1250px] h-[780px] bg-[url('/backgrounds/gameBackground.jpg')] bg-cover relative m-auto">
    <div className="absolute top-[250px] left-[200px]">
      <Image alt="Test" width={100} preview={false} src="/images/grade.jpg" />
    </div>
  </div>
</div>
}

// export default function GamePage() {
//   return <div className="w-screen h-screen bg-[url('/backgrounds/gameBackground.jpg')] bg-cover">
//     Hello
//   </div>
// }