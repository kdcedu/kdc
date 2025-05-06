'use client'

import { Modal } from "antd";
import { useEffect, useState } from "react";


export default function VirusModal() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setInterval(() => {
      setOpen(true);
    }, 3000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onCancel={onCancel} footer={null} >
      <h1>Virus Modal</h1>
    </Modal>
  );
}
