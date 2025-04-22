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
    <div className="flex items-center gap-5">
      <div className="flex items-center justify-center text-xl w-10 h-10 rounded-xl border-4 border-red-400 cursor-pointer" onClick={() => !isSubmit && setIsChecked(!isChecked)}>
        {isChecked && <CheckOutlined />}
      </div>
      {isSubmit && answer === isChecked && <span className="text-green-500 font-semibold">Đúng</span>}
      {isSubmit && answer !== isChecked && <span className="text-red-500 font-semibold">Sai</span>}
    </div>
  );
}
