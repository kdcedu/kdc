interface Google2faNumberProps {
    num: number
}

export default function Google2faNumber({ num }: Google2faNumberProps) {
    return <div className="w-1/2 flex items-center justify-center">
        <div className="text-xl w-20 h-20 rounded-full border-4 border-gray-400 flex items-center justify-center">
            {num}
        </div>
      </div>
}