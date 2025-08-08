import { Baloo_2 } from 'next/font/google'
  const Baloo_2_Font = Baloo_2({
    subsets: ['latin-ext'],
  })
export default function ZaloPay({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={`w-screen min-h-screen bg-gradient-to-b from-[#00b3fe] to-[#f1f6fe] bg-cover bg-center ${Baloo_2_Font.className}`}>
        {children}
      </div>
  );
}
