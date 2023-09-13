import {
  ICountFollowersDTO,
  ICountFollowingDTO,
  IFollowDTO,
  IGetFollowersDTO,
  IGetFollowingDTO,
} from '../../DTO';
import { SWRResponse } from 'swr';

export interface ISWRSupport {
  swrGetFollowers(data: IGetFollowersDTO): SWRResponse<IFollowDTO[]>;
  swrGetFollowing(data: IGetFollowingDTO): SWRResponse<IFollowDTO[]>;
  swrCountFollowing(data: ICountFollowingDTO): SWRResponse<number>;
  swrCountFollowers(data: ICountFollowersDTO): SWRResponse<number>;
}
