import { MODULES } from '@/app/modules';
import { IFindPostByIdDTO } from '@/app/modules/@core/post';

export const usePost = (post: IFindPostByIdDTO) =>
  MODULES.POST.MAIN().findById(post).post;
