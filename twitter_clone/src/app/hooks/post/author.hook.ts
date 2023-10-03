import { MODULES } from '@/app/modules';
import { IFindPostByAuthorIdDTO } from '@/app/modules/@core/post';
import { useMemo } from 'react';

export const useAuthorPost = (author: IFindPostByAuthorIdDTO) => {
  const result = MODULES.POST.MAIN().findByAuthor(author).posts;
  const posts = useMemo(() => result.data?.posts, [result.data]);
  return { ...result, posts };
};
