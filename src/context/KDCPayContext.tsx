// context/useZalo.tsx
"use client";
import { fakeZaloAccounts, ZaloAccount } from "@/constant/payment/zaloFeatures";
import { defaultProfile } from "@/constant/profile";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { generateRandomAccountNumber } from "@/utils/generateAccNumber";

interface KDCPayContextProps {
  currentAccount: ZaloAccount | null;
  setName: (name: string) => void;
  loginWithPhone: (phone: string) => boolean;
  verifyPin: (pin: string) => boolean;
  createPin: (pin: string) => void;
  logout: () => void;
}

const KDCPayContext = createContext<KDCPayContextProps | undefined>(undefined);

export const KDCPayProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentAccount, setCurrentAccount] = useState<ZaloAccount | null>(
    null
  );
  const [tempPhone, setTempPhone] = useState<string | null>(null);
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!currentAccount && pathName === "/paymentAppK4/KDCPay") router.replace(pathName + "/auth");
  }, [currentAccount, pathName, router]);
  const loginWithPhone = (phone: string): boolean => {
    console.log(fakeZaloAccounts);
    const existingAcc = fakeZaloAccounts.find((acc) => acc.phone === phone);
    if (existingAcc) {
      setTempPhone(phone);
      return true;
    } else {
      const newAcc: ZaloAccount = {
        phone,
        name: "Người mới",
        accNumber:generateRandomAccountNumber(),
        pin: "",
        balance: 0,
        avatar: defaultProfile.avatar,
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
  const setName = (name: string) => {
    if (!currentAccount) return null;
    const acc = fakeZaloAccounts.find((a) => a.phone === tempPhone);
    if (acc) {
      acc.name = name;
      setCurrentAccount(acc);
    }
  };
  const logout = () => {
    setCurrentAccount(null);
    setTempPhone(null);
  };

  return (
    <KDCPayContext.Provider
      value={{
        currentAccount,
        loginWithPhone,
        verifyPin,
        setName,
        createPin,
        logout,
      }}
    >
      {children}
    </KDCPayContext.Provider>
  );
};

export const useKDCPay = () => {
  const ctx = useContext(KDCPayContext);
  if (!ctx) throw new Error("useKDCPay must be used inside KDCPayProvider");
  return ctx;
};
