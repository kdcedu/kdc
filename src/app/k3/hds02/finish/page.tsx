import CheckItem from "@/components/checkItem";
import Header from "@/components/header";

export default function Hds02Finish() {
  return (
    <>
      <Header title="Bảo vệ bản thân trước bắt nạt trực tuyến"/>

      <div className="px-5 border-6 border-sky-300 rounded-xl mx-10 p-5 bg-white">
        <div className="text-orange-500 text-2xl font-semibold text-center mb-5 w-2/3 mx-auto">Chúc mừng!</div>

        <div className="text-center text-lg bg-green-100 text-green-700 p-4 rounded-lg">Bạn đã hoàn thành xuất sắc các bài thực hành về Bảo vệ bản thân trước bắt nạt trực tuyến</div>

        <div className="flex flex-col gap-4 mt-5">
          <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
            <CheckItem title="Nhận biết được đâu là tin nhắn bắt nạt trực tuyến" status="success" />
          </div>

          <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
            <CheckItem title="Chặn tin nhắn của những người bắt nạt trực tuyến" status="success" />
          </div>
          
        </div>
      </div>
    </>
  );
}

