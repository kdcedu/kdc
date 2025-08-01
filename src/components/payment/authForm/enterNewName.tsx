"use client";
import { useZalo } from "@/context/ZaloPayContext";
import { useState } from "react";

interface EnterNewNameProps {
  onSuccess: () => void;
}

export default function EnterNewName({ onSuccess }: EnterNewNameProps) {
  const [newName, setNewName] = useState("");
  const { setName } = useZalo();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(newName);
    onSuccess()
    // Gửi lên server hoặc context nếu cần
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-semibold">Bạn tên là: </h2>
      <input
        type="text"
        placeholder="Hãy tên của bạn"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        className="border px-3 py-2 w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Hoàn thành
      </button>
    </div>
  );
}
