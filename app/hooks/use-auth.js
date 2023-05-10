'use client';

import useAuthContext from './use-authentication';
import { useEffect } from 'react';
import { useRouter, usePathname, redirect } from 'next/navigation';
import Loading from '@/loading.js';
import { toast } from 'react-toastify';

export const useAuth = (Component, allowedRoles) => {
  const AuthenticatedComponent = (props) => {
    const {isAuthorized } = useAuthContext();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      if (!isAuthorized(allowedRoles)) {
        router.push('/');
        toast.error("You are not authorized to access this page.")
      }
    }, [pathname]);

    return isAuthorized(allowedRoles) ? <Component {...props}  /> : <Loading />;
  };


  return AuthenticatedComponent;
};
