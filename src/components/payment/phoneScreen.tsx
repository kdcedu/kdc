"use client";
import { useState } from "react";
import WalletApp from "./walletApp";

export default function PhoneScreen() {
  const [activeApp, setActiveApp] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 p-4 ">
      {activeApp === null ? (
        <div className="grid grid-cols-4 gap-4">
          <button onClick={() => setActiveApp("wallet")} className="text-center">
            💰<div className="text-xs">Wallet</div>
          </button>
        </div>
      ) : activeApp === "wallet" ? (
        <WalletApp onClose={() => setActiveApp(null)} />
      ) : null}
    </div>
  );
}
