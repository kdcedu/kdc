// src/pages/AuthFlow.tsx
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useZalo } from '@/context/ZaloPayContext';
import PhoneInput from '@/components/payment/authForm/phoneInput';
import OTPInput from '@/components/payment/authForm/OTPInput';
import CreatePin from '@/components/payment/authForm/createPin';
import EnterPin from '@/components/payment/authForm/enterPin';
import { loginStepType } from '@/constant/payment/zaloFeatures';
import OTPModal from '@/components/modal/OTPModal';



export default function AuthFlow() {
  const [step, setStep] = useState<loginStepType>('enterPhone');
  const [phone, setPhone] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const { login } = useAuth();
  
  const router = useRouter();

const verifyAcc = () => {
  
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {step === 'enterPhone' && <PhoneInput onSuccess={()=>setStep('otp')} />}
      {step === 'otp' && <>
      <OTPModal/>
      <OTPInput />
      
      </>}
      {step === 'createPin' && <CreatePin />}
      {step === 'enterPin' && <EnterPin  />}
    </div>
  );
}
