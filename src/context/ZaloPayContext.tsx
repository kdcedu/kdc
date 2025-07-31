// context/useZalo.tsx
"use client";
import { fakeZaloAccounts, ZaloAccount } from "@/constant/payment/zaloFeatures";
import { createContext, useContext, useState } from "react";

interface ZaloContextProps {
  currentAccount: ZaloAccount | null;
  loginWithPhone: (phone: string) => boolean;
  verifyPin: (pin: string) => boolean;
  createPin: (pin: string) => void;
  logout: () => void;

}

const ZaloContext = createContext<ZaloContextProps | undefined>(undefined);

export const ZaloProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentAccount, setCurrentAccount] = useState<ZaloAccount | null>(
    null
  );
  const [tempPhone, setTempPhone] = useState<string | null>(null);


  const loginWithPhone = (phone: string): boolean => {
    const existingAcc = fakeZaloAccounts.find((acc) => acc.phone === phone);
    if (existingAcc) {
      setTempPhone(phone);

      return true;
    } else {
      const newAcc: ZaloAccount = {
        phone,
        name: "Người mới",
        pin: "",
        balance: 0,
      };
      fakeZaloAccounts.push(newAcc);
      setTempPhone(phone);

      return false;
    }
  };

  const verifyPin = (pin: string): boolean => {
    const acc = fakeZaloAccounts.find((a) => a.phone === tempPhone);
    if (acc && acc.pin === pin) {
      setCurrentAccount(acc);
      return true;
    }
    return false;
  };

  const createPin = (pin: string) => {
    const acc = fakeZaloAccounts.find((a) => a.phone === tempPhone);
    if (acc) {
      acc.pin = pin;
      setCurrentAccount(acc);
    }
  };

  const logout = () => {
    setCurrentAccount(null);
    setTempPhone(null);
  };

  return (
    <ZaloContext.Provider
      value={{
        currentAccount,
        loginWithPhone,
        verifyPin,
        createPin,
        logout,
      }}
    >
      {children}
    </ZaloContext.Provider>
  );
};

export const useZalo = () => {
  const ctx = useContext(ZaloContext);
  if (!ctx) throw new Error("useZalo must be used inside ZaloProvider");
  return ctx;
};
