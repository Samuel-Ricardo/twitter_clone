import { MODULES } from '@/app/modules';
import { ICreateUserDTO, IUserDTO } from '@/app/modules/@core/user/DTO';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useCreateUser = () => {
  const MODULE = MODULES.USER.MAIN();

  const {
    data,
    mutate: create,
    mutateAsync: createAsync,
    isLoading,
    error,
  } = useMutation<{ user: IUserDTO }, any, ICreateUserDTO>({
    mutationFn: async (DTO: ICreateUserDTO) => {
      return await toast.promise(MODULE.create(DTO), {
        loading: `Creating user... 🌱`,
        success: `User created successfully! :D`,
        error: `Error on create user :(`,
      });
    },
    mutationKey: ['user', 'create'],
  });

  return {
    data,
    create,
    createAsync,
    isLoading,
    error,
  };
};
