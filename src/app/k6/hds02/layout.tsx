'use client'

export default function Layout({children}: {children: React.ReactNode}) {
    return <div className="w-full h-screen flex items-center justify-center bg-[url('/backgrounds/adultLoginBackground.jpg')] bg-cover">
        <div className="w-5/6 flex flex-col p-5 items-center justify-center bg-white rounded-2xl shadow-lg">
            {children}
        </div>
    </div>
}