// src/pages/AuthFlow.tsx
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authZaloPayContext';
import PhoneInput from '@/components/payment/authForm/phoneInput';
import OTPInput from '@/components/payment/authForm/OTPInput';
import CreatePin from '@/components/payment/authForm/createPin';
import EnterPin from '@/components/payment/authForm/enterPin';

export type loginStep = 'phone' | 'otp' | 'createPin' | 'enterPin'

export default function AuthFlow() {
  const [step, setStep] = useState<loginStep>('phone');
  const [phone, setPhone] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const { login } = useAuth();
  
  const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setShowOtpModal(true);

    // Chờ một chút rồi chuyển tiếp sang bước OTP
    setTimeout(() => {
      setShowOtpModal(false);
      onPhoneSubmit(phone, otp);
      router.push('/otp');
    }, 2000);
  };

  const handleOtpVerify = (inputOtp: string) => {
    if (inputOtp === generatedOtp) {
      const userInStorage = localStorage.getItem(`user:${phone}`);
      if (userInStorage) {
        setStep('enterPin');
      } else {
        setStep('createPin');
      }
    } else {
      alert('Sai OTP!');
    }
  };

  const handlePinCreate = (pin: string) => {
    localStorage.setItem(`user:${phone}`, pin);
    login({ phoneNumber: phone, hasPin: true });
    router.push('/home');
  };

  const handlePinVerify = (pin: string) => {
    const stored = localStorage.getItem(`user:${phone}`);
    if (stored === pin) {
      login({ phoneNumber: phone, hasPin: true });
        router.push('/home');
    } else {
      alert('Sai mã PIN!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {step === 'phone' && <PhoneInput />}
      {step === 'otp' && <OTPInput />}
      {step === 'createPin' && <CreatePin />}
      {step === 'enterPin' && <EnterPin  />}
    </div>
  );
}
