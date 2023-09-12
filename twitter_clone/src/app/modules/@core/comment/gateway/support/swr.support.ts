import {
  ICommentDTO,
  IFindAuthorCommentsDTO,
  IFindPostCommentsDTO,
} from '../../DTO';
import { SWRResponse } from 'swr';

export interface ISWRSupport {
  swrFindByPost(post: IFindPostCommentsDTO): SWRResponse<ICommentDTO[]>;
  swrFindByAuthor(author: IFindAuthorCommentsDTO): SWRResponse<ICommentDTO[]>;
}
