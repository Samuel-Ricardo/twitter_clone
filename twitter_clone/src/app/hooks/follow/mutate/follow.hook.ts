import { MODULES } from '@/app/modules';
import { ICreateFollowDTO, IFollowDTO } from '@/app/modules/@core/follow/DTO';
import { useMutation } from '@tanstack/react-query';

export const useFollow = () => {
  const {
    data: followRelationship,
    error,
    mutate: follow,
    mutateAsync: followAsync,
    isLoading,
    status,
  } = useMutation<IFollowDTO, Error, ICreateFollowDTO>({
    mutationFn: async (DTO) => (await MODULES.FOLLOW.MAIN().follow(DTO)).follow,
    mutationKey: ['create', 'follow'],
  });

  return {
    follow,
    followAsync,
    followRelationship,
    error,
    isLoading,
    status,
  };
};
