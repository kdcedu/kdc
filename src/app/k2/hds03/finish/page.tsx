import CheckItem from "@/components/checkItem";
import Header from "@/components/header";

export default function Hds02Finish() {
  return (
    <>
      <Header title="Bảo vệ bản thân trước bắt nạt trực tuyến"/>

      <div className="px-5 border-6 border-sky-300 rounded-xl mx-10 p-5 bg-white">
        <div className="text-orange-500 text-2xl font-semibold text-center mb-5 w-2/3 mx-auto">Chúc mừng!</div>

        <div className="text-center text-lg bg-green-100 text-green-700 p-4 rounded-lg">Bạn đã hoàn thành xuất sắc bài Virus và phần mềm diệt Virus</div>

        <div className="flex flex-col gap-4 mt-5">
          <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
            <CheckItem title="Nhận biết được dấu hiệu của máy tính khi bị dính Virus" status="success" />
          </div>

          <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
            <CheckItem title="Nhận biết được lợi ích của phần mềm diệt Virus" status="success" />
          </div>

          <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
            <CheckItem title="Biết thao tác với phần mềm quét và diệt Virus" status="success" />
          </div>
          
        </div>
      </div>
    </>
  );
}