import Header from "@/components/header";

export default function PasswordLayout({ children }: { children: React.ReactNode }) {
  return (
  <>

<Header title="Bảo mật mật khẩu" />
  <div className="border-6 border-sky-300 w-5/6 py-5 px-8 md:px-12 rounded-3xl bg-white mx-auto">
    {children}
  </div>
  </>
  );
}
