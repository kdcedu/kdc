import { useState } from "react";
import { useFormContext } from "react-hook-form";

const sizes = ['S', 'M', 'L', 'XL'];

export default function SizeSelect() {
    const [currentSize, setCurrentSize] = useState('');

    const { setValue } = useFormContext();
    return <div className="flex items-center justify-between">
        <span className="text-lg">Size</span>
        <div className="flex items-center gap-3">
            {sizes.map((size) => (
                <span onClick={() => {setCurrentSize(size); setValue('size', size)}} key={size} className={`flex items-center justify-center w-20 h-10 border px-2 py-1 cursor-pointer ${size === currentSize ? 'border-black text-black' : 'text-gray-300 border-gray-300'}`}>{size}</span>
            ))}
        </div>
    </div>
}