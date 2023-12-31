import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable, tagged } from 'inversify';
import { FollowService } from '../service';
import {
  ICountFollowersDTO,
  ICountFollowingDTO,
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IGetFollowersDTO,
  IGetFollowingDTO,
} from '../DTO';
import { SCOPE } from '@/app/modules/app.tag';

@injectable()
export class FollowController {
  constructor(
    @inject(MODULE.FOLLOW.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.MAIN)
    private readonly service: FollowService,
  ) {}

  async follow(user: ICreateFollowDTO) {
    const result = await this.service.create(user);
    return { follow: result.toStruct() };
  }

  async unfollow(user: IDeleteFollowDTO) {
    return await this.service.delete(user);
  }

  followersOf(user: IGetFollowersDTO) {
    return { followers: this.service.getFollowersOf(user) };
  }

  followingOf(user: IGetFollowingDTO) {
    return { following: this.service.getFollowingOf(user) };
  }

  countFollowersOf(user: ICountFollowersDTO) {
    return { followers: this.service.countFollowersOf(user) };
  }

  countFollowingOf(user: ICountFollowingDTO) {
    return { following: this.service.countFollowingOf(user) };
  }

  async followersOfAsync(data: IGetFollowersDTO) {
    const users = await this.service.getFollowersOfAsync(data);

    return { followers: users.map((user) => user.toStruct()) };
  }
}
