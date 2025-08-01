"use client";

// src/pages/AuthFlow.tsx
import { useEffect, useState } from "react";
import PhoneInput from "@/components/payment/authForm/phoneInput";
import OTPInput from "@/components/payment/authForm/OTPInput";
import CreatePin from "@/components/payment/authForm/createPin";
import EnterPin from "@/components/payment/authForm/enterPin";
import { loginStepType } from "@/constant/payment/zaloFeatures";
import { useZalo } from "@/context/ZaloPayContext";
import { usePathname, useRouter } from "next/navigation";
import EnterNewName from "./enterNewName";

export default function AuthFlow() {
  const [step, setStep] = useState<loginStepType>("enterPhone");
  const [phone, setPhone] = useState("");
  // const [generatedOtp, setGeneratedOtp] = useState('');
  const { loginWithPhone } = useZalo();
  const router = useRouter();
  const pathName = usePathname();
  // const router = useRouter();
  useEffect(() => {
    alert(step);
  }, [step]);

  const goToParent = (pathname: string) => {
    const segments = pathname.split("/").filter(Boolean); // ["page1", "a"]
    segments.pop(); // xóa "a"
    const parentPath = "/" + segments.join("/"); // "/page1"
    return parentPath;
  };
  const verifyLogin = (phoneNum: string) => {
    const checkExistAcc = loginWithPhone(phoneNum);
    if (checkExistAcc) setStep("enterPin");
    else setStep("createPin");
  };
  const finishLogin = () => {
    const gotoPath = goToParent(pathName);
    router.replace(gotoPath);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {step === "enterPhone" && (
        <PhoneInput setPhone={setPhone} onSuccess={() => setStep("otp")} />
      )}
      {phone && step === "otp" && (
        <OTPInput onVerify={verifyLogin} phone={phone} />
      )}
      {step === "createPin" && (
        <CreatePin onCreated={() => setStep("enterNewName")} />
      )}
      {step === "enterPin" && <EnterPin onSuccess={finishLogin} />}
      {step === "enterNewName" && <EnterNewName onSuccess={finishLogin} />}
    </div>
  );
}
