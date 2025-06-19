'use client';
import { GoogleProvider } from "@/context/googleContext";

export default function Layout({ children }: { children: React.ReactNode }) {
    
    return (
        <GoogleProvider>
            {children}
        </GoogleProvider>
    )
}