import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface ColorSelectProps {
    colors: string | string[];
}

export default function ColorSelect({colors}: ColorSelectProps) {
    const [currentColor, setCurrentColor] = useState('');
    const { setValue } = useFormContext();
    return <div className="flex items-center justify-between">
        <span className="text-lg">Color</span>
        <div className="flex items-center gap-3">
            {Array.isArray(colors) ? colors.map((color) => (
                <span onClick={() => {setCurrentColor(color); setValue('color', color)}} key={color} style={{ backgroundColor: color }} className={`w-10 h-10 cursor-pointer ${currentColor === color ? 'border' : 'border border-gray-300'}`}></span>
            )) : <span onClick={() => {setCurrentColor(colors); setValue('color', colors)}} style={{ backgroundColor: colors }} className={`w-10 h-10 cursor-pointer ${currentColor === colors ? 'border' : 'border border-gray-300'}`}></span>}
        </div>
    </div>
}