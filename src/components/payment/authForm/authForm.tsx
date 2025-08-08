"use client";

// src/pages/AuthFlow.tsx
import { useState } from "react";
import PhoneInput from "@/components/payment/authForm/phoneInput";
// import OTPInput from "@/components/payment/authForm/OTPInput";
import CreatePin from "@/components/payment/authForm/createPin";
import EnterPin from "@/components/payment/authForm/enterPin";
import { loginStepType } from "@/constant/payment/zaloFeatures";
import { useKDCPay } from "@/context/KDCPayContext";
import { usePathname, useRouter } from "next/navigation";
import EnterNewName from "./enterNewName";

export default function AuthFlow() {
  const [step, setStep] = useState<loginStepType>("enterPhone");
  const [phone, setPhone] = useState("");
  // const [generatedOtp, setGeneratedOtp] = useState('');
  const { loginWithPhone } = useKDCPay();
  const router = useRouter();
  const pathName = usePathname();
  // const router = useRouter();
  // useEffect(() => {
  //   alert(step);
  // }, [step]);

  const goToParent = (pathname: string) => {
    const segments = pathname.split("/").filter(Boolean); // ["page1", "a"]
    segments.pop(); // xóa "a"
    const parentPath = "/" + segments.join("/"); // "/page1"
    return parentPath;
  };
  const verifyLogin = () => {
    if(!phone) return null
    const checkExistAcc = loginWithPhone(phone);
    if (checkExistAcc) setStep("enterPin");
    else setStep("createPin");
  };
  const finishLogin = () => {
    const gotoPath = goToParent(pathName);
    router.replace(gotoPath);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 relative">
      {step === "enterPhone" && (
        <PhoneInput setPhone={setPhone} onSuccess={verifyLogin} />
      )}
      {/* {phone && step === "otp" && (
        <OTPInput onVerify={verifyLogin} phone={phone} />
      )} */}
      {phone && step === "createPin" && (
        <CreatePin onCreated={() => setStep("enterNewName")} />
      )}
      {phone && step === "enterPin" && <EnterPin onSuccess={finishLogin} />}
      {phone && step === "enterNewName" && <EnterNewName onSuccess={finishLogin} />}
    </div>
  );
}
