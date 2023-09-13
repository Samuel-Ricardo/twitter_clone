import { injectable } from 'inversify';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { IFollowGateway } from '@/app/modules/@core/follow/gateway/follow.gateway';
import {
  ICountFollowersDTO,
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IFollowDTO,
} from '@/app/modules/@core/follow/DTO';
import { Follow } from '@/app/modules/@core/follow/entity';

@injectable()
export class AxiosFollowGateway
  extends AxiosHTTPGateway
  implements IFollowGateway
{
  readonly prefix = 'follow';

  get fullURL(): string {
    return `${this.fullURL}/${this.prefix}`;
  }

  async create(follow: ICreateFollowDTO) {
    const result = await this.post<{ follow: IFollowDTO }>(
      this.fullURL,
      follow,
    );

    return Follow.create(result.data.follow);
  }

  async deleteFollow(follow: IDeleteFollowDTO) {
    await this.delete(`${this.fullURL}/${follow.id}`);
  }

  async countFollowers(follow: ICountFollowersDTO) {
    const result = await this.get<{ followers: number }>(
      `${this.fullURL}/count/followers/${follow.followingId}`,
    );

    return result.data.followers;
  }
}
