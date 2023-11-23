'use client';

import { MODULES } from '@/app/modules';
import { IUseCurrentUserConfig } from '@test/@types/hooks/user/current';
import { useSession } from 'next-auth/react';
import { useEffect, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useLoginModal } from '../modal/user/login.hook';
import { GlobalUser } from '@/app/global/user.global';

export const useCurrentUser = (config?: IUseCurrentUserConfig) => {
  const MODULE = MODULES.USER.MAIN();
  const { open: login } = useLoginModal();

  const { data, status } = useSession();

  const { displayLogin } = config || {};

  useEffect(() => {
    switch (status) {
      case 'loading':
        toast.loading('Authenticating user... 🌱', {
          id: 'authenticating-loading-current-user',
        });
        break;

      case 'unauthenticated':
        toast.remove('authenticating-loading-current-user');
        toast.remove('authenticated_user');
        toast.error('User not authenticated, please login 🌱', {
          id: 'unauthenticated_user',
        });
        displayLogin && login();
        break;

      case 'authenticated':
        toast.remove('authenticating-loading-current-user');
        toast.remove('authenticated_success');
        toast.success(`Be Welcome ${data?.user?.name}! :) 🌱`, {
          id: 'authenticated_success',
        });
        break;

      default:
        break;
    }
  }, [status, data, login, displayLogin]);

  const result = MODULE.selectByEmail({ email: data?.user?.email });

  const currentUser = useMemo(() => result?.user.data?.user, [result.user]);

  useEffect(() => {
    GlobalUser.user = currentUser;
  }, [currentUser]);

  return { result: result.user, status, currentUser };
};
