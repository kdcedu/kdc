'use client'

import { Input } from "antd"
import { valueType } from "antd/es/statistic/utils";
import { useState } from "react";

interface ProfileInputProps {
  isEdit?: boolean;
  value?: valueType;
}

export default function ProfileInput( {isEdit, value} : ProfileInputProps ) {
  const [input, setInput] = useState(value)

  return  <Input value={input} readOnly={!isEdit} className={`${!isEdit && '!border-0 focus:!shadow-none'}`} onChange={(e) => setInput(e.target.value)}/>
}