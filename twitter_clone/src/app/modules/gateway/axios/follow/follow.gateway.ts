import { injectable } from 'inversify';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { IFollowGateway } from '@/app/modules/@core/follow/gateway/follow.gateway';
import {
  ICountFollowersDTO,
  ICountFollowingDTO,
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IFollowDTO,
  IGetFollowersDTO,
  IGetFollowingDTO,
} from '@/app/modules/@core/follow/DTO';
import { Follow } from '@/app/modules/@core/follow/entity';

@injectable()
export class AxiosFollowGateway
  extends AxiosHTTPGateway
  implements IFollowGateway
{
  readonly prefix = 'follow';

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }

  async create(follow: ICreateFollowDTO) {
    const result = await this.post<{ follow: IFollowDTO }>(this.prefix, follow);

    return Follow.create(result.data.follow);
  }

  async deleteFollow(follow: IDeleteFollowDTO) {
    await this.delete(`${this.prefix}/${follow.id}`);
  }

  async countFollowers(follow: ICountFollowersDTO) {
    const result = await this.get<{ followers: number }>(
      `${this.prefix}/count/followers/${follow.followingId}`,
    );

    return result.data.followers;
  }

  async countFollowing(follow: ICountFollowingDTO) {
    const result = await this.get<{ following: number }>(
      `${this.prefix}/count/following/${follow.followerId}`,
    );

    return result.data.following;
  }

  async getFollowers(follow: IGetFollowersDTO) {
    const result = await this.get<{ followers: IFollowDTO[] }>(
      `${this.prefix}/${follow.followingId}/followers`,
    );

    return Follow.createArray(result.data.followers);
  }

  async getFollowing(follow: IGetFollowingDTO) {
    const result = await this.get<{ following: IFollowDTO[] }>(
      `${this.prefix}/${follow.followerId}/following`,
    );

    return Follow.createArray(result.data.following);
  }

  swrGetFollowers(follow: IGetFollowersDTO) {
    return this.useSWR(
      `${this.fullURL}/${follow.followingId}/followers`,
      this.fetcher,
    );
  }

  swrGetFollowing(follow: IGetFollowingDTO) {
    return this.useSWR(
      `${this.fullURL}/${follow.followerId}/following`,
      this.fetcher,
    );
  }

  swrCountFollowers(follow: ICountFollowersDTO) {
    return this.useSWR(
      `${this.fullURL}/count/followers/${follow.followingId}`,
      this.fetcher,
    );
  }

  swrCountFollowing(follow: ICountFollowingDTO) {
    return this.useSWR(
      `${this.fullURL}/count/following/${follow.followerId}`,
      this.fetcher,
    );
  }
}
