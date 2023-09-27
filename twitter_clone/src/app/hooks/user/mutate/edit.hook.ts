import { MODULES } from '@/app/modules';
import { IUpdateUserDTO, IUserDTO } from '@/app/modules/@core/user/DTO';
import { useMutation } from '@tanstack/react-query';
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

  return {
    data,
    update,
    updateAsync,
    isLoading,
    error,
  };
};
