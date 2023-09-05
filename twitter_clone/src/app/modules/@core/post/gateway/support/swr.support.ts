import { SWRResponse } from 'swr';
import { IPostDTO } from '../../DTO';
import { IFindPostByIdDTO } from '../../DTO/find_by_id.dto';
import { IFindPostByAuthorIdDTO } from '../../DTO/find_by_author.dto';

export interface ISWRSupport {
  swrListAll(): SWRResponse<IPostDTO[]>;
  swrFindById(data: IFindPostByIdDTO): SWRResponse<IPostDTO>;
  swrFindByAuthor(data: IFindPostByAuthorIdDTO): SWRResponse<IPostDTO[]>;
}
