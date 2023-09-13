import {
  ICreateFollowDTO,
  IFollowDTO,
  IDeleteFollowDTO,
  IGetFollowersDTO,
  IGetFollowingDTO,
  ICountFollowersDTO,
  ICountFollowingDTO,
} from '../DTO';
import { Follow } from '../entity';

export interface IFollowGateway {
  readonly prefix: string;

  get fullURL(): string;

  create(follow: ICreateFollowDTO): Promise<Follow>;
  deleteFollow(follow: IDeleteFollowDTO): Promise<void>;
  countFollowers(follow: ICountFollowersDTO): Promise<number>;
  countFollowing(follow: ICountFollowingDTO): Promise<number>;
  getFollowers(follow: IGetFollowersDTO): Promise<Follow[]>;
  getFollowing(follow: IGetFollowingDTO): Promise<Follow[]>;
}
