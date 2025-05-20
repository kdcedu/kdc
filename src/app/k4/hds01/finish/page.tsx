import CheckItem from "@/components/checkItem";
import Header from "@/components/header";

export default function FinishK4HDS01() {
  return <div className="bg- w-screen h-screen bg-[url('/backgrounds/mainBackground.png')]">
    <Header title="Cài đặt riêng tư trên không gian mạng"/>

<div className="px-5 border-6 border-sky-300 rounded-xl mx-10 p-5 bg-white">
  <div className="text-orange-500 text-2xl font-semibold text-center mb-5 w-2/3 mx-auto">Chúc mừng!</div>

  <div className="text-center text-lg bg-green-100 text-green-700 p-4 rounded-lg">Bạn đã hoàn thành xuất sắc các bài thực hành về Cài đặt riêng tư trên không gian mạng</div>

  <div className="flex flex-col gap-4 mt-5">
    <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
      <CheckItem title="Khám phá được các chế độ cài đặt quyền riêng tư cho bài viết trên mạng xã hội. " status="success" />
    </div>

    <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
      <CheckItem title="Thực hành thao tác cài đặt quyền riêng tư cho bài đăng trên mạng xã hội." status="success" />
    </div>
  </div>
</div>
  </div>
}