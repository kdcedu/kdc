import { createContext, useContext, useEffect, useState } from "react";

interface GoogleContextType {
    email: string;
    setEmail: (email: string) => void;
    isAuth: boolean;
    setAuth: (isAuth: boolean) => void;
}

export const GoogleContext = createContext<GoogleContextType | undefined>(undefined);

export const GoogleProvider = ({ children }: { children: React.ReactNode }) => {
    const [email, setEmail] = useState("");
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        const storedIsAuth = localStorage.getItem("isAuth");
        if (storedEmail) {
            setEmail(storedEmail);
        }
        if (storedIsAuth) {
            setIsAuth(JSON.parse(storedIsAuth));
        }
    }, [])

    const setAuth = (isAuth: boolean) => {
        setIsAuth(isAuth);
        localStorage.setItem("isAuth", JSON.stringify(isAuth));
    }

    return (
        <GoogleContext.Provider value={{ email, setEmail, isAuth, setAuth }}>
            {children}
        </GoogleContext.Provider>
    );
};

export const useGoogle = () => {
  const context = useContext(GoogleContext);
  if (!context) throw new Error("useGoogle must be used within GoogleProvider");
  return context;
};
