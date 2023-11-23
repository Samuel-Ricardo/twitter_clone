import { MODULES } from '@/app/modules';
import { IFindPostByIdDTO } from '@/app/modules/@core/post';
import { useMemo } from 'react';

export const usePost = (data: IFindPostByIdDTO) => {
  const result = MODULES.POST.MAIN().findById(data);
  const post = useMemo(() => result?.post.data?.post, [result]);
  return { ...result, post };
};
