import { MODULES } from '@/app/modules';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const useCurrentUser = () => {
  const MODULE = MODULES.USER.MAIN();

  const { data, status } = useSession();

  useEffect(() => {
    switch (status) {
      case 'loading':
        toast.loading('Authenticating user... 🌱', {
          id: 'authenticating-loading-current-user',
        });
        break;

      case 'unauthenticated':
        toast.remove('authenticating-loading-current-user');
        toast.error('User not authenticated, please login 🌱');
        break;

      case 'authenticated':
        toast.remove('authenticating-loading-current-user');
        toast.success(`Be Welcome ${data?.user?.name}! :) 🌱`);
        break;

      default:
        break;
    }
  }, [status, data]);

  const result = MODULE.selectByEmail({ email: data?.user?.email });

  return { result: result.user, status };
};
