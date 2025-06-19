import GoogleAuthMain from "@/components/google/googleAuthMain";
import GoogleHeader from "@/components/google/googleHeader";
import GoogleSider from "@/components/google/googleSider";

export default function Auth() {
  return (
    <div className="flex flex-col gap-5 pb-5">
      <GoogleHeader isAuth />
      <div className="flex flex-1 gap-10">
        <GoogleSider />
        <GoogleAuthMain />
      </div>
    </div>
  );
}
