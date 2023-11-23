import { MODULES } from '@/app/modules';
import { IUpdateUserDTO, IUserDTO } from '@/app/modules/@core/user/DTO';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { toast } from 'react-hot-toast';

export const useEditUser = () => {
  const MODULE = MODULES.USER.MAIN();

  const {
    data,
    mutate: update,
    mutateAsync: updateAsync,
    isLoading,
    error,
  } = useMutation<{ user: IUserDTO }, any, IUpdateUserDTO>({
    mutationFn: async (DTO: IUpdateUserDTO) => {
      return await toast.promise(MODULE.update(DTO), {
        loading: `Updating user... 🌱`,
        success: `User updated successfully! :D`,
        error: `Error on update user :(`,
      });
    },
    mutationKey: ['user', 'update'],
  });

  const updatedUser = useMemo(() => data?.user, [data]);

  return {
    data,
    updatedUser,
    update,
    updateAsync,
    isLoading,
    error,
  };
};
