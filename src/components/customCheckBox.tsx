'use client'

import { CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface CustomCheckBoxProps {
  answer: boolean;
  isSubmit: boolean;
}

export default function CustomCheckBox( {answer, isSubmit} : CustomCheckBoxProps ) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!isSubmit) {
      setIsChecked(false);
    }
  }, [isSubmit]);

  return (
    <div className="flex items-center gap-5 w-32">
      <div className="flex items-center justify-center text-xl w-10 h-10 rounded-xl border-4 border-red-400 cursor-pointer" onClick={() => !isSubmit && setIsChecked(!isChecked)}>
        {isChecked && <CheckOutlined />}
      </div>
      <span className={`text-green-500 font-semibold ${answer === isChecked ? 'text-green-500' : 'text-red-500'} ${!isSubmit && 'invisible'}`}>{isSubmit && answer === isChecked ? 'Đúng' : 'Sai'}</span>
    </div>
  );
}
