import { MODULES } from '@/app/modules';
import { ISelectUserByIdDTO } from '@/app/modules/@core/user/DTO';
import { useMemo } from 'react';

export const useUser = (data: ISelectUserByIdDTO) => {
  const result = MODULES.USER.MAIN().selectById(data).user;
  const user = useMemo(() => result.data?.user, [result]);

  return { ...result, user };
};
