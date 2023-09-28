import { SWRResponse } from 'swr';
import { IPostDTO } from '../../DTO';
import { IFindPostByIdDTO } from '../../DTO/find_by_id.dto';
import { IFindPostByAuthorIdDTO } from '../../DTO/find_by_author.dto';

export interface ISWRSupport {
  swrListAll(): SWRResponse<{ posts: IPostDTO[] }>;
  swrFindById(data: IFindPostByIdDTO): SWRResponse<{ post: IPostDTO }>;
  swrFindByAuthor(
    data: IFindPostByAuthorIdDTO,
  ): SWRResponse<{ posts: IPostDTO[] }>;
}
