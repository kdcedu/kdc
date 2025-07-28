export default function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[360px] h-[720px] bg-white rounded-[40px] border-[12px] border-black overflow-hidden shadow-xl">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
      <div className="relative z-0 w-full h-full">{children}</div>
    </div>
  );
}
