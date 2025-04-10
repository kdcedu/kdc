'use client'

interface PrimaryButtonProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
}

export default function PrimaryButton( {icon, children, onClick}: PrimaryButtonProps ) {

  return <div className="bg-orange-500 text-white text-2xl py-5 rounded-2xl cursor-pointer hover:scale-105 w-36 h-fit" onClick={onClick}>
    {icon && <div className="text-center text-3xl">{icon}</div>}
    <div className="text-center">
      {children}
    </div>
  </div>
}