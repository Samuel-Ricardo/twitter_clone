import { MODULES } from '@/app/modules';
import { ICreateUserDTO, IUserDTO } from '@/app/modules/@core/user/DTO';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useCreateUser = (DTO: ICreateUserDTO) => {
  const MODULE = MODULES.USER.MAIN();

  const {
    data,
    mutate: create,
    mutateAsync: createAsync,
    isLoading,
    error,
  } = useMutation<{ user: IUserDTO }>({
    mutationFn: async () => {
      return await toast.promise(MODULE.create(DTO), {
        loading: `Creating <b>user<b>...`,
        success: `User created successfully! :D`,
        error: `Error on create user :(`,
      });
    },
    mutationKey: ['user', { email: DTO.email }, { DTO }],
  });

  return {
    data,
    create,
    createAsync,
    isLoading,
    error,
  };
};
