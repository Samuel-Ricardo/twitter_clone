import { MODULES } from '@/app/modules';
import {
  ICommentDTO,
  ICreateCommentDTO,
} from '@/app/modules/@core/comment/DTO';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { toast } from 'react-hot-toast';

export const useCreateComment = () => {
  const {
    data,
    mutate: create,
    mutateAsync: createAsync,
    isLoading,
    error,
  } = useMutation<{ comment: ICommentDTO }, any, ICreateCommentDTO>({
    mutationFn: async (DTO: ICreateCommentDTO) => {
      return await toast.promise(MODULES.COMMENT.MAIN().create(DTO), {
        loading: `Creating comment... ✍️`,
        success: `Comment created successfully! 💬 :D`,
        error: `Error on create comment 😢💬`,
      });
    },
    mutationKey: ['comment', 'create'],
  });

  const comment = useMemo(() => data?.comment, [data]);

  return {
    comment,
    data,
    create,
    createAsync,
    isLoading,
    error,
  };
};
