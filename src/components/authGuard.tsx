'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/authContext';

const publicRoutes = ['/login'];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('kdc_token');

    if (publicRoutes.includes(pathname)) return;

    if (!token) {
      router.replace('/login');
    } else {
      setAuthenticated(true);
    }
  }, [pathname, router, setAuthenticated]);

  if (!publicRoutes.includes(pathname) && !isAuthenticated) return null;

  return <>{children}</>;
}
