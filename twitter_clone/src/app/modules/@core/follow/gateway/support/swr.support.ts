import {
  ICountFollowersDTO,
  ICountFollowingDTO,
  IFollowDTO,
  IGetFollowersDTO,
  IGetFollowingDTO,
} from '../../DTO';
import { SWRResponse } from 'swr';

export interface ISWRSupport {
  swrGetFollowers(
    data: IGetFollowersDTO,
  ): SWRResponse<{ followers: IFollowDTO[] }>;
  swrGetFollowing(
    data: IGetFollowingDTO,
  ): SWRResponse<{ following: IFollowDTO[] }>;
  swrCountFollowing(
    data: ICountFollowingDTO,
  ): SWRResponse<{ following: number }>;
  swrCountFollowers(
    data: ICountFollowersDTO,
  ): SWRResponse<{ followers: number }>;
}
