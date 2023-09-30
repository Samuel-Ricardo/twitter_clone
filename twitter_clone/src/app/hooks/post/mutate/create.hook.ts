import { MODULES } from '@/app/modules';
import { ICreatePostDTO, IPostDTO } from '@/app/modules/@core/post';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { toast } from 'react-hot-toast';

export const useCreatePost = () => {
  const {
    data,
    mutate: create,
    mutateAsync: createAsync,
    isLoading,
    error,
  } = useMutation<{ post: IPostDTO }, any, ICreatePostDTO>({
    mutationFn: async (DTO) =>
      await toast.promise(MODULES.POST.MAIN().create(DTO), {
        loading: `Creating post... 🌱`,
        success: `Post created successfully! :D 🍋`,
        error: `Error on create post 😢`,
      }),
    mutationKey: ['post', 'create'],
  });

  const post = useMemo(() => data?.post, [data]);

  return {
    post,
    data,
    create,
    createAsync,
    isLoading,
    error,
  };
};
