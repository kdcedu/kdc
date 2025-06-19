import GoogleLatestActivity from "./googleLatestActivity";
import GoogleLoginApproachSection from "./googleLoginApproachSection";

export default function GoogleAuthMain() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center w-3/4 gap-2">
        <span className="text-2xl font-semibold">Bảo mật</span>
        <span className="text-md text-gray-500">
          Các chế độ cài đặt và đề xuất để giúp bạn bảo mật tài khoản của mình
        </span>
      </div>

      <div className="w-3/4 flex flex-col gap-10">
        <GoogleLatestActivity />

        <GoogleLoginApproachSection />
      </div>
    </div>
  );
}
