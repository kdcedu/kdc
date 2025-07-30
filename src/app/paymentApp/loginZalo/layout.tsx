import { Fredoka } from 'next/font/google'
  const fredokaFont = Fredoka({
    subsets: ['latin-ext'],
  })
export default function ZaloPay({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={`w-screen min-h-screen bg-gradient-to-b from-[#00b3fe] to-[#f1f6fe] bg-cover bg-center ${fredokaFont.className}`}>
        {children}
      </div>
  );
}
