import React, { createContext, useContext, useState, ReactNode } from "react";

type UserInfo = {
  phoneNumber: string;
  hasPin: boolean;
};

type AuthContextType = {
  user: UserInfo | null;
  setUser: (user: UserInfo | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
