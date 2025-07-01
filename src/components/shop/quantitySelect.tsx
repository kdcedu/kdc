import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function QuantitySelect() {
    const [quantity, setQuantity] = useState(1);

    const { setValue } = useFormContext();

    const handleMinus = () => {
        setQuantity(quantity - 1);
        setValue('quantity', quantity - 1);
    }

    const handlePlus = () => {
        setQuantity(quantity + 1);
        setValue('quantity', quantity + 1);
    }

    return <div className="flex items-center justify-between">
        <span className="text-lg">Số lượng</span>
        <div className="flex items-center gap-8">
            <Button disabled={quantity === 1} icon={<span className="text-xl"><MinusOutlined /></span>} variant="link" color="default" onClick={handleMinus}/>
            <span className="text-xl">{quantity}</span>
            <Button icon={<span className="text-xl"><PlusOutlined /></span>} variant="link" color="default" onClick={handlePlus}/>
        </div>
    </div>
}