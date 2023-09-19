import { MODULES } from '@/app/modules';
import { IFindPostByAuthorIdDTO } from '@/app/modules/@core/post';

export const useAuthorPost = (author: IFindPostByAuthorIdDTO) =>
  MODULES.POST.MAIN().findByAuthor(author).posts;
