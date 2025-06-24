import CheckItem from "@/components/checkItem";

export default function Finish() {
  return (
    <>
      <div className="text-orange-500 text-2xl font-semibold text-center mb-5 w-2/3 mx-auto">Chúc mừng!</div>

      <div className="w-full text-center text-lg bg-green-100 text-green-700 p-4 rounded-lg">Bạn đã hoàn thành xuất sắc các bài thực hành về mật khẩu</div>

      <div className="w-full flex flex-col gap-4 mt-5">
        <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
          <CheckItem title="Tạo mật khẩu mạnh với các ký tự đặc biệt" status="success" />
        </div>

        <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
          <CheckItem title="Thiết lập mã PIN an toàn" status="success" />
        </div>

        <div className="bg-gray-100 px-4 pb-2 pt-4 rounded-lg">
          <CheckItem title="Tạo mẫu hình bảo mật phức tạp" status="success" />
        </div>
        
      </div>
    </>
  );
}
